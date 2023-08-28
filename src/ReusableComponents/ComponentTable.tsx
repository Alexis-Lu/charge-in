import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
  ButtonBase,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { setActiveButtonId } from "../navigationSlice";
import { useDispatch } from "react-redux";

interface Column {
  id: "nom" | "borne" | "devis" | "étape" | "actions";
  label: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
  render?: (row: Data) => React.ReactNode;
}

const columns: readonly Column[] = [
  { id: "nom", label: "nom", minWidth: 170 },
  { id: "borne", label: "borne choisie", minWidth: 170 },
  {
    id: "devis",
    label: "devis",
    minWidth: 170,
  },
  {
    id: "étape",
    label: "étape",
    minWidth: 170,
  },
  {
    id: "actions",
    label: "actions",
    minWidth: 170,
    align: "center",
    render: (row: Data) => (
      <div>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: "0px 10px 0px 10px" }}
        >
          <path
            d="M11.2069 4.34018L2.70281 12.8652L2.1875 14.1127L3.435 13.5974L11.96 5.0933L11.2069 4.34018ZM12.9084 2.63893L12.54 3.00705L13.2931 3.76018L13.6616 3.39174C13.7582 3.295 13.8125 3.16382 13.8125 3.02705C13.8125 2.89028 13.7582 2.75911 13.6616 2.66237L13.6381 2.63893C13.5902 2.59101 13.5333 2.553 13.4707 2.52707C13.4081 2.50114 13.341 2.48779 13.2733 2.48779C13.2055 2.48779 13.1384 2.50114 13.0758 2.52707C13.0132 2.553 12.9563 2.59101 12.9084 2.63893Z"
            stroke="#304399"
            stroke-width="1.375"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: "0px 10px 0px 10px" }}
        >
          <path
            d="M13.5 3.30029H10.5V2.55029C10.5 2.21877 10.3683 1.90083 10.1339 1.66641C9.89946 1.43199 9.58152 1.30029 9.25 1.30029H6.75C6.41848 1.30029 6.10054 1.43199 5.86612 1.66641C5.6317 1.90083 5.5 2.21877 5.5 2.55029V3.30029H2.5C2.36739 3.30029 2.24021 3.35297 2.14645 3.44674C2.05268 3.54051 2 3.66768 2 3.80029C2 3.9329 2.05268 4.06008 2.14645 4.15385C2.24021 4.24761 2.36739 4.30029 2.5 4.30029H3.03125L3.625 13.829C3.66937 14.6681 4.3125 15.3003 5.125 15.3003H10.875C11.6916 15.3003 12.3219 14.6822 12.375 13.8315L12.9688 4.30029H13.5C13.6326 4.30029 13.7598 4.24761 13.8536 4.15385C13.9473 4.06008 14 3.9329 14 3.80029C14 3.66768 13.9473 3.54051 13.8536 3.44674C13.7598 3.35297 13.6326 3.30029 13.5 3.30029ZM6.01781 13.3003H6C5.87042 13.3004 5.74587 13.2501 5.6526 13.1602C5.55933 13.0702 5.50462 12.9476 5.5 12.8181L5.25 5.81811C5.24528 5.6855 5.29342 5.55644 5.38385 5.45933C5.47428 5.36223 5.59958 5.30502 5.73219 5.30029C5.8648 5.29557 5.99385 5.34372 6.09096 5.43414C6.18807 5.52457 6.24528 5.64987 6.25 5.78248L6.5 12.7825C6.50238 12.8482 6.49179 12.9136 6.46884 12.9752C6.44589 13.0368 6.41103 13.0932 6.36624 13.1413C6.32146 13.1894 6.26764 13.2282 6.20785 13.2555C6.14806 13.2828 6.08349 13.298 6.01781 13.3003ZM8.5 12.8003C8.5 12.9329 8.44732 13.0601 8.35355 13.1538C8.25979 13.2476 8.13261 13.3003 8 13.3003C7.86739 13.3003 7.74021 13.2476 7.64645 13.1538C7.55268 13.0601 7.5 12.9329 7.5 12.8003V5.80029C7.5 5.66768 7.55268 5.54051 7.64645 5.44674C7.74021 5.35297 7.86739 5.30029 8 5.30029C8.13261 5.30029 8.25979 5.35297 8.35355 5.44674C8.44732 5.54051 8.5 5.66768 8.5 5.80029V12.8003ZM9.5 3.30029H6.5V2.55029C6.49962 2.51736 6.50583 2.48468 6.51826 2.45418C6.53069 2.42368 6.54909 2.39597 6.57238 2.37268C6.59567 2.34939 6.62338 2.33099 6.65388 2.31856C6.68439 2.30613 6.71706 2.29992 6.75 2.30029H9.25C9.28294 2.29992 9.31561 2.30613 9.34612 2.31856C9.37662 2.33099 9.40433 2.34939 9.42762 2.37268C9.45091 2.39597 9.46931 2.42368 9.48174 2.45418C9.49417 2.48468 9.50038 2.51736 9.5 2.55029V3.30029ZM10.5 12.8181C10.4954 12.9476 10.4407 13.0702 10.3474 13.1602C10.2541 13.2501 10.1296 13.3004 10 13.3003H9.98188C9.91623 13.298 9.85168 13.2827 9.79193 13.2554C9.73218 13.2281 9.67839 13.1893 9.63364 13.1412C9.58889 13.0931 9.55406 13.0367 9.53113 12.9752C9.5082 12.9136 9.49762 12.8481 9.5 12.7825L9.75 5.78248C9.75234 5.71682 9.76759 5.65226 9.79488 5.59249C9.82217 5.53273 9.86096 5.47892 9.90904 5.43414C9.95713 5.38937 10.0136 5.3545 10.0751 5.33154C10.1367 5.30857 10.2022 5.29795 10.2678 5.30029C10.3335 5.30263 10.398 5.31788 10.4578 5.34517C10.5176 5.37246 10.5714 5.41125 10.6161 5.45933C10.6609 5.50742 10.6958 5.56385 10.7188 5.62541C10.7417 5.68697 10.7523 5.75244 10.75 5.81811L10.5 12.8181Z"
            fill="#304399"
          />
        </svg>

        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: "0px 10px 0px 10px" }}
        >
          <path
            d="M8 9.80029C8.82843 9.80029 9.5 9.12872 9.5 8.30029C9.5 7.47187 8.82843 6.80029 8 6.80029C7.17157 6.80029 6.5 7.47187 6.5 8.30029C6.5 9.12872 7.17157 9.80029 8 9.80029Z"
            fill="#304399"
          />
          <path
            d="M8 14.8003C8.82843 14.8003 9.5 14.1287 9.5 13.3003C9.5 12.4719 8.82843 11.8003 8 11.8003C7.17157 11.8003 6.5 12.4719 6.5 13.3003C6.5 14.1287 7.17157 14.8003 8 14.8003Z"
            fill="#304399"
          />
          <path
            d="M8 4.80029C8.82843 4.80029 9.5 4.12872 9.5 3.30029C9.5 2.47187 8.82843 1.80029 8 1.80029C7.17157 1.80029 6.5 2.47187 6.5 3.30029C6.5 4.12872 7.17157 4.80029 8 4.80029Z"
            fill="#304399"
          />
        </svg>
      </div>
    ),
  },
];

interface Data {
  nom: string;
  borne: string;
  devis: string;
  étape: number;
}

function createData(
  nom: string,
  borne: string,
  devis: string,
  étape: number
): Data {
  return { nom, borne, devis, étape };
}

const etapeTextMap: Record<number, string> = {
  1: "Étape 1",
  2: "Étape 2",
  3: "Étape 3",
  4: "Étape 4",
};

const rows = [
  createData("Dupont", "Borne Modèle 2", "###", 1),
  createData("Dubois", "Borne Modèle 1", "###", 2),
  createData("Carton", "Borne Modèle 23", "###", 3),
  createData("Rae", "Borne Modèle 5", "###", 4),
];

function ComponentTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("all");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch();

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
        <div style={{ paddingRight: "20px", fontWeight: "600" }}>
          {rows.length} résultats
        </div>
        <TextField
          placeholder="Rechercher"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl
          variant="outlined"
          size="small"
          style={{ marginLeft: "10px" }}
        >
          <InputLabel>Trier par :</InputLabel>
          <Select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            label="Trier par :"
            style={{ width: "167px" }}
          >
            <MenuItem value="all">Tous</MenuItem>
            <MenuItem value="name">Nom</MenuItem>
            <MenuItem value="borne">Borne Choisie</MenuItem>
            <MenuItem value="devis">Devis</MenuItem>
            <MenuItem value="etape">Etape</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: "#8FA2A2",
                    textTransform: "uppercase",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((row) => {
                if (filterValue === "all") {
                  return true;
                }
              })
              .filter((row) =>
                row.nom.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <ButtonBase
                    key={row.nom}
                    disableRipple
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "contents",
                    }}
                    onClick={() => {
                      dispatch(setActiveButtonId(20));
                    }}
                  >
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.nom}>
                      {columns.map((column) => {
                        if (column.id === "étape") {
                          const value = row[column.id];
                          const etapeText = etapeTextMap[value] || "Inconnu";
                          let cellStyles = {};

                          if (value === 1) {
                            cellStyles = {
                              color: "#369C96",
                              backgroundColor: "rgb(54, 256, 150, 0.1)",
                            };
                          } else if (value === 2) {
                            cellStyles = {
                              color: "#E8B05C",
                              backgroundColor: "rgb(232, 176, 92, 0.1)",
                            };
                          } else if (value === 3) {
                            cellStyles = {
                              color: "#9E79EC",
                              backgroundColor: "rgb(158, 121, 236, 0.1)",
                            };
                          } else if (value === 4) {
                            cellStyles = {
                              color: "#F074A1",
                              backgroundColor: "rgb(240, 116, 161, 0.1)",
                            };
                          }

                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{
                                ...(column.id === "étape"
                                  ? {
                                      ...(cellStyles as React.CSSProperties),
                                      width: "73px",
                                      height: "26px",
                                    }
                                  : {}),
                              }}
                            >
                              {etapeText}
                            </TableCell>
                          );
                        } else if (column.id === "actions") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{}}
                            >
                              {column.render && column.render(row)}
                            </TableCell>
                          );
                        }
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </ButtonBase>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Lignes par page"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count}`
        }
      />
    </Paper>
  );
}

export default ComponentTable;
