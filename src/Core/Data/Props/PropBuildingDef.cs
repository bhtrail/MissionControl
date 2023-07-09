using Newtonsoft.Json;

using System.Collections.Generic;

namespace MissionControl.Data {
  public class PropBuildingDef {
    [JsonProperty("Key")]
    public string Key { get; set; }

    [JsonProperty("BuildingDefID")]
    public string BuildingDefID { get; set; }

    [JsonProperty("MainModel")]
    public string MainModelKey { get; set; }

    [JsonProperty("Glass")]
    public PropPositionalDef Glass { get; set; }

    [JsonProperty("FlimsyModels")]
    public List<PropDestructibleFlimsyDef> FlimsyModels { get; set; } = new List<PropDestructibleFlimsyDef>();

    public PropModelDef GetPropModelDef() {
      if (DataManager.Instance.ModelDefs.ContainsKey(MainModelKey)) {
        return DataManager.Instance.ModelDefs[MainModelKey];
      }

      Main.Logger.LogError($"[PropBuildingDef.GetPropModelDef] No PropModelDef found for key '{MainModelKey}'. This should not happen.");
      return null;
    }
  }
}