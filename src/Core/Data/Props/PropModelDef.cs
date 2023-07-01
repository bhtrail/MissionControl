using Newtonsoft.Json;

using System.Collections.Generic;

namespace MissionControl.Data {
  public class PropModelDef {
    [JsonProperty("Key")]
    public string Key { get; set; }

    [JsonProperty("Mesh")]
    public string MeshName { get; set; }

    [JsonProperty("ChangePivotToCenterIfFlimsyMeshFormat")]
    public bool ChangePivotToCenterIfFlimsyMeshFormat { get; set; } = true;

    [JsonProperty("Materials")]
    public List<PropMaterialDef> Materials { get; set; } = new List<PropMaterialDef>();

    [JsonProperty("IsMeshInBundle")]
    public bool IsMeshInBundle { get; set; } = false;

    [JsonProperty("HasCustomSplits")]
    public bool HasCustomSplits { get; set; } = false;

    [JsonProperty("HasCustomShell")]
    public bool HasCustomShell { get; set; } = false;

    [JsonProperty("CustomShellMaterials")]
    public List<PropMaterialDef> CustomShellMaterials { get; set; } = new List<PropMaterialDef>();

    public string BundlePath { get; set; }
  }
}