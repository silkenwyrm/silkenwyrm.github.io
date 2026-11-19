
// Code by Aethersaurus the First
// I live a very 'tismatic life
//subclass var
let subby = 'e';

//Arrays
const defaultclasses = [
    {
        "name": "Fighter",
        "source": "Player's Handbook"
    },
    {
        "name": "Cleric",
        "source": "Player's Handbook"
    },
    {
        "name": "Bard",
        "source": "Player's Handbook"
    },
    {
        "name": "Druid",
        "source": "Player's Handbook"
    },
    {
        "name": "Paladin",
        "source": "Player's Handbook"
    },
    {
        "name": "Rogue",
        "source": "Player's Handbook"
    },
    {
        "name": "Sorcerer",
        "source": "Player's Handbook"
    },
    {
        "name": "Wizard",
        "source": "Player's Handbook"
    },
];

const classestest = [
    "Bard", "Cleric", "Fighter", "Artificer"
];

const classes = [
    "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer", "Gadgeteer (dm)", "Alchemist (vsos)", "Captain (vsos)", "Craftsman (vsos)", "Gunslinger (vsos)", "Investigator (vsos)", "Martyr (vsos)", "Necromancer (vsos)", "Warden (vsos)", "Warmage (vsos)", "Witch (vsos)", "Tamer (hgtmh)", "Bender (rgttyr)", "Swashbuckler (hb)", "Cultivator (hb)", "Favored Soul (lgtr)", "Incriptor (lgtr)", "Petal Knight (lgtr)", "Ranger (lgtr)", "Sword Saint (lgtr)", "Binder (cb)", "Dragoneer (zec)", "Frame Pilot (zec)", "Witch (wbn)", "Blood Minister (bbb)", "Monster Hunter (ghpg)", "Babaylan (iosu)", "Headhunter (iosu)", "Inventor (kcocac)", "Psion (kcocac)", "Occultist (kcolal)", "Spellblade (kcolal)", "Warden (kcolal)", "Warlord (kcolal)", "Witch (farwg)", "Warlord (mare)"
];

const species = [
    "Aboleth", "Aasimar", "Alicorn (hb)", "Amphrig (Mytharia) (needs to be renamed lol)", "Animated object (mr)", "Animus: Sworn by circuits (bbb)", "Animus: Sworn by Law (bbb)", "Animus: Sworn by Stone (bbb)", "Antarid (Mytharia)", "Anurian (bs5)", "Arcaneborn (ac)", "Arhcoon: City (lgtr)", "Arhcoon: Desert (lgtr)", "Arhcoon: Forest (lgtr)", "Arhcoon: Harmonious (zec)", "Arhcoon: Quickswitch (zec)", "Arhcoon: Night (lgtr)", "Arhcoon: Tanuki (bbb)", "Arhcoon: Tundra (lgtr)", "Augmented (ac)", "Augmented (kcocac)", "Aviac (bs5)", "Awakened Familiar (ac)", "Awakened Undead (kcolal)", "Banshee (mr)", "Beastfolk: Arctic (fgitbw)", "Beastfolk: Aquatic (fgitbw)", "Beastfolk: Desert (fgitbw)", "Beastfolk: Forest (fgitbw)", "Beastfolk: Urban (fgitbw)", "Beast Tribe: Bat (lgtr)", "Beast Tribe: Bear (lgtr)", "Beast Tribe: Boar (lgtr)", "Beast Tribe: Exoprimate (zec)", "Beast Tribe: Goat (zec)", "Beast Tribe: Hound (tgs)", "Beast Tribe: Hyena (lgtr)", "Beast Tribe: Jackal (lgtr)", "Beast Tribe: Pangolin (zec)", "Beast Tribe: Rat (lgtr)", "Beast Tribe: Raven (lgtr)", "Beast Tribe: Saelkie (Seal) (dsr)", "Beast Tribe: Swine (tgs)", "Beast Tribe: Tiger (lgtr)", "Beast Tribe: Wolf (lgtr)", "Begacahkos (Mytharia)", "Beholder: Eye Tyrant (mr)", "Beholder: Death Tyrant (mr)", "Beholder: Spectator (mr)", "Birdfolk: Aarakocra", "Birdfolk: Carrion (bbb)", "Birdfolk: Gobboc (hgtmh)", "Birdfolk: Kenku", "Birdfolk: Mimic", "Birdfolk: Nighthawk", "Birdfolk: Owlin", "Birdfolk: Peacock (bbb)", "Birdfolk: Peak Settler (lgtr)", "Birdfolk: Pechuin (zec)", "Birdfolk: Phoenix Feather (zec)", "Birdfolk: Robust (lgtr)", "Birdfolk: Woodpecker (bbb)", "B-Head", "Blight: Needle (hb)", "Blight: Tree (hb)", "Blight: Twig (hb)", "Blight: Vine (hb)", "Boghurt (bs5)", "Cacaoan (Mytharia)", "Cairndwin (farwg)", "Capy’hado: Bolndest (bbb)", "Capy’hado: Bosquenn (lgtr)", "Capy’hado: Caminel (lgtr)", "Capy’hado: Costana (lgtr)", "Capy’hado: Flùr-cadal (zec)", "Capy’hado: Groumon (zec)", "Capy’hado: Jefa’dore (bbb)", "Capy’hado: Verhir (lgtr)", "Cassaco (sd)", "Centaur: Hippocentuar", "Centaur: Tavrocentaur", "Cervan (hw)", "Changeling", "Changeling (zec)", "Chimera (mr)", "Cnidaran: Nematocyst (hgtmh)", "Cnidaran: Shimmerskin (hgtmh)", "Crawling Claw (mr)", "Crisisi (Mytharia)", "Cyclopian (hgtmh)", "Cyclops (mr)", "Dara: Blue (otfttg)", "Dara: Red (otfttg)", "Death Knight (mr)", "Drackal: Fierce of Claw", "Drackal: Fierce of Scale", "Drackal: Fierce of Wing", "Dragonborn: Draconblood", "Dragonborn: Ravenite", "Dragonborn: Shiftscale (Mytharia)", "Dragonborn: Umalagad (iosu)", "Dragonborn: Void (Mytharia)", "Dragonkin: Arconaut (zec)", "Dragonkin: Bloodscale (bbb)", "Dragonkin: Chromatic (lgtr) (Mytharia)", "Dragonkin: Gem (lgtr) (Mytharia)", "Dragonkin: Lake Serpent (bbb)", "Dragonkin: Lungzai (zec)", "Dragonkin: Metallic (lgtr) (Mytharia)", "Dragonkin: Obsidian (lgtr)", "Dragonkin: Pure (lgtr)", "Dragonkin: Skull (lgtr)", "Dragonkin: Wormhole (zec)", "Dwarf: Ancient (ac)", "Dwarf: Copper (lgtr)", "Dwarf: Depth (lgtr)", "Dwarf: Duergar (lgtr)", "Dwarf: Engine (zec)", "Dwarf: Fortech (zec)", "Dwarf: Hill Dwarf", "Dwarf: Mountain Dwarf", "Dwarf: Oil (bbb)", "Dwarf: Sermian (lgtr)", "Dwarf: Vault (bbb)", "Dwarf: Volcano (lgtr) (Mytharia)", "Dwarf: Volcano (iosu)", "Elf: Astral", "Elf: Astral (lgtr)", "Elf: Balette (iosu)", "Elf: Belt (zec)", "Elf: Blood (lgtr) (Mytharia)", "Elf: Dark (lgtr)", "Elf: Drider (mr)", "Elf: Drow", "Elf: Eladrin", "Elf: Grave (bbb)", "Elf: Half", "Elf: High (Mytharia)", "Elf: Neoastral (zec)", "Elf: Moon (lgtr)", "Elf: Oaka (otfttg)", "Elf: Odaisi (bbb)", "Elf: Pallid Elf", "Elf: Sea Elf", "Elf: Sea (lgtr)", "Elf: Shadow (lgtr)", "Elf: Snow (lgtr)", "Elf: Sun (lgtr)", "Elf: Wild (lgtr)", "Elf: Wind (lgtr)", "Elf: Wood (lgtr) (Mytharia)", "Elf: Wood Elf (Mytharia)", "Enáretos: Clarity (lgtr)", "Enáretos: Cosmic (zec)", "Enáretos: Crestsworn (bbb)", "Enáretos: Discovery (lgtr)", "Enáretos: Endowment (bbbr)", "Enáretos: Extermination (bbb)", "Enáretos: Glory (lgtr)", "Enáretos: Leadership (zec)", "Enáretos: Lust (lgtr)", "Enáretos: Prophecy (lgtr)", "Enáretos: Retribution (lgtr)", "Enáretos: Wrath (lgtr)", "Enkoh: Hulking (rgttyr)", "Enkoh: Springtail (rgttyr)", "Ent (hb)", "Etterkin (farwg)", "Facsimilites (Mytharia)", "Fairy", "Farling (kcocac)", "Felis (ac)", "Feralus: Deep (lgtr)", "Feralus: Degopath (zec)", "Feralus: Gravitaxia (zec)", "Feralus: Junglecat (lgtr)", "Feralus: Lordsmane (lgtr)", "Feralus: Maulinn (lgtr)", "Feralus: Shadowcat (lgtr)", "Feralus: Streetpad (bb)", "Feralus: Wonder White (bbb)", "Firbolg", "Firbolg: Crystbloom (bbb)", "Firbolg: Forest (lgtr)", "Firbolg: Landmark (lgtr)", "Firbolg: Nemeidre (bbb)", "Firbolg: Overgrowth (zec)", "Firbolg: Sandstone (lgtr)", "Firbolg: Wavewatcher (lgtr)", "Firbolg: Whirlwind (lgtr)", "Firbolg: Void Shepard (zec)", "Flooflin: Grassin (lgtr)", "Flooflin: Leafly (lgtr)", "Flooflin: Lowbell (zec)", "Flooflin: Moonfoot (lgtr)", "Flooflin: Shifthinde (bbb)", "Flooflin: Sunhare (zec)", "Flooflin: Wildrider (lgtr)", "Flooding: Winking Heel (bbb)", "Flumph (mr)", "Framebilt: FRM01 Colossus (lgtr)", "Framebilt: FRM02 Lite (lgtr)", "Framebilt: FRM03 Tentative (lgtr)", "Framebilt: FRM04 Multiband (lgtr)", "Framebilt: FRM06 Calculator (bbb)", "Framebilt: FRM07 Explorer (zec)", "Framebilt: FRM08 Navigator (zec)", "Framebilt: FRM09 Spinner (bbb)", "Fuyōren (rgttyr)", "Fox Spirit (hb)", "Galvan: Eidolark (zec)", "Galvan: Oblira (zec)", "Galvan: Raijil (zec)", "Galvan: Wayminded (zec)", "Gargoyle (hb)", "Gel-Gel (Mytharia)", "Genasi: Air Genasi", "Genasi: Ash Genasi (hb)", "Genasi: Candy Genasi (Mytharia)", "Genasi: Cheese Genasi (Mytharia)", "Genasi: Earth Genasi", "Genasi: Fire Genasi", "Genasi: Ice Genasi (hb)", "Genasi: Slime Genasi (hb)", "Genasi: Storm Genasi (hb)", "Genasi: Water Genasi", "Geppettin: Bisque (vsos)", "Geppettin: Marionette (vsos)", "Geppettin: Raggedy (vsos)", "Gerbanian (bs5)", "Gnome: Bright (lgtr)", "Gnome: Deep", "Gnome: Forest", "Gnome: Forest (lgtr)", "Gnome: Gold (iosu)", "Gnome: Grim (bbb)", "Gnome: Korrigan (bbb)", "Gnome: Pocketeer (zec)", "Gnome: Rock", "Gnome: Steady (lgtr)", "Gnome: Sungazer (zec)", "Gnome: Svirfneblin (lgtr)", "Gnome: Trail (lgtr)", "Goblin", "Goblin: Badland (lgtr)", "Goblin: Brass Fibre (zec)", "Goblin: Dust (lgtr)", "Goblin: Fear Flock (lgtr)", "Goblin: Gear (lgtr)", "Goblin: Jackpot (bbb)", "Goblin: Kozoglin (bbb)", "Goblin: Meteor (zec)", "Goblin: Moonburned (bbb)", "Goblin: Wild (lgtr)", "Goblinoid: Bugbear", "Goblinoid; Hobgoblin: Craterfist (zec)", "Goblinoid; Hobgoblin: Forewander (bbb)", "Goblinoid; Hobgoblin: Mindful (lgtr)", "Goblinoid; Hobgoblin: Psychotick (zec)", "Goblinoid; Hobgoblin: Scornwrought (lgtr)", "Goblinoid; Hobgoblin: Strikehand (lgtr)", "Goblinoid; Hobgoblin: Subwalker (bbb)", "Goblinoid; Hobgoblin: Wildermaison (lgtr)", "Goblinoid: Hobgoblin", "Goblinoid: Verdan", "Goliath", "Goliath: Auratinn (lgtr)", "Goliath: Caelumtinn (lgtr)", "Goliath: Fomóire (bbb)", "Goliath: Onitouched (bbb)", "Goliath: Pruitinn (lgtr)", "Goliath: Pyrotinn (lgtr)", "Goliath: Solatinn (zec)", "Goliath: Terratinn (lgtr)", "Goliath: Versitinn (zec)", "Golynn (hgtmh)", "Hádislin: Broken (lgtr)", "Hádislin: Chained (lgtr)", "Hádislin: Corroded (lgtr)", "Hádislin: Cosmoth (lgtr)", "Hádislin: Entrench (bbb)", "Hádislin: Entropic (lgtr)", "Hádislin: Forgelith (lgtr)", "Hádislin: Kertamina (bbb)", "Hádislin: Nova (zec)", "Hádislin: Scorched (lgtr)", "Hádislin: Sultris (bbb)", "Hádislin: Void Law (lgtr)", "Hádislin: Wallwalker (lgtr)", "Hádislin: Yuamorian (zec)", "Hádislin, Crystal: Celestine (lgtr)", "Hádislin, Crystal: Chlorite (lgtr)", "Hádislin, Crystal: Howlite (lgtr)", "Hádislin, Crystal: Jasper (lgtr)", "Hádislin, Crystal: Jetstone (lgtr)", "Hádislin, Crystal: Kyanite (lgtr)", "Hádislin, Crystal: Obsidian (lgtr)", "Hádislin, Crystal: Pyrite (lgtr)", "Hádislin, Crystal: Sodalite (lgtr)", "Hádislin, Crystal: Spinel (lgtr)", "Hagborn: Night Hag (farwg)", "Hagborn: Forest Hag (farwg)", "Hagborn: River Hag (farwg)", "Halfling: Clanmaker (bbb)", "Halfing: Stout", "Halfling: Ghostwise", "Halfling: Lightfoot", "Halfling: Lightfoot (lgtr)", "Halfling: Longshot (zec)", "Halfling: Lotusden", "Halfling: Mangrove (iosu)", "Halfling: Peacemaker (bbb)", "Halfling: Phantom (lgtr)", "Halfling: Settler (zec)", "Halfling: Stonewood (lgtr)", "Halfling: Stout (lgtr)", "Halfling: Warmhearth (lgtr)", "Hanamori (rgttyr)", "Haniwa (rgttyr)", "Hanyou: Aquatic (lgtr)", "Hanyou: Avian (lgtr)", "Hanyou: Dream (zec)", "Hanyou: Fox (lgtr)", "Hanyou: Gashadokuro (bbb)", "Hanyou: Giant (lgtr)", "Hanyou: Grudge (lgtr)", "Hanyou: Hound (lgtr)", "Hanyou: Inheritor (lgtr)", "Hanyou: Jorolin (bbb)", "Hanyou: Manifest (lgtr)", "Hanyou: Rabbit (bbb)", "Hanyou: Serpent (zec)", "Hanyou: Snow Child (bbb)", "Hanyu: Will’s Echo (bbb)", "Harengon", "Harpy (Mytharia)", "Harvestborn:  Barkling (ds)", "Harvestborn: Cactusling (ds)", "Harvestborn: Flowerling (ds)", "Harvestborn: Mushroomling (ds)", "Harvestborn: Veggieling (ds)", "Harvestborn: Wildflowerling (ds)", "Hedge (hw)", "Houndnouh (tgtthcom)", "Human", "Human: Artisan (lgtr)", "Human: Black Soul (bbb)", "Human: Coastal (lgtr)", "Human: Colony (zec)", "Human: Enshrined (bbb)", "Human: Exolunar (zec)", "Human: Frostlander (lgtr)", "Human: Greythian (lgtr)", "Human: Jackman (lgtr)", "Human: Scuffin (zec)", "Human: Sermian (lgtr)", "Human: Wanderer (bbb)", "Human: Woodlander (lgtr)", "Iklayrchiway (Mytharia)", "Ilthrak-Yar: Abyssoid (zec)", "Ilthrak-Yar: Arcathia (lgtr)", "Ilthrak-Yar: Brachaya (lgtr)", "Ithrak-Yar: Farbeast (tgs)", "Ilthrak-Yar: Hymenoptera (lgtr)", "Ilthrak-Yar: Ioluminate (zec)", "Ilthrak-Yar: Shellrock (lgtr)", "Ironwrought: Humanoid (kcocac)", "Ironwrought: Quadropedal (kcocac)", "Isetsu (rgttyr)", "Jerbeen (hgtmh)", "Jinx (ac)", "Kappa (hb)", "Kappazals (Mytharia)", "Kaijou: Aerial", "Kaijou: Aquatic", "Kaijou: Goliath", "Kaijou: Skirmisher", "Kaijou: Stonescale", "Kaijou: Tall Breed (tgs)", "Kalashtar", "Karchikos (Mytharia)", "Kits’Adria: Angelscratch (zec)", "Kits’Adria: Astrapaw (zec)", "Kits’Adria: Blackwind (tgs)", "Kits’Adria: Caped (lgtr)", "Kits’Adria: Deepwood (lgtr)", "Kits’Adria: Devilscratch (zec)", "Kits’Adria: Dustmoon (lgtr)", "Kits’Adria: Dra’kiri (dsr)", "Kits’Adria: Feeblecoat (dsr)", "Kits’adria: Pheropaw", "Kits’Adria: Redpaw (lgtr)", "Kits’Adria: Snowfield (lgtr)", "Kitsune (rgttyr)", "Kobold", "Kobold: Deep (lgtr)", "Kobold: Greatkin (lgtr)", "Kobold: Jettison (zec)", "Kobold: Paycut (zec)", "Kobold: Scramble (lgtr)", "Kobold: Strawcatch (bbb)", "Kobold: Swamp (lgtr)", "Kobold: Winged (lgtr)", "Komainu (hb)", "Kryfora (Mytharia)", "Kua Hono: Crocodile (lgtr)", "Kua Hono: Dreadfish (zec)", "Kua Hono: Exodilla (zec)", "Kua Hono: Frog (lgtr)", "Kua Hono: Lizard (lgtr)", "Kua Hono: Salamander (lgtr)", "Kua Hono: Shark (lgtr)", "Kua Hono: Shrimp (zec)", "Kua Hono: Snake (lgtr)", "Kua Hono: Tendriled Reaper (bbb)", "Kua Hono: Turtle (lgtr)", "Lamia (Mytharia)", "Leiuru (tgtthcom)", "Leonin", "Leonin: Blazing (Mytharia)", "Lizardfolk", "Lotol (hgtmh)", "Mandrake (vsos)", "Mapach (hw)", "Merfolk: Blackmatter (zec)", "Merfolk: Bronzescale (lgtr)", "Merfolk: Deep Sea (lgtr)", "Merfolk: Deep Siren (bbb)", "Merfolk: Keltuthu (zec)", "Merfolk: Redriver (bbb)", "Merfolk: Shoreline (lgtr)", "Merfolk: Whisperer (lgtr)", "Mimic (mr)", "Mind Flayer (mr)", "Minotaur", "Minotaur: Alonistis (bbb)", "Minotaur: Boneshell (zec)", "Minotaur: Div (lgtr)", "Minotaur: Folica (bbb)", "Minotaur: Jezan (lgtr)", "Minotaur: Ogol (lgtr)", "Minotaur: Razgov (lgtr)", "Minotaur: Sveto (lgtr)", "Minotaur: Tridead (zec)", "Mohsnian (fgitbw)", "Mousefolk: Mouseling (vsos)", "Mousefolk: Ratling (vsos)", "Mycelian (hgtnh)", "Mycelium (sd)", "Nakudama (otfttg)", "Nautilid (dm)", "Nephilim: Anchoring (lgtr)", "Nephilim: Bond Burdened (bbb)", "Nephilim: Denial (lgtr)", "Nephilim: Downfall (bbb)", "Nephilim: Muted (zec)", "Nephilim: Prophecy (lgtr)", "Nephilim: Quest (zec)", "Nephilim: Reclamation (lgtr)", "Nephilim: Sanctuary (bbb)", "Novaborn (Mytharia)", "Noxiamorph: Beastwoven (bbb)", "Noxiamorph: Dark Sinew (bbb)", "Noxiamorph: Unliving (bbb)", "Nymph: Dryad (hb)", "Nymph: Meliae (hb)", "Nymph: Naiad (hb)", "Nymph: Nereid (hb)", "Nymph: Oread (hb)", "Ogre (hb)", "Ombrask (hgtnh)", "Oni (Mytharia)", "Oniborne: Blue (rgttyr)", "Oniborne: Green (rgttyr)", "Ooze: Amoeboid (dm)", "Ooze: Oozekin (hgtnh)", "Ooze: Plasmoid", "Orc (Mytharia)", "Orc: Aguedoes (zec)", "Orc: Balat Kayo (iosu)", "Orc: Half", "Orc: Berserker (lgtr)", "Orc: Blackheel (lgtr)", "Orc: Craniamight (bbb)", "Orc: Deathland (bbb)", "Orc: Flock Wild (lgtr)", "Orc: Marsh (lgtr)", "Orc: Mutaliate (zec)", "Orc: Urisk (bbb)", "Orc: Verdant (ac)", "Owlbear (mr)", "Pastissian (Mytharia)", "Pegasus (mr)", "Pétratára: Aidia (bbb)", "Pétratára: Euryale (lgtr)", "Pétratára: Medusa (lgtr)", "Pétratára: Moiraphorcys (bbb)", "Pétratára: Orgos’ (bbb)", "Pétratára: Stheno (lgtr)", "Phoenix, Half (d20)", "Pimawtawn (Mytharia)", "Pimawtawn: Frigid (Mytharia)", "Possessed Weapon (tgtthcom)", "Primordia: Air Soul (lgtr)", "Primordia: Ash Anntiqe (lgtr)", "Primordia: Astral Soul (zec)", "Primordia: Earth Soul (lgtr)", "Primordia: Frost Anntiqe (lgtr)", "Primordia: Lucky Soul (bbb)", "Primordia: Lunar Anntiqe (zec)", "Primordia: Metal Anntiqe (bbb)", "Primordia: Necrosoul (bbb)", "Primordia: Storm Anntiqe (lgtr)", "Primordia: Water Soul (lgtr)", "Primordia: Wood Anntiqe (lgtr)", "Protolife: Chemical Sustanite (zec)", "Protolife: Many Formed One (zec)", "Protolife: Tetramold (zec)", "Rakin: Tanukin Rakin (hw)", "Rakin: Urkin Rakin (hw)", "Rakshasa (mr)", "Ratigan (bs5)", "Revenant (mr)", "Rodian (Mytharia)", "Ryokido (rgttyr)", "Ryūjin (rgttyr)", "Saiyan (hb)", "Salamander (hb)", "Sasquatch: Batsquatch (hb)", "Sasquatch: Bigfoot (hb)", "Sasquatch: Fear Liath (hb)", "Sasquatch: Gimlinopithecus (hb)", "Sasquatch: Remnant (Mytharia)", "Sasquatch: Yeti (hb)", "Sasquatch: Yowie (hb)", "Satyr", "Selkie (hb)", "Serpentine (Mytharia)", "Scarecrow (hb)", "Scourage: Astrenious (zec)", "Scourage: Exiduous (zec)", "Scourage: Ombriul (zec)", "Scourage: Terrast (zec)", "Shadow (mr)", "Sidhe (farwg)", "Skathari (dm)", "Skeleton (Mytharia)", "Skyfarer (Mytharia)", "Spirithost (vsos)", "Sunling: Bruiser (zec)", "Sunling: Rock Hide (zec)", "Sunling: Teligh (zec)", "Sunling: Whiskered (zec)", "Felthera (Mytharia)", "Tableble (Mytharia)", "Tatsumi (rgttyr)", "Tarnished: Ecstasy (lgtr)", "Tarnished: Grotesque (lgtr)", "Tarnished: Redeemer (lgtr)", "Tarnished: Sanguile (bbb)", "Tarnished: Spellweaver (lgtr)", "Tarnished: Styxswimmer (bbb)", "Tarnished: Winged (lgtr)", "Tengu: Hanataka (rgttyr)", "Tengu: Karasu (rgttyr)", "The Forsaken: Ghoulish (sd)", "The Forsaken: Revenant (sd)", "The Forsaken: Spectral (sd)", "The Forsaken: Vampiric (sd)", "Thri-kreen", "Tiefling (Mytharia)", "Tiefling: Carabao (iosu)", "Tiefling: Feral/Variant", "Tiefling: Icewalker (hb)", "Tiefling: Zariel", "Trealtin: Fungalform (lgtr)", "Trealtin: Living Straw (bbb)", "Trealtin: Lunatishee (bbb)", "Trealtin: Lycanvam (zec)", "Trealtin: Moonmoss Golem (zec)", "Trealtin: Roseblight (bbb)", "Trealtin: Shamble (lgtr)", "Trealtin: Wild Dryad (lgtr)", "Trealtin: Woodwalker (lgtr)", "Triton", "Troll, rust (Mytharia)", "Troll, Topaz (Mytharia)", "Troll, lemon (Mytharia)", "troll, bloodstone (Mytharia)", "troll, cat's eye (Mytharia)", "troll, jade (Mytharia)", "troll, apatite (Mytharia)", "troll flourite (Mytharia)", "troll lapis (Mytharia)", "troll, garnet (Mytharia)", "troll, rubellite (Mytharia))", "troll, spinel (Mytharia)", "troll, diamond (Mytharia)", "Tsupherian (Mytharia)", "Unicorn (hb)", "Vanquis: Amalgamation (lgtr)", "Vanquis: Future Burdened (zec)", "Vanquis: Ghoul (lgtr)", "Vanquis: Inhabitant (lgtr)", "Vanquis: Unending Promise (lfv)", "Vanquis: Revenant (bbb)", "Vanquis: Skeletal (lgtr)", "Vanquis: Slog (bbb)", "Vanquis: Space Corpse (zec)", "Vanquis: Unending Promise (bbb)", "Vanquis: Undying (lgtr)", "Vanquis: Vampiric (lgtr)", "Vect (dm)", "Vedalken", "Vulpalf (Mytharia)", "Vulpes (bs5)", "Vulpin (hw)", "Warforged", "Warped (kcocac)", "Watcher (sd)", "Wormelaton (Mytharia)", "Wood Woad (hb)", "Wraith (mr)", "Wrothian (dm)", "Xorn (mr)", "Zombie: Mycelian (Mytharia)", "Zombie: Magical (Mytharia)",
];

const backgrounds = [
    "Acolyte (5.5e)", "Artisan (5.5e)", "Charlatan (5.5e)", "Criminal (5.5e)", "Entertainer (5.5e)", "Farmer (5.5e)", "Guard (5.5e)", "Guide (5.5e)", "Hermit (5.5e)", "Merchant (5.5e)", "Noble (5.5e)", "Sage (5.5e)", "Sailor (5.5e)", "Scribe (5.5e)", "Soldier (5.5e)", "Wayfarer (5.5e)", "Anthropologist", "Archaeologist", "Astral Drifter", "Athlete", "Celebrity Adventurer’s Scion", "City Watch / Investigator", "Clan Crafter", "Cloistered Scholar", "Courtier", "Failed Merchant", "Far Traveler", "Feylost", "Fisher", "Folk Hero", "Gambler", "Gladiator", "Grinner", "Guild Artisan", "Haunted One", "Inheritor", "Investigator", "Knight", "Knight of the Order", "Mage of High Sorcery", "Marine", "Mercenary Veteran", "Outlander", "Pirate", "Plaintiff", "Shipwright", "Smuggler", "Urban Bounty Hunter", "Urchin", "Wildspacer", "Exile (dm)", "Interpreter (dm)", "Cursed Soul (fgitbw)", "Gold Shaper (fgitbw)", "Outback Cook (fgitbw)", "Apothecary (hxb)", "Librarian (hxb)", "Magic-Touched (hxb)", "Medium (hxb)", "Nanny (hxb)", "Outcast (hxb)", "Seer (hxb)", "Town Doctor (hxb)", "Urban Legend (hxb)", "Witch (hxb)", "Lorchanter (iosu)", "Mangangalakal (iosu)", "Sea Raider (iosu)", "Voyager (iosu)", "Aswang Lineage (iosu)", "Alchemist (d&dbhb)", "Feytouched (d&dbhb)", "Monster (d&dbhb)", "Baker (ds)", "Waiter (ds)", "Butler (ds)", "Store Owner (ds)", "Hotelier (ds)", "One of the Taken (ghpg)", "Pox-Touched (ghpg)", "Fey-Blessed (ghpg)", "Botanist (aaod)", "Caver (aaod)", "Dreamwalker (aaod)", "Exorcist (aaod)", "Icekissed (aaod)", "Realm Guide (aaod)", "Sandborn (aaod)", "Scavenger (aaod)", "Spelunker (aaod)", "Stone Shaper (aaod)", "Storyteller (aaod)", "Swamper (aaod)", "Vermin Sweeper (aaod)", "Village Healer (aaod)", "Apprentice Driver (otfttg)", "Apprentice Witch (otfttg)", "Courier Brigade Cadet (otfttg)", "Mechanic (otfttg)", "Spirit Kin (otfttg)", "Elementalist (rgttyr)", "Kaiju Tracker (rgttyr)", "Academy Advocate (lgtr)", "Author (lgtr)", "Coastal Settler (lgtr)", "Family Agent (lgtr)", "Guild Veteran (lgtr)", "Inventor (lgtr)", "Planar Refugee (lgtr)", "Butler (tpk)", "Dead (xlntee)", "Heretic (xlntee)", "Legendary Lineage (xlntee)", "Polymorphed (xlntee)", "Retired Adventurer (xlntee)", "Chimney Sweep (Former) (sd)", "Cultist Initiate (Former) (sd)", "Cultist Thug (Former) (sd)", "Fence (sd)", "Gambler (sd)", "Grave Digger (sd)", "Guild Muscle (sd)", "Guild Operative (sd)", "House Servant (sd)", "House Butler (sd)", "Hunted (sd)", "Lamplighter (sd)", "Mortician (sd)", "Soothsayer (sd)", "Sword For Hire (sd)", "Colony Inhabitant (zec)", "Stranded Traveler (zec)", "Former Vassal (bbb)", "Gambler (bbb)", "Wretched One (bbb)", "Apothecary (kcocac)", "Engineer (kcocac)", "Tinker (kcocac)", "Aristocrat (bs6)", "Fusilier (bs6)", "Graduate (bs6)", "Inventor (bs6)", "Journalist (bs6)", "Laborer (bs6)", "Police Officer (bs6)", "Smuggler (bs6)", "Changeling (farwg)", "Foundling (farwg)", "Promised (farwg)", "Bounty Hunter (zbotw)", "Hedge Mage (zbotw)", "Kupalen’ka (zbotw)", "Lorekeeper (zbotw)", "Remembrancer (zbotw)", "Veilborn (zbotw)", "Woebringer (zbotw)", "The Crone’s Progeny (zbotw)", "The Drangue (zbotw)", "The Elden Soul (zbotw)"
];

//Subclass Arrays
const Bard = [
    "College of Dance", "College of Glamour (5.5e)", "College of Lore (5.5e)", "College of Valor (5.5e)", "College of Creation", "College of Eloquence", "College of Glamour", "College of Lore", "College of Spirits", "College of Swords", "College of Valor", "College of Whispers", "College of Symphony (cw)", "College of the Spheres (dm)", "College of Cuisine (hgtnh)", "College of Fleshweaving (hgtnh)", "The Intoner (hxb)", "College of Antiquity (in)", "College of Dance (gsb)", "College of Mercantile (gsb2)", "College of Siday (iosu)", "College of Cantors (vsos)", "College of Graffiti (vsos)", "College of Jesters (vsos)", "College of the Mad God (vsos)", "College of Masks (vsos) (won’t work on D&D Beyond)", "College of Chance (tgtthcom)", "College of Hosting (ds)", "College of Requiems (ghpg)", "College of Fools (ghpg)", "College of Masks (otfttg)", "College of Hanabi (rgttyr)", "College of Masks (rgttyr) (this one would probably work on D&D Beyond)", "College of Terpischore (lgtr)", "College of the Divine Minstral (lgtr)", "College of the Old World (lgtr)", "Gambler (lgtr)", "Wild Erudite", "Simulation Savant (zec)", "Stellar Idol (zec)", "College of Discord (xlntee)", "College of Keys (xlntee)", "College of Mourning (xlntee)", "College of Dance (ac)", "College of Mixology (ll)", "College of Knives (sd)", "College of Poison (sd)", "College of Likeness (bbb)", "College of Quiet Dignity (bbb)", "Elegiac Artist (bbb)", "College of Thunder (kcocac)", "College of Fools (kcolal)", "College of Mania (farwg)"
];

const Artificer = ["Alchemist", "Armourer", "Artillerist", "Battle Smith", "The Mechani (cw)"];

const Barbarian = [
    "Path of the Berserker (5.5e", "Path of the Wild Heart (5.5e version of the Totem Warrior)", "Path of the World Tree", "Path of the Zealot (5.5e)", "Path of the Ancestral Guardian", "Path of the Battlerager", "Path of the Beast", "Path of the Storm Herald", "Path of the Wild Magic", "Path of the Fatigued (cw)", "Path of the Dreadnought  (dm)", "Path of the Wrecker (dm)", "Path of the Soaring Soul (fgitbw)", "Path of the Witch (hxb)", "Path of Vehemence (in)", "Path of the Juggernaut (tdr)", "Path of the Glacier (gsb)", "Path of the Infernal (gsb2)", "Path of the Black River (iosu)", "Path of the Colossus (vsos)", "Path of the Fin (vsos)", "Path of Heavy Metal (vsos)", "Path of the Muscle Wizard (vsos)", "Path of the Rage Mage (vsos)", "Path of Tranquility (vsos)", "Path of the Masked Champion (tgtthcom)", "Path of the Scavenger (aaod)", "Path of the Belly Brewer (otfttg)", "Path of the Kaiju (rgttyr)", "Champion of Mortuous (lgtr)", "Gladiator (lgtr)", "Sacred Obsidian (lgtr)", "The Grandstander (lgtr)", "Path of Cosmic Madness (zec)", "Path of the Courageous Heart (xlntee)", "Path of the Red Reaver (xlntee)", "Path of Sacred Kin (xlntee)", "Path of the Brewmaster (ll)", "Path of Metamorphosis (sd)", "Path of the Bloodpainted (bbb)", "Path of the Oni (bbb)", "Swelling Heart (bbb)", "Path of the Raging Mind (kcocac)", "Path of the Exosuit (kcocac)", "Path of the Bladestorm (kcolal)", "Path of the Dragon (kcolal)", "Path of Instinct (kcolal)", "Path of Mutation (kcolal)", "Path of Seasons (farwg)"
];

const Cleric = [
    "Life Domain (5.5e)", "Light Domain (5.5e)", "Trickery Domain (5.5e)", "War Domain (5.5e)", "Arcana Domain", "Death Domain", "Forge Domain", "Grave Domain", "Knowledge Domain", "Nature Domain", "Order Domain", "Peace Domain", "Tempest Domain", "Twilight Domain", "Domain of Shadows (cw)", "Sun Above Domain (dm)", "Void Domain (dm)", "Hunt Domain (hgtnh)", "The Medium: Domain of Witchcraft (hxb)", "Supernova Domain (in)", "Blood Domain (tdr)", "Moon Domain (tdr)", "Astral Domain (gsb)", "Festus Domain (gsb2)", "Volcano Domain (iosu)", "Destruction Domain (vsos)", "Madness Domain (vsos)", "Pestilence Domain (vsos)", "Rum Domain (vsos)", "Travel Domain (vsos)", "Wealth Domain (vsos)", "Garlic Bread Domain (d&dbhb)", "Festival Domain (tgtthcom)", "Pleasure Domain (ds)", "Eldritch Domain (ghpg)", "Inquisition Domain (ghpg)", "Hearth Domain (aaod)", "Shrine Warden Domain (rgttyr)", "Ages Domain (lgtr)", "Bard Beloved (lgtr)", "Chaos Domain (lgtr)", "Dawnwatcher (lgtr)", "Forbiddance Domain (lgtr)", "Honour Domain (lgtr)", "Music Domain (lgtr)", "Record Domain (lgtr)", "Resplendent (lgtr)", "Sorcery Domain (lgtr)", "The Diabolist (tpk)", "Cosmos Domain (zec)", "Impossibility Domain (zec)", "Technology Domain (zec)", "Entropy Domain (xlntee)", "Survival Domain (xlntee)", "Festivity Domain (ll)", "Swiftness Domain (sd)", "Fortune Domain (bbb)", "Greed Domain (bbb)", "Love Domain (bbb)", "Temper Cross (bbb)", "Mystery Cult (kcocac)", "Dream Domain (kcolal)", "Judgement Domain (kcolal)", "Martyr Domain (kcolal)", "Domain of Dream (farwg)"
];

const BloodHunter = [
    "Order of the Ghostslayer", "Order of the Lycan", "Order of the Mutant", "Order of the Profane Soul", "Order of the Syphonic (cw)"
];

const Druid = [
    "Circle of the Land (5.5e)", "Circle of the Moon (5.5e)", "Circle of the Sea", "Circle of the Stars", "Circle of Dreams", "Circle of Spores", "Circle of Stars", "Circle of the Sheperd", "Circle of Wildfire", "Circle of Unity (cw)", "Circle of Configuration (dm)", "Circle of the Obelisk (dm)", "Circle of Swiftness (fgitbw)", "Circle of the Hive (hgtnh)", "Circle of the Brew (hxb)", "Circle of Dust (in)", "Circle of the Blighted (tdr)", "The Unbroken Circle (gsb)", "Circle of Dragons (gsb2)", "Circle of Tides (iosu)", "Circle of the City (vsos)", "Circle of the Deep (vsos)", "Circle of the Fist (vsos)", "Circle of Stones (vsos)", "Circle of Vermin (vsos)", "Circle of the Wyrm (vsos)", "Circle of Bones (tgtthcom)", "Circle of Rue (ff)", "Circle of the Brew (ds)", "Circle of Blood (ghpg)", "Circle of Mutation (ghpg)", "Circle of Conducting (aaod)", "Circle of Sand (aaod)", "Circle of Volcanoes (aaod)", "Circle of the Petal (otfttg)", "Circle of the Yokai (rgttyr)", "Circle of Deadwood (lgtr)", "Circle of Radiation (lgtr)", "Circle of Shadows (lgtr)", "Circle of the Primeval Glade (lgtr)", "Entropy (zec)", "Teardrop’s Admissive (zec)", "Circle of Seasons (xlntee)", "Circle of Spiritlords (xlntee)", "Circle of The City (ac)", "Circle of Vermin (sd)", "Circle of Ancestors (bbb)", "Circle of the Caregiver (bbb)", "Circle of Social Currency (bbb)", "Circle of Nightmares (kcocac)", "Circle of the Aspects (kcolal)", "Circle of the City (kcolal)", "Circle of Elements (kcolal)", "Circle of Growth (kcolal)", "Circle of Roots (kcolal)", "Circle of the Wild (kcolal)", "Circle of Blight (farwg)"
];

const Fighter = [
    "Battle Master (5.5e)", "Champion (5.5e)", "Eldritch Knight (5.5e still sucks)", "Psi Warrior (5.5e)", "Arcane Archer", "Cavalier", "Echo Knight", "Gunslinger", "Purple Dragon Knight", "Rune Knight", "Samurai", "The Domineer (cw)", "Space Marine (dm)", "Magical Protagonist (fgitbw)", "The Witchblade (hxb)", "Artifact Eater (in)", "Couatl Herald (gsb)", "Steel Hawk (gsb2)", "Kawal (iosu)", "Bone Knight (vsos)", "Brawler (vsos)", "Celestial Lancer (vsos)", "Corsair (vsos)", "Dungeoneer (vsos)", "Mage Hand Magus (vsos)", "Bruiser (tgtthcom)", "War Cook (ds)", "The Bulwark Warrior (ghpg)", "Living Crucible (ghpg)", "Legionnaire (aaod)", "Stone Warden (aaod)", "Spirit-Fused Fighter (otfttg)", "Skeletal Blade (rgttyr)", "Academy Agent (lgtr)", "Brawler (lgtr)", "Chaos Blade (lgtr)", "Guardian (lgtr)", "Red Lion Knight (lgtr)", "Astral Knight (zec)", "Lunar Synergist (zec)", "The Scion (ac)", "Tavern Brawler (ll)", "Duelist (sd)", "Heart of Focus (bbb)", "Knight Demonist (bbb)", "Tech Knight (kcocac)", "Adventurer (kcolal)", "Brawler (kcolal)", "Champion (kcolal)", "Crusader (kcolal)", "Green Knight (kcolal)", "Spiritsworn (kcolal)", "Weapon Magic (kcolal)", "Mage Hunter (bs3)", "Witch Knight (farwg)"
];

const Paladin = [
    "Oath of Devotion", "Oath of Glory", "Oath of the Ancients", "Oath of Vengeance", "Oath of Conquest", "Oath of Redemption", "Oath of the Crown", "Oath of the Open Sea", "Oath of the Watchers", "Oathbreaker", "Oath of the Virtues (cw)", "Oath of the Sepulcher (dm)", "Oath of Survival (fgitbw)", "Oath of the Harvest (hgtnh)", "Oath of the Coven (hxb)", "Oath of Dreams (in)", "Oath of the Hearth (gsb)", "Oath of the Spelldrinker (gsb2)", "Oath of Blood (iosu)", "Oath of Eternal Night (vsos)", "Oath of Heresy (vsos)", "Oath of Revely (vsos)", "Oath of Storms (vsos)", "Oath of the Sun (vsos)", "Oath of Winter (vsos)", "Oath of Self-Care (hb)", "Oath of Brilliance Paladin (tgtthcom)", "Oath of Beauty (ds)", "Oath of Pestilence (ghpg)", "Oath of Zeal (ghpg)", "Oath of Incarceration (aaod)", "Oath of the River (otfttg)", "Oath of the Yojimbo (rgttyr)", "Oath of Preservation (lgtr)", "Oath of Remembrance (lgtr)", "Oath of Sacrifice (lgtr)", "Oath of Sorcery (lgtr)", "Oath of the Dawn (lgtr)", "Oath of Convergence (zec)", "Oath of the Vanquisher (zec)", "Oath of Predation (xlntee)", "Oath of Providence (xlntee)", "Oath of Love (ac)", "Oath of the Dead (sd)", "Oath of Bound Fate (bbb)", "Oath of Loyalty (bbb)", "Oath of Secrecy (bbb)", "Oath of Sanity (kcocac)", "Oath of Silence (kcolal)", "Oath of the Goodest Boi (kcolal)", "Oath of Mortals"
];

const Ranger = [
    "Beast Master (NO DO NOT DO IT)", "Drakewarden", "Fey Wanderer", "Gloom Stalker", "Horizon Walker", "Hunter (Not recommended)", "Monster Slayer", "Swarmkeeper", "Elemental Roamer (cw)", "Deadeye Sniper (dm)", "Reconnaissance Scout (dm)", "Cryodon Guide (fgitbw)", "Trapper (hgtnh)", "Coven Conclave (hxb)", "Vespertine (in)", "Winter Trapper (gsb)", "Rocborne (gsb2)", "Magangayaw (iosu)", "Freerunner (vsos)", "Highwayman (vsos)", "Spellbreaker (vsos)", "Trophy Hunter (vsos)", "Vigilante (vsos)", "Scavenger Conclave (tgtthcom)", "Green Reaper (ghpg)", "Vermin Lord (ghpg)", "Corrupted Ranger (otfttg)", "Rōnin (rgttyr)", "Burghal Explorer (xlntee)", "Wasteland Wanderer (xlntee)", "Cowpoke (ac)", "Bounty Hunter (sd)", "Highwayman (sd)", "Due Collector (bbb)", "Kyujutsu (bbb)", "Night Slayer (bbb)", "Specialist (kcocac)", "Mind Reaper (kcocac)", "Bounty Hunter (kcolal)", "Archaeologist (bs3)"
];

const Rogue = [
    "Arcane Trickster (5.5e they didn’t make it any better)", "Assassin (5.5e)", "Soulknife (5.5e)", "Thief (5.5e)", "Inquisitive", "Mastermind", "Phantom", "Scout", "Swashbuckler", "The Daredevil (cw)", "Infiltrator (dm)", "Jumper (dm)", "Duskwalker (hxb)", "Figment (in)", "Runetagger (gsb)", "Grim Surgeon (gsb2)", "Graverobber (iosu)", "Arachnoid Stalker (vsos)", "Enforcer (vsos)", "Shadow Master (vsos)", "Titan Slayer (vsos)", "Medic (tgtthcom)", "Highway Rider (ghpg)", "Misfortune Bringer (ghpg)", "Equilibrist (aaod)", "Waxwork Rogue (otfttg) (won’t work on D&D Beyond)", "Tamaya (rgttyr)", "Academy Dueler (lgtr)", "Deadshot (lgtr)", "Dreg Letter (lgtr)", "Potential Chainer (lgtr)", "Versatile Beast (lgtr)", "Vigilante (lgtr)", "Drone Operator (zec)", "Majur Plant (zec)", "Divine Herald (zec)", "Shadowlurker (fgk)", "Charlatan (ll)", "Acrobat (sd)", "Crypt Blade (sd)", "Deadeye (sd)", "Enforcer (sd)", "Shinobi (bbb)", "Whimcaster (bbb)", "Wordless Knife (bbb)", "Gadgeteer (kcocac)", "Assassin (kcolal)", "Divine Hand (kcolal)", "Surgeon (kcolal)", "Fetch (farwg)"
];

const Sorcerer = [
    "Aberrant Sorcery (5.5e)", "Clockwork Sorcery (5.5e)", "Draconic Sorcery (5.5e)", "Wild Magic Sorcery (5.5e still fucking sick)", "Divine Soul", "Shadow Magic", "Storm Sorcery", "Nanite Host (dm)", "Radiation Freak (dm)", "Concentrated Chaos (fgitbw) (even fucking sicker)", "Skinshifter (hgtnh)", "Coven of Spirits (hxb)", "Harbinger Bloodline (in)", "Runechild (tdr)", "Frost Magic (gsb)", "Desert Soul (gsb2)", "Diwata Bloodline (iosu)", "Emotion Lord (vsos)", "Mirrorkin (vsos)", "Oozemaster (vsos)", "Reincarnated Hero (vsos)", "Spiritborn (vsos)", "Toon Magic (vsos)", "Mirrored Soul (tgtthcom)", "Haunted (ghpg)", "Wretched Bloodline (ghpg)", "Forge Sorcery (aaod)", "Four Serpents (aaod)", "Oni Bloodline (otfttg)", "Spirit Caller (rgttyr)", "Crystal Bearer (lgtr)", "Eidolic Cosmologus (lgtr)", "Freezing Torment (lgtr)", "Phantom Soul (lgtr)", "Vestian Inheritor (lgtr)", "Watchcraft (lgtr)", "Luminal Sacrifice (zec)", "Wishwoken (zec)", "Fey Magic (xlntee)", "Sovereign Blood (sd)", "Graveblood (bbb)", "Lustblooded (bbb)", "Wittica (bbb)", "Aether Heart (kcocac)", "Planetouched (kcocac)", "Fey Warped (kcolal)", "Fiendish Bloodline (kcolal)", "Phoenix Spark (kcolal)", "Sea Soul (kcolal)", "Stoneheart (kcolal)", "Fundamental (bs3)"

];

const Warlock = [
    "Archfey Patron (5.5e)", "Celestial Patron (5.5e)", "Fiend Patron (5.5e)", "Great Old One Patron (5.5e)", "The Fathomless", "The Genie", "The Hexblade", "The Undead", "The Undying", "The True Monarch (cw)", "The Singularity (dm)", "The Star (dm)", "The Splicer (fgitbw)", "The Parasite (hgtnh)", "The Witch (hxb)", "The Whispered One (in)", "Pact of the Astral Griffon (gsb)", "The Many (gsb2)", "The Mooneater (iosu)", "The Dead Mists (vsos)", "The Legacy (vsos)", "The Magician (vsos)", "The Dragon Lord (tgtthcom)", "The Living Light Patron (ff)", "The First Vampire (ghpg)", "The Parasite (ghpg)", "The Lost Beast (aaod)", "The Psychopomp (aaod)", "The Lantern Warlock (otfttg)", "The Shinigami (rgttyr)", "Damocles (lgtr)", "The False God (lgtr)", "The Feathered Dragon (lgtr)", "The Gorgon (lgtr)", "Gun Ghuth (lgtr)", "The Pale Shadow (lgtr)", "The Temptation (lgtr)", "The Valkyrie (lgtr)", "The Astral Traveler (zec)", "The Spear Hound (zec)", "The Chaos (xlntee)", "The Noble Genie (xlntee)", "Grim Reaper (sd)", "The All-Seeing (bbb)", "The Phantasmal (bbb)", "The Saint Spirit (bbb)", "The Ancient Intelligence (kcocac)", "That Which is Beyond (kcocac)", "The Dragon (kcolal)", "The Fey (kcolal)", "The Knowledge Keeper (kcolal)", "The Overseer (kcolal)", "The Ooze (kcolal)", "The Tempest (kcolal)", "The Coven (farwg)"
];
 
const Wizard = [
    "Abjurer (5.5e)", "Diviner (5.5e)", "Evoker (5.5e)", "Illusionist (5.5e)", "Bladesinging", "Chronurgy Magic", "Graviturgy Magic", "Order of Scribes", "School of Conjuration", "School of Enchantment", "School of Necromancy", "School of Transmutation", "War Magic", "School of Biomancy (hgtnh)", "School of Witchcraft (hxb)", "School of Travels (in)", "Blood Magic (tdr)", "Material Magic (gsb)", "Mentala (iosu)", "Magic Missile Mage (vsos)", "Mystic Savant (vsos)", "School of Gastronomy (vsos)", "School of Somnomancy (vsos)", "School of Tax Evasion (d&dbhb)", "School of Monsters (tgtthcom)", "Plague Doctor (ghpg)", "School of Sangromancy (ghpg)", "Hedge Mage (aaod)", "Rimefrost Sage (aaod)", "Origami Mage (otfttg)", "Shinobi (rgttyr)", "Armed Arcanist (lgtr)", "Eidomancer (lgtr)", "Ghuthian Associate (lgtr)", "Specialist (lgtr)", "Vestian Advocate (lgtr)", "Astromancer (zec)", "Leash Arcanist (zec)", "Beguiler (xlntee)", "Mage Hunter (xlntee)", "School of Reconstruction (xlntee)", "School of Oneiromancy (fgk)", "The Familiarist (ac)", "Spiritologist (sd)", "Imbuer (bbb)", "Sign Seeker (bbb)", "Sin Sect Magus (bbb)", "Order of Creation (kcocac)", "Order of the Unknown (kcocac)", "Astronomical Order (kcolal)", "Theurge (kcolal)", "Collegiate (bs3)"

];

const Gadgeteerdm = ["Drone Jockey", "Futurist", "Hardlight Architect", "Mastermaker", "NanoEngineer"];

const Alchemistvsos = [
    "Amorist (vsos)", "Apothecary (vsos)", "Dynamo (vsos)", "Engineer (vsos)", "Mad Bomber (vsos)", "Mutagenist (vsos)", "Ooze Rancher (vsos)", "Venomsmith (vsos)", "Xenoalchemist (vsos)", "Ioniser (dm)"
];

const Captainvsos = [
    "Dragon Banner (vsos)", "Eagle Banner (vsos)", "Jolly Roger Banner (vsos)", "Lion Banner (vsos)", "Ram Banner (vsos)", "Raven Banner (vsos)", "Turtle Banner (vsos)"
];

const Craftsmanvsos = [
    "Arcane Masters’ Guild (vsos)", "Armigers’ Guild (vsos)", "Bladeworkers’ Guild (vsos)", "Calibarons’ Guild (vsos)", "Forgeknights’ Guild (vsos)", "Mechanauts’ Guild (vsos)", "Thunderlords’ Guild (vsos)", "Trappers’ Guild (vsos)", "Scrappers’ Guild (dm)"

];
 const Gunslingervsos = [
    "Gun Tank (vsos)", "High Roller (vsos)", "Musketeer (vsos)", "Pistolero (vsos)", "Sharpshooter (vsos)", "Spellslinger (vsos)", "Trick-Shot (vsos)", "White Hat (vsos)", "Space Cowboy (dm)"
];

const Investigatorvsos = [
    "Antiquarian (vsos)", "Archivist (vsos)", "Detective (vsos)", "Exterminator (vsos)", "Inquisitor (vsos)", "Medium (vsos)", "Occultist (vsos)", "Spy (vsos)"
];

const Martyrvsos = [
    "Burden of Atonement (vsos)", "Burden of Discord (vsos)", "Burden of the End (vsos)", "Burden of Mercy (vsos)", "Burden of Rebirth (vsos)", "Burden of Revolution (vsos)", "Burden of Truth (vsos)", "Burden of Tyranny (vsos)"
];

const Necromancervsos = [
    "Burden of Atonement (vsos)", "Blood Ascendant (vsos)", "Death Knight (vsos)", "Overlord (vsos)", "Pale Master (vsos)", "Pharaoh (vsos)", "Plague Lord (vsos)", "Reanimator (vsos)", "Reaper (vsos)"

];

const Wardenvsos = [
    "Bloodwrath Guardian (vsos)", "Grey Watchman (vsos)", "Nightgaunt (vsos)", "Soulblood Shaman (vsos)", "Stoneheart Defender (vsos)", "Storm Sentinel (vsos)", "Verdant Protector (vsos)", "Lawbringer (dm)"

];

const Warmagevsos = [
    "House of Bishops (vsos)", "House of Cards (vsos)", "House of Dice (vsos)", "House of Kings (vsos)", "House of Knights (vsos)", "House of Lancers (vsos)", "House of Pawns (vsos)", "House of Rooks (vsos)", "Coalition Arcanist (dm)"

];

const Witchvsos = [
    "Black Magic (vsos)", "Blood Magic (vsos)", "Green Magic (vsos)", "Purple Magic (vsos)", "Red Magic (vsos)", "Steel Magic (vsos)", "Tea Magic (vsos)", "Technicolor Magic (vsos)", "White Magic (vsos)", "Lunar Magic (dm)"

];

const Bindervsos = [
    "The Avatarist", "Brotherhood of Ascetics", "Church of Gyx", "Ishtar’s Faithful", "Legion’s Lodge", "Order of Crimson Binding", "Society of the Stygian Seal"
];

const Benderrgttyr = ["Disciple of Ferocity", "Disciple of Fortification", "Disciple of Fusion", "Disciple of Invigoration"];

const Tamerhgtmh = ["Leader (hgtmh)", "Infuser (hgtmh)", "Necromancer (hgtmh)", "Splicer (hgtmh)", "Sensei (rgttyr)", "Swarmslinger (ll)"];

const BloodMinisterbbb = [
    "Fateblooded (bbb)", "Grim Hunter (bbb)", "Hemomancer (bbb)", "Inoculator (bbb)", "Mutagenic (bbb)", "Sanguine Knight (bbb)"
];

const Dragoneerzec = [
    "Bloodweaver (zec)", "Breaking Dynamo (zec)", "Child of Fate (zec)", "Demon Dancer (zec)", "Echoing Voice (zec)", "Piercing Hand (zec)", "Raging Titan (zec)", "Royal Sweeper (zec)", "Darkstriker (bbb)", "Fortune Veil (bbb)", "Phasescale Knight (bbb)"

];

const FavoredSoullgtr = [
    "Burden of Agris", "Burden of Aprophemia", "Burden of Aymere", "Burden of Burtromet", "Burden of Chan Karegosh", "Burden of Echobliss", "Burden of Gotham", "Burden of Harros", "Burden of Invidiva", "Burden of Ivsil", "Burden of Lussuria", "Burden of Mortuous", "Burden of Nyphlamour", "Burden of Saanjeck", "Burden of Scorn", "Burden of T’quinn", "Burden of Tithiss", "Burden of Vestias", "Burden of Destimus (zec)", "Burden Jalasaor (zec)", "Burden of Ombra (zec)", "Burden of Setanta (zec)", "Burden of Sihlu (zec)", "Burden of Zega (zec)", "Burden of Gotham (bbb)", "Burden of Hightrankul (bbb)", "Burden of Lana (bbb)", "Burden of Meirlach (bbb)", "Burden of Scorn (bbb)"
];

const FramePilotzec = ["Coordinator (zec)", "Skirmisher (zec)", "Strike Soldier (zec)", "Technoloader (zec)", "Vortex Manipulator (zec)"];

const Inscriptorlgtr = [
    "Adventure", "Comedian", "Cosmic Horror", "Fantasy", "Forbiddance", "Historian", "Mystery", "Mythology", "Playwright", "Romance", "Vestias’ Scribe", "Wakefield", "Astronomy (zec)", "Space Opera (zec)", "Grim Fable (bbb)", "Private Fiction (bbb)", "Shuji Ink (bbb)"

];


//Button constants
const randomiseclass = document.getElementById("randomiseclass");
const randomisespecies = document.getElementById("randomisespecies");
const randomisenackground = document.getElementById("randomisebackground");
const randomisesubclass = document.getElementById("randomisesubclass");
const randomisestats = document.getElementById("randomisestats");
const globalrandomise = document.getElementById("global-randomise");
const randomisealltheotherstuff = document.getElementById("randomisealltheotherstuff");

//Event Listeners
window.onload= function() {
    randomiseclass.addEventListener("click", () => randomButton(classes, "dndclass"));
    randomisespecies.addEventListener("click", () => randomButton(species, "dndspecies"));
    randomisebackground.addEventListener("click", () => randomButton(backgrounds, "background"));
    randomisestats.addEventListener("click", statsOutput);
    randomisesubclass.addEventListener("click", ranSubclass);
    globalrandomise.addEventListener("click", globalrandomisef);
    randomisealltheotherstuff.addEventListener("click", detailramdomise);

};

//json style array linking?? or make var that class updates and?

//THE BEASTLY SUBCLASS FUNCTION
function ranSubclass(){
    console.log('the subby is ' +subby);
    let subclass = 'Not Added Yet (TwT)';
    if (subby == 'Artificer'){
        subclass = sRan(Artificer);
    } else if (subby == 'Bard'){
        subclass = sRan(Bard);
    } else if (subby == 'Barbarian'){
        subclass = sRan(Barbarian);
    } else if (subby == 'Cleric'){
        subclass = sRan(Cleric);
    } else if (subby == 'BloodHunter'){
        subclass = sRan(BloodHunter);
    } else if (subby == 'Druid'){
        subclass = sRan(Druid);
    } else if (subby == 'Fighter'){
        subclass = sRan(Fighter);
    } else if (subby == 'Paladin'){
        subclass = sRan(Paladin);
    } else if (subby == 'Ranger'){
        subclass = sRan(Ranger);
    } else if (subby == 'Rogue'){
        subclass = sRan(Rogue);
    } else if (subby == 'Sorcerer'){
        subclass = sRan(Sorcerer);
    } else if (subby == 'Warlock'){
        subclass = sRan(Warlock);
    } else if (subby == 'Wizard'){
        subclass = sRan(Wizard);
    } else if (subby == 'Gadgeteerdm'){
        subclass = sRan(Gadgeteerdm);
    } else if (subby == 'Alchemistvsos'){
        subclass = sRan(Alchemistvsos);
    } else if (subby == 'Captainvsos'){
        subclass = sRan(Captainvsos);
    } else if (subby == 'Craftsmanvsos'){
        subclass = sRan(Craftsmanvsos);
    } else if (subby == 'Gunslingervsos'){
        subclass = sRan(Gunslingrvsos);
    } else if (subby == 'Investigatorvsos'){
        subclass = sRan(Investigatorvsos);
    } else if (subby == 'Martyrvsos'){
        subclass = sRan(Martyrvsos);
    } else if (subby == 'Necromancervsos'){
        subclass = sRan(Necromancervsos);
    } else if (subby == 'Wardenvsos'){
        subclass = sRan(Wardenvsos);
    } else if (subby == 'Warmagevsos'){
        subclass = sRan(Warmagevsos);
    } else if (subby == 'Witchvsos'){
        subclass = sRan(Witchvsos);
    } else if (subby == 'Bindervsos'){
        subclass = sRan(Bindervsos);
    } else if (subby == 'Tamerhgtmh'){
        subclass = sRan(Tamerhgtmh);
    }  else if (subby == 'Benderrgttyr'){
        subclass = sRan(Benderrgttyr);
    }  else if (subby == 'BloodMinisterbbb'){
        subclass = sRan(BloodMinisterbbb);
    }  else if (subby == 'Dragoneerzec'){
        subclass = sRan(Dragoneerzec);
    } else if (subby == 'FavoredSoullgtr'){
        subclass = sRan(FavoredSoullgtr);
    } else if (subby == 'FramePilotzec'){
        subclass = sRan(FramePilotzec);
    } else if (subby == 'Inscriptorlgtr'){
        subclass = sRan(Inscriptorlgtr);
    }

    //if (document.getElementById("dndclass").innerHTML == "Bard"){
    //    subclass = bardsub[randomIndex(bardsub.length)];
    //} else if (document.getElementById("dndclass").innerHTML == "Artificer"){
    //    subclass = artificersub[randomIndex(artificersub.length)];
    //} else if (document.getElementById("dndclass").innerHTML == "Barbarian"){
    //    subclass = barbariansub[randomIndex(barbarianub.length)];
    //};
    console.log(subclass);
    document.getElementById("subclass").innerHTML = subclass;
    document.getElementById("subclass").style.visibility="visible"; 
};

function sRan (option){
    let aaa = option[randomIndex(option.length)];
    return aaa;
};


//normaller stuff vv
function randomButton (option, optionid){
    let ranresult = option[randomIndex(option.length)];
    //console.log(option, ranresult);
    if (option != defaultclasses ){
        document.getElementById(optionid).innerHTML = ranresult;
    } else {
            document.getElementById(optionid).innerHTML = ranresult.name;
    }
    if (optionid == "dndclass"){
        subby = ranresult;
    }
    document.getElementById(optionid).style.visibility="visible"; 
    console.log('logged '+subby);
    if (subby.includes(" ")== true){
        console.log ("uh oh");
        let brl = '(';
        let brr = ')';
        let space = '';
        let proxy = Array.from(subby)
        .filter(char => char !== brl)
        .join('');
        let pproxy = Array.from(proxy)
        .filter(char => char !== brr)
        .join('');
        pproxy = pproxy.replace(/ /g,'');
        ppproxy = pproxy.replace(/'/g,"");
        pppproxy = ppproxy.replace(/:/g,"");
        subby = pppproxy;
         console.log (subby);

    }
    
    };

//testing the shuffle
function statsOutput(){
    console.log('working');
    //let aaa = diceRoll();
    //console.log(aaa);
    let statsarr = [diceRoll(), diceRoll(), diceRoll(), diceRoll(), diceRoll(), diceRoll()];
    //console.log(statsarr);
    //let statsarr = Array.from({length: 6}, () => Math.floor(Math.random()*(18-3)+3));
    statsarr[0] += 1;
    statsarr[1] += 2;
    shuffleStats(statsarr);
    console.log(statsarr);
    document.getElementById("STR").innerHTML = statsarr[0];
    document.getElementById("INT").innerHTML = statsarr[1];
    document.getElementById("DEX").innerHTML = statsarr[2];
    document.getElementById("WIS").innerHTML = statsarr[3];
    document.getElementById("CON").innerHTML = statsarr[4];
    document.getElementById("CHA").innerHTML = statsarr[5];
    document.getElementById("STR").style.visibility="visible";
    document.getElementById("INT").style.visibility="visible";
    document.getElementById("DEX").style.visibility="visible";
    document.getElementById("WIS").style.visibility="visible";
    document.getElementById("CON").style.visibility="visible";
    document.getElementById("CHA").style.visibility="visible";
    
};

function makeStatsArr(){
    let statsarr = Array.from({length: 6}, () => Math.floor(Math.random()*18));
    //console.log(statsarr);
    statsarr[0] += 1;
    statsarr[1] += 2;
};


function shuffleStats(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

// randomise it all Function
function globalrandomisef (){
    //console.log('worked');
    randomButton(classes, "dndclass");
    randomButton(species, "dndspecies");
    randomButton(backgrounds, "background");
    statsOutput();
    ranSubclass();
};

function detailramdomise (){
    //console.log('worked');
    randomButton(classes, "dndclass");
    randomButton(species, "dndspecies");
    randomButton(backgrounds, "background");
    ranSubclass();
};

//Randomiser Function

function randomIndex(index){
    return Math.floor(Math.random() *index);
};


function diceRoll (){
    //console.log("function activated");
    let temp = Array.from({length: 4}, () => Math.floor(Math.random()*(7-1)+1));
    temp.sort(function(a, b){return a-b});
    let diceResult = temp[1] + temp[2] + temp [3];
    return diceResult;
};