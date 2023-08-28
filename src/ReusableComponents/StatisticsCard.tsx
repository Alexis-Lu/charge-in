import { Card, Typography, CardContent } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

interface InterfaceStatistisCardId {
  id: number;
  data: any;
}

export interface InterfaceStatisticsCard1 {
  id: number;
  text: string;
  number: number;
  variable: number;
  icon: JSX.Element;
  secondText?: string;
  numberAbo?: number;
  taxe?: string;
  b2c?: number;
  b2b?: number;
}

export interface InterfaceStatisticsCard2 {
  id: number;
  text: string;
  number: number;
  variable: number;
  icon: JSX.Element;
  secondText?: string;
  numberAbo?: number;
  taxe?: number;
  b2c?: string;
  b2b?: string;
}

export interface InterfaceStatisticsCard3 {
  id: number;
  text: string;
  number: number;
  variable: number;
  icon: JSX.Element;
  numberAbo?: number;
  taxe?: string;
  b2c?: string;
  b2b?: string;
}

function StatisticsCard1({ ...data }: InterfaceStatisticsCard1) {
  return (
    <Card sx={{ maxWidth: 247, minHeight: 253, maxHeight: 253 }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>{data.icon}</div>
        <Typography
          sx={{ mb: 1.5, display: "flex", flexWrap: "wrap" }}
          color="#8FA2A2"
          component="div"
        >
          {data.text}
        </Typography>
        <Typography variant="body2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 0px 20px 0px",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 600 }}>
              {data.number}
            </div>
            <div
              style={{
                color: data.variable > 0 ? "#27AE60" : "#A94442",
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              {data.variable > 0 ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
              {Math.abs(data.variable)}%
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "5px",
            }}
          >
            <div>
              {data.b2c ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "#8FA2A2" }}>B2C</div>
                  {data.b2c}
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              {data.b2b ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "#8FA2A2" }}>B2B</div>
                  {data.b2b}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

function StatisticsCard2({ ...data }: InterfaceStatisticsCard2) {
  return (
    <Card sx={{ maxWidth: 247, minHeight: 253, maxHeight: 253 }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>{data.icon}</div>
        <Typography
          sx={{ mb: 1.5, display: "flex", flexWrap: "wrap" }}
          color="#8FA2A2"
          component="div"
        >
          {data.text}
        </Typography>
        <Typography
          sx={{ mb: 1.5, display: "flex", flexDirection: "column" }}
          color="#8FA2A2"
          component="div"
        >
          <div>{data.secondText}</div>

          <div style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
            {data.numberAbo}
          </div>
        </Typography>
        <Typography variant="body2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 0px 20px 0px",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 600 }}>
              {data.number}
            </div>
            <div
              style={{
                color: "grey",
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              = {Math.abs(data.variable)}%
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

function StatisticsCard3({ ...data }: InterfaceStatisticsCard3) {
  return (
    <Card sx={{ maxWidth: 247, minHeight: 253, maxHeight: 253 }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>{data.icon}</div>
        <Typography
          sx={{ mb: 1.5, display: "flex", flexWrap: "wrap" }}
          color="#8FA2A2"
          component="div"
        >
          {data.text}
        </Typography>
        <Typography variant="body2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 0px 20px 0px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: 600,
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                {data.number} <span>HT</span>
              </div>
              <div
                style={{
                  color: data.variable > 0 ? "#27AE60" : "#A94442",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                {data.variable > 0 ? (
                  <KeyboardArrowUpOutlinedIcon />
                ) : (
                  <KeyboardArrowDownOutlinedIcon />
                )}
                {Math.abs(data.variable)}%
              </div>
            </div>
            <div>
              {" "}
              <div>
                {data.b2c ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ color: "#8FA2A2" }}>B2C</div>
                    {data.b2c}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {data.b2b ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ color: "#8FA2A2" }}>B2B</div>
                    {data.b2b}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

function StatisticsCard({ id, data }: InterfaceStatistisCardId) {
  switch (id) {
    case 1:
      return <StatisticsCard1 {...(data as InterfaceStatisticsCard1)} />;
    case 2:
      return <StatisticsCard2 {...(data as InterfaceStatisticsCard2)} />;
    case 3:
      return <StatisticsCard3 {...(data as InterfaceStatisticsCard3)} />;
    default:
      return null;
  }
}

export default StatisticsCard;
