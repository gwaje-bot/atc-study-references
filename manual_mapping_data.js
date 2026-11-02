// manual_mapping_data.js
// 대한민국 항공교통업무 매뉴얼(고시 제2026-003호) 전수 세부 절 기준 ICAO Doc 4444 / Annex 11 & FAA JO 7110.65 3분할 대조 데이터
const manualMappingDatabase = [
  // ==========================================
  // 제1장 총칙 (General)
  // ==========================================
  {
    chapter: "제1장 총칙",
    sectionNo: "1.1.1",
    title: "목적 (Scope and purpose)",
    manualClause: "조항: 1.1.1\n내용: 항공기 안전운항을 확보하고 공중충돌 등을 방지하기 위하여 민‧군 공통의 항공교통관제업무에 필요한 사항을 규정함을 목적으로 함.",
    icaoClause: "대응 조문: Doc 4444 Ch. 2 (2.1) / Annex 11 Ch. 2 (2.2)\n내용: Objectives of the air traffic services (항공기간 충돌 방지 및 질서 있고 신속한 항공교통 흐름 촉진).",
    faaClause: "대응 조문: Ch. 1 Para 1-1-1 / Ch. 2 Para 2-1-1 (ATC Service)\n내용: Primary Purpose (시스템 내 운항 항공기 간 공중충돌 방지 및 안전한 분리 제공 최우선 의무)."
  },
  {
    chapter: "제1장 총칙",
    sectionNo: "1.1.2",
    title: "적용 (Applicability)",
    manualClause: "조항: 1.1.2\n내용: 항공교통업무 제공 및 비행 시 적용. [군용항공기 적용] 및 [군 적용] 특례 지침 포함.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.1) / Annex 11 Ch. 3 (3.1)\n내용: Application of air traffic control service & Civil-Military coordination (민·군 공역 조화 원칙).",
    faaClause: "대응 조문: Ch. 1 Para 1-1-2 (Audience) / Para 2-1-1\n내용: FAA 및 미군 관제시설(USAF, USN, USA) 민·군 공통 적용."
  },
  {
    chapter: "제1장 총칙",
    sectionNo: "1.2.1",
    title: "발간 (Publication)",
    manualClause: "조항: 1.2.1\n내용: 국토교통부와 국방부 실무협의체를 구성하여 개정 사항 검토 및 합의 내용 반영.",
    icaoClause: "대응 조문: Doc 4444 Foreword (6. Promulgation of information)\n내용: 체약국의 규정 개정 절차 및 국가 간행물 고시 체계.",
    faaClause: "대응 조문: Ch. 1 Para 1-1-5, 1-1-6, 1-1-8\n내용: Order 변경 절차, 발간 주기 및 부처 간(DoD 등) 사전 조정 체계."
  },
  {
    chapter: "제1장 총칙",
    sectionNo: "1.2.2",
    title: "절차에 관한 합의서 (Letters of agreement - LOA)",
    manualClause: "조항: 1.2.2\n내용: 시설 간 협조 필요 절차 및 최저치를 명시하며, 군 인가 축소분리 외 본 매뉴얼 최저치 준수 원칙.",
    icaoClause: "대응 조문: Doc 4444 Ch. 10 (10.1.1) / Annex 11 Ch. 2 (2.18)\n내용: Letters of Agreement (LOA) 체결 요건 및 기본 분리기준 준수 의무.",
    faaClause: "대응 조문: Ch. 1 Para 1-1-10 (Procedural Letters of Agreement)\n내용: 인접 시설 간 LOA 체결 및 상위 최저치 유지 규정."
  },

  // ==========================================
  // 제2장 정의 (Definitions)
  // ==========================================
  {
    chapter: "제2장 정의",
    sectionNo: "2.0",
    title: "용어 정의 (Definitions)",
    manualClause: "조항: 제2장 전반\n내용: 항공교통업무 매뉴얼에 사용되는 항공교통관제 전문 용어 정의.",
    icaoClause: "대응 조문: Doc 4444 Chapter 1 (Definitions)\n내용: PANS-ATM 전반에 적용되는 국제 표준 용어 정의 수록.",
    faaClause: "대응 조문: Pilot/Controller Glossary (P/CG)\n내용: 조종사 및 관제사용 표준 용어집(P/CG) 정의 수록."
  },

  // ==========================================
  // 제3장 항공교통업무의 일반사항
  // ==========================================
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.1",
    title: "항공교통관제허가 (Air traffic control clearances)",
    manualClause: "조항: 3.1\n내용: 관제허가 발부, 전달, 재복창(Read-back) 및 허가 한계점 설정.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.5 Air traffic control clearances)\n내용: Scope, contents, and read-back requirements of clearances.",
    faaClause: "대응 조문: Ch. 4 Section 2 Para 4-2-1 ~ 4-2-10 (Clearances)\n내용: Clearance Items, Delivery, and Route Restrictions."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.2",
    title: "수평 속도조절 지시 (Horizontal speed control instructions)",
    manualClause: "조항: 3.2\n내용: 순항, 강하, 진입 구간별 수평 속도 조절 지시 및 적용 한계.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.6 Horizontal speed control instructions)\n내용: Application and limitations of horizontal speed control.",
    faaClause: "대응 조문: Ch. 5 Section 7 Para 5-7-1, 5-7-2 (Speed Adjustment)\n내용: Application of speed adjustment and maximum/minimum speed limits."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.3",
    title: "수직 속도조절 지시 (Vertical speed control instructions)",
    manualClause: "조항: 3.3\n내용: 특정 상승/강하율 지정 및 수직 속도 조절 지시.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.7 Vertical speed control instructions)\n내용: Rate of climb/descent instructions and restrictions.",
    faaClause: "대응 조문: Ch. 5 Section 7 Para 5-7-3, 5-7-4 (Vertical Speed Adjustments)\n내용: Altitude and rate adjustments."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.4",
    title: "IFR 비행에서 VFR 비행으로의 변경 (Change from IFR to VFR flight)",
    manualClause: "조항: 3.4\n내용: 조종사의 IFR 비행 취소 통보 접수 및 VFR 전환 처리.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.8 Change from IFR to VFR flight)\n내용: Cancellation of IFR and transition to VFR flight procedures.",
    faaClause: "대응 조문: Ch. 4 Section 8 Para 4-8-8 / Ch. 7 Para 7-1-4 (IFR Cancellation)\n내용: Cancellation of IFR flight plan and traffic advisories."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.5",
    title: "항적 난기류 (Wake turbulence)",
    manualClause: "조항: 3.5\n내용: 항공기 중량 등급별 후류와류 범주 및 조언 발부.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.9 Wake turbulence categories)\n내용: Wake turbulence categories (SUPER, HEAVY, MEDIUM, LIGHT).",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-19, 2-1-20 (Wake Turbulence Caution)\n내용: Wake turbulence caution advisories and categories."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.6",
    title: "고도계수정치 절차 (Altimeter setting procedures)",
    manualClause: "조항: 3.6\n내용: QNH/QNE 설정, 전이고도 및 전이수준 발부 기준.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.10 Altimeter setting procedures)\n내용: Transition altitude, transition level, and altimeter setting.",
    faaClause: "대응 조문: Ch. 2 Section 7 Para 2-7-1, 2-7-2 / Ch. 4 Para 4-5-7\n내용: Current Settings, Lowest Usable Flight Level."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.7",
    title: "활주로 시정 보고 (Runway Visibility Reporting)",
    manualClause: "조항: 3.7\n내용: RVR 및 활주로 가시거리 측정치 제공 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.12) / Ch. 7 (7.5.3)\n내용: Reporting of runway visual range (RVR).",
    faaClause: "대응 조문: Ch. 2 Section 8 Para 2-8-1 ~ 2-8-3 (Runway Visibility Reporting)\n내용: Issue current touchdown and rollout RVR values."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.8",
    title: "공항정보 자동방송업무(ATIS) 절차 (ATIS Procedures)",
    manualClause: "조항: 3.8\n내용: ATIS 문자/음성 방송 송출 및 식별 문자 갱신 절차.",
    icaoClause: "대응 조문: Annex 11 Ch. 4 (4.3.4 ~ 4.3.9 ATIS broadcasts)\n내용: Automatic terminal information service procedures and formats.",
    faaClause: "대응 조문: Ch. 2 Section 9 Para 2-9-1 ~ 2-9-3 (ATIS)\n내용: Operating procedures, broadcast content, and updates."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.9",
    title: "공역등급별 제공업무 및 비행요건 (ATS airspace classes)",
    manualClause: "조항: 3.9\n내용: A~G 등급 공역별 제공 관제업무 및 비행 규칙 요건.",
    icaoClause: "대응 조문: Annex 11 Ch. 2 (2.6) & Appendix 4\n내용: ATS airspace classes - services provided and flight requirements.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-1 / Ch. 7 Para 7-1-1 (Airspace Classes)\n내용: Class A through Class G airspace services."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.10",
    title: "[군용항공기 전용] 조종사 기상보고 요청 및 전파 (PIREP)",
    manualClause: "조항: 3.10\n내용: 비정상 기상 현상 접수 및 즉시 전파 의무.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.12.3 Special air-reports)\n내용: Recording and transmission of special air-reports (PIREP).",
    faaClause: "대응 조문: Ch. 2 Section 6 Para 2-6-1 ~ 2-6-3 (PIREP Information)\n내용: PIREP solicitation, verification, and dissemination."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.11",
    title: "군 절차 (MILITARY PROCEDURES)",
    manualClause: "조항: 3.11\n내용: 군 관제시설 및 군용기 특례 운영 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 16 (16.1 Special military operations)\n내용: Accommodating special military operations and coordination.",
    faaClause: "대응 조문: Ch. 1 Para 1-1-1 (Military Additions / Applications)\n내용: DoD-specific deviations and military procedures."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.12",
    title: "편대비행 (Formation Flights)",
    manualClause: "조항: 3.12\n내용: 편대 비행 시 분리 기준 적용 및 합류/이탈 관제.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.1) / Ch. 8 (8.7.3)\n내용: Formation flights control, separation, and beacon handling.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-13 (Formation Flight)\n내용: Formation flight separation, joined flights, and break-off."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.13",
    title: "비행진행기록지 (Flight Progress Strips)",
    manualClause: "조항: 3.13\n내용: 비행진행기록지 기입 표준 기호 및 관리 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.2.4 Flight progress strips)\n내용: Maintenance and display of flight progress strips.",
    faaClause: "대응 조문: Ch. 2 Section 3 Para 2-3-1 ~ 2-3-10 (Flight Progress Strips)\n내용: Recording and formatting strip entries."
  },
  {
    chapter: "제3장 일반사항",
    sectionNo: "3.14",
    title: "(군 적용) 교통 조언 (Traffic Advisories)",
    manualClause: "조항: 3.14\n내용: 시계 비행 및 근접 항공기에 대한 교통정보 발부 기준.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.9.1 Traffic information)\n내용: Provision of traffic information to relevant flights.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-21 (Traffic Advisories)\n내용: Issuance of traffic advisories based on clock positions."
  },

  // ==========================================
  // 제4장 분리방법 및 최저치
  // ==========================================
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.1",
    title: "개요 (Introduction)",
    manualClause: "조항: 4.1\n내용: 항공교통 분리의 기본 철학 및 책임 한계.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.1 General)\n내용: Principles and scope of separation.",
    faaClause: "대응 조문: Ch. 4 Section 5 Para 4-5-1 / Ch. 5 Para 5-5-1\n내용: Separation fundamentals and controller responsibility."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.2",
    title: "항공교통 분리 제공 (Provisions for the separation of controlled traffic)",
    manualClause: "조항: 4.2\n내용: 관제 항공기간 분리 제공 요건 및 적용 원칙.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.2 Provisions for the separation)\n내용: Vertical, horizontal, and composite separation provisions.",
    faaClause: "대응 조문: Ch. 4 Section 1 Para 4-1-1 / Ch. 2 Para 2-1-1\n내용: Separation provision requirements in controlled airspace."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.3",
    title: "수직분리 (Vertical separation)",
    manualClause: "조항: 4.3\n내용: 최저 수직분리기준(FL290 이하 1,000ft, RVSM 1,000ft, 초과 2,000ft).",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.3 Vertical separation)\n내용: Vertical separation minimum (standard and RVSM operations).",
    faaClause: "대응 조문: Ch. 4 Section 5 Para 4-5-1, 4-5-7 (Vertical Separation Minima)\n내용: Minimum vertical separation in non-RVSM and RVSM airspace."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.4",
    title: "수평분리 (Horizontal separation)",
    manualClause: "조항: 4.4\n내용: 비레이다 횡적(Lateral) 및 종적(Longitudinal) 분리기준 (시간, 거리, DME, RNAV).",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.4 Horizontal separation)\n내용: Lateral and longitudinal separation minima based on time, distance, and RNAV.",
    faaClause: "대응 조문: Ch. 6 Section 1 ~ Section 5 (Nonradar Minima)\n내용: Longitudinal separation, DME, RNAV, and Minima along established routes."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.5",
    title: "비행 중 체공 항공기의 분리 (Separation of aircraft holding in flight)",
    manualClause: "조항: 4.5\n내용: 체공 픽스 및 대기 패턴 내 항공기간 수직/수평 분리.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.7 Separation of holding aircraft)\n내용: Separation of holding aircraft and holding airspace buffers.",
    faaClause: "대응 조문: Ch. 4 Section 6 Para 4-6-1 ~ 4-6-8 (Holding Aircraft)\n내용: Holding pattern separation and clearance limits."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.6",
    title: "시간기반 항적 난기류 종적 분리최저치 (Wake turbulence longitudinal separation)",
    manualClause: "조항: 4.6\n내용: 출발·도착 항공기간 시간 기반 후류와류 간격 기준(2분, 3분 등).",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.8 Wake turbulence longitudinal separation minima)\n내용: Time-based wake turbulence separation on departure and arrival.",
    faaClause: "대응 조문: Ch. 5 Para 5-5-4 / Ch. 6 Para 6-4-2 (Wake Turbulence Minima)\n내용: Longitudinal time-based minima for wake turbulence."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.7",
    title: "출발 항공기 간 최저분리 (Minimum separation between departing aircraft)",
    manualClause: "조항: 4.7\n내용: 동일 활주로 연속 출발 항공기 간 1분/2분 간격 기준.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.9 Minimum separation between departing aircraft)\n내용: 1-minute, 2-minute, and 5-minute departure separation rules.",
    faaClause: "대응 조문: Ch. 3 Section 9 Para 3-9-6 / Ch. 6 Para 6-2-1\n내용: Same runway departure separation and nonradar departure minima."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.8",
    title: "도착 항공기와 출발 항공기의 분리 (Separation of departing from arriving aircraft)",
    manualClause: "조항: 4.8\n내용: 착륙 항공기와 이륙 항공기 간의 상호 안전 간격 확보.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.10 Separation of departing from arriving aircraft)\n내용: Crossing and interlocking runway separation rules.",
    faaClause: "대응 조문: Ch. 3 Section 9 Para 3-9-7 / Section 10 Para 3-10-3\n내용: Departure vs Arrival runway occupancy separation."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.9",
    title: "시계비행기상상태 하에서의 자체분리 허가 (Maintaining own separation in VMC)",
    manualClause: "조항: 4.9\n내용: VMC 상태 하에서 조종사가 자체 분리를 유지하도록 인가하는 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.11 Clearances to fly maintaining own separation)\n내용: Authorization and controller requirements for own separation in VMC.",
    faaClause: "대응 조문: Ch. 7 Section 2 Para 7-2-1 (Visual Separation)\n내용: Visual separation maintained by pilot under VMC."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.10",
    title: "필수교통정보 (Essential traffic information)",
    manualClause: "조항: 4.10\n내용: 분리 기준 미달 가능성이 있는 교통에 대한 필수 정보 발부.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.12 Essential traffic information)\n내용: Essential traffic details, direction, and level reporting.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-21 / Ch. 3 Para 3-1-6\n내용: Mandatory traffic advisories and local traffic updates."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.11",
    title: "[군 적용] 시계비행규칙 조건 (VFR Condition separation)",
    manualClause: "조항: 4.11\n내용: 군 관제 하 VFR 비행 상태 유지 조건부 분리 지침.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.11)\n내용: Special clearance conditions in VMC.",
    faaClause: "대응 조문: Ch. 7 Section 2 Para 7-2-1\n내용: Military application of visual clearance conditions."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.12",
    title: "[군용항공기 적용] 시계분리 (Visual separation)",
    manualClause: "조항: 4.12\n내용: 군용기 간 시계 참조를 통한 상호 분리 적용 요건.",
    icaoClause: "대응 조문: Doc 4444 Ch. 5 (5.11)\n내용: Visual separation by military flight crews.",
    faaClause: "대응 조문: Ch. 7 Section 2 Para 7-2-1 (Visual Separation)\n내용: Tower-applied visual separation and pilot-applied visual separation."
  },
  {
    chapter: "제4장 분리방법 및 최저치",
    sectionNo: "4.13",
    title: "[군용항공기 적용] 운상시계비행 (VFR-On-Top)",
    manualClause: "조항: 4.13\n내용: 구름 상층에서 VFR 기준에 따른 자체 고도 배정 및 비행.",
    icaoClause: "대응 조문: Annex 2 (4.4) / PANS-ATM Ch. 4 (4.8)\n내용: Flights maintaining own separation above clouds.",
    faaClause: "대응 조문: Ch. 7 Section 3 Para 7-3-1 ~ 7-3-7 (VFR-on-Top)\n내용: VFR-on-top clearances, altitude assignments, and separation."
  },

  // ==========================================
  // 제5장 비행장관제업무 절차
  // ==========================================
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.1",
    title: "비행장관제탑의 기능 (Functions of aerodrome control towers)",
    manualClause: "조항: 5.1\n내용: 관제탑의 책임 구역, 이동지역 감시 및 관제업무 범위.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.1 Functions of aerodrome control towers)\n내용: Visual surveillance of aerodrome traffic and responsibilities.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-1 (Airport Traffic Control)\n내용: Tower jurisdiction, operating positions, and surveillance requirements."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.2",
    title: "사용활주로의 선정 (Selection of runway-in-use)",
    manualClause: "조항: 5.2\n내용: 풍향/풍속, 소음 기준, 진입보조시설에 따른 사용 활주로 선정.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.2 Selection of runway-in-use)\n내용: Determination of the most suitable runway.",
    faaClause: "대응 조문: Ch. 3 Section 5 Para 3-5-1 (Selection of Runway)\n내용: Runway selection based on wind, noise abatement, and NAVAIDs."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.3",
    title: "비행장관제탑과의 최초 교신 (Initial call to aerodrome control tower)",
    manualClause: "조항: 5.3\n내용: 관제탑 주파수로 진입하는 항공기의 최초 보고 요건.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.3 Initial call to aerodrome control tower)\n내용: Position and level report on initial contact.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-13 (Establishment of Two-way Communications)\n내용: Initial contact requirements and read-back."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.4",
    title: "비행장관제탑에서 항공기에 제공하는 정보 (Information to aircraft)",
    manualClause: "조항: 5.4\n내용: 기상, 기압, 시정, 활주로 표면 상태 정보 제공.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.4 Information to aircraft by aerodrome control)\n내용: Meteorological information, altimeter setting, and aerodrome conditions.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-8 / Section 3 Para 3-3-1\n내용: Airport Conditions and surface weather data."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.5",
    title: "비행장상태에 관한 필수정보 (Essential information on aerodrome conditions)",
    manualClause: "조항: 5.5\n내용: 공사, 제설 상태, 조류 활동, 등화 고장 등 필수 안전 정보 통보.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.5 Essential information on aerodrome conditions)\n내용: Construction, water/slush on runway, and bird hazards.",
    faaClause: "대응 조문: Ch. 3 Section 3 Para 3-3-2, 3-3-3 (Timely Information)\n내용: Braking action, foreign objects, and closed runway conditions."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.6",
    title: "비행장 교통관제 (Control of aerodrome traffic)",
    manualClause: "조항: 5.6\n내용: 지상 활주(Taxi), 활주로 횡단, 정지선 대기 지시 및 조건부 허가 제한.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.6 Control of aerodrome traffic / taxiing)\n내용: Control of taxiing aircraft and prohibition of conditional clearances.",
    faaClause: "대응 조문: Ch. 3 Section 7 Para 3-7-1, 3-7-2 (Taxi and Ground Movement)\n내용: Ground movement clearances, crossing runways, and hold short instructions."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.7",
    title: "교통장주 내 항공교통 관제 (Control of traffic in the traffic circuit)",
    manualClause: "조항: 5.7\n내용: 장주 비행 단계(Downwind, Base, Final)별 진입 순서 및 선회 지시.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.7 Control of traffic in the traffic circuit)\n내용: Entry, sequencing, and separation in the circuit.",
    faaClause: "대응 조문: Ch. 3 Section 8 Para 3-8-1, 3-8-2 (Traffic Pattern)\n내용: Spacing and sequencing in traffic patterns."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.8",
    title: "도착 및 출발 항공기에 대한 우선순위 (Order of priority)",
    manualClause: "조항: 5.8\n내용: 비상항공기, 정기운항편, 도착편 및 출발편 간 우선순위 결정 원칙.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.8 Order of priority for arriving and departing)\n내용: Operational priority guidelines between arriving and departing flights.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-2 (Order of Priority)\n내용: Priority handling for distress, medical, and normal operations."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.9",
    title: "출발 항공기 관제 (Control of departing aircraft)",
    manualClause: "조항: 5.9\n내용: 이륙허가, 활주로 대기(Line up and wait) 및 동일 활주로 출발 분리.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.9 Control of departing aircraft)\n내용: Take-off clearances, line-up, and same-runway separation.",
    faaClause: "대응 조문: Ch. 3 Section 9 Para 3-9-1 ~ 3-9-10 (Departure Separation)\n내용: Takeoff clearances, LUAW, and runway separation."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.10",
    title: "도착 항공기 관제 (Control of arriving aircraft)",
    manualClause: "조항: 5.10\n내용: 착륙허가 발부, 복행(Go-around) 지시 및 활주로 점유 분리기준.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.10 Control of arriving aircraft)\n내용: Landing clearance, missed approach, and runway occupancy separation.",
    faaClause: "대응 조문: Ch. 3 Section 10 Para 3-10-1 ~ 3-10-14 (Arrival Separation)\n내용: Landing clearances, missed approaches, and arrival separation minima."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.11",
    title: "동일 활주로상 축소된 활주로 분리최저치 (Reduced runway separation minima)",
    manualClause: "조항: 5.11\n내용: 항공기 범주별 주간 동일 활주로 축소 분리 최저치 적용 요건.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.11 Reduced runway separation minima)\n내용: Reduced runway separation for Category 1, 2, and 3 aircraft.",
    faaClause: "대응 조문: Ch. 3 Section 9 Para 3-9-6 / Section 10 Para 3-10-3\n내용: Reduced separation minima by aircraft category (CAT I, II, III)."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.12",
    title: "저시정 운영절차 (Procedures for low visibility operations)",
    manualClause: "조항: 5.12\n내용: CAT-II/III 저시정 상태 시 지상이동 통제 및 보호구역 운영.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.13 Procedures for low visibility operations)\n내용: Ground movement and protection of sensitive areas in LVP.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-5 / Section 7 Para 3-7-5\n내용: Low visibility procedures and critical area protection."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.13",
    title: "VFR 운항의 중단 (Suspension of visual flight rules operations)",
    manualClause: "조항: 5.13\n내용: 기상 악화 시 관제권 내 VFR 비행 운항 중단 선포.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.14 Suspension of VFR operations)\n내용: Action when weather drops below VMC minima in control zone.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-11 (Surface Operations in IMC)\n내용: Suspension of VFR flight due to below-minimum weather."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.14",
    title: "특별시계비행(SVFR)의 허가 (Authorization of special VFR flights)",
    manualClause: "조항: 5.14\n내용: 기상 최저치 미달 시 관제권 내 특별시계비행 인가 및 분리 제공.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.15 Special VFR flights)\n내용: Separation between SVFR flights and between SVFR and IFR.",
    faaClause: "대응 조문: Ch. 7 Section 5 Para 7-5-1 ~ 7-5-8 (Special VFR)\n내용: Authorization, altitude assignments, and separation of SVFR."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.15",
    title: "헬리콥터 이착륙 관제 (Helicopter operations control)",
    manualClause: "조항: 5.15\n내용: 헬리콥터 호버택시, 에어택시 및 전용 이착륙 구역 관제.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.12 Control of helicopters)\n내용: Control of helicopter taxiing and take-off/landing patterns.",
    faaClause: "대응 조문: Ch. 3 Section 11 Para 3-11-1 ~ 3-11-6 (Helicopter Operations)\n내용: Hover-taxi, air-taxi, and helicopter arrival/departure routes."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.16",
    title: "지상항공등화 (Aeronautical ground lights)",
    manualClause: "조항: 5.16\n내용: 활주로등, 유도로등, 접근등화, PAPI 등 등화 시스템 점등/소등 기준.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.16 Aeronautical ground lights)\n내용: Operation of approach, runway, and taxiway lighting systems.",
    faaClause: "대응 조문: Ch. 3 Section 4 Para 3-4-1 ~ 3-4-19 (Airport Lighting)\n내용: Control of visual aids, approach lights, ALS, and runway lights."
  },
  {
    chapter: "제5장 비행장관제업무",
    sectionNo: "5.17",
    title: "비행장관제업무에서의 감시시스템 사용 (Use of ATS surveillance systems)",
    manualClause: "조항: 5.17\n내용: 관제탑 타워 레이다 및 ASDE/SMR 지상감시장비 활용 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 7 (7.17) / Ch. 8 (8.10)\n내용: Use of surveillance and Surface Movement Radar (SMR) in tower.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-9 / Section 6 Para 3-6-1\n내용: Use of tower radar displays and Airport Surface Detection Equipment."
  },

  // ==========================================
  // 제6장 비행장 주변에서의 분리
  // ==========================================
  {
    chapter: "제6장 비행장 주변 분리",
    sectionNo: "6.1",
    title: "비행장 주변에서의 분리최저치 축소 (Reduction in separation minima)",
    manualClause: "조항: 6.1\n내용: 진입 및 출발 구간에서 시각 참조 및 레이더 보조를 통한 간격 축소.",
    icaoClause: "대응 조문: Doc 4444 Ch. 6 (6.1 Reduction in separation minima)\n내용: Reduction in separation minima in terminal area.",
    faaClause: "대응 조문: Ch. 3 Section 10 Para 3-10-1 / Ch. 4 Para 4-8-1\n내용: Terminal area separation reductions."
  },
  {
    chapter: "제6장 비행장 주변 분리",
    sectionNo: "6.2",
    title: "필수국지교통 (Essential local traffic)",
    manualClause: "조항: 6.2\n내용: 비행장 장주 및 진입 경로상 국지 교통 정보 발부.",
    icaoClause: "대응 조문: Doc 4444 Ch. 6 (6.2 Essential local traffic)\n내용: Issuing essential local traffic information.",
    faaClause: "대응 조문: Ch. 3 Section 1 Para 3-1-6 (Traffic Information)\n내용: Local traffic advisories for terminal movements."
  },
  {
    chapter: "제6장 비행장 주변 분리",
    sectionNo: "6.3",
    title: "출발 항공기에 대한 절차 (Procedures for departing aircraft)",
    manualClause: "조항: 6.3\n내용: 표준계기출발절차(SID) 배정 및 출발 경로 분리.",
    icaoClause: "대응 조문: Doc 4444 Ch. 6 (6.3 Procedures for departing aircraft)\n내용: SID clearances and divergence of departure paths.",
    faaClause: "대응 조문: Ch. 4 Section 3 Para 4-3-1 ~ 4-3-10 (Departures)\n내용: Departure clearances, SID issuance, and takeoff sequencing."
  },
  {
    chapter: "제6장 비행장 주변 분리",
    sectionNo: "6.4",
    title: "출발 항공기에 대한 정보 (Information for departing aircraft)",
    manualClause: "조항: 6.4\n내용: 출발 전 최신 기상, 출발 지연 예상 시간(EDCT) 통보.",
    icaoClause: "대응 조문: Doc 4444 Ch. 6 (6.4 Information for departing aircraft)\n내용: Dissemination of weather and expected departure times.",
    faaClause: "대응 조문: Ch. 4 Section 3 Para 4-3-1 (Departure Information)\n내용: Departure weather and delay information delivery."
  },
  {
    chapter: "제6장 비행장 주변 분리",
    sectionNo: "6.5",
    title: "도착 항공기에 대한 절차 (Procedures for arriving aircraft)",
    manualClause: "조항: 6.5\n내용: 표준계기도착절차(STAR), 계기접근 및 시계접근 유도 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 6 (6.5 Procedures for arriving aircraft)\n내용: STAR, instrument approach, and visual approach sequencing.",
    faaClause: "대응 조문: Ch. 4 Section 8 Para 4-8-1 ~ 4-8-12 (Arrivals)\n내용: Approach clearances, STAR clearances, and visual approaches."
  },
  {
    chapter: "제6장 비행장 주변 분리",
    sectionNo: "6.6",
    title: "도착 항공기에 제공되는 정보 (Information for arriving aircraft)",
    manualClause: "조항: 6.6\n내용: 접근 유형, 활주로 상태, 착륙 예정 시간 통보.",
    icaoClause: "대응 조문: Doc 4444 Ch. 6 (6.6 Information for arriving aircraft)\n내용: Approach information and runway visual range data.",
    faaClause: "대응 조문: Ch. 4 Section 8 Para 4-8-10 (Approach Information)\n내용: Issuing approach clearance details and latest terminal conditions."
  },
  {
    chapter: "제6장 비행장 주변 분리",
    sectionNo: "6.7",
    title: "평행 또는 근접평행 활주로 운영 (Operations on parallel runways)",
    manualClause: "조항: 6.7\n내용: 평행 활주로 독립/의존 동시 계기접근 및 출발 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 6 (6.7 Operations on parallel or near-parallel runways)\n내용: Simultaneous independent and dependent parallel approaches.",
    faaClause: "대응 조문: Ch. 3 Section 9 Para 3-9-8 / Ch. 5 Para 5-9-6 ~ 5-9-8\n내용: Parallel runways, simultaneous dependent/independent ILS operations."
  },

  // ==========================================
  // 제7장 항공교통업무 감시업무(레이더업무)
  // ==========================================
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.1",
    title: "감시시스템 성능 (Capabilities)",
    manualClause: "조항: 7.1\n내용: 레이더 및 ADS-B 감시시스템의 탐지 범위와 정확도 요건.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.1 ATS surveillance systems capabilities)\n내용: Capabilities and verification of surveillance systems.",
    faaClause: "대응 조문: Ch. 5 Section 1 Para 5-1-1 (Surveillance Use)\n내용: Authorization and operational capabilities of radar systems."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.2",
    title: "상황전시기 (Situation display)",
    manualClause: "조항: 7.2\n내용: 레이더 화면 정렬, 영상 표시 및 지도 오버레이 기준.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.2 Situation display)\n내용: Alignment, accuracy, and presentation on displays.",
    faaClause: "대응 조문: Ch. 5 Section 1 Para 5-1-2 (Alignment/Accuracy Check)\n내용: Alignment, radar presentation, and video maps."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.3",
    title: "통신 (Communications)",
    manualClause: "조항: 7.3\n내용: 감시업무 제공 중 사용되는 공지 무선통신 주파수 운영.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.3 Communications)\n내용: Two-way radio communication channels and backup facilities.",
    faaClause: "대응 조문: Ch. 5 Section 1 Para 5-1-3 (Radar Frequencies)\n내용: Primary and backup surveillance communication channels."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.4",
    title: "항공교통업무 감시업무의 제공 (Provision of surveillance services)",
    manualClause: "조항: 7.4\n내용: 레이더 식별 완료 후 제공되는 감시업무의 범위와 종결.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.4 Provision of ATS surveillance services)\n내용: Commencement, scope, and termination of surveillance services.",
    faaClause: "대응 조문: Ch. 5 Section 1 Para 5-1-13 (Radar Service Termination)\n내용: Surveillance provision and radar service termination."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.5",
    title: "SSR 트랜스폰더 및 ADS-B의 사용 (SSR / ADS-B operation)",
    manualClause: "조항: 7.5\n내용: Mode 3/A 비콘 코드 배정, Mode C 고도 검증, 비상 스쾈(7500/7600/7700).",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.5 Use of SSR transponders and ADS-B)\n내용: Transponder code assignment, Mode C verification, and emergency codes.",
    faaClause: "대응 조문: Ch. 5 Section 2 Para 5-2-1 ~ 5-2-25 (Beacon Operation)\n내용: Beacon code assignment, discrete codes, and Mode C validity."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.6",
    title: "감시시스템의 일반 절차 (General procedures / Identification)",
    manualClause: "조항: 7.6\n내용: 1차/2차 레이다 및 ADS-B 식별 절차, 식별 통보, 관제 이양(Handoff).",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.6 General procedures / Identification)\n내용: Identification methods, position reports, and transfer of radar ID.",
    faaClause: "대응 조문: Ch. 5 Section 3 Para 5-3-1 ~ 5-3-6 / Section 4 (Radar Handoff)\n내용: Primary/Secondary radar identification and radar handoff."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.7",
    title: "관제업무 제공에 대한 감시시스템 사용 (Surveillance Separation)",
    manualClause: "조항: 7.7\n내용: 항로 5NM, 터미널 3NM 레이더 수평 분리기준 및 거리기반 후류와류 간격.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.7 ATS surveillance separation)\n내용: Standard radar separation minima (3 NM / 5 NM) and wake distance minima.",
    faaClause: "대응 조문: Ch. 5 Section 5 Para 5-5-1 ~ 5-5-6 (Minima)\n내용: Lateral radar separation (3 miles / 5 miles) and wake turbulence distance."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.8",
    title: "비상상황, 위험요소 및 장비 고장 (Emergencies / Failures)",
    manualClause: "조항: 7.8\n내용: 무선통신 두절, 레이더 고장, 기내 불법간섭 발생 시 비상 대응 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.8 Emergencies, hazards and equipment failures)\n내용: Action during communication failure and complete radar outage.",
    faaClause: "대응 조문: Ch. 5 Section 1 Para 5-1-4 / Ch. 10 Para 10-1-1\n내용: Inoperative surveillance equipment and emergency assistance."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.9",
    title: "접근관제업무에서의 감시시스템 사용 (Approach Surveillance)",
    manualClause: "조항: 7.9\n내용: 레이더 벡터(Heading), 최종접근 경로 정렬, PAR/ASR 최종접근 관제.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.9 Approach surveillance) / Ch. 6 (6.7)\n내용: Vectoring for approach, final intercept, and surveillance radar approaches.",
    faaClause: "대응 조문: Ch. 5 Section 6 Para 5-6-1 / Section 9 Para 5-9-1 ~ 5-10-10\n내용: Radar vectoring, approach gate, intercept angles, and PAR/ASR approaches."
  },
  {
    chapter: "제7장 감시업무(레이더)",
    sectionNo: "7.10",
    title: "비행정보업무에서의 감시시스템 사용 (FIS Surveillance)",
    manualClause: "조항: 7.10\n내용: 레이더 정보를 활용한 기상 회피 조언 및 교통 정보 제공.",
    icaoClause: "대응 조문: Doc 4444 Ch. 8 (8.11 Flight info surveillance)\n내용: Surveillance-derived weather and navigational assistance.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-21 / Ch. 5 Para 5-1-8\n내용: Radar traffic advisories and weather reconnaissance."
  },

  // ==========================================
  // 제8장 비행정보업무 및 경보업무
  // ==========================================
  {
    chapter: "제8장 비행정보 및 경보",
    sectionNo: "8.1",
    title: "비행정보업무 (Flight information service)",
    manualClause: "조항: 8.1\n내용: SIGMET, AIRMET, 항행안전시설 상태 등 비행 안전 정보 제공.",
    icaoClause: "대응 조문: Doc 4444 Ch. 9 (9.1 Flight information service)\n내용: Dissemination of hazardous weather, volcanic ash, and collision warnings.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-1 / Section 6 Para 2-6-1\n내용: Flight information service and hazardous weather advisories."
  },
  {
    chapter: "제8장 비행정보 및 경보",
    sectionNo: "8.2",
    title: "경보업무 (Alerting service)",
    manualClause: "조항: 8.2\n내용: 불확실(INCERFA), 경보(ALERFA), 조난(DETRESFA) 단계 선포 및 구조조정본부(RCC) 통보.",
    icaoClause: "대응 조문: Doc 4444 Ch. 9 (9.2 Alerting service)\n내용: Declaration of emergency phases and notification to RCC.",
    faaClause: "대응 조문: Ch. 10 Section 6 Para 10-6-1 ~ 10-6-3 (Alerting Service)\n내용: Emergency phases (Incertitude, Alert, Distress) and RCC liaison."
  },

  // ==========================================
  // 제9장 협조 (Coordination)
  // ==========================================
  {
    chapter: "제9장 협조",
    sectionNo: "9.1",
    title: "항공교통관제업무 제공에 대한 협조 (ATC Coordination)",
    manualClause: "조항: 9.1\n내용: 인접 관제섹터 및 관제시설 간 비행계획 자료 이양 및 관제권 이양 협조.",
    icaoClause: "대응 조문: Doc 4444 Ch. 10 (10.1 ATC coordination)\n내용: Coordination between ATC units and estimate message exchange.",
    faaClause: "대응 조문: Ch. 2 Section 2 Para 2-2-1 / Ch. 4 Para 4-7-2 / Ch. 5 Para 5-4-1\n내용: Interfacility and intrafacility transfer of control data."
  },
  {
    chapter: "제9장 협조",
    sectionNo: "9.2",
    title: "비행정보 및 경보업무 제공에 대한 협조",
    manualClause: "조항: 9.2\n내용: 비행정보실 및 수색구조 기관과의 정보 공유 및 상호 통보 체계.",
    icaoClause: "대응 조문: Doc 4444 Ch. 10 (10.2 FIS / Alerting coordination)\n내용: Coordination between units providing FIS and search and rescue.",
    faaClause: "대응 조문: Ch. 10 Section 6 Para 10-6-1, 10-6-2\n내용: Interagency emergency coordination and RCC notifications."
  },
  {
    chapter: "제9장 협조",
    sectionNo: "9.3",
    title: "항공교통조언업무 제공에 대한 협조",
    manualClause: "조항: 9.3\n내용: 조언 공역 내 항공교통 흐름 조율 및 시설 간 비행계획 협조.",
    icaoClause: "대응 조문: Doc 4444 Ch. 10 (10.3 Advisory service)\n내용: Coordination for air traffic advisory service provision.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-2\n내용: Air traffic advisory coordination."
  },
  {
    chapter: "제9장 협조",
    sectionNo: "9.4",
    title: "관제시설과 항공통신소 간의 협조",
    manualClause: "조항: 9.4\n내용: 관제기관과 항공통신소(AFTN/AMHS) 간 비행 전문 전파 협조.",
    icaoClause: "대응 조문: Doc 4444 Ch. 10 (10.4 ATS & Telecommunication)\n내용: Coordination with aeronautical telecommunication stations.",
    faaClause: "대응 조문: Ch. 2 Section 2 Para 2-2-6\n내용: Flight progress data exchange via communication stations."
  },

  // ==========================================
  // 제10장 비상상황, 통신두절 및 우발상황
  // ==========================================
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.1",
    title: "비상절차 (Emergency procedures)",
    manualClause: "조항: 10.1\n내용: 조난·비상 선포 접수, 최우선 관제권 부여 및 연료 방유(Fuel dumping) 관제.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.1 Emergency procedures)\n내용: Emergency assistance, priority handling, and fuel dumping rules.",
    faaClause: "대응 조문: Ch. 10 Section 1 Para 10-1-1 ~ 10-2-18 (Emergencies)\n내용: Emergency determination, radar assistance, and jettisoning fuel."
  },
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.2",
    title: "공지통신 장애 (Air-ground communications failure)",
    manualClause: "조항: 10.2\n내용: 양방향 무선통신 두절(NORDO) 시 고도 유지, 항로 비행 및 착륙 유도.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.3 Air-ground communications failure)\n내용: Procedures in the event of air-ground radio failure (VMC / IMC).",
    faaClause: "대응 조문: Ch. 10 Section 4 Para 10-4-1 ~ 10-4-4 (Comm Failure)\n내용: Two-way radio communications failure and expected approaches."
  },
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.3",
    title: "VFR 항공기 지원 (Assistance to VFR flights)",
    manualClause: "조항: 10.3\n내용: 기상 악화(IMC)에 직면한 VFR 항공기에 대한 레이더 유도 및 안전 지원.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.4 Assistance to VFR)\n내용: Navigational assistance to VFR flights encountering IMC.",
    faaClause: "대응 조문: Ch. 10 Section 2 Para 10-2-6 / Section 3 Para 10-3-1\n내용: Radar assistance to VFR aircraft in difficulty."
  },
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.4",
    title: "기타 비행 중 우발상황 (Other in-flight contingencies)",
    manualClause: "조항: 10.4\n내용: 불법 간섭(하이재킹), 기내 감압, 요격 비행 시 관제 지원 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.2, 15.5 Contingencies)\n내용: Unlawful interference, aircraft decompression, and interception of civil aircraft.",
    faaClause: "대응 조문: Ch. 10 Section 2 Para 10-2-1 ~ 10-2-8\n내용: Hijacking, bomb threats, and air defense interception procedures."
  },
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.5",
    title: "항공교통관제 우발상황 (ATC contingencies)",
    manualClause: "조항: 10.5\n내용: 관제시설 철수, 공역 폐쇄, 주파수 마비 시 우발계획 가동.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.6 ATC contingencies)\n내용: Air traffic services contingency routing and alternate plans.",
    faaClause: "대응 조문: Ch. 10 Section 5 Para 10-5-1 (Evacuation of Facility)\n내용: Evacuation, control contingency routing, and facility shutdown."
  },
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.6",
    title: "기타 항공교통관제 우발절차 (Other ATC contingency procedures)",
    manualClause: "조항: 10.6\n내용: 지상 레이더 완전 고장 및 항행안전시설 기능 정지 시 비레이다 전환.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.7 Other procedures)\n내용: Transition to procedural control during system degradation.",
    faaClause: "대응 조문: Ch. 10 Section 1 Para 10-1-7\n내용: In-flight equipment malfunctions and degraded facility operations."
  },
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.7",
    title: "화산재 구름 보고 또는 예측 시 절차 (Volcanic ash cloud)",
    manualClause: "조항: 10.7\n내용: 화산재 구름 발생 시 비행경로 회피 허가 및 기상 정보 즉시 전파.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.8 Volcanic ash procedures)\n내용: ATS unit actions when volcanic ash clouds are reported or forecast.",
    faaClause: "대응 조문: Ch. 9 Section 2 Para 9-2-21 (Volcanic Ash Activity)\n내용: Volcanic ash advisory dissemination and rerouting."
  },
  {
    chapter: "제10장 비상 및 우발상황",
    sectionNo: "10.8",
    title: "비상위치지시용 무선표지설비(ELT) 신호 (ELT Signals)",
    manualClause: "조항: 10.8\n내용: ELT 비상 신호 수신 시 보고, 조난 단계 상향 및 위치 추적 지원.",
    icaoClause: "대응 조문: Doc 4444 Ch. 15 (15.1 Emergency)\n내용: Interception and reporting of Emergency Locator Transmitter signals.",
    faaClause: "대응 조문: Ch. 10 Section 2 Para 10-2-10 (ELT Signals)\n내용: Direction finder tracking and action on receiving ELT signals."
  },

  // ==========================================
  // 제11장 기타 절차 (Miscellaneous procedures)
  // ==========================================
  {
    chapter: "제11장 기타 절차",
    sectionNo: "11.1",
    title: "군 항공기에 대한 책임 (Responsibility in regard to military traffic)",
    manualClause: "조항: 11.1\n내용: 군 작전 비행 및 특수 훈련 비행 시 민·군 관제 협조 및 책임 분계.",
    icaoClause: "대응 조문: Doc 4444 Ch. 16 (16.1 Special military operations)\n내용: Civil/military coordination and joint responsibility boundaries.",
    faaClause: "대응 조문: Ch. 1 Para 1-1-1 / Ch. 2 Para 2-1-1\n내용: Military airspace coordination and responsibility."
  },
  {
    chapter: "제11장 기타 절차",
    sectionNo: "11.2",
    title: "무인자유기구에 대한 책임 (Unmanned free balloons)",
    manualClause: "조항: 11.2\n내용: 기상 관측용 등 무인자유기구 방류 정보 통보 및 분리 간격 유지.",
    icaoClause: "대응 조문: Doc 4444 Ch. 16 (16.2 Unmanned free balloons)\n내용: Dissemination of balloon tracking data and hazard warning.",
    faaClause: "대응 조문: Ch. 9 Section 2 Para 9-2-11 (Unmanned Free Balloons)\n내용: Operations, notifications, and separation for weather balloons."
  },
  {
    chapter: "제11장 기타 절차",
    sectionNo: "11.3",
    title: "전염성 질병 또는 공중 보건 위험 통보 (Public health risk)",
    manualClause: "조항: 11.3\n내용: 기내 전염병 의심 환자 발생 시 검역당국 및 도착지 비행장 즉시 통보.",
    icaoClause: "대응 조문: Doc 4444 Ch. 16 (16.4 Notification of suspected communicable diseases)\n내용: Reporting to public health authorities and aerodrome operators.",
    faaClause: "대응 조문: Ch. 10 Section 2 Para 10-2-19 (Suspected Communicable Diseases)\n내용: Quarantine notifications and flight crew coordination."
  },
  {
    chapter: "제11장 기타 절차",
    sectionNo: "11.4",
    title: "특별 비행 (Special Operations)",
    manualClause: "조항: 11.4\n내용: 공중급유, 시험비행, VIP 특별기 운항 등 특수 임무 비행 관제 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 16 (16.3 Special air operations)\n내용: Air-to-air refueling, test flights, and formation procedures.",
    faaClause: "대응 조문: Ch. 9 Section 1 ~ Section 2 Para 9-1-1 ~ 9-2-23 (Special Operations)\n내용: Air refueling, parachute jumping, and special flights."
  },
  {
    chapter: "제11장 기타 절차",
    sectionNo: "11.5",
    title: "[군용항공기 적용] 정밀접근 보호구역 (Precision approach critical area)",
    manualClause: "조항: 11.5\n내용: ILS/PAR 정밀접근 신호 왜곡 방지를 위한 임계구역 지상 장비/항공기 진입 통제.",
    icaoClause: "대응 조문: Annex 10 Vol 1 / Doc 4444 Ch. 7 (7.13)\n내용: Protection of ILS critical and sensitive areas.",
    faaClause: "대응 조문: Ch. 3 Section 7 Para 3-7-5 (Precision Approach Critical Area)\n내용: Protection of ILS critical areas and vehicle/aircraft holds."
  },

  // ==========================================
  // 제12장 통신절차 및 용어 (Phraseologies)
  // ==========================================
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.1",
    title: "통신절차 (Communications Procedures)",
    manualClause: "조항: 12.1\n내용: 무선통신 송수신 원칙, 주파수 변경 지시 및 통신 점검 절차.",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.1 General communication procedures)\n내용: Radio transmission technique and transfer of communications.",
    faaClause: "대응 조문: Ch. 2 Section 4 Para 2-4-1 ~ 2-4-22 (Radio Communications)\n내용: Radio techniques, frequency changes, and standard call signs."
  },
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.2",
    title: "용어의 일반사항 (General Provisions)",
    manualClause: "조항: 12.2\n내용: 표준 관제용어 사용의 강제성 및 명확한 음성 발음 규칙.",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.2 General phraseology)\n내용: Use of standardized and concise phraseologies.",
    faaClause: "대응 조문: Ch. 2 Section 4 Para 2-4-1 ~ 2-4-3\n내용: Clarity, concise phrasing, and standardized aviation language."
  },
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.3",
    title: "항공교통관제 용어 (ATC phraseologies)",
    manualClause: "조항: 12.3\n내용: 비행허가, 지상이동, 이착륙, 고도 변경, 속도 통제 표준 관제용어.",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.3 ATC phraseologies)\n내용: Clearances, departures, arrivals, level changes, and holding phraseology.",
    faaClause: "대응 조문: 각 Chapter별 Section 내 PHRASEOLOGY 규정 항목 및 P/CG\n내용: Clearances, taxi, takeoff, landing, and altitude phraseology."
  },
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.4",
    title: "항공교통업무 감시업무 용어 (ATS surveillance phraseologies)",
    manualClause: "조항: 12.4\n내용: 레이다 식별, 레이더 벡터(Heading), 위치보고 생략, 최종접근 유도 용어.",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.4 ATS surveillance service phraseologies)\n내용: Radar identification, vectoring, and radar approach phraseology.",
    faaClause: "대응 조문: Ch. 5 Section 3, 5-6, 5-9 내 PHRASEOLOGY\n내용: RADAR CONTACT, FLY HEADING, TURN LEFT/RIGHT."
  },
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.5",
    title: "경보 용어 (Alerting phraseologies)",
    manualClause: "조항: 12.5\n내용: 비상 선포 접수 및 비상경보 발령 시 사용되는 표준 무선통신 용어.",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.5 Alerting phraseologies)\n내용: MAYDAY, PAN PAN, and distress phraseology.",
    faaClause: "대응 조문: Ch. 10 Section 1 Para 10-1-1 Phraseology\n내용: Emergency acknowledgments and distress guidance phraseology."
  },
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.6",
    title: "지상근무자/조종사 용어 (Ground crew/flight crew phraseologies)",
    manualClause: "조항: 12.6\n내용: 엔진 시동(Pushback), 토잉(Towing), 인터폰 교신 표준 용어.",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.6 Ground crew/flight crew phraseologies)\n내용: Pushback, engine start, and tow connection communication.",
    faaClause: "대응 조문: Ch. 3 Section 7 Para 3-7-1 Phraseology\n내용: Pushback clearance and ground tow operations."
  },
  {
    chapter: "제12장 통신절차 및 용어",
    sectionNo: "12.7",
    title: "약어 (Abbreviations)",
    manualClause: "조항: 12.7\n내용: 항공관제 통신 및 비행진행기록지에 사용되는 표준 항공 약어집.",
    icaoClause: "대응 조문: Doc 4444 Ch. 12 (12.7 Abbreviations) & Doc 8400\n내용: ICAO abbreviations and acronyms.",
    faaClause: "대응 조문: FAA Pilot/Controller Glossary (P/CG)\n내용: FAA abbreviations and acronyms."
  },

  // ==========================================
  // 제13장 관제사-조종사 데이터링크통신 (CPDLC)
  // ==========================================
  {
    chapter: "제13장 CPDLC",
    sectionNo: "13.1",
    title: "일반사항 (General)",
    manualClause: "조항: 13.1\n내용: CPDLC 기본 개념, 음성통신과의 상호보완적 운영 원칙.",
    icaoClause: "대응 조문: Doc 4444 Ch. 14 (14.1 General - CPDLC) & Annex 10 Vol 2\n내용: Controller-pilot data link communications general provisions.",
    faaClause: "대응 조문: Ch. 13 Section 1 Para 13-1-1 (Data Communications General)\n내용: Operational use of data communication services."
  },
  {
    chapter: "제13장 CPDLC",
    sectionNo: "13.2",
    title: "CPDLC 연결 (Establishment of CPDLC)",
    manualClause: "조항: 13.2\n내용: 지상 시스템과의 로그온(Logon), CDA(관할기관) 및 NDA(다음기관) 연결.",
    icaoClause: "대응 조문: Doc 4444 Ch. 14 (14.2 Establishment of CPDLC)\n내용: Logon procedures, current data authority (CDA), and next data authority (NDA).",
    faaClause: "대응 조문: Ch. 13 Section 1 Para 13-1-2 (Logon and Connection)\n내용: Data comm session establishment and logon handling."
  },
  {
    chapter: "제13장 CPDLC",
    sectionNo: "13.3",
    title: "CPDLC 메시지 교환 (ATC unit-initiated CPDLC)",
    manualClause: "조항: 13.3\n내용: 상향링크(Uplink) 허가/지시 및 하향링크(Downlink) 응답 전문 교환.",
    icaoClause: "대응 조문: Doc 4444 Ch. 14 (14.3 Message exchange) & Appendix 5\n내용: Exchange of operational CPDLC message elements and closure.",
    faaClause: "대응 조문: Ch. 13 Section 1 Para 13-1-3 ~ 13-1-8\n내용: Uplink clearances, downlink requests, WILCO/UNABLE responses."
  },

  // ==========================================
  // 별표 (Annex / Tables)
  // ==========================================
  {
    chapter: "별표",
    sectionNo: "별표 1",
    title: "항적 난기류 그룹 (Wake turbulence groups)",
    manualClause: "조항: 별표 1\n내용: 7단계 세분화 항적난기류 그룹(A~G) 및 항공기 기종별 분류표.",
    icaoClause: "대응 조문: Doc 4444 Ch. 4 (4.9.1.2) & Doc 8643\n내용: Seven-group wake turbulence categories.",
    faaClause: "대응 조문: Ch. 5 Para 5-5-4 (Consolidated Wake Turbulence - CWT)\n내용: FAA CWT classification groups (Category A through I)."
  },
  {
    chapter: "별표",
    sectionNo: "별표 2",
    title: "공역등급별 제공업무 및 비행요건 (ATS airspace classes)",
    manualClause: "조항: 별표 2\n내용: 공역 등급별(A~G) 항공교통업무 범위, 통신 요건, 속도 제한 종합표.",
    icaoClause: "대응 조문: Annex 11 Appendix 4\n내용: ATS airspace classes - services provided and flight requirements table.",
    faaClause: "대응 조문: Ch. 2 Section 1 Para 2-1-1 / AIM Chapter 3\n내용: Airspace classification and operating rules table."
  },
  {
    chapter: "별표",
    sectionNo: "별표 3",
    title: "순항고도 배정표 (Table of cruising levels)",
    manualClause: "조항: 별표 3\n내용: 자진로(Magnetic track) 000°~179° 및 180°~359° 반원 법칙에 따른 IFR/VFR 순항고도 배정표.",
    icaoClause: "대응 조문: Annex 2 Appendix 3 (Table of cruising levels)\n내용: Semi-circular cruising level table (feet and meters).",
    faaClause: "대응 조문: Ch. 4 Section 5 Para 4-5-1 (Lowest Usable FL / Cruising Altitudes)\n내용: Standard cruising altitude assignments based on direction of flight."
  },
  {
    chapter: "별표",
    sectionNo: "별표 4",
    title: "관제사-조종사 데이터링크 통신 전문 세트 (CPDLC Message Set)",
    manualClause: "조항: 별표 4\n내용: 경로, 고도, 속도, 비상 전문 등 CPDLC 상향/하향 전체 메시지 세트 규격.",
    icaoClause: "대응 조문: Doc 4444 Appendix 5 (CPDLC Message Set)\n내용: Uplink and Downlink message attributes, responses, and parameters.",
    faaClause: "대응 조문: Ch. 13 Section 1 / Data Comm PIM (Message Set Guide)\n내용: Standard data communications message elements and formats."
  }
];