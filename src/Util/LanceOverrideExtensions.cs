using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using MissionControl;

using Harmony;

using BattleTech;
using BattleTech.Framework;

public static class LanceOverrideExtensions {
  public static UnitSpawnPointOverride GetAnyTaggedLanceMember(this LanceOverride lanceOverride) {
    List<UnitSpawnPointOverride> unitSpawnOverrides = lanceOverride.unitSpawnPointOverrideList;
    foreach (UnitSpawnPointOverride unitSpawnOverride in unitSpawnOverrides) {
      if ((unitSpawnOverride.unitDefId == "Tagged") || (unitSpawnOverride.unitDefId == "UseLance") || (unitSpawnOverride.unitDefId == "mechDef_InheritLance") || (unitSpawnOverride.unitDefId == "vehicleDef_InheritLance") || (unitSpawnOverride.unitDefId == "turretDef_InheritLance")) return unitSpawnOverride;
    }
    return null;
  }

  public static bool IsATurretLance(this LanceOverride lanceOverride) {
    return lanceOverride.ContainsTurretTag() || lanceOverride.ContainsAtLeastOneTurret();
  }

  public static bool ContainsAtLeastOneTurret(this LanceOverride lanceOverride) {
    List<UnitSpawnPointOverride> units = lanceOverride.unitSpawnPointOverrideList;

    for (int i = 0; i < units.Count; i++) {
      UnitSpawnPointOverride unit = units[i];
      if (unit.unitType == BattleTech.UnitType.Turret) return true;
    }

    return false;
  }

  public static bool ContainsTurretTag(this LanceOverride lanceOverride) {
    return lanceOverride.lanceTagSet.Contains("lance_type_turret");
  }

  public static List<int> GetUnresolvedUnitIndexes(this LanceOverride lanceOverride, int startingIndex) {
    bool isManualLance = lanceOverride.lanceDefId.ToLower() == "manual";
    Debug.Log($"[ExtendedLances.GetUnresolvedUnitIndexes] Running with Autofill Type '{MissionControl.Main.Settings.ExtendedLances.AutofillType}' and '{(isManualLance ? "Manual" : "Tagged / Direct Reference")} Lance'");
    List<int> unresolvedUnitIndexes = new List<int>();

    if (MissionControl.Main.Settings.ExtendedLances.AutofillType == "RespectEmpty") {
      if (isManualLance) {
        // RespectEmpty and Manual Lance - Start counting from the original UnitOverride count up to the end
        for (int i = startingIndex; i < lanceOverride.unitSpawnPointOverrideList.Count; i++) {
          UnitSpawnPointOverride unitOverride = lanceOverride.unitSpawnPointOverrideList[i];
          if (unitOverride.IsUnresolved()) unresolvedUnitIndexes.Add(i);
        }
      } else { // Tagged/Direct Lance Reference
        // RespectEmpty and Tagged/Direct Referenced Lance - Start counting from the LanceDef size up to the end
        LanceDef loadedLanceDef = (LanceDef)AccessTools.Field(typeof(LanceOverride), "loadedLanceDef").GetValue(lanceOverride);
        if (loadedLanceDef == null) return unresolvedUnitIndexes;

        for (int i = loadedLanceDef.LanceUnits.Length; i < lanceOverride.unitSpawnPointOverrideList.Count; i++) {
          UnitSpawnPointOverride unitOverride = lanceOverride.unitSpawnPointOverrideList[i];
          if (unitOverride.IsUnresolved()) unresolvedUnitIndexes.Add(i);
        }
      }
    } else { // FillEmpty
      // FillEmpty and Manual/Tagged/Direct Reference Lance- Start looking at all UnitOverrides and fill empty up to the end
      for (int i = 0; i < lanceOverride.unitSpawnPointOverrideList.Count; i++) {
        UnitSpawnPointOverride unitOverride = lanceOverride.unitSpawnPointOverrideList[i];
        if (unitOverride.IsUnresolved()) unresolvedUnitIndexes.Add(i);
      }
    }

    return unresolvedUnitIndexes;
  }
}