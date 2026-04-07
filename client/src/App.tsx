import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useContactScrollToTop, useGlobalScrollToTop } from "@/hooks/useScrollToTop";
import {
  siteConfig,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebsiteSchema
} from "@/lib/seo-config";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import Certificate from "@/pages/Certificate";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import TechnicalInfo from "@/pages/TechnicalInfo";
import TechnicalInformation from "@/pages/technicalInformation";
import ChemicalComposition from "@/pages/chemicalComposition";
import SS300And200SeriesChemicalComposition from "@/pages/ss300And200SeriesChemicalComposition";
import StainlessSteelPipeSpecification from "@/pages/stainlessSteelPipeSpecification";
import CarbonAndAlloyPipeSpecifications from "@/pages/carbonAndAlloyPipeSpecifications";
import AmsStandardMaterial from "@/pages/amsStandardMaterial";
import Pipestubes from "@/pages/pipestubes";
import PlatesSheets from "@/pages/platesSheets";
import Bars from "@/pages/bars";
import Flanges from "@/pages/flanges";
import Fittings from "@/pages/fittings";
import Fasteners from "@/pages/fasteners";
import AnglesChannels from "@/pages/AnglesChannels";
import NotFound from "@/pages/not-found";
// Product Pages
import StainlessSteelPipesAndTubes from "@/pages/product/pipes-tubes/stainless-steel-pipes-tubes";
import CarbonSteelPipes from "@/pages/product/pipes-tubes/carbon-steel";
import AlloySteelPipes from "@/pages/product/pipes-tubes/alloy-steel-pipe";
import StainlessSteelPlates from "@/pages/product/plates-sheets/stainless-steel-plates";
import StainlessSteelRoundBars from "@/pages/product/round-bars/stainless-steel-round-bars";
import RoundBarsMain from "@/pages/product/round-bars/round-bars";
import StainlessSteelFlanges from "@/pages/product/flanges/stainless-steel/stainless-steel-flanges";
import HighTensileFasteners from "@/pages/product/fasteners/high-tensile";
import StainlessSteelBolts from "@/pages/product/fasteners/ss-bolts";
import StainlessSteelNuts from "@/pages/product/fasteners/ss-nuts";
import StainlessSteelScrews from "@/pages/product/fasteners/ss-screws";
import StainlessSteelWashers from "@/pages/product/fasteners/ss-washers";

// Flange Pages
import CarbonSteelFlanges from "@/pages/product/flanges/carbon-steel/carbon-steel-flanges";
import AlloySteelFlanges from "@/pages/product/flanges/alloy-steel/alloy-steel-flanges";
import AS_F1_Flanges from "@/pages/product/flanges/alloy-steel/f1-flanges";
import AS_F2_Flanges from "@/pages/product/flanges/alloy-steel/f2-flanges";
import AS_F5_Flanges from "@/pages/product/flanges/alloy-steel/f5-flanges";
import AS_F7_Flanges from "@/pages/product/flanges/alloy-steel/f7-flanges";
import AS_F9_Flanges from "@/pages/product/flanges/alloy-steel/f9-flanges";
import AS_F11_Flanges from "@/pages/product/flanges/alloy-steel/f11-flanges";
import AS_F12_Flanges from "@/pages/product/flanges/alloy-steel/f12-flanges";
import AS_F21_Flanges from "@/pages/product/flanges/alloy-steel/f21-flanges";
import AS_F22_Flanges from "@/pages/product/flanges/alloy-steel/f22-flanges";
import AS_F91_Flanges from "@/pages/product/flanges/alloy-steel/f91-flanges";
import AS_F92_Flanges from "@/pages/product/flanges/alloy-steel/f92-flanges";
import AS_F911_Flanges from "@/pages/product/flanges/alloy-steel/f911-flanges";
import NickelAlloyFlanges from "@/pages/product/flanges/nickel-alloy/nickel-alloy-flanges";
import NA_Nickel200_Flanges from "@/pages/product/flanges/nickel-alloy/nickel-200-flanges";
import NA_Nickel201_Flanges from "@/pages/product/flanges/nickel-alloy/nickel-201-flanges";
import NA_Monel400_Flanges from "@/pages/product/flanges/nickel-alloy/monel-400-flanges";
import NA_MonelK500_Flanges from "@/pages/product/flanges/nickel-alloy/monel-k500-flanges";
import NA_Inconel600_Flanges from "@/pages/product/flanges/nickel-alloy/inconel-600-flanges";
import NA_Inconel601_Flanges from "@/pages/product/flanges/nickel-alloy/inconel-601-flanges";
import NA_Inconel625_Flanges from "@/pages/product/flanges/nickel-alloy/inconel-625-flanges";
import NA_Inconel718_Flanges from "@/pages/product/flanges/nickel-alloy/inconel-718-flanges";
import NA_Incoloy800_Flanges from "@/pages/product/flanges/nickel-alloy/incoloy-800-flanges";
import NA_Incoloy825_Flanges from "@/pages/product/flanges/nickel-alloy/incoloy-825-flanges";
import NA_CuNi9010_Flanges from "@/pages/product/flanges/nickel-alloy/cupro-nickel-90-10-flanges";
import NA_CuNi7030_Flanges from "@/pages/product/flanges/nickel-alloy/cupro-nickel-70-30-flanges";
import InconelFlanges from "@/pages/product/flanges/inconel/inconel-flanges";
import I_Inconel600_Flanges from "@/pages/product/flanges/inconel/inconel-600-flanges";
import I_Inconel601_Flanges from "@/pages/product/flanges/inconel/inconel-601-flanges";
import I_Inconel617_Flanges from "@/pages/product/flanges/inconel/inconel-617-flanges";
import I_Inconel625_Flanges from "@/pages/product/flanges/inconel/inconel-625-flanges";
import I_Inconel686_Flanges from "@/pages/product/flanges/inconel/inconel-686-flanges";
import I_Inconel690_Flanges from "@/pages/product/flanges/inconel/inconel-690-flanges";
import I_Inconel718_Flanges from "@/pages/product/flanges/inconel/inconel-718-flanges";
import I_Inconel725_Flanges from "@/pages/product/flanges/inconel/inconel-725-flanges";
import I_Inconel800_Flanges from "@/pages/product/flanges/inconel/inconel-800-flanges";
import I_Inconel825_Flanges from "@/pages/product/flanges/inconel/inconel-825-flanges";
import I_InconelX750_Flanges from "@/pages/product/flanges/inconel/inconel-x-750-flanges";
import IncoloyFlanges from "@/pages/product/flanges/incoloy/incoloy-flanges";
import IL_Incoloy800_Flanges from "@/pages/product/flanges/incoloy/incoloy-800-flanges";
import IL_Incoloy800H_Flanges from "@/pages/product/flanges/incoloy/incoloy-800h-flanges";
import IL_Incoloy800HT_Flanges from "@/pages/product/flanges/incoloy/incoloy-800ht-flanges";
import IL_Incoloy825_Flanges from "@/pages/product/flanges/incoloy/incoloy-825-flanges";
import IL_Incoloy925_Flanges from "@/pages/product/flanges/incoloy/incoloy-925-flanges";
import IL_Incoloy926_Flanges from "@/pages/product/flanges/incoloy/incoloy-926-flanges";
import IL_Incoloy800AT_Flanges from "@/pages/product/flanges/incoloy/incoloy-800at-flanges";
import IL_IncoloyDS_Flanges from "@/pages/product/flanges/incoloy/incoloy-ds-flanges";
import IL_Incoloy256MO_Flanges from "@/pages/product/flanges/incoloy/incoloy-25-6mo-flanges";

// Fitting Pages
import ButtweldFittings from "@/pages/product/fittings/buttweld-fittings";
import ForgedFittings from "@/pages/product/fittings/forged-fittings";

// Welding Electrode Pages
import StainlessSteelElectrodes from "@/pages/product/welding-electrodes/stainless-steel-electrode";
import ERCuNiWire from "@/pages/product/welding-electrodes/ercuni-wire-copper-nickel";
import AluminiumWire from "@/pages/product/welding-electrodes/aluminiumwire";

// Galvanized Pages
import HotDipGalvanizedAngles from "@/pages/product/galvanized/hot-dip-galvanized-angles";
import HotDipGalvanizedChannels from "@/pages/product/galvanized/hot-dip-galvanized-channels";

// Pin Pages
import PTOPins from "@/pages/product/pins/pto-pins";
import PipeLinchPin from "@/pages/product/pins/pipe-linch-pin";

// Additional Pipe Pages
import NickelAlloyPipes from "@/pages/product/pipes-tubes/nickel-alloy";
import InconelPipes from "@/pages/product/pipes-tubes/inconel";
import MonelPipes from "@/pages/product/pipes-tubes/monel";
import HasteloyPipes from "@/pages/product/pipes-tubes/hastelloy";
import IncoloyPipes from "@/pages/product/pipes-tubes/incoloy";
import TitaniumPipes from "@/pages/product/pipes-tubes/titanium";
import CuproNickelPipes from "@/pages/product/pipes-tubes/cupro-nickel";
import TantalumPipes from "@/pages/product/pipes-tubes/tantalum";
import DuplexSuperDuplexPipes from "@/pages/product/pipes-tubes/duplex-super-duplex-pipes";
import CortenSteelPipes from "@/pages/product/pipes-tubes/corten-steel";
import EFSWPipes from "@/pages/product/pipes-tubes/efsw-saw-hsaw-lsaw-pipes";
import WeldedWearResistantPipes from "@/pages/product/pipes-tubes/welded-wear-resistant-pipe-ar400";
import PlateWeldedPipes from "@/pages/product/pipes-tubes/plate-welded-pipes";
import LargeODSeamlessPipes from "@/pages/product/pipes-tubes/large-od-seamless-pipes";

// Additional Plates & Sheets Pages
import AlloySteelPlates from "@/pages/product/plates-sheets/alloy-steel-plates";
import AluminiumAlloyPlates from "@/pages/product/plates-sheets/aluminium-alloy";
import CarbonSteelPlates from "@/pages/product/plates-sheets/carbon-steel";
import CopperNickelPlates from "@/pages/product/plates-sheets/copper-nickel";
import DuplexSuperDuplexPlates from "@/pages/product/plates-sheets/duplex-super-duplex";

// Additional Round Bars Pages
import AlloySteelRound from "@/pages/product/round-bars/alloy-steel-round";
import AluminiumAlloyRound from "@/pages/product/round-bars/aluminium-alloy";
import CarbonSteelRound from "@/pages/product/round-bars/carbon-steel";
import HotWorkSteel from "@/pages/product/round-bars/hot-work-steel";

// Carbon Steel Grade Detail Pages
import CarbonGrade100Cr6 from "@/pages/product/round-bars/carbon-steel/100cr6-round-bars";
import CarbonGrade15C8 from "@/pages/product/round-bars/carbon-steel/15c8-round-bars";
import CarbonGrade16MnCr5 from "@/pages/product/round-bars/carbon-steel/16mncr5-round-bars";
import CarbonGrade20C8 from "@/pages/product/round-bars/carbon-steel/20c8-round-bars";
import CarbonGrade20MnCr5 from "@/pages/product/round-bars/carbon-steel/20mncr5-round-bars";
import CarbonGrade20MnCr5CP from "@/pages/product/round-bars/carbon-steel/20mncr5-cut-piece";
import CarbonGrade38MnVS6 from "@/pages/product/round-bars/carbon-steel/38mnvs6-round-bars";
import CarbonGrade40C10S18 from "@/pages/product/round-bars/carbon-steel/40c10s18-round-bars";
import CarbonGrade4140 from "@/pages/product/round-bars/carbon-steel/4140-round-bars";
import CarbonGrade42CrMo4 from "@/pages/product/round-bars/carbon-steel/42crmo4-round-bars";
import CarbonGrade44SMn28 from "@/pages/product/round-bars/carbon-steel/44smn28-round-bars";
import CarbonGrade51CrV4 from "@/pages/product/round-bars/carbon-steel/51crv4-round-bars";
import CarbonGrade805M20 from "@/pages/product/round-bars/carbon-steel/805m20-round-bars";
import CarbonGradeA105 from "@/pages/product/round-bars/carbon-steel/a105-round-bars";
import CarbonGradeAISI1144 from "@/pages/product/round-bars/carbon-steel/aisi-1144-round-bar";
import CarbonGradeSAE8620 from "@/pages/product/round-bars/carbon-steel/sae-8620-round-bar";
import CarbonGradeSAE4140 from "@/pages/product/round-bars/carbon-steel/sae-4140-round-bar";
import CarbonGradeASTM_A193_B16 from "@/pages/product/round-bars/carbon-steel/astm-a193-b16-round-bars";
import CarbonGradeB16 from "@/pages/product/round-bars/carbon-steel/b16-round-bar";
import CarbonGradeC40 from "@/pages/product/round-bars/carbon-steel/c40-round-bar";
import CarbonGradeC45 from "@/pages/product/round-bars/carbon-steel/c45-round-bars";
import CarbonGradeC55_EN9 from "@/pages/product/round-bars/carbon-steel/c55-en9-round-bars";
import CarbonGradeEN19Hex from "@/pages/product/round-bars/carbon-steel/en19-hex-bar";
import CarbonGradeEN1ALeaded from "@/pages/product/round-bars/carbon-steel/en1a-leaded-round-bars";
import CarbonGradeEN1ANonLeaded from "@/pages/product/round-bars/carbon-steel/en1a-non-leaded-round-bars";
import CarbonGradeEN24 from "@/pages/product/round-bars/carbon-steel/en24-round-bars";
import CarbonGradeEN31 from "@/pages/product/round-bars/carbon-steel/en31-round-bars";
import CarbonGradeEN353 from "@/pages/product/round-bars/carbon-steel/en353-round-bars";
import CarbonGradeEN36C from "@/pages/product/round-bars/carbon-steel/en36c-round-bar";
import CarbonGradeEN41B from "@/pages/product/round-bars/carbon-steel/en41b-round-bars";
import CarbonGradeEN47 from "@/pages/product/round-bars/carbon-steel/en47-round-bar";
import CarbonGradeEN8 from "@/pages/product/round-bars/carbon-steel/en8-round-bars";
import CarbonGradeEN8M_EN8DM from "@/pages/product/round-bars/carbon-steel/en8m-en8dm-round-bar";
import CarbonGradeEN9 from "@/pages/product/round-bars/carbon-steel/en9-round-bars";
import CarbonGradeETG100 from "@/pages/product/round-bars/carbon-steel/etg100-round-bars";
import CarbonGradeS355J2 from "@/pages/product/round-bars/carbon-steel/s355j2-round-bars";
import CarbonGradeSAE1018 from "@/pages/product/round-bars/carbon-steel/sae-1018-round-bars";
import CarbonGradeSAE4340 from "@/pages/product/round-bars/carbon-steel/sae-4340-round-bar";
import CarbonGradeSAE52100 from "@/pages/product/round-bars/carbon-steel/sae-52100-steel-round-bars";
import CarbonGradeSAE8620Batch from "@/pages/product/round-bars/carbon-steel/sae-8620-round-bar";
import CarbonGradeSCM420 from "@/pages/product/round-bars/carbon-steel/scm420-round-bars";
import CarbonGradeST523 from "@/pages/product/round-bars/carbon-steel/st52.3-round-bar";
import CarbonGradeSUM43 from "@/pages/product/round-bars/carbon-steel/sum43-round-bars";

import CopperNickelRound from "@/pages/product/round-bars/copper-nickel";
import GradeC14500RoundBars from "@/pages/product/round-bars/copper-nickel/c14500-tellurium-copper";
import GradeC15000RoundBars from "@/pages/product/round-bars/copper-nickel/c15000-zirconium-copper";
import GradeC17510RoundBars from "@/pages/product/round-bars/copper-nickel/c17510-beryllium-copper";
import GradeC18150RoundBars from "@/pages/product/round-bars/copper-nickel/c18150-chromium-zirconium-copper";
import GradeC70600RoundBarsCuNi from "@/pages/product/round-bars/copper-nickel/c70600-copper-nickel-90-10";
import GradeC93200RoundBarsBronze from "@/pages/product/round-bars/copper-nickel/c93200-bearing-bronze";
import GradeCuNi7030RoundBars from "@/pages/product/round-bars/copper-nickel/cu-ni-70-30";
import GradeCuNi9010RoundBars from "@/pages/product/round-bars/copper-nickel/cu-ni-90-10";
import GradeSAE660BronzeRoundBars from "@/pages/product/round-bars/copper-nickel/sae-660-bronze";
import ENSeries from "@/pages/product/round-bars/en-series";
// Hastelloy Series Detail Pages
import HastelloyB2Detail from "@/pages/product/round-bars/hastelloy/hastelloy-b2-round-bars";
import HastelloyC22Detail from "@/pages/product/round-bars/hastelloy/hastelloy-c22-round-bars";
import HastelloyC276Detail from "@/pages/product/round-bars/hastelloy/hastelloy-c276-round-bars";

// High Speed Steel (HSS) Detail Pages
import M2HSSDetail from "@/pages/product/round-bars/high-speed-steel/m2-hss-round-bars";
import M35HSSDetail from "@/pages/product/round-bars/high-speed-steel/m35-hss-round-bars";
import M42HSSDetail from "@/pages/product/round-bars/high-speed-steel/m42-hss-round-bars";

// Hot Work Tool Steel Detail Pages
import DIN12714Detail from "@/pages/product/round-bars/hot-work-steel/din-1-2714-tool-steel";
import H11Detail from "@/pages/product/round-bars/hot-work-steel/h11-tool-steel";
import H13Detail from "@/pages/product/round-bars/hot-work-steel/h13-tool-steel";
import H21Detail from "@/pages/product/round-bars/hot-work-steel/h21-tool-steel";
import S7Detail from "@/pages/product/round-bars/hot-work-steel/s7-tool-steel";

// Inconel Detail Pages
import Inconel600Detail from "@/pages/product/round-bars/inconel/inconel-600-round-bars";
import Inconel601Detail from "@/pages/product/round-bars/inconel/inconel-601-round-bars";
import Inconel625Detail from "@/pages/product/round-bars/inconel/inconel-625-round-bars";
import Inconel718Detail from "@/pages/product/round-bars/inconel/inconel-718-round-bars";
import Inconel825Detail from "@/pages/product/round-bars/inconel/inconel-825-round-bars";
import InconelX750Detail from "@/pages/product/round-bars/inconel/inconel-x750-round-bars";

// Nickel Alloy Detail Pages
import Nickel200Detail from "@/pages/product/round-bars/nickel-alloy/nickel-200";
import Nickel201Detail from "@/pages/product/round-bars/nickel-alloy/nickel-201";
import Alloy20Detail from "@/pages/product/round-bars/nickel-alloy/alloy-20";
import Alloy800Detail from "@/pages/product/round-bars/nickel-alloy/alloy-800";
import Alloy825Detail from "@/pages/product/round-bars/nickel-alloy/alloy-825";

// Titanium Detail Pages
import TitaniumGrade1Detail from "@/pages/product/round-bars/titanium/titanium-grade-1";
import TitaniumGrade2Detail from "@/pages/product/round-bars/titanium/titanium-grade-2";
import TitaniumGrade3Detail from "@/pages/product/round-bars/titanium/titanium-grade-3";
import TitaniumGrade5Detail from "@/pages/product/round-bars/titanium/titanium-grade-5";
import TitaniumGrade7Detail from "@/pages/product/round-bars/titanium/titanium-grade-7";
import TitaniumGrade12Detail from "@/pages/product/round-bars/titanium/titanium-grade-12";

// Precipitation Hardening Steel Detail Pages
import SeventeenFourPHDetail from "@/pages/product/round-bars/precipitation-hardening-steel/17-4ph-round-bars";
import AISI630Detail from "@/pages/product/round-bars/precipitation-hardening-steel/aisi-630-round-bars";
import ThirteenEightMoDetail from "@/pages/product/round-bars/precipitation-hardening-steel/13-8mo-round-bars";
import AMS5643Detail from "@/pages/product/round-bars/precipitation-hardening-steel/ams-5643-round-bars";
import FifteenFivePHDetail from "@/pages/product/round-bars/precipitation-hardening-steel/15-5ph-round-bars";
import InconelX750PHDetail from "@/pages/product/round-bars/precipitation-hardening-steel/inconel-x750-ph-bars";

// Monel Detail Pages
import Monel400Detail from "@/pages/product/round-bars/monel/monel-400-round-bars";
import MonelK500Detail from "@/pages/product/round-bars/monel/monel-k500-round-bars";

// Tool Steel Hub & Detail Pages
import ToolSteelHub from "@/pages/product/round-bars/tool-steel";
import AISID2ToolSteelDetail from "@/pages/product/round-bars/tool-steel/aisi-d2-round-bars";
import AISID3ToolSteelDetail from "@/pages/product/round-bars/tool-steel/aisi-d3-round-bars";
import AISIH13ToolSteelDetail from "@/pages/product/round-bars/tool-steel/aisi-h13-round-bars";
import AISIH11ToolSteelDetail from "@/pages/product/round-bars/tool-steel/aisi-h11-round-bars";
import AISIP20ToolSteelDetail from "@/pages/product/round-bars/tool-steel/aisi-p20-round-bars";
import DIN2714ToolSteelDetail from "@/pages/product/round-bars/tool-steel/din-2714-round-bars";
import AISIM2HighSpeedSteelDetail from "@/pages/product/round-bars/tool-steel/m2-high-speed-steel";
import AISIM35HighSpeedSteelDetail from "@/pages/product/round-bars/tool-steel/m35-high-speed-steel";
import AISIO1ToolSteelDetail from "@/pages/product/round-bars/tool-steel/aisi-o1-round-bars";
import AISIS7ToolSteelDetail from "@/pages/product/round-bars/tool-steel/aisi-s7-round-bars";

// Manganese Bronze Detail Pages
import ManganeseBronzeHub from "@/pages/product/round-bars/manganese-bronze";
import C67500Detail from "@/pages/product/round-bars/manganese-bronze/c67500-manganese-bronze";
import C86300Detail from "@/pages/product/round-bars/manganese-bronze/c86300-manganese-bronze";

// EN Series Grade Detail Pages
import EN1ALeadedDetail from "@/pages/product/round-bars/en-series/en1a-leaded";
import EN1ANonLeadedDetail from "@/pages/product/round-bars/en-series/en1a-non-leaded";
import EN3BMildSteelDetail from "@/pages/product/round-bars/en-series/en3b-mild-steel";
import EN8080M40Detail from "@/pages/product/round-bars/en-series/en8-080m40";
import EN8DRoundBarsDetail from "@/pages/product/round-bars/en-series/en8d-round-bars";
import EN8MFreeMachiningDetail from "@/pages/product/round-bars/en-series/en8m-free-machining";
import EN9070M55Detail from "@/pages/product/round-bars/en-series/en9-070m55";
import EN14AManganeseSteelDetail from "@/pages/product/round-bars/en-series/en14a-manganese-steel";
import EN15RoundBarsDetail from "@/pages/product/round-bars/en-series/en15-round-bars";
import EN15BBoronSteelDetail from "@/pages/product/round-bars/en-series/en15b-boron-steel";
import EN16605M36Detail from "@/pages/product/round-bars/en-series/en16-605m36";
import EN18530A40Detail from "@/pages/product/round-bars/en-series/en18-530a40";
import EN19708M40Detail from "@/pages/product/round-bars/en-series/en19-708m40";
import EN19CRoundBarsDetail from "@/pages/product/round-bars/en-series/en19c-round-bars";
import EN24817M40Detail from "@/pages/product/round-bars/en-series/en24-817m40";
import EN24TQuenchedTemperedDetail from "@/pages/product/round-bars/en-series/en24t-quenched-tempered";
import EN31535A99Detail from "@/pages/product/round-bars/en-series/en31-535a99";
import EN32BRoundBarsDetail from "@/pages/product/round-bars/en-series/en32b-round-bars";
import EN36C832M13Detail from "@/pages/product/round-bars/en-series/en36c-832m13";
import EN40BNitridingSteelDetail from "@/pages/product/round-bars/en-series/en40b-nitriding-steel";
import EN41BNitridingSteelDetail from "@/pages/product/round-bars/en-series/en41b-nitriding-steel";
import EN42JSpringSteelDetail from "@/pages/product/round-bars/en-series/en42j-spring-steel";
import EN43CRoundBarsDetail from "@/pages/product/round-bars/en-series/en43c-round-bars";
import EN45SpringSteelDetail from "@/pages/product/round-bars/en-series/en45-spring-steel";
import EN47ChromeVanadiumDetail from "@/pages/product/round-bars/en-series/en47-chrome-vanadium";
import EN353RoundBarsDetail from "@/pages/product/round-bars/en-series/en353-round-bars";
import EN354RoundBarsDetail from "@/pages/product/round-bars/en-series/en354-round-bars";
import EN355RoundBarsDetail from "@/pages/product/round-bars/en-series/en355-round-bars";

import HasteloyRound from "@/pages/product/round-bars/hastelloy";
import PrecipitationHardeningSteel from "@/pages/product/round-bars/precipitation-hardening-steel";
import Alloy20RoundBars from "@/pages/product/round-bars/alloy-20";
import DuplexSuperDuplexRoundBars from "@/pages/product/round-bars/duplex-super-duplex";
import GradeDuplex2205Detail from "@/pages/product/round-bars/duplex-super-duplex/duplex-2205-round-bars";
import GradeSuperDuplex2507Detail from "@/pages/product/round-bars/duplex-super-duplex/super-duplex-2507-round-bars";
import GradeZeron100Detail from "@/pages/product/round-bars/duplex-super-duplex/zeron-100-round-bars";
import Grade254SMODetail from "@/pages/product/round-bars/duplex-super-duplex/254-smo-round-bars";
import GradeFerralium255Detail from "@/pages/product/round-bars/duplex-super-duplex/ferralium-255-round-bars";
import GradeLeanDuplex2101Detail from "@/pages/product/round-bars/duplex-super-duplex/lean-duplex-2101-round-bars";
import InconelRoundBars from "@/pages/product/round-bars/inconel";
import TitaniumRoundBars from "@/pages/product/round-bars/titanium";
import BronzeRoundBars from "@/pages/product/round-bars/bronze";
import MonelRoundBars from "@/pages/product/round-bars/monel";
import NickelAlloyRoundBars from "@/pages/product/round-bars/nickel-alloy";
import CobaltRoundBars from "@/pages/product/round-bars/cobalt";
import HighSpeedSteelRoundBars from "@/pages/product/round-bars/high-speed-steel";
import GenericRoundBarListingWrapper from "@/pages/product/round-bars/GenericRoundBarListingWrapper";
import AlloySteelFSeries from "@/pages/product/round-bars/alloy-steel-f-series";

// Bronze, Al-Bronze, Boron Listing Pages
import AluminiumBronzeListing from "@/pages/product/round-bars/aluminium-bronze";
import BoronGradesListing from "@/pages/product/round-bars/boron-grades";
import BronzeListing from "@/pages/product/round-bars/bronze";

// Aluminium Bronze Grade Detail Pages
import GradeC63000RoundBars from "@/pages/product/round-bars/aluminium-bronze/c63000-nickel-aluminium-bronze";
import GradeC95400RoundBars from "@/pages/product/round-bars/aluminium-bronze/c95400-aluminium-bronze";

// Boron Grade Detail Pages
import Grade10B21RoundBars from "@/pages/product/round-bars/boron-grades/10b21-boron-steel";
import Grade15B25RoundBars from "@/pages/product/round-bars/boron-grades/15b25-boron-steel";
import Grade10B33RoundBars from "@/pages/product/round-bars/boron-grades/10b33-boron-steel";
import Grade15B41RoundBars from "@/pages/product/round-bars/boron-grades/15b41-boron-steel";

// Bronze Grade Detail Pages
import GradePB1RoundBars from "@/pages/product/round-bars/bronze/pb1-phosphor-bronze";
import GradeSAE660RoundBars from "@/pages/product/round-bars/bronze/sae-660-bearing-bronze";
import GradeLG2RoundBars from "@/pages/product/round-bars/bronze/lg2-gunmetal-bronze";
import GradeAB2RoundBars from "@/pages/product/round-bars/bronze/ab2-aluminium-bronze";


// Alloy Steel Round Bar Grade Detail Pages
import Grade17711RoundBar from "@/pages/product/round-bars/alloy-steel-round/1-7711-round-bar";
import Grade100Cr6RoundBar from "@/pages/product/round-bars/alloy-steel-round/100cr6-round-bar";
import Grade15CDV6RoundBars from "@/pages/product/round-bars/alloy-steel-round/15cdv6-round-bars";
import Grade16MnCr5RoundBar from "@/pages/product/round-bars/alloy-steel-round/16mncr5-round-bar";
import Grade17CrNiMo6RoundBars from "@/pages/product/round-bars/alloy-steel-round/17crni-mo6-round-bars";
import Grade18CrNiMo76RoundBars from "@/pages/product/round-bars/alloy-steel-round/18crni-mo7-6-round-bars";
import Grade20MnCr5RoundBars from "@/pages/product/round-bars/alloy-steel-round/20mncr5-round-bars";
import Grade20NiCrMo22RoundBars from "@/pages/product/round-bars/alloy-steel-round/20nicrmo2-2-round-bars";
import Grade25CrMo4RoundBar from "@/pages/product/round-bars/alloy-steel-round/25crmo4-round-bar";
import Grade30CrNiMo8RoundBars from "@/pages/product/round-bars/alloy-steel-round/30crni-mo8-round-bars";
import Grade31CrMoV9RoundBars from "@/pages/product/round-bars/alloy-steel-round/31crmo-v9-round-bars";
import Grade34CrNiMo6RoundBars from "@/pages/product/round-bars/alloy-steel-round/34crni-mo6-round-bars";
import Grade39NiCrMo3RoundBars from "@/pages/product/round-bars/alloy-steel-round/39nicr-mo3-round-bars";
import Grade40Cr7Al10Mo2RoundBars from "@/pages/product/round-bars/alloy-steel-round/40cr7al10mo2-round-bars";
import Grade40CrMoV46RoundBars from "@/pages/product/round-bars/alloy-steel-round/40crmo-v4-6-round-bars";
import Grade41Cr4RoundBars from "@/pages/product/round-bars/alloy-steel-round/41cr4-round-bars";
import Grade4130RoundBars from "@/pages/product/round-bars/alloy-steel-round/4130-round-bars";
import Grade4140RoundBars from "@/pages/product/round-bars/alloy-steel-round/4140-round-bars";
import Grade4150RoundBars from "@/pages/product/round-bars/alloy-steel-round/4150-round-bars";
import Grade42CrMo4RoundBars from "@/pages/product/round-bars/alloy-steel-round/42crmo4-round-bars";
import Grade4340RoundBars from "@/pages/product/round-bars/alloy-steel-round/4340-round-bars";
import Grade4340VRoundBars from "@/pages/product/round-bars/alloy-steel-round/4340v-round-bars";
import Grade8740RoundBars from "@/pages/product/round-bars/alloy-steel-round/8740-round-bars";
import Grade9310RoundBars from "@/pages/product/round-bars/alloy-steel-round/9310-round-bars";
import Grade905M39RoundBars from "@/pages/product/round-bars/alloy-steel-round/905m39-round-bars";
import Grade12L14RoundBars from "@/pages/product/round-bars/alloy-steel-round/12l14-round-bars";
import Grade1144RoundBars from "@/pages/product/round-bars/alloy-steel-round/1144-round-bars";
import Grade35CrMoRoundBars from "@/pages/product/round-bars/alloy-steel-round/35crmo-round-bars";
import Grade8620BrightBars from "@/pages/product/round-bars/alloy-steel-round/8620-bright-bars";
import GradeAISI8620RoundBars from "@/pages/product/round-bars/alloy-steel-round/aisi-8620-round-bars";
import GradeA193GradeB7RoundBar from "@/pages/product/round-bars/alloy-steel-round/a193-grade-b7-round-bar";
import GradeEN8RoundBars from "@/pages/product/round-bars/alloy-steel-round/en8-round-bars";
import GradeEN9RoundBars from "@/pages/product/round-bars/alloy-steel-round/en9-round-bars";
import GradeEN19RoundBars from "@/pages/product/round-bars/alloy-steel-round/en19-round-bars";
import GradeEN24RoundBars from "@/pages/product/round-bars/alloy-steel-round/en24-round-bars";
import GradeSCM440RoundBars from "@/pages/product/round-bars/alloy-steel-round/scm440-round-bars";
import GradeSNCM420RoundBars from "@/pages/product/round-bars/alloy-steel-round/sncm420-round-bars";
import Grade50CrMo4RoundBars from "@/pages/product/round-bars/alloy-steel-round/50crmo4-round-bars";
import Grade36NiCrMo4RoundBars from "@/pages/product/round-bars/alloy-steel-round/36nicrmo4-round-bars";
import Grade38NiCrMo4RoundBars from "@/pages/product/round-bars/alloy-steel-round/38nicrmo4-round-bars";

// Stainless Steel Round Bar Grade Detail Pages
import Grade301RoundBars from "@/pages/product/round-bars/stainless-steel/301-round-bars";
import Grade302RoundBars from "@/pages/product/round-bars/stainless-steel/302-round-bars";
import Grade303RoundBars from "@/pages/product/round-bars/stainless-steel/303-round-bars";
import Grade304RoundBars from "@/pages/product/round-bars/stainless-steel/304-304l-round-bars";
import Grade304HRoundBars from "@/pages/product/round-bars/stainless-steel/304h-round-bars";
import Grade309RoundBars from "@/pages/product/round-bars/stainless-steel/309-309s-round-bars";
import Grade310RoundBars from "@/pages/product/round-bars/stainless-steel/310-310s-round-bars";
import Grade310HRoundBars from "@/pages/product/round-bars/stainless-steel/310h-round-bars";
import Grade316RoundBars from "@/pages/product/round-bars/stainless-steel/316-316l-round-bars";
import Grade316HRoundBars from "@/pages/product/round-bars/stainless-steel/316h-round-bars";
import Grade316TiRoundBars from "@/pages/product/round-bars/stainless-steel/316ti-round-bars";
import Grade317RoundBars from "@/pages/product/round-bars/stainless-steel/317-317l-round-bars";
import Grade321RoundBars from "@/pages/product/round-bars/stainless-steel/321-321h-round-bars";
import Grade347RoundBars from "@/pages/product/round-bars/stainless-steel/347-347h-round-bars";
import GradeAlloy20RoundBars from "@/pages/product/round-bars/stainless-steel/alloy-20-round-bars";
import Grade403RoundBars from "@/pages/product/round-bars/stainless-steel/403-round-bars";
import Grade405RoundBars from "@/pages/product/round-bars/stainless-steel/405-round-bars";
import Grade409RoundBars from "@/pages/product/round-bars/stainless-steel/409-round-bars";
import Grade410RoundBars from "@/pages/product/round-bars/stainless-steel/410-round-bars";
import Grade414RoundBars from "@/pages/product/round-bars/stainless-steel/414-round-bars";
import Grade416RoundBars from "@/pages/product/round-bars/stainless-steel/416-round-bars";
import Grade420RoundBars from "@/pages/product/round-bars/stainless-steel/420-round-bars";
import Grade420FRoundBars from "@/pages/product/round-bars/stainless-steel/420f-round-bars";
import Grade422RoundBars from "@/pages/product/round-bars/stainless-steel/422-round-bars";
import Grade429RoundBars from "@/pages/product/round-bars/stainless-steel/429-round-bars";
import Grade430RoundBars from "@/pages/product/round-bars/stainless-steel/430-round-bars";
import Grade430FRoundBars from "@/pages/product/round-bars/stainless-steel/430f-round-bars";
import Grade431RoundBars from "@/pages/product/round-bars/stainless-steel/431-round-bars";
import Grade434RoundBars from "@/pages/product/round-bars/stainless-steel/434-436-round-bars";
import Grade440ABCRoundBars from "@/pages/product/round-bars/stainless-steel/440abc-round-bars";
import Grade442RoundBars from "@/pages/product/round-bars/stainless-steel/442-round-bars";
import Grade446RoundBars from "@/pages/product/round-bars/stainless-steel/446-round-bars";
import Grade174PHRoundBars from "@/pages/product/round-bars/stainless-steel/17-4ph-round-bars";
import Grade155PHRoundBars from "@/pages/product/round-bars/stainless-steel/15-5ph-round-bars";
import Grade138MoRoundBars from "@/pages/product/round-bars/stainless-steel/13-8mo-round-bars";
import Grade177PHRoundBars from "@/pages/product/round-bars/stainless-steel/17-7ph-round-bars";
import Grade2205DuplexRoundBars from "@/pages/product/round-bars/stainless-steel/2205-duplex-round-bars";
import Grade2507DuplexRoundBars from "@/pages/product/round-bars/stainless-steel/2507-duplex-round-bars";
import GradeZeron100RoundBars from "@/pages/product/round-bars/stainless-steel/zeron-100-round-bars";
import GradeLDX2101RoundBars from "@/pages/product/round-bars/stainless-steel/ldx-2101-round-bars";
import GradeLDX2304RoundBars from "@/pages/product/round-bars/stainless-steel/ldx-2304-round-bars";
import Grade904LRoundBars from "@/pages/product/round-bars/stainless-steel/904l-round-bars";
import Grade254SMORoundBars from "@/pages/product/round-bars/stainless-steel/254smo-round-bars";
import GradeNitronic60RoundBars from "@/pages/product/round-bars/stainless-steel/nitronic-60-round-bars";
import GradeNitronic50RoundBars from "@/pages/product/round-bars/stainless-steel/nitronic-50-round-bars";
import GradeAlloy31RoundBars from "@/pages/product/round-bars/stainless-steel/alloy-31-round-bars";
import GradeSanicro28RoundBars from "@/pages/product/round-bars/stainless-steel/sanicro-28-round-bars";
import GradeAL6XNRoundBars from "@/pages/product/round-bars/stainless-steel/al-6xn-round-bars";
import Grade253MARoundBars from "@/pages/product/round-bars/stainless-steel/253-ma-round-bars";

// F Series Round Bars
import F5RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f5-round-bars";
import F9RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f9-round-bars";
import F11RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f11-round-bars";
import F12RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f12-round-bars";
import F22RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f22-round-bars";
import F91RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f91-round-bars";

// Aluminium Round Bars
import AluminiumMain from "@/pages/product/round-bars/aluminium.tsx";
import Alu2014RoundBars from "@/pages/product/round-bars/aluminium-alloy/2014-t6-round-bars.tsx";
import Alu2024RoundBars from "@/pages/product/round-bars/aluminium-alloy/2024-t6-round-bars.tsx";
import Alu5083RoundBars from "@/pages/product/round-bars/aluminium-alloy/5083-h111-round-bars.tsx";
import Alu6061RoundBars from "@/pages/product/round-bars/aluminium-alloy/6061-t6-round-bars.tsx";
import Alu6082RoundBars from "@/pages/product/round-bars/aluminium-alloy/6082-t6-round-bars.tsx";
import Alu7075RoundBars from "@/pages/product/round-bars/aluminium-alloy/7075-t6-round-bars.tsx";

// Cold Work Tool Steels
import ColdWorkToolSteelListing from "@/pages/product/round-bars/cold-work-tool-steels";
import AISIO1RoundBars from "@/pages/product/cold-work-tool-steels/o1-tool-steel";
import HCHCRD2RoundBars from "@/pages/product/cold-work-tool-steels/d2-tool-steel";
import A2ToolSteel from "@/pages/product/cold-work-tool-steels/a2-tool-steel";
import D3ToolSteel from "@/pages/product/cold-work-tool-steels/d3-tool-steel";

// Additional Flange Pages
import BlindFlanges from "@/pages/product/flanges/blind-flanges";
import LapJointFlanges from "@/pages/product/flanges/lap-joint-flanges";
import SlipOnFlanges from "@/pages/product/flanges/slip-on-flanges";
import SocketWeldFlanges from "@/pages/product/flanges/socket-weld-flanges";
import ThreadedFlanges from "@/pages/product/flanges/threaded-flanges";
import WeldNeckFlanges from "@/pages/product/flanges/weld-neck-flanges";

// Stainless Steel Flange Grade Detail Pages
import SS304Flanges from "@/pages/product/flanges/stainless-steel/304-flanges";
import SS304LFlanges from "@/pages/product/flanges/stainless-steel/304l-flanges";
import SS304HFlanges from "@/pages/product/flanges/stainless-steel/304h-flanges";
import SS316Flanges from "@/pages/product/flanges/stainless-steel/316-flanges";
import SS316LFlanges from "@/pages/product/flanges/stainless-steel/316l-flanges";
import SS316HFlanges from "@/pages/product/flanges/stainless-steel/316h-flanges";
import SS321Flanges from "@/pages/product/flanges/stainless-steel/321-flanges";
import SS347Flanges from "@/pages/product/flanges/stainless-steel/347-flanges";

// Carbon Steel Flange Grade Detail Pages
import CarbonA105Flanges from "@/pages/product/flanges/carbon-steel/a105-flanges";
import CarbonA350LF1Flanges from "@/pages/product/flanges/carbon-steel/a350-lf1-flanges";
import CarbonA350LF2Flanges from "@/pages/product/flanges/carbon-steel/a350-lf2-flanges";
import CarbonA350LF3Flanges from "@/pages/product/flanges/carbon-steel/a350-lf3-flanges";
import CarbonA694F42Flanges from "@/pages/product/flanges/carbon-steel/a694-f42-flanges";
import CarbonA694F46Flanges from "@/pages/product/flanges/carbon-steel/a694-f46-flanges";
import CarbonA694F52Flanges from "@/pages/product/flanges/carbon-steel/a694-f52-flanges";
import CarbonA694F60Flanges from "@/pages/product/flanges/carbon-steel/a694-f60-flanges";
import CarbonA694F65Flanges from "@/pages/product/flanges/carbon-steel/a694-f65-flanges";
import CarbonA694F70Flanges from "@/pages/product/flanges/carbon-steel/a694-f70-flanges";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Router() {
  // Enable scroll-to-top behavior for ALL pages
  useGlobalScrollToTop();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/technical-info" component={TechnicalInfo} />
      <Route path="/technicalInformation" component={TechnicalInformation} />
      <Route path="/chemicalComposition" component={ChemicalComposition} />
      <Route path="/ss300And200SeriesChemicalComposition" component={SS300And200SeriesChemicalComposition} />
      <Route path="/stainlessSteelPipeSpecification" component={StainlessSteelPipeSpecification} />
      <Route path="/carbonAndAlloyPipeSpecifications" component={CarbonAndAlloyPipeSpecifications} />
      <Route path="/ams-standard-material" component={AmsStandardMaterial} />
      <Route path="/pipes-tubes" component={Pipestubes} />
      <Route path="/plates-sheets" component={PlatesSheets} />
      <Route path="/bars" component={Bars} />
      <Route path="/flanges" component={Flanges} />
      <Route path="/fittings" component={Fittings} />
      <Route path="/fasteners" component={Fasteners} />
      <Route path="/angleschannels" component={AnglesChannels} />

      {/* Product Category Routes */}
      <Route path="/product/pipes-tubes/stainless-steel-pipes-tubes" component={StainlessSteelPipesAndTubes} />
      <Route path="/product/pipes-tubes/carbon-steel" component={CarbonSteelPipes} />
      <Route path="/product/pipes-tubes/alloy-steel-pipe" component={AlloySteelPipes} />
      <Route path="/product/plates-sheets/stainless-steel-plates" component={StainlessSteelPlates} />
      <Route path="/product/round-bars/stainless-steel-round-bars" component={StainlessSteelRoundBars} />

      {/* Flange Routes */}
      <Route path="/product/flanges/stainless-steel" component={StainlessSteelFlanges} />
      <Route path="/product/flanges/stainless-steel/304-flanges" component={SS304Flanges} />
      <Route path="/product/flanges/stainless-steel/304l-flanges" component={SS304LFlanges} />
      <Route path="/product/flanges/stainless-steel/304h-flanges" component={SS304HFlanges} />
      <Route path="/product/flanges/stainless-steel/316-flanges" component={SS316Flanges} />
      <Route path="/product/flanges/stainless-steel/316l-flanges" component={SS316LFlanges} />
      <Route path="/product/flanges/stainless-steel/316h-flanges" component={SS316HFlanges} />
      <Route path="/product/flanges/stainless-steel/321-flanges" component={SS321Flanges} />
      <Route path="/product/flanges/stainless-steel/347-flanges" component={SS347Flanges} />
      <Route path="/product/flanges/carbon-steel" component={CarbonSteelFlanges} />
      {/* Carbon Steel Grade Detail Routes */}
      <Route path="/product/flanges/carbon-steel/a105-flanges" component={CarbonA105Flanges} />
      <Route path="/product/flanges/carbon-steel/a350-lf1-flanges" component={CarbonA350LF1Flanges} />
      <Route path="/product/flanges/carbon-steel/a350-lf2-flanges" component={CarbonA350LF2Flanges} />
      <Route path="/product/flanges/carbon-steel/a350-lf3-flanges" component={CarbonA350LF3Flanges} />
      <Route path="/product/flanges/carbon-steel/a694-f42-flanges" component={CarbonA694F42Flanges} />
      <Route path="/product/flanges/carbon-steel/a694-f46-flanges" component={CarbonA694F46Flanges} />
      <Route path="/product/flanges/carbon-steel/a694-f52-flanges" component={CarbonA694F52Flanges} />
      <Route path="/product/flanges/carbon-steel/a694-f60-flanges" component={CarbonA694F60Flanges} />
      <Route path="/product/flanges/carbon-steel/a694-f65-flanges" component={CarbonA694F65Flanges} />
      <Route path="/product/flanges/carbon-steel/a694-f70-flanges" component={CarbonA694F70Flanges} />
      <Route path="/product/flanges/alloy-steel" component={AlloySteelFlanges} />
      {/* Alloy Steel Grade Detail Routes */}
      <Route path="/product/flanges/alloy-steel/f1-flanges" component={AS_F1_Flanges} />
      <Route path="/product/flanges/alloy-steel/f2-flanges" component={AS_F2_Flanges} />
      <Route path="/product/flanges/alloy-steel/f5-flanges" component={AS_F5_Flanges} />
      <Route path="/product/flanges/alloy-steel/f7-flanges" component={AS_F7_Flanges} />
      <Route path="/product/flanges/alloy-steel/f9-flanges" component={AS_F9_Flanges} />
      <Route path="/product/flanges/alloy-steel/f11-flanges" component={AS_F11_Flanges} />
      <Route path="/product/flanges/alloy-steel/f12-flanges" component={AS_F12_Flanges} />
      <Route path="/product/flanges/alloy-steel/f21-flanges" component={AS_F21_Flanges} />
      <Route path="/product/flanges/alloy-steel/f22-flanges" component={AS_F22_Flanges} />
      <Route path="/product/flanges/alloy-steel/f91-flanges" component={AS_F91_Flanges} />
      <Route path="/product/flanges/alloy-steel/f92-flanges" component={AS_F92_Flanges} />
      <Route path="/product/flanges/alloy-steel/f911-flanges" component={AS_F911_Flanges} />
      <Route path="/product/flanges/nickel-alloy" component={NickelAlloyFlanges} />
      {/* Nickel Alloy Grade Detail Routes */}
      <Route path="/product/flanges/nickel-alloy/nickel-200" component={NA_Nickel200_Flanges} />
      <Route path="/product/flanges/nickel-alloy/nickel-201" component={NA_Nickel201_Flanges} />
      <Route path="/product/flanges/nickel-alloy/monel-400" component={NA_Monel400_Flanges} />
      <Route path="/product/flanges/nickel-alloy/monel-k500" component={NA_MonelK500_Flanges} />
      <Route path="/product/flanges/nickel-alloy/inconel-600" component={NA_Inconel600_Flanges} />
      <Route path="/product/flanges/nickel-alloy/inconel-601" component={NA_Inconel601_Flanges} />
      <Route path="/product/flanges/nickel-alloy/inconel-625" component={NA_Inconel625_Flanges} />
      <Route path="/product/flanges/nickel-alloy/inconel-718" component={NA_Inconel718_Flanges} />
      <Route path="/product/flanges/nickel-alloy/incoloy-800" component={NA_Incoloy800_Flanges} />
      <Route path="/product/flanges/nickel-alloy/incoloy-825" component={NA_Incoloy825_Flanges} />
      <Route path="/product/flanges/nickel-alloy/cupro-nickel-90-10" component={NA_CuNi9010_Flanges} />
      <Route path="/product/flanges/nickel-alloy/cupro-nickel-70-30" component={NA_CuNi7030_Flanges} />
      <Route path="/product/flanges/inconel" component={InconelFlanges} />
      {/* Inconel Grade Detail Routes */}
      <Route path="/product/flanges/inconel/600" component={I_Inconel600_Flanges} />
      <Route path="/product/flanges/inconel/601" component={I_Inconel601_Flanges} />
      <Route path="/product/flanges/inconel/617" component={I_Inconel617_Flanges} />
      <Route path="/product/flanges/inconel/625" component={I_Inconel625_Flanges} />
      <Route path="/product/flanges/inconel/686" component={I_Inconel686_Flanges} />
      <Route path="/product/flanges/inconel/690" component={I_Inconel690_Flanges} />
      <Route path="/product/flanges/inconel/718" component={I_Inconel718_Flanges} />
      <Route path="/product/flanges/inconel/725" component={I_Inconel725_Flanges} />
      <Route path="/product/flanges/inconel/800" component={I_Inconel800_Flanges} />
      <Route path="/product/flanges/inconel/825" component={I_Inconel825_Flanges} />
      <Route path="/product/flanges/inconel/x-750" component={I_InconelX750_Flanges} />
      <Route path="/product/flanges/incoloy" component={IncoloyFlanges} />
      {/* Incoloy Grade Detail Routes */}
      <Route path="/product/flanges/incoloy/800" component={IL_Incoloy800_Flanges} />
      <Route path="/product/flanges/incoloy/800h" component={IL_Incoloy800H_Flanges} />
      <Route path="/product/flanges/incoloy/800ht" component={IL_Incoloy800HT_Flanges} />
      <Route path="/product/flanges/incoloy/825" component={IL_Incoloy825_Flanges} />
      <Route path="/product/flanges/incoloy/925" component={IL_Incoloy925_Flanges} />
      <Route path="/product/flanges/incoloy/926" component={IL_Incoloy926_Flanges} />
      <Route path="/product/flanges/incoloy/800at" component={IL_Incoloy800AT_Flanges} />
      <Route path="/product/flanges/incoloy/ds" component={IL_IncoloyDS_Flanges} />
      <Route path="/product/flanges/incoloy/25-6mo" component={IL_Incoloy256MO_Flanges} />

      {/* Fitting Routes */}
      <Route path="/product/fittings/buttweld-fittings" component={ButtweldFittings} />
      <Route path="/product/fittings/forged-fittings" component={ForgedFittings} />

      {/* Welding Electrode Routes */}
      <Route path="/product/welding-electrodes/stainless-steel-electrode" component={StainlessSteelElectrodes} />
      <Route path="/product/welding-electrodes/ercuni-wire-copper-nickel" component={ERCuNiWire} />
      <Route path="/product/welding-electrodes/aluminiumwire" component={AluminiumWire} />

      {/* Galvanized Routes */}
      <Route path="/product/galvanized/hot-dip-galvanized-angles" component={HotDipGalvanizedAngles} />
      <Route path="/product/galvanized/hot-dip-galvanized-channels" component={HotDipGalvanizedChannels} />

      {/* Pin Routes */}
      <Route path="/product/pins/pto-pins" component={PTOPins} />
      <Route path="/product/pins/pipe-linch-pin" component={PipeLinchPin} />

      <Route path="/product/fasteners/high-tensile" component={HighTensileFasteners} />
      <Route path="/product/fasteners/ss-bolts" component={StainlessSteelBolts} />
      <Route path="/product/fasteners/ss-nuts" component={StainlessSteelNuts} />
      <Route path="/product/fasteners/ss-screws" component={StainlessSteelScrews} />
      <Route path="/product/fasteners/ss-washers" component={StainlessSteelWashers} />

      {/* Additional Pipe & Tubes Routes */}
      <Route path="/product/pipes-tubes/nickel-alloy" component={NickelAlloyPipes} />
      <Route path="/product/pipes-tubes/inconel" component={InconelPipes} />
      <Route path="/product/pipes-tubes/monel" component={MonelPipes} />
      <Route path="/product/pipes-tubes/hastelloy" component={HasteloyPipes} />
      <Route path="/product/pipes-tubes/incoloy" component={IncoloyPipes} />
      <Route path="/product/pipes-tubes/titanium" component={TitaniumPipes} />
      <Route path="/product/pipes-tubes/cupro-nickel" component={CuproNickelPipes} />
      <Route path="/product/pipes-tubes/tantalum" component={TantalumPipes} />
      <Route path="/product/pipes-tubes/duplex-super-duplex-pipes" component={DuplexSuperDuplexPipes} />
      <Route path="/product/pipes-tubes/corten-steel" component={CortenSteelPipes} />
      <Route path="/product/pipes-tubes/efsw-saw-hsaw-lsaw-pipes" component={EFSWPipes} />
      <Route path="/product/pipes-tubes/welded-wear-resistant-pipe-ar400" component={WeldedWearResistantPipes} />
      <Route path="/product/pipes-tubes/plate-welded-pipes" component={PlateWeldedPipes} />
      <Route path="/product/pipes-tubes/large-od-seamless-pipes" component={LargeODSeamlessPipes} />

      {/* Additional Plates & Sheets Routes */}
      <Route path="/product/plates-sheets/alloy-steel-plates" component={AlloySteelPlates} />
      <Route path="/product/plates-sheets/aluminium-alloy" component={AluminiumAlloyPlates} />
      <Route path="/product/plates-sheets/carbon-steel" component={CarbonSteelPlates} />
      <Route path="/product/plates-sheets/copper-nickel" component={CopperNickelPlates} />
      <Route path="/product/plates-sheets/duplex-super-duplex" component={DuplexSuperDuplexPlates} />

      {/* Round Bars Main Page Route */}
      <Route path="/product/round-bars/round-bars" component={RoundBarsMain} />

      {/* Generic Round Bar Listing Route */}
      <Route path="/product/round-bars/generic-listing" component={GenericRoundBarListingWrapper} />

      {/* Alloy Steel F-Series Route */}
      <Route path="/product/round-bars/alloy-steel-f-series" component={AlloySteelFSeries} />

      {/* Alloy Steel Round Bar Grade Detail Routes – MUST come before the listing route below */}
      <Route path="/product/round-bars/alloy-steel-round/1-7711-round-bar" component={Grade17711RoundBar} />
      <Route path="/product/round-bars/alloy-steel-round/100cr6-round-bar" component={Grade100Cr6RoundBar} />
      <Route path="/product/round-bars/alloy-steel-round/15cdv6-round-bars" component={Grade15CDV6RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/16mncr5-round-bar" component={Grade16MnCr5RoundBar} />
      <Route path="/product/round-bars/alloy-steel-round/17crni-mo6-round-bars" component={Grade17CrNiMo6RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/18crni-mo7-6-round-bars" component={Grade18CrNiMo76RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/20mncr5-round-bars" component={Grade20MnCr5RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/20nicrmo2-2-round-bars" component={Grade20NiCrMo22RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/25crmo4-round-bar" component={Grade25CrMo4RoundBar} />
      <Route path="/product/round-bars/alloy-steel-round/30crni-mo8-round-bars" component={Grade30CrNiMo8RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/31crmo-v9-round-bars" component={Grade31CrMoV9RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/34crni-mo6-round-bars" component={Grade34CrNiMo6RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/39nicr-mo3-round-bars" component={Grade39NiCrMo3RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/40cr7al10mo2-round-bars" component={Grade40Cr7Al10Mo2RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/40crmo-v4-6-round-bars" component={Grade40CrMoV46RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/41cr4-round-bars" component={Grade41Cr4RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/4130-round-bars" component={Grade4130RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/4140-round-bars" component={Grade4140RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/4150-round-bars" component={Grade4150RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/42crmo4-round-bars" component={Grade42CrMo4RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/4340-round-bars" component={Grade4340RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/4340v-round-bars" component={Grade4340VRoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/8740-round-bars" component={Grade8740RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/9310-round-bars" component={Grade9310RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/905m39-round-bars" component={Grade905M39RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/12l14-round-bars" component={Grade12L14RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/1144-round-bars" component={Grade1144RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/35crmo-round-bars" component={Grade35CrMoRoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/8620-bright-bars" component={Grade8620BrightBars} />
      <Route path="/product/round-bars/alloy-steel-round/aisi-8620-round-bars" component={GradeAISI8620RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/a193-grade-b7-round-bar" component={GradeA193GradeB7RoundBar} />
      <Route path="/product/round-bars/alloy-steel-round/en8-round-bars" component={GradeEN8RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/en9-round-bars" component={GradeEN9RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/en19-round-bars" component={GradeEN19RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/en24-round-bars" component={GradeEN24RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/scm440-round-bars" component={GradeSCM440RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/sncm420-round-bars" component={GradeSNCM420RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/50crmo4-round-bars" component={Grade50CrMo4RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/36nicrmo4-round-bars" component={Grade36NiCrMo4RoundBars} />
      <Route path="/product/round-bars/alloy-steel-round/38nicrmo4-round-bars" component={Grade38NiCrMo4RoundBars} />

      {/* Stainless Steel Round Bar Grade Detail Routes */}
      <Route path="/product/round-bars/stainless-steel/301-round-bars" component={Grade301RoundBars} />
      <Route path="/product/round-bars/stainless-steel/302-round-bars" component={Grade302RoundBars} />
      <Route path="/product/round-bars/stainless-steel/303-round-bars" component={Grade303RoundBars} />
      <Route path="/product/round-bars/stainless-steel/304-304l-round-bars" component={Grade304RoundBars} />
      <Route path="/product/round-bars/stainless-steel/304h-round-bars" component={Grade304HRoundBars} />
      <Route path="/product/round-bars/stainless-steel/309-309s-round-bars" component={Grade309RoundBars} />
      <Route path="/product/round-bars/stainless-steel/310-310s-round-bars" component={Grade310RoundBars} />
      <Route path="/product/round-bars/stainless-steel/310h-round-bars" component={Grade310HRoundBars} />
      <Route path="/product/round-bars/stainless-steel/316-316l-round-bars" component={Grade316RoundBars} />
      <Route path="/product/round-bars/stainless-steel/316h-round-bars" component={Grade316HRoundBars} />
      <Route path="/product/round-bars/stainless-steel/316ti-round-bars" component={Grade316TiRoundBars} />
      <Route path="/product/round-bars/stainless-steel/317-317l-round-bars" component={Grade317RoundBars} />
      <Route path="/product/round-bars/stainless-steel/321-321h-round-bars" component={Grade321RoundBars} />
      <Route path="/product/round-bars/stainless-steel/347-347h-round-bars" component={Grade347RoundBars} />
      <Route path="/product/round-bars/stainless-steel/alloy-20-round-bars" component={GradeAlloy20RoundBars} />
      <Route path="/product/round-bars/stainless-steel/403-round-bars" component={Grade403RoundBars} />
      <Route path="/product/round-bars/stainless-steel/405-round-bars" component={Grade405RoundBars} />
      <Route path="/product/round-bars/stainless-steel/409-round-bars" component={Grade409RoundBars} />
      <Route path="/product/round-bars/stainless-steel/410-round-bars" component={Grade410RoundBars} />
      <Route path="/product/round-bars/stainless-steel/414-round-bars" component={Grade414RoundBars} />
      <Route path="/product/round-bars/stainless-steel/416-round-bars" component={Grade416RoundBars} />
      <Route path="/product/round-bars/stainless-steel/420-round-bars" component={Grade420RoundBars} />
      <Route path="/product/round-bars/stainless-steel/420f-round-bars" component={Grade420FRoundBars} />
      <Route path="/product/round-bars/stainless-steel/422-round-bars" component={Grade422RoundBars} />
      <Route path="/product/round-bars/stainless-steel/429-round-bars" component={Grade429RoundBars} />
      <Route path="/product/round-bars/stainless-steel/430-round-bars" component={Grade430RoundBars} />
      <Route path="/product/round-bars/stainless-steel/430f-round-bars" component={Grade430FRoundBars} />
      <Route path="/product/round-bars/stainless-steel/431-round-bars" component={Grade431RoundBars} />
      <Route path="/product/round-bars/stainless-steel/434-436-round-bars" component={Grade434RoundBars} />
      <Route path="/product/round-bars/stainless-steel/440abc-round-bars" component={Grade440ABCRoundBars} />
      <Route path="/product/round-bars/stainless-steel/442-round-bars" component={Grade442RoundBars} />
      <Route path="/product/round-bars/stainless-steel/446-round-bars" component={Grade446RoundBars} />
      <Route path="/product/round-bars/stainless-steel/17-4ph-round-bars" component={Grade174PHRoundBars} />
      <Route path="/product/round-bars/stainless-steel/15-5ph-round-bars" component={Grade155PHRoundBars} />
      <Route path="/product/round-bars/stainless-steel/13-8mo-round-bars" component={Grade138MoRoundBars} />
      <Route path="/product/round-bars/stainless-steel/17-7ph-round-bars" component={Grade177PHRoundBars} />
      <Route path="/product/round-bars/stainless-steel/2205-duplex-round-bars" component={Grade2205DuplexRoundBars} />
      <Route path="/product/round-bars/stainless-steel/2507-duplex-round-bars" component={Grade2507DuplexRoundBars} />
      <Route path="/product/round-bars/stainless-steel/zeron-100-round-bars" component={GradeZeron100RoundBars} />
      <Route path="/product/round-bars/stainless-steel/ldx-2101-round-bars" component={GradeLDX2101RoundBars} />
      <Route path="/product/round-bars/stainless-steel/ldx-2304-round-bars" component={GradeLDX2304RoundBars} />
      <Route path="/product/round-bars/stainless-steel/904l-round-bars" component={Grade904LRoundBars} />
      <Route path="/product/round-bars/stainless-steel/254smo-round-bars" component={Grade254SMORoundBars} />
      <Route path="/product/round-bars/stainless-steel/nitronic-60-round-bars" component={GradeNitronic60RoundBars} />
      <Route path="/product/round-bars/stainless-steel/nitronic-50-round-bars" component={GradeNitronic50RoundBars} />
      <Route path="/product/round-bars/stainless-steel/alloy-31-round-bars" component={GradeAlloy31RoundBars} />
      <Route path="/product/round-bars/stainless-steel/sanicro-28-round-bars" component={GradeSanicro28RoundBars} />
      <Route path="/product/round-bars/stainless-steel/al-6xn-round-bars" component={GradeAL6XNRoundBars} />
      <Route path="/product/round-bars/stainless-steel/253-ma-round-bars" component={Grade253MARoundBars} />

      {/* Additional Round Bars Routes */}
      <Route path="/product/round-bars/alloy-steel-round" component={AlloySteelRound} />
      <Route path="/product/round-bars/aluminium-alloy" component={AluminiumAlloyRound} />
      <Route path="/product/round-bars/carbon-steel" component={CarbonSteelRound} />
      <Route path="/product/round-bars/hot-work-steel" component={HotWorkSteel} />
      <Route path="/product/round-bars/copper-nickel" component={CopperNickelRound} />
      <Route path="/product/round-bars/copper-nickel/c14500-tellurium-copper" component={GradeC14500RoundBars} />
      <Route path="/product/round-bars/copper-nickel/c15000-zirconium-copper" component={GradeC15000RoundBars} />
      <Route path="/product/round-bars/copper-nickel/c17510-beryllium-copper" component={GradeC17510RoundBars} />
      <Route path="/product/round-bars/copper-nickel/c18150-chromium-zirconium-copper" component={GradeC18150RoundBars} />
      <Route path="/product/round-bars/copper-nickel/c70600-copper-nickel-90-10" component={GradeC70600RoundBarsCuNi} />
      <Route path="/product/round-bars/copper-nickel/c93200-bearing-bronze" component={GradeC93200RoundBarsBronze} />
      <Route path="/product/round-bars/copper-nickel/cu-ni-70-30" component={GradeCuNi7030RoundBars} />
      <Route path="/product/round-bars/copper-nickel/cu-ni-90-10" component={GradeCuNi9010RoundBars} />
      <Route path="/product/round-bars/copper-nickel/sae-660-bronze" component={GradeSAE660BronzeRoundBars} />
      <Route path="/product/round-bars/en-series" component={ENSeries} />
      <Route path="/product/round-bars/hastelloy/hastelloy-b2-round-bars" component={HastelloyB2Detail} />
      <Route path="/product/round-bars/hastelloy/hastelloy-c22-round-bars" component={HastelloyC22Detail} />
      <Route path="/product/round-bars/hastelloy/hastelloy-c276-round-bars" component={HastelloyC276Detail} />
      <Route path="/product/round-bars/high-speed-steel/m2-hss-round-bars" component={M2HSSDetail} />
      <Route path="/product/round-bars/high-speed-steel/m35-hss-round-bars" component={M35HSSDetail} />
      <Route path="/product/round-bars/high-speed-steel/m42-hss-round-bars" component={M42HSSDetail} />
      <Route path="/product/round-bars/hot-work-steel/din-1-2714-tool-steel" component={DIN12714Detail} />
      <Route path="/product/round-bars/hot-work-steel/h11-tool-steel" component={H11Detail} />
      <Route path="/product/round-bars/hot-work-steel/h13-tool-steel" component={H13Detail} />
      <Route path="/product/round-bars/hot-work-steel/h21-tool-steel" component={H21Detail} />
      <Route path="/product/round-bars/hot-work-steel/s7-tool-steel" component={S7Detail} />
      <Route path="/product/round-bars/inconel/inconel-600-round-bars" component={Inconel600Detail} />
      <Route path="/product/round-bars/inconel/inconel-601-round-bars" component={Inconel601Detail} />
      <Route path="/product/round-bars/inconel/inconel-625-round-bars" component={Inconel625Detail} />
      <Route path="/product/round-bars/inconel/inconel-718-round-bars" component={Inconel718Detail} />
      <Route path="/product/round-bars/inconel/inconel-825-round-bars" component={Inconel825Detail} />
      <Route path="/product/round-bars/inconel/inconel-x750-round-bars" component={InconelX750Detail} />
      <Route path="/product/round-bars/manganese-bronze" component={ManganeseBronzeHub} />
      <Route path="/product/round-bars/manganese-bronze/c67500-manganese-bronze" component={C67500Detail} />
      <Route path="/product/round-bars/manganese-bronze/c86300-manganese-bronze" component={C86300Detail} />
      <Route path="/product/round-bars/monel/monel-400-round-bars" component={Monel400Detail} />
      <Route path="/product/round-bars/monel/monel-k500-round-bars" component={MonelK500Detail} />
      <Route path="/product/round-bars/nickel-alloy/nickel-200" component={Nickel200Detail} />
      <Route path="/product/round-bars/nickel-alloy/nickel-201" component={Nickel201Detail} />
      <Route path="/product/round-bars/nickel-alloy/alloy-20" component={Alloy20Detail} />
      <Route path="/product/round-bars/nickel-alloy/alloy-800" component={Alloy800Detail} />
      <Route path="/product/round-bars/nickel-alloy/alloy-825" component={Alloy825Detail} />
      <Route path="/product/round-bars/tool-steel" component={ToolSteelHub} />
      <Route path="/product/round-bars/tool-steel/aisi-d2-round-bars" component={AISID2ToolSteelDetail} />
      <Route path="/product/round-bars/tool-steel/aisi-d3-round-bars" component={AISID3ToolSteelDetail} />
      <Route path="/product/round-bars/tool-steel/aisi-h13-round-bars" component={AISIH13ToolSteelDetail} />
      <Route path="/product/round-bars/tool-steel/aisi-h11-round-bars" component={AISIH11ToolSteelDetail} />
      <Route path="/product/round-bars/tool-steel/aisi-p20-round-bars" component={AISIP20ToolSteelDetail} />
      <Route path="/product/round-bars/tool-steel/din-2714-round-bars" component={DIN2714ToolSteelDetail} />
      <Route path="/product/round-bars/tool-steel/m2-high-speed-steel" component={AISIM2HighSpeedSteelDetail} />
      <Route path="/product/round-bars/tool-steel/m35-high-speed-steel" component={AISIM35HighSpeedSteelDetail} />
      <Route path="/product/round-bars/tool-steel/aisi-o1-round-bars" component={AISIO1ToolSteelDetail} />
      <Route path="/product/round-bars/tool-steel/aisi-s7-round-bars" component={AISIS7ToolSteelDetail} />
      <Route path="/product/round-bars/precipitation-hardening-steel/17-4ph-round-bars" component={SeventeenFourPHDetail} />
      <Route path="/product/round-bars/precipitation-hardening-steel/aisi-630-round-bars" component={AISI630Detail} />
      <Route path="/product/round-bars/precipitation-hardening-steel/13-8mo-round-bars" component={ThirteenEightMoDetail} />
      <Route path="/product/round-bars/precipitation-hardening-steel/ams-5643-round-bars" component={AMS5643Detail} />
      <Route path="/product/round-bars/precipitation-hardening-steel/15-5ph-round-bars" component={FifteenFivePHDetail} />
      <Route path="/product/round-bars/precipitation-hardening-steel/inconel-x750-ph-bars" component={InconelX750PHDetail} />
      <Route path="/product/round-bars/titanium/titanium-grade-1" component={TitaniumGrade1Detail} />
      <Route path="/product/round-bars/titanium/titanium-grade-2" component={TitaniumGrade2Detail} />
      <Route path="/product/round-bars/titanium/titanium-grade-3" component={TitaniumGrade3Detail} />
      <Route path="/product/round-bars/titanium/titanium-grade-5" component={TitaniumGrade5Detail} />
      <Route path="/product/round-bars/titanium/titanium-grade-7" component={TitaniumGrade7Detail} />
      <Route path="/product/round-bars/titanium/titanium-grade-12" component={TitaniumGrade12Detail} />


      {/* EN Series Grade Detail Routes */}
      <Route path="/product/round-bars/en-series/en1a-leaded" component={EN1ALeadedDetail} />
      <Route path="/product/round-bars/en-series/en1a-non-leaded" component={EN1ANonLeadedDetail} />
      <Route path="/product/round-bars/en-series/en3b-mild-steel" component={EN3BMildSteelDetail} />
      <Route path="/product/round-bars/en-series/en8-080m40" component={EN8080M40Detail} />
      <Route path="/product/round-bars/en-series/en8d-round-bars" component={EN8DRoundBarsDetail} />
      <Route path="/product/round-bars/en-series/en8m-free-machining" component={EN8MFreeMachiningDetail} />
      <Route path="/product/round-bars/en-series/en9-070m55" component={EN9070M55Detail} />
      <Route path="/product/round-bars/en-series/en14a-manganese-steel" component={EN14AManganeseSteelDetail} />
      <Route path="/product/round-bars/en-series/en15-round-bars" component={EN15RoundBarsDetail} />
      <Route path="/product/round-bars/en-series/en15b-boron-steel" component={EN15BBoronSteelDetail} />
      <Route path="/product/round-bars/en-series/en16-605m36" component={EN16605M36Detail} />
      <Route path="/product/round-bars/en-series/en18-530a40" component={EN18530A40Detail} />
      <Route path="/product/round-bars/en-series/en19-708m40" component={EN19708M40Detail} />
      <Route path="/product/round-bars/en-series/en19c-round-bars" component={EN19CRoundBarsDetail} />
      <Route path="/product/round-bars/en-series/en24-817m40" component={EN24817M40Detail} />
      <Route path="/product/round-bars/en-series/en24t-quenched-tempered" component={EN24TQuenchedTemperedDetail} />
      <Route path="/product/round-bars/en-series/en31-535a99" component={EN31535A99Detail} />
      <Route path="/product/round-bars/en-series/en32b-round-bars" component={EN32BRoundBarsDetail} />
      <Route path="/product/round-bars/en-series/en36c-832m13" component={EN36C832M13Detail} />
      <Route path="/product/round-bars/en-series/en40b-nitriding-steel" component={EN40BNitridingSteelDetail} />
      <Route path="/product/round-bars/en-series/en41b-nitriding-steel" component={EN41BNitridingSteelDetail} />
      <Route path="/product/round-bars/en-series/en42j-spring-steel" component={EN42JSpringSteelDetail} />
      <Route path="/product/round-bars/en-series/en43c-round-bars" component={EN43CRoundBarsDetail} />
      <Route path="/product/round-bars/en-series/en45-spring-steel" component={EN45SpringSteelDetail} />
      <Route path="/product/round-bars/en-series/en47-chrome-vanadium" component={EN47ChromeVanadiumDetail} />
      <Route path="/product/round-bars/en-series/en353-round-bars" component={EN353RoundBarsDetail} />
      <Route path="/product/round-bars/en-series/en354-round-bars" component={EN354RoundBarsDetail} />
      <Route path="/product/round-bars/en-series/en355-round-bars" component={EN355RoundBarsDetail} />

      <Route path="/product/round-bars/hastelloy" component={HasteloyRound} />
      <Route path="/product/round-bars/precipitation-hardening-steel" component={PrecipitationHardeningSteel} />
      <Route path="/product/round-bars/alloy-20" component={Alloy20RoundBars} />
      <Route path="/product/round-bars/duplex-super-duplex" component={DuplexSuperDuplexRoundBars} />
      <Route path="/product/round-bars/duplex-super-duplex/duplex-2205" component={GradeDuplex2205Detail} />
      <Route path="/product/round-bars/duplex-super-duplex/super-duplex-2507" component={GradeSuperDuplex2507Detail} />
      <Route path="/product/round-bars/duplex-super-duplex/zeron-100" component={GradeZeron100Detail} />
      <Route path="/product/round-bars/duplex-super-duplex/254-smo" component={Grade254SMODetail} />
      <Route path="/product/round-bars/duplex-super-duplex/ferralium-255" component={GradeFerralium255Detail} />
      <Route path="/product/round-bars/duplex-super-duplex/lean-duplex-2101" component={GradeLeanDuplex2101Detail} />
      <Route path="/product/round-bars/inconel" component={InconelRoundBars} />
      <Route path="/product/round-bars/titanium" component={TitaniumRoundBars} />

      {/* Bronze, Al-Bronze, Boron Listing Routes */}
      <Route path="/product/round-bars/aluminium-bronze" component={AluminiumBronzeListing} />
      <Route path="/product/round-bars/boron-grades" component={BoronGradesListing} />
      <Route path="/product/round-bars/bronze" component={BronzeListing} />

      {/* Aluminium Bronze Grade Detail Routes */}
      <Route path="/product/round-bars/aluminium-bronze/c63000-nickel-aluminium-bronze" component={GradeC63000RoundBars} />
      <Route path="/product/round-bars/aluminium-bronze/c95400-aluminium-bronze" component={GradeC95400RoundBars} />

      {/* Boron Grade Detail Routes */}
      <Route path="/product/round-bars/boron-grades/10b21-boron-steel" component={Grade10B21RoundBars} />
      <Route path="/product/round-bars/boron-grades/15b25-boron-steel" component={Grade15B25RoundBars} />
      <Route path="/product/round-bars/boron-grades/10b33-boron-steel" component={Grade10B33RoundBars} />
      <Route path="/product/round-bars/boron-grades/15b41-boron-steel" component={Grade15B41RoundBars} />

      {/* Bronze Grade Detail Routes */}
      <Route path="/product/round-bars/bronze/pb1-phosphor-bronze" component={GradePB1RoundBars} />
      <Route path="/product/round-bars/bronze/sae-660-bearing-bronze" component={GradeSAE660RoundBars} />
      <Route path="/product/round-bars/bronze/lg2-gunmetal-bronze" component={GradeLG2RoundBars} />
      <Route path="/product/round-bars/bronze/ab2-aluminium-bronze" component={GradeAB2RoundBars} />

      <Route path="/product/round-bars/monel" component={MonelRoundBars} />

      <Route path="/product/round-bars/nickel-alloy" component={NickelAlloyRoundBars} />
      <Route path="/product/round-bars/cobalt" component={CobaltRoundBars} />
      <Route path="/product/round-bars/high-speed-steel" component={HighSpeedSteelRoundBars} />

      {/* F Series Round Bars Routes */}
      <Route path="/product/round-bars/f5-round-bars" component={F5RoundBars} />
      <Route path="/product/round-bars/f9-round-bars" component={F9RoundBars} />
      <Route path="/product/round-bars/f11-round-bars" component={F11RoundBars} />
      <Route path="/product/round-bars/f12-round-bars" component={F12RoundBars} />
      <Route path="/product/round-bars/f22-round-bars" component={F22RoundBars} />
      <Route path="/product/round-bars/f91-round-bars" component={F91RoundBars} />

      {/* Aluminium Round Bars Routes */}
      <Route path="/product/round-bars/aluminium" component={AluminiumMain} />
      <Route path="/product/round-bars/aluminium-alloy/2014-t6-round-bars" component={Alu2014RoundBars} />
      <Route path="/product/round-bars/aluminium-alloy/2024-t6-round-bars" component={Alu2024RoundBars} />
      <Route path="/product/round-bars/aluminium-alloy/5083-h111-round-bars" component={Alu5083RoundBars} />
      <Route path="/product/round-bars/aluminium-alloy/6061-t6-round-bars" component={Alu6061RoundBars} />
      <Route path="/product/round-bars/aluminium-alloy/6082-t6-round-bars" component={Alu6082RoundBars} />
      <Route path="/product/round-bars/aluminium-alloy/7075-t6-round-bars" component={Alu7075RoundBars} />

      {/* Cold Work Tool Steels Routes */}
      <Route path="/product/cold-work-tool-steels" component={ColdWorkToolSteelListing} />
      <Route path="/product/cold-work-tool-steels/o1-tool-steel" component={AISIO1RoundBars} />
      <Route path="/product/cold-work-tool-steels/d2-tool-steel" component={HCHCRD2RoundBars} />
      <Route path="/product/cold-work-tool-steels/a2-tool-steel" component={A2ToolSteel} />
      <Route path="/product/cold-work-tool-steels/d3-tool-steel" component={D3ToolSteel} />

      {/* Additional Flange Routes */}
      <Route path="/product/flanges/blind-flanges" component={BlindFlanges} />
      <Route path="/product/flanges/lap-joint-flanges" component={LapJointFlanges} />
      <Route path="/product/flanges/slip-on-flanges" component={SlipOnFlanges} />
      <Route path="/product/flanges/socket-weld-flanges" component={SocketWeldFlanges} />
      <Route path="/product/flanges/threaded-flanges" component={ThreadedFlanges} />
      <Route path="/product/flanges/weld-neck-flanges" component={WeldNeckFlanges} />

      {/* Carbon Steel Grade Details Routes */}
      <Route path="/product/round-bars/carbon-steel/100cr6-round-bars" component={CarbonGrade100Cr6} />
      <Route path="/product/round-bars/carbon-steel/15c8-round-bars" component={CarbonGrade15C8} />
      <Route path="/product/round-bars/carbon-steel/16mncr5-round-bars" component={CarbonGrade16MnCr5} />
      <Route path="/product/round-bars/carbon-steel/20c8-round-bars" component={CarbonGrade20C8} />
      <Route path="/product/round-bars/carbon-steel/20mncr5-round-bars" component={CarbonGrade20MnCr5} />
      <Route path="/product/round-bars/carbon-steel/20mncr5-cut-piece" component={CarbonGrade20MnCr5CP} />
      <Route path="/product/round-bars/carbon-steel/38mnvs6-round-bars" component={CarbonGrade38MnVS6} />
      <Route path="/product/round-bars/carbon-steel/40c10s18-round-bars" component={CarbonGrade40C10S18} />
      <Route path="/product/round-bars/carbon-steel/4140-round-bars" component={CarbonGrade4140} />
      <Route path="/product/round-bars/carbon-steel/42crmo4-round-bars" component={CarbonGrade42CrMo4} />
      <Route path="/product/round-bars/carbon-steel/44smn28-round-bars" component={CarbonGrade44SMn28} />
      <Route path="/product/round-bars/carbon-steel/51crv4-round-bars" component={CarbonGrade51CrV4} />
      <Route path="/product/round-bars/carbon-steel/805m20-round-bars" component={CarbonGrade805M20} />
      <Route path="/product/round-bars/carbon-steel/a105-round-bars" component={CarbonGradeA105} />
      <Route path="/product/round-bars/carbon-steel/aisi-1144-round-bar" component={CarbonGradeAISI1144} />
      <Route path="/product/round-bars/carbon-steel/aisi-8620-round-bar" component={CarbonGradeSAE8620} />
      <Route path="/product/round-bars/carbon-steel/aisi-sae-4140-round-bar" component={CarbonGradeSAE4140} />
      <Route path="/product/round-bars/carbon-steel/astm-a193-b16-round-bars" component={CarbonGradeASTM_A193_B16} />
      <Route path="/product/round-bars/carbon-steel/b16-round-bar" component={CarbonGradeB16} />
      <Route path="/product/round-bars/carbon-steel/c40-round-bar" component={CarbonGradeC40} />
      <Route path="/product/round-bars/carbon-steel/c45-round-bars" component={CarbonGradeC45} />
      <Route path="/product/round-bars/carbon-steel/c55-en9-round-bars" component={CarbonGradeC55_EN9} />
      <Route path="/product/round-bars/carbon-steel/en19-hex-bar" component={CarbonGradeEN19Hex} />
      <Route path="/product/round-bars/carbon-steel/en1a-leaded-round-bars" component={CarbonGradeEN1ALeaded} />
      <Route path="/product/round-bars/carbon-steel/en1a-non-leaded-round-bars" component={CarbonGradeEN1ANonLeaded} />
      <Route path="/product/round-bars/carbon-steel/en24-round-bars" component={CarbonGradeEN24} />
      <Route path="/product/round-bars/carbon-steel/en31-round-bars" component={CarbonGradeEN31} />
      <Route path="/product/round-bars/carbon-steel/en353-round-bars" component={CarbonGradeEN353} />
      <Route path="/product/round-bars/carbon-steel/en36c-round-bar" component={CarbonGradeEN36C} />
      <Route path="/product/round-bars/carbon-steel/en41b-round-bars" component={CarbonGradeEN41B} />
      <Route path="/product/round-bars/carbon-steel/en47-round-bar" component={CarbonGradeEN47} />
      <Route path="/product/round-bars/carbon-steel/en8-round-bars" component={CarbonGradeEN8} />
      <Route path="/product/round-bars/carbon-steel/en8m-en8dm-round-bar" component={CarbonGradeEN8M_EN8DM} />
      <Route path="/product/round-bars/carbon-steel/en9-round-bars" component={CarbonGradeEN9} />
      <Route path="/product/round-bars/carbon-steel/etg100-round-bars" component={CarbonGradeETG100} />
      <Route path="/product/round-bars/carbon-steel/s355j2-round-bars" component={CarbonGradeS355J2} />
      <Route path="/product/round-bars/carbon-steel/sae-1018-round-bars" component={CarbonGradeSAE1018} />
      <Route path="/product/round-bars/carbon-steel/sae-4340-round-bar" component={CarbonGradeSAE4340} />
      <Route path="/product/round-bars/carbon-steel/sae-52100-steel-round-bars" component={CarbonGradeSAE52100} />
      <Route path="/product/round-bars/carbon-steel/sae-8620-round-bars" component={CarbonGradeSAE8620Batch} />
      <Route path="/product/round-bars/carbon-steel/scm420-round-bars" component={CarbonGradeSCM420} />
      <Route path="/product/round-bars/carbon-steel/st52.3-round-bar" component={CarbonGradeST523} />
      <Route path="/product/round-bars/carbon-steel/sum43-round-bars" component={CarbonGradeSUM43} />

      <Route path="/solutions" component={Solutions} />
      <Route path="/certificate" component={Certificate} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Global SEO Schemas
const globalSchemas = [
  getOrganizationSchema(),
  getLocalBusinessSchema(),
  getWebsiteSchema()
];

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Global SEO Configuration */}
          <Helmet>
            {/* Global Site Meta Tags */}
            <html lang="en-IN" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

            {/* Preconnect to Important Domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* DNS Prefetch for Performance */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

            {/* ========== ADVANCED WORLDWIDE SEO FEATURES ========== */}
            {/* NOTE: geo tags and hreflang tags are already in index.html - no duplication */}

            {/* Additional Performance Optimization */}
            <link rel="preconnect" href="https://mamtasteeltraders.com" />
            <link rel="dns-prefetch" href="https://mamtasteeltraders.com" />

            {/* Resource Hints for Faster Loading */}
            <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" as="style" href="/src/index.css" />

            {/* Advanced Audience & Business Targeting (unique to App.tsx) */}
            <meta name="target" content="all" />
            <meta name="audience" content="B2B, Industrial Buyers, Engineers, Contractors, Procurement Managers, Manufacturing Companies" />

            {/* Business Classification for Better Discovery */}
            <meta name="business-type" content="Manufacturer, Supplier, Exporter, Wholesaler, Stockist" />
            <meta name="company-size" content="Medium Enterprise" />
            <meta name="establishment-year" content="2005" />

            {/* Advanced Content Classification */}
            <meta name="page-topic" content="Steel Manufacturing, Industrial Supplies, B2B Commerce, Metal Products" />
            <meta name="subject" content="Stainless Steel, Carbon Steel, Alloy Steel Products Supply" />

            {/* Copyright & Legal */}
            <meta name="copyright" content={`© ${new Date().getFullYear()} Mamta Steel Traders. All Rights Reserved.`} />
            <meta name="author" content="Mamta Steel Traders" />

            {/* Global Structured Data Schemas */}
            <script type="application/ld+json">
              {JSON.stringify(globalSchemas, null, 2)}
            </script>

            {/* Additional SEO Enhancements */}
            <meta name="referrer" content="origin-when-cross-origin" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            {/* Manifest for PWA */}
            <link rel="manifest" href="/manifest.json" />

            {/* Favicon and Icons */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          </Helmet>

          <div className="min-h-screen flex flex-col overflow-x-hidden">
            <TopBar />
            <MainHeader />
            <div className="h-[2px] bg-[#f39c12] w-full" />
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
