import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import js from "@eslint/js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const SHEET_ID = "1JEzgYAeQTantoO_ullrpV9n7ZYQRKCKZpH9z3sVDyAo"; // ここにスプレッドシートIDを入れます
const SHEET_NAME = "test"; // ここにスプレッドシートのシート名を入れます
const API_KEY = "AIzaSyC2cEzy9w-pYweiVsDxibz_QTtO9gI9Ycc"; // ここにAPIキーを入れます


const CustomerList = () => {
  //1.スプレッドシートAPIデータを取得するfetchのコードをここに書きます🤗
  const [data, setData] = useState([]);

  //2.useEffectでfetchを動かしてデータを取得します🤗
  useEffect(() => {
    const fetchData = async () => {
      //スプレッドシートを作成し、その次に共有を押して、リンクを知っている人に設定をする🤗
      // 例) https://docs.google.com/spreadsheets/d/xxxx（授業で説明しますがここがシートIDです！これを使います！）/edit?usp=sharing
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
      const res = await fetch(url);
      const json = await res.json();

      // jsの処理を使って、画面に表示するデータを整形します🤗
      if (json.values) {
        const mapped = json.values
        .filter((row) => row[0] && !Number.isNaN(Number(row[0])))
        .map((row, index) => ({
          id: Number(row[0]),
          title: row[1],
          date: row[2],
          tel: row[3],
          name: row[4],
        }));
        setData(mapped);

        // この下はif文の閉じなので消さない🤗
      }
      console.log(json, "スプレッドシートAPI");
    };

    fetchData();
  }, []);

  return (
    <>
<div className={styles.chartBar}>
 {/* useStateの中に収納したAPIのデータを表示します🤗 */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">エリア</TableCell>
                <TableCell align="right">登録日</TableCell>
                <TableCell align="right">電話番号</TableCell>
                 <TableCell align="right">名前</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.tel}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default CustomerList;