// manual_mapping_data.js
// 항공교통업무 매뉴얼 세부 조항 기준 ICAO Doc 4444 및 FAA JO 7110.65 매칭 데이터
const manualMappingDatabase = [
  // 제1장 총칙
  {
    chapter: "제1장 총칙",
    sectionNo: "1.1.1",
    title: "목적 (Scope and purpose)",
    manualClause: "조항: 1.1.1\n내용: 항공기 안전운항 확보 및 공중충돌 방지를 위한 민‧군 공통 관제업무 규정",
    icaoClause: "대응 조문: Doc 4444 Ch. 2 (2.1), Annex 11 Ch. 2 (2.2)\n내용: Objectives of Air Traffic Services (공중충돌 방지 및 질서 있는 교통 흐름)",
    faaClause: "대응 조문: Ch. 1 Para 1-1-1 / Ch. 2 Para 2-1-1 (ATC Service)\n내용: Primary Purpose (항공기 간 충돌 방지 최우선 원칙)"
  },
  {
    chapter: "제1장 총칙",
    sectionNo: "1.1.2",
    title: "적용 (Applicability)",
    manualClause: "조항: 1.1.2\n내용: 항공교통업무 제공 및 운항 적용, [군용항공기 적용] 및 [군 적용] 특례",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.1), Annex 11 Ch. 3 (3.1)\n내용: Application of air traffic control service 및 민·군 협조 체계",
    faaClause: "대응 조문: Ch. 1 Para 1-1-2 (Audience), Para 2-1-1\n내용: 민간 FAA 및 미군 관제시설(USAF/USN/USA) 공통 적용"
  },
  {
    chapter: "제1장 총칙",
    sectionNo: "1.2.1",
    title: "발간 (Publication)",
    manualClause: "조항: 1.2.1\n내용: 국토교통부·국방부 실무협의체 구성 및 합의 사항 반영 개정",
    icaoClause: "대응 조문: Doc 4444 Foreword (6. Promulgation of information)\n내용: 체약국의 규정 개정 절차 및 고시 체계",
    faaClause: "대응 조문: Ch. 1 Para 1-1-5, 1-1-6, 1-1-8\n내용: Order 변경 절차 및 관계 기관(DoD 등) 협의 체계"
  },
  {
    chapter: "제1장 총칙",
    sectionNo: "1.2.2",
    title: "절차에 관한 합의서 (LOA)",
    manualClause: "조항: 1.2.2\n내용: 시설 간 협조 절차/최저치 합의서 명시 및 본 매뉴얼 최저치 준수 원칙",
    icaoClause: "대응 조문: Doc 4444 Ch. 10 (10.1.1), Annex 11 Ch. 2 (2.18)\n내용: Letters of Agreement (LOA) 체결 요건",
    faaClause: "대응 조문: Ch. 1 Para 1-1-10 (Procedural Letters of Agreement)\n내용: 시설 간 LOA 체결 지침 및 최저치 적용 한계"
  },

  // 제3장 일반사항
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.1",
    title: "항공교통관제허가 (Air traffic control clearances)",
    manualClause: "조항: 3.1\n내용: 관제허가 발부, 전달, 재복창(Read-back) 및 수락 요건",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.5 Air traffic control clearances)\n내용: Scope and contents of clearances",
    faaClause: "대응 조문: Ch. 4 Section 2 Para 4-2-1 ~ 4-2-10 (Clearances)\n내용: Clearance 전달 및 경로/고도 제한 발부"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.2",
    title: "수평 속도조절 지시 (Horizontal speed control)",
    manualClause: "조항: 3.2\n내용: 중간/최종 진입 구간 및 비행 단계별 수평 속도 통제/조절 지시",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.6 Horizontal speed control instructions)\n내용: Speed control 적용 한계 및 지시 방법",
    faaClause: "대응 조문: Ch. 5 Section 7 Para 5-7-1, 5-7-2 (Speed Adjustment)\n내용: 수평 속도 배정 및 조정 기준"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.3",
    title: "수직 속도조절 지시 (Vertical speed control)",
    manualClause: "조항: 3.3\n내용: 상승/강하율 지정 및 수직 속도 조절",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.7 Vertical speed control instructions)",
    faaClause: "대응 조문: Ch. 5 Section 7 Para 5-7-3, 5-7-4 (Vertical Speed)"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.4",
    title: "IFR에서 VFR 비행으로의 변경",
    manualClause: "조항: 3.4\n내용: 조종사의 계기비행 취소 통보 및 VFR 전환 처리",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.8 Change from IFR to VFR flight)",
    faaClause: "대응 조문: Ch. 4 Section 8 Para 4-8-8 / Ch. 7 Para 7-1-4 (IFR Cancellation)"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.5",
    title: "항적 난기류 (Wake turbulence)",
    manualClause: "조항: 3.5\n내용: 항공기 중량 등급별 후류와류 범주 및 관제 조언",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.9 Wake turbulence categories)",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-19, 2-1-20 (Wake Turbulence Caution)"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.6",
    title: "고도계수정치 절차 (Altimeter setting procedures)",
    manualClause: "조항: 3.6\n내용: QNH/QNE 설정, 전이고도 및 전이수준 발부 기준",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.10 Altimeter setting procedures)",
    faaClause: "대응 조문: Ch. 2 Section 7 Para 2-7-1, 2-7-2 / Ch. 4 Para 4-5-7"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.7",
    title: "활주로 시정 보고 (Runway Visibility Reporting)",
    manualClause: "조항: 3.7\n내용: RVR 및 활주로 가시거리 측정치 통보",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.12), Ch. 7 (7.5.3)",
    faaClause: "대응 조문: Ch. 2 Section 8 Para 2-8-1 ~ 2-8-3 (RVR/Visibility)"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.8",
    title: "공항정보 자동방송업무 (ATIS) 절차",
    manualClause: "조항: 3.8\n내용: ATIS 문자/음성 방송 송출 및 갱신 주기",
    icaoClause: "대응 조문: Annex 11 Ch. 4 (4.3.4 ~ 4.3.9 ATIS broadcasts)",
    faaClause: "대응 조문: Ch. 2 Section 9 Para 2-9-1, 2-9-2, 2-9-3 (ATIS)"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.10",
    title: "[군용항공기 전용] 조종사 기상보고 (PIREP)",
    manualClause: "조항: 3.10\n내용: 비정상 기상 현상 접수 및 즉시 전파 의무",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.12.3 Special air-reports)",
    faaClause: "대응 조문: Ch. 2 Section 6 Para 2-6-1 ~ 2-6-3 (PIREP)"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.12",
    title: "편대비행 (Formation Flights)",
    manualClause: "조항: 3.12\n내용: 편대 비행 시 분리 책임 및 통신 절차",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.1), Ch. 8 (8.7.3)",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-13 (Formation Flight)"
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.14",
    title: "[군 적용] 교통 조언 (Traffic Advisories)",
    manualClause: "조항: 3.14\n내용: 근접 항공기간 방위·거리 기준 교통정보 발부",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.9.1 Traffic information)",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-21 (Traffic Advisories)"
  },

  // 제4장 분리방법 및 최저치
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.2",
    title: "항공교통 분리 제공 (Provisions for separation)",
    manualClause: "조항: 4.2\n내용: 관제공역 내 항공기간 기본 분리 제공 의무",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.2 Provisions for separation)",
    faaClause: "대응 조문: Ch. 4 Section 1 Para 4-1-1 / Ch. 2 Para 2-1-1"
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.3",
    title: "수직분리 (Vertical separation)",
    manualClause: "조항: 4.3\n내용: 수직 분리 최저치 (FL290 이하 1,000ft, RVSM 1,000ft, 초과 2,000ft)",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.3 Vertical separation)",
    faaClause: "대응 조문: Ch. 4 Section 5 Para 4-5-1, 4-5-7 (Vertical Separation)"
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.4",
    title: "수평분리 (Horizontal separation)",
    manualClause: "조항: 4.4\n내용: 측방 및 종적(시간/거리/DME/RNAV) 비레이다 분리기준",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.4 Horizontal separation)",
    faaClause: "대응 조문: Ch. 6 Section 1 ~ Section 5 (Nonradar Minima)"
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.5",
    title: "비행 중 체공 항공기의 분리 (Holding separation)",
    manualClause: "조항: 4.5\n내용: 체공 픽스 및 장주 내 항공기 간 수직/수평 분리",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.7 Separation of holding aircraft)",
    faaClause: "대응 조문: Ch. 4 Section 6 Para 4-6-1 ~ 4-6-8 (Holding)"
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.6",
    title: "시간기반 항적 난기류 종적 분리최저치",
    manualClause: "조항: 4.6\n내용: 출발·도착 항공기간 시간 기반 후류와류 간격 기준",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.8 Wake turbulence longitudinal separation minima)",
    faaClause: "대응 조문: Ch. 5 Para 5-5-4 / Ch. 6 Para 6-4-2 (Wake Minima)"
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.7",
    title: "출발 항공기 간 최저분리",
    manualClause: "조항: 4.7\n내용: 동일 활주로 연속 출발 항공기 간 1분/2분 간격 기준",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.9 Minimum separation between departing aircraft)",
    faaClause: "대응 조문: Ch. 3 Section 9 Para 3-9-6, Ch. 6 Para 6-2-1"
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.9",
    title: "시계비행기상상태 하에서의 자체분리 허가",
    manualClause: "조항: 4.9\n내용: VMC 상태에서 조종사 자체 시계분리 허가",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.11 Clearances to fly maintaining own separation)",
    faaClause: "대응 조문: Ch. 7 Section 2 Para 7-2-1 (Visual Separation)"
  },

  // 제5장 비행장관제업무
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.1",
    title: "비행장관제탑의 기능",
    manualClause: "조항: 5.1\n내용: 관제탑 관할 공역 내 이동지역 통제 및 시각 감시 책임",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.1 Functions of aerodrome control towers)",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-1 (Airport Traffic Control)"
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.6",
    title: "비행장 교통관제 (Control of aerodrome traffic)",
    manualClause: "조항: 5.6\n내용: 유도로 이동, 활주로 횡단, 진입 허가 및 대기 지시",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.6 Control of taxiing aircraft)",
    faaClause: "대응 조문: Ch. 3 Section 7 Para 3-7-1, 3-7-2 (Taxi and Ground Movement)"
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.9",
    title: "출발 항공기 관제 (Control of departing aircraft)",
    manualClause: "조항: 5.9\n내용: 이륙허가, 라인업 및 동일 활주로 출발 분리기준",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.9 Control of departing aircraft)",
    faaClause: "대응 조문: Ch. 3 Section 9 Para 3-9-1 ~ 3-9-10 (Departure Separation)"
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.10",
    title: "도착 항공기 관제 (Control of arriving aircraft)",
    manualClause: "조항: 5.10\n내용: 착륙허가, 터치앤고, 복행 및 활주로 점유 분리",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.10 Control of arriving aircraft)",
    faaClause: "대응 조문: Ch. 3 Section 10 Para 3-10-1 ~ 3-10-14 (Arrival Separation)"
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.14",
    title: "특별시계비행(SVFR)의 허가",
    manualClause: "조항: 5.14\n내용: 관제권 내 특별시계비행 인가 및 항공기간 분리",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.15 Authorization of special VFR flights)",
    faaClause: "대응 조문: Ch. 7 Section 5 Para 7-5-1 ~ 7-5-8 (Special VFR Operations)"
  },

  // 제7장 감시관제업무 (레이다)
  {
    chapter: "제7장 항공교통업무 감시업무",
    sectionNo: "7.5",
    title: "SSR 트랜스폰더 및 ADS-B의 사용",
    manualClause: "조항: 7.5\n내용: 비콘 코드 배정, 비상 스쾈(7500/7600/7700) 처리",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.5 Use of SSR transponders and ADS-B)",
    faaClause: "대응 조문: Ch. 5 Section 2 Para 5-2-1 ~ 5-2-25 (Beacon Operation)"
  },
  {
    chapter: "제7장 항공교통업무 감시업무",
    sectionNo: "7.6",
    title: "감시시스템의 일반 절차 및 식별",
    manualClause: "조항: 7.6\n내용: 1차·2차 레이다 식별 방법, 식별 통보 및 식별 소실 대응",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.6 General procedures / Identification)",
    faaClause: "대응 조문: Ch. 5 Section 3 Para 5-3-1 ~ 5-3-6 / Section 4 (Radar ID)"
  },
  {
    chapter: "제7장 항공교통업무 감시업무",
    sectionNo: "7.7",
    title: "감시시스템을 이용한 분리 최저치",
    manualClause: "조항: 7.7\n내용: 항로 5NM, 터미널 3NM 레이더 분리기준 적용",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.7 ATS surveillance separation)",
    faaClause: "대응 조문: Ch. 5 Section 5 Para 5-5-1, 5-5-4 (Minima)"
  },
  {
    chapter: "제7장 항공교통업무 감시업무",
    sectionNo: "7.9",
    title: "접근관제업무에서의 감시시스템 사용 (벡터 및 접근)",
    manualClause: "조항: 7.9\n내용: 레이더 벡터 지시, 최종 접근 경로 정렬 및 감시",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.9 Approach surveillance) / Ch. 6 (6.7)",
    faaClause: "대응 조문: Ch. 5 Section 6 Para 5-6-1 / Section 9 Para 5-9-1 ~ 5-9-8"
  },

  // 제10장 비상상황 절차
  {
    chapter: "제10장 비상상황 절차",
    sectionNo: "10.2",
    title: "공지통신 장애 (Communications Failure)",
    manualClause: "조항: 10.2\n내용: 양방향 무선 통신 두절 시 고도 유지 및 접근 절차",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.3 Air-ground communications failure)",
    faaClause: "대응 조문: Ch. 10 Section 4 Para 10-4-1 ~ 10-4-4 (Comm Failure)"
  },

  // 제12장 용어
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.3",
    title: "항공교통관제 용어 (ATC phraseologies)",
    manualClause: "조항: 12.3\n내용: 이착륙, 고도 변경, 속도 통제 표준 관제용어",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.3 ATC phraseologies)",
    faaClause: "대응 조문: FAA Order JO 7110.65 각 Section별 PHRASEOLOGY 규정"
  },

  // 제13장 CPDLC
  {
    chapter: "제13장 CPDLC",
    sectionNo: "13.1",
    title: "관제사-조종사 데이터링크통신 일반",
    manualClause: "조항: 13.1\n내용: 문자 기반 CPDLC 메시지 교환 및 연결 절차",
    icaoClause: "대응 조문: Doc 4444 Ch. 14 (14.1 General - CPDLC) / Appendix 5",
    faaClause: "대응 조문: Ch. 13 Para 13-1-1 / Ch. 14 Para 14-1-1 (Data Communications)"
  }
];