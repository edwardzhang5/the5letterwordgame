import Navbar from './components/Navbar'
import React from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import StartPage from './components/StartPage'
import { useState } from 'react'
import Board from './components/Board'
import WinPage from './components/WinPage'
import InfoPage from './components/InfoPage'
import SettingsPage from './components/SettingsPage'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [player1Name, setPlayer1Name] = useState('Player 1')
  const [player1Word, setPlayer1Word] = useState('')
  const [player1WordList, setPlayer1WordList] = useState([])
  const [player1Numbers, setPlayer1Numbers] = useState([])
  const [player1NumbersMedium, setPlayer1NumbersMedium] = useState([])

  const [player2Name, setPlayer2Name] = useState('Player 2')
  const [player2Word, setPlayer2Word] = useState('')
  const [player2WordList, setPlayer2WordList] = useState([])
  const [player2Numbers, setPlayer2Numbers] = useState([])
  const [player2NumbersMedium, setPlayer2NumbersMedium] = useState([])

  const [currPlayer, setPlayer] = useState(1)

  const [startTrigger, setStartTrigger] = useState(false)
  const [infoTrigger, setInfoTrigger] = useState(false)
  const [settingsTrigger, setSettingsTrigger] = useState(false)
  const [win, setWin] = useState(0)
  
  const [onePlayer, setOnePlayer] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [dark, setDark] = useState(false)
  const [medium, setMedium] = useState(false)

  const [Q1, setQ1] = useState('0')
  const [W1, setW1] = useState('0')
  const [E1, setE1] = useState('0')
  const [R1, setR1] = useState('0')
  const [T1, setT1] = useState('0')
  const [Y1, setY1] = useState('0')
  const [U1, setU1] = useState('0')
  const [I1, setI1] = useState('0')
  const [O1, setO1] = useState('0')
  const [P1, setP1] = useState('0')
  const [A1, setA1] = useState('0')
  const [S1, setS1] = useState('0')
  const [D1, setD1] = useState('0')
  const [F1, setF1] = useState('0')
  const [G1, setG1] = useState('0')
  const [H1, setH1] = useState('0')
  const [J1, setJ1] = useState('0')
  const [K1, setK1] = useState('0')
  const [L1, setL1] = useState('0')
  const [Z1, setZ1] = useState('0')
  const [X1, setX1] = useState('0')
  const [C1, setC1] = useState('0')
  const [V1, setV1] = useState('0')
  const [B1, setB1] = useState('0')
  const [N1, setN1] = useState('0')
  const [M1, setM1] = useState('0')
  const [Q2, setQ2] = useState('0')
  const [W2, setW2] = useState('0')
  const [E2, setE2] = useState('0')
  const [R2, setR2] = useState('0')
  const [T2, setT2] = useState('0')
  const [Y2, setY2] = useState('0')
  const [U2, setU2] = useState('0')
  const [I2, setI2] = useState('0')
  const [O2, setO2] = useState('0')
  const [P2, setP2] = useState('0')
  const [A2, setA2] = useState('0')
  const [S2, setS2] = useState('0')
  const [D2, setD2] = useState('0')
  const [F2, setF2] = useState('0')
  const [G2, setG2] = useState('0')
  const [H2, setH2] = useState('0')
  const [J2, setJ2] = useState('0')
  const [K2, setK2] = useState('0')
  const [L2, setL2] = useState('0')
  const [Z2, setZ2] = useState('0')
  const [X2, setX2] = useState('0')
  const [C2, setC2] = useState('0')
  const [V2, setV2] = useState('0')
  const [B2, setB2] = useState('0')
  const [N2, setN2] = useState('0')
  const [M2, setM2] = useState('0')

  return (
    <div className='wrapper'>
      <Navbar
        setInfoTrigger={setInfoTrigger}
        setSettingsTrigger={setSettingsTrigger}
      />

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h1> Player {currPlayer}'s Turn</h1>
      </div>

      <Board
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers, player1NumbersMedium],
          [player2Name, player2Word, player2WordList, player2Numbers, player2NumbersMedium],
        ]}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        setPlayer1NumbersMedium={setPlayer1NumbersMedium}
        setPlayer2NumbersMedium={setPlayer2NumbersMedium}
        onePlayer={onePlayer}
        win={win}
        setWin={setWin}
        medium={medium}
      />
      <Keyboard
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers, player1NumbersMedium],
          [player2Name, player2Word, player2WordList, player2Numbers, player2NumbersMedium],
        ]}
        setPlayers={[
          [
            setPlayer1Name,
            setPlayer1Word,
            setPlayer1WordList,
            setPlayer1Numbers,
          ],
          [
            setPlayer2Name,
            setPlayer2Word,
            setPlayer2WordList,
            setPlayer2Numbers,
          ],
        ]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        win={win}
        setWin={setWin}
        currPlayer={currPlayer}
        setPlayer={setPlayer}
        onePlayer={onePlayer}
        setPlayer1NumbersMedium={setPlayer1NumbersMedium}
        setPlayer2NumbersMedium={setPlayer2NumbersMedium}

        Q1={Q1}
        setQ1= {setQ1}
        W1={W1}
        setW1= {setW1}
        E1={E1}
        setE1= {setE1}
        R1={R1}
        setR1= {setR1}
        T1={T1}
        setT1= {setT1}
        Y1={Y1}
        setY1= {setY1}
        U1={U1}
        setU1= {setU1}
        I1={I1}
        setI1= {setI1}
        O1={O1}
        setO1= {setO1}
        P1={P1}
        setP1= {setP1}
        A1={A1}
        setA1= {setA1}
        S1={S1}
        setS1= {setS1}
        D1={D1}
        setD1= {setD1}
        F1={F1}
        setF1= {setF1}
        G1={G1}
        setG1= {setG1}
        H1={H1}
        setH1= {setH1}
        J1={J1}
        setJ1= {setJ1}
        K1={K1}
        setK1= {setK1}
        L1={L1}
        setL1= {setL1}
        Z1={Z1}
        setZ1= {setZ1}
        X1={X1}
        setX1= {setX1}
        C1={C1}
        setC1= {setC1}
        V1={V1}
        setV1= {setV1}
        B1={B1}
        setB1= {setB1}
        N1={N1}
        setN1= {setN1}
        M1={M1}
        setM1= {setM1}
        Q2={Q2}
        setQ2= {setQ2}
        W2={W2}
        setW2= {setW2}
        E2={E2}
        setE2= {setE2}
        R2={R2}
        setR2= {setR2}
        T2={T2}
        setT2= {setT2}
        Y2={Y2}
        setY2= {setY2}
        U2={U2}
        setU2= {setU2}
        I2={I2}
        setI2= {setI2}
        O2={O2}
        setO2= {setO2}
        P2={P2}
        setP2= {setP2}
        A2={A2}
        setA2= {setA2}
        S2={S2}
        setS2= {setS2}
        D2={D2}
        setD2= {setD2}
        F2={F2}
        setF2= {setF2}
        G2={G2}
        setG2= {setG2}
        H2={H2}
        setH2= {setH2}
        J2={J2}
        setJ2= {setJ2}
        K2={K2}
        setK2= {setK2}
        L2={L2}
        setL2= {setL2}
        Z2={Z2}
        setZ2= {setZ2}
        X2={X2}
        setX2= {setX2}
        C2={C2}
        setC2= {setC2}
        V2={V2}
        setV2= {setV2}
        B2={B2}
        setB2= {setB2}
        N2={N2}
        setN2= {setN2}
        M2={M2} 
        setM2= {setM2}

      />
      <StartPage
        trigger={startTrigger}
        setTrigger={setStartTrigger}
        currPlayer={currPlayer}
        setPlayer={setPlayer}
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers],
          [player2Name, player2Word, player2WordList, player2Numbers],
        ]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
      />
      <WinPage
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers],
          [player2Name, player2Word, player2WordList, player2Numbers],
        ]}
        win={win}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        setWin={setWin}
        currPlayer={currPlayer}
        setPlayer={setPlayer}
        start={startTrigger}
        setStart={setStartTrigger}
        onePlayer={onePlayer}
        setPlayer1NumbersMedium={setPlayer1NumbersMedium}
        setPlayer2NumbersMedium={setPlayer2NumbersMedium}
        
        Q1={Q1}
        setQ1= {setQ1}
        W1={W1}
        setW1= {setW1}
        E1={E1}
        setE1= {setE1}
        R1={R1}
        setR1= {setR1}
        T1={T1}
        setT1= {setT1}
        Y1={Y1}
        setY1= {setY1}
        U1={U1}
        setU1= {setU1}
        I1={I1}
        setI1= {setI1}
        O1={O1}
        setO1= {setO1}
        P1={P1}
        setP1= {setP1}
        A1={A1}
        setA1= {setA1}
        S1={S1}
        setS1= {setS1}
        D1={D1}
        setD1= {setD1}
        F1={F1}
        setF1= {setF1}
        G1={G1}
        setG1= {setG1}
        H1={H1}
        setH1= {setH1}
        J1={J1}
        setJ1= {setJ1}
        K1={K1}
        setK1= {setK1}
        L1={L1}
        setL1= {setL1}
        Z1={Z1}
        setZ1= {setZ1}
        X1={X1}
        setX1= {setX1}
        C1={C1}
        setC1= {setC1}
        V1={V1}
        setV1= {setV1}
        B1={B1}
        setB1= {setB1}
        N1={N1}
        setN1= {setN1}
        M1={M1}
        setM1= {setM1}
        Q2={Q2}
        setQ2= {setQ2}
        W2={W2}
        setW2= {setW2}
        E2={E2}
        setE2= {setE2}
        R2={R2}
        setR2= {setR2}
        T2={T2}
        setT2= {setT2}
        Y2={Y2}
        setY2= {setY2}
        U2={U2}
        setU2= {setU2}
        I2={I2}
        setI2= {setI2}
        O2={O2}
        setO2= {setO2}
        P2={P2}
        setP2= {setP2}
        A2={A2}
        setA2= {setA2}
        S2={S2}
        setS2= {setS2}
        D2={D2}
        setD2= {setD2}
        F2={F2}
        setF2= {setF2}
        G2={G2}
        setG2= {setG2}
        H2={H2}
        setH2= {setH2}
        J2={J2}
        setJ2= {setJ2}
        K2={K2}
        setK2= {setK2}
        L2={L2}
        setL2= {setL2}
        Z2={Z2}
        setZ2= {setZ2}
        X2={X2}
        setX2= {setX2}
        C2={C2}
        setC2= {setC2}
        V2={V2}
        setV2= {setV2}
        B2={B2}
        setB2= {setB2}
        N2={N2}
        setN2= {setN2}
        M2={M2} 
        setM2= {setM2}
      />
      
      <SettingsPage 
        settingsTrigger={settingsTrigger} 
        setSettingsTrigger={setSettingsTrigger}
        setOnePlayer={setOnePlayer}
        onePlayer={onePlayer}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        setWin={setWin}
        setPlayer={setPlayer}
        startTrigger={startTrigger}
        setPlayer1NumbersMedium={setPlayer1NumbersMedium}
        setPlayer2NumbersMedium={setPlayer2NumbersMedium}
        
        setStart={setStartTrigger}
        medium={medium}
        setMedium={setMedium}
        dark={dark}
        setDark={setDark}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        Q1={Q1}
        setQ1= {setQ1}
        W1={W1}
        setW1= {setW1}
        E1={E1}
        setE1= {setE1}
        R1={R1}
        setR1= {setR1}
        T1={T1}
        setT1= {setT1}
        Y1={Y1}
        setY1= {setY1}
        U1={U1}
        setU1= {setU1}
        I1={I1}
        setI1= {setI1}
        O1={O1}
        setO1= {setO1}
        P1={P1}
        setP1= {setP1}
        A1={A1}
        setA1= {setA1}
        S1={S1}
        setS1= {setS1}
        D1={D1}
        setD1= {setD1}
        F1={F1}
        setF1= {setF1}
        G1={G1}
        setG1= {setG1}
        H1={H1}
        setH1= {setH1}
        J1={J1}
        setJ1= {setJ1}
        K1={K1}
        setK1= {setK1}
        L1={L1}
        setL1= {setL1}
        Z1={Z1}
        setZ1= {setZ1}
        X1={X1}
        setX1= {setX1}
        C1={C1}
        setC1= {setC1}
        V1={V1}
        setV1= {setV1}
        B1={B1}
        setB1= {setB1}
        N1={N1}
        setN1= {setN1}
        M1={M1}
        setM1= {setM1}
        Q2={Q2}
        setQ2= {setQ2}
        W2={W2}
        setW2= {setW2}
        E2={E2}
        setE2= {setE2}
        R2={R2}
        setR2= {setR2}
        T2={T2}
        setT2= {setT2}
        Y2={Y2}
        setY2= {setY2}
        U2={U2}
        setU2= {setU2}
        I2={I2}
        setI2= {setI2}
        O2={O2}
        setO2= {setO2}
        P2={P2}
        setP2= {setP2}
        A2={A2}
        setA2= {setA2}
        S2={S2}
        setS2= {setS2}
        D2={D2}
        setD2= {setD2}
        F2={F2}
        setF2= {setF2}
        G2={G2}
        setG2= {setG2}
        H2={H2}
        setH2= {setH2}
        J2={J2}
        setJ2= {setJ2}
        K2={K2}
        setK2= {setK2}
        L2={L2}
        setL2= {setL2}
        Z2={Z2}
        setZ2= {setZ2}
        X2={X2}
        setX2= {setX2}
        C2={C2}
        setC2= {setC2}
        V2={V2}
        setV2= {setV2}
        B2={B2}
        setB2= {setB2}
        N2={N2}
        setN2= {setN2}
        M2={M2} 
        setM2= {setM2}
       />
      <InfoPage
        infoTrigger={infoTrigger}
        setInfoTrigger={setInfoTrigger}
        medium={medium}
      />

    </div>
  )
}

export default App
