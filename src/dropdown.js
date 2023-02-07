import {
  faCodeMerge,
  faContactBook,
  faDumpster,
  faFileExport,
  faFileImport,
  faPlus,
  faPrint,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { faDropbox } from "@fortawesome/free-brands-svg-icons";
import { faContactCard } from "@fortawesome/free-regular-svg-icons";
const dropdown = [
  { key: 1, name: "Contacts", img: faContactBook },
  { key: 2, name: "Frequently contacted", img: faStopwatch },
  { key: 3, name: "Merge and Fix", img: faCodeMerge },
  { key: 4, name: "Label", img: faDropbox },
  { key: 5, name: "Create Label", img: faPlus },
  { key: 6, name: "Import", img: faFileImport },
  { key: 7, name: "Export", img: faFileExport },
  { key: 8, name: "Print", img: faPrint },
  { key: 9, name: "Other Contacts", img: faContactCard },
  { key: 10, name: "Bin", img: faDumpster },
];

export default dropdown;
