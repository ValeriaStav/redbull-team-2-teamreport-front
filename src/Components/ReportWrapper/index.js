import React, { useState } from "react"

import {
  Container,
  HrShort,
  THead,
  RowExpand,
  RowCollapseHead,
  RowCollapse,
  RowCollapseBody,
  Button,
  ProfileIcon,
  HeaderText,
  VeryHappyCell,
  HappyCell,
  NeutralCell,
  SadCell,
  VerySadCell,
  TextRow,
  TextCell,
} from "./styles"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import VeryHappy from "../../assets/very-happy.svg"
import Happy from "../../assets/happy.svg"
import Neutral from "../../assets/neutral.svg"
import Sad from "../../assets/sad.svg"
import VerySad from "../../assets/very-sad.svg"

const CellComponent = ({ check, children }) => {
  switch (check) {
    case 1: {
      return <VerySadCell>{children}</VerySadCell>
    }
    case 2: {
      return <SadCell>{children}</SadCell>
    }
    case 3: {
      return <NeutralCell>{children}</NeutralCell>
    }
    case 4: {
      return <HappyCell>{children}</HappyCell>
    }
    case 5: {
      return <VeryHappyCell>{children}</VeryHappyCell>
    }
    default:
      return null
  }
}

const ReportWrapper = ({ report, setIsActive, isActive }) => {
  const returnIcon = (check) => {
    switch (check) {
      case 1: {
        return VerySad
      }
      case 2: {
        return Sad
      }
      case 3: {
        return Neutral
      }
      case 4: {
        return Happy
      }
      case 5: {
        return VeryHappy
      }
      default:
        return null
    }
  }

  return (
    <>
      <RowExpand
        onClick={() => (isActive ? setIsActive("") : setIsActive(report.id))}
        isActive={isActive}
      >
        <td width='60%'>
          <h4>{report.dateRange}</h4>
        </td>
        <td width='10%'>
          <img src={returnIcon(report.morale)} alt='Happy' />
        </td>
        <td width='10%'>
          <img src={returnIcon(report.stress)} alt='Neutral' />
        </td>
        <td width='10%'>
          <img src={returnIcon(report.workload)} alt='Sad' />
        </td>
        <td width='10%'>
          Expand <AiFillCaretDown />
        </td>
      </RowExpand>
      {isActive && (
        <>
          <RowCollapseBody>
            <RowCollapse>
              <CellComponent check={report.morale}>
                <td>
                  <img src={returnIcon(report.morale)} alt='Sad' />
                </td>
                <td>Workload</td>
              </CellComponent>
              <TextCell>
                {report.moraleDescription ||
                  "There were no comments added about morale."}
              </TextCell>
            </RowCollapse>
            <RowCollapse>
              <CellComponent check={report.stress}>
                <td>
                  <img src={returnIcon(report.stress)} alt='Sad' />
                </td>
                <td>Workload</td>
              </CellComponent>
              <TextCell>
                {report.stressDescription ||
                  "There were no comments added about stress."}
              </TextCell>
            </RowCollapse>
            <RowCollapse>
              <CellComponent check={report.workload}>
                <td>
                  <img src={returnIcon(report.workload)} alt='Sad' />
                </td>
                <td>Workload</td>
              </CellComponent>
              <TextCell>
                {report.workloadDescription ||
                  "There were no comments added about workload."}
              </TextCell>
            </RowCollapse>
            <RowCollapse>
              <TextRow>
                <h4>Weekly High</h4>
                <p>{report.high || "N/A"}</p>
              </TextRow>
            </RowCollapse>
            <RowCollapse>
              <TextRow>
                <h4>Weekly Low</h4>
                <p>{report.low || "N/A"}</p>
              </TextRow>
            </RowCollapse>
            <RowCollapse>
              <TextRow>
                <h4>Anything Else</h4>
                <p>{report.anythingElse || "N/A"}</p>
              </TextRow>
            </RowCollapse>
          </RowCollapseBody>
        </>
      )}
    </>
  )
}

ReportWrapper.propTypes = {}

export default ReportWrapper
