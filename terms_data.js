// 5대 항공관제 기준문서 용어 정의 통합 데이터 (Patch Completed)
const termDatabase = [
  {
    "enName": "360 OVERHEAD",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : overhead approach)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ABBREVIATED IFR FLIGHT PLAN",
    "krName": "약식계기비행계획",
    "definitions": {
      "kr_proc": "비행계획서상에 항공교통관제를 위한 필수항목(항공기 호출부호, 위치, 조종사 요구 등)만의 제출을 필요로 하는 계기비행계획을 말하며 기타 정보는 분리 또는 관제목적으로 필요시 제출이 요구된다. 비행 중에 계기접근을 원하거나 지상에서 VFR-ON-TOP까지 상승을 원하는 항공기에 의하여 이용된다.\n(참조) : VFR-ON-TOP",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ABEAM",
    "krName": "",
    "definitions": {
      "kr_proc": "픽스, 지점(POINT), 목표물이 항공기 트랙으로부터 좌우로 대략 90°정도에 위치한 상태. 이 경우 ABEAM은 대략적인 위치를 의미한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft is “abeam” a fix, point, or object when that fix, point, or object is approximately 90 degrees to the right or left of the aircraft track. Abeam indicates a general position rather than a precise point.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ABORT",
    "krName": "임무포기",
    "definitions": {
      "kr_proc": "기 계획된 항공기 기동의 종료. 예 : 이륙 포기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "To terminate a preplanned aircraft maneuver; e.g., an aborted takeoff.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ACAS",
    "krName": "공중충돌경고장치",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "조종사에게 2차감시레이더 (SSR) 트랜스폰더를 장착한 항공기와의 잠재적 충돌에 관한 조언을 제공하는 장비로서, 지상 장비와 독립적으 로 운영되며 2차감시레이더 응답기 신호를 기반으로 작동하는 항공기 장비를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ACCELERATE-STOP DISTANCE AVAILABLE",
    "krName": "가속-정지 가능거리",
    "definitions": {
      "kr_proc": "활주로 길이에 가속 및 이륙 포기 시 필요한 정지거리를 더한 거리.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The length of the take-off run available plus the length of the stopway if provided.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ACCEPTING UNIT/CONTROLLER",
    "krName": "인수기관/관제사",
    "definitions": {
      "kr_proc": "항공기의 관제권을 인수하는 항공교통관제기관/관제사.",
      "annex11": null,
      "doc4444": "Air traffic control unit/air traffic controller next to take control of an aircraft. Note.— See definition of “transferring unit/controller”.",
      "faa_pcg": null,
      "kr_ats": "한 항 공기에 대한 항공교통관제업무 제공의 책임을 비행로를 따라 다음 항공교통교통관제시설/관제사에 이양하는 항 공교통교통관제시설/관제사를 말한다."
    }
  },
  {
    "enName": "ACKNOWLEDGE",
    "krName": "",
    "definitions": {
      "kr_proc": "메시지 수신의 이해여부를 알려주시오.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Let me know that you have received and understood this message.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ACROBATIC FLIGHT",
    "krName": "곡예비행",
    "definitions": {
      "kr_proc": "일반 비행에는 필요치 않은 항공기 자세의 급격한 변동, 비정상적 자세ㆍ가속의 급격한 변경을 수반하는 의도된 기동.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Maneuvers intentionally performed by an aircraft involving an abrupt change in its attitude, an abnormal attitude, or an abnormal variation in speed.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ACTIVE RUNWAY",
    "krName": "사용활주로",
    "definitions": {
      "kr_proc": "현재 이륙ㆍ착륙에 사용되는 활주로를 말하며, 복수 활주로가 사용될 때 모든 활주로 공이 사용활주로(Active runway)로 간주된다.\n(참조) : RUNWAY IN USE / ACTIVE RUNWAY /DUTY RUNWAY",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RUNWAY IN USE/ACTIVE RUNWAY/DUTY RUNWAY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ACTUAL CALCULATED LANDING TIME",
    "krName": "산출착륙시간",
    "definitions": {
      "kr_proc": "산출착륙시간은 계산된 착륙 시간으로써 활주로방향, 공항수용률, 공항지연시간, 기타 도착항공기 예측 등을 근거로 교점으로 접근하는 도착항공기의 산출착륙시간 또는 미터리스트전시간격(MLDI)에 의하여 결정되는 실제시간을 말한다. 이 경우 실제시간은 도착 항공기의 교점도착시간 또는 선행항공기의 잠정 산출착륙시간에 도착항공기 간격을 더한 것 중 더 늦은 시간으로 하며 이 시간은 항공기 진행상황에 따라 수정되지는 않는다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ADDITIONAL SERVICES",
    "krName": "부가업무",
    "definitions": {
      "kr_proc": "ATC에 의하여 제공되는 정보조언업무로서 다음 각 호와 같다. 그러나 부가업무는 이에 한정되지는 않는다.\n1. 교통정보조언\n2. 조종사가 요구 시, 관측된 항적의 회피를 위하여 교통정보를 받고 있는 항공기에 대한 레이더유도\n3. 배정고도와 자동고도판독장치(MODE C)간의 300피트 이상 차이 정보\n4. 발부된 교통정보가 더 이상 유효치 않음을 알리는 조언\n5. 기상 및 채프(CHAFF) 정보\n6. 기상 지원\n7. 조류활동 정보\n8. 체공장주 감시.\n부가업무는 우선순위에 따른 업무수행과 레이더의 기본 한계, 교통량, 주파수 혼잡도 그리고 관제사의 업무부하(workload) 등에 따른 관제사의 여력이 있을 때 에만 제공한다. 관제사는 상황에 대한 업무제공 여부를 결정할 수 있는 권한이 있고 업무제공 여부에 대하여 조종사의 질문 사항이 아니며 동 사항을 알려줄 필요가 없다.\n(참조) : TRAFFIC ADVISORIES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Advisory information provided by ATC which includes but is not limited to the following: a. Traffic advisories. b. Vectors, when requested by the pilot, to assist aircraft receiving traffic advisories to avoid observed traffic. c. Altitude deviation information of 300 feet or more from an assigned altitude as observed on a verified (reading correctly) automatic altitude readout (Mode C). d. Advisories that traffic is no longer a factor. e. Weather and chaff information. f. Weather assistance. g. Bird activity information. h. Holding pattern surveillance. Additional services are provided to the extent possible contingent only upon the controller’s capability to fit them into the performance of higher priority duties and on the basis of limitations of the radar, volume of traffic, frequency congestion, and controller workload. The controller has complete discretion for determining if he/she is able to provide or continue to provide a service in a particular case. The controller’s reason not to provide or continue to provide a service in a particular case is not subject to question by the pilot and need not be made known to him/her. (See TRAFFIC ADVISORIES.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ADMINISTRATOR",
    "krName": "",
    "definitions": {
      "kr_proc": "관련규정에 의거 항공관련 사항에 대한 권한을 위임받은 자",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The Federal Aviation Administrator or any person to whom he/she has delegated his/her authority in the matter concerned.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ADS-B",
    "krName": "자동종속감시시설 - 방송",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기, 비행장 차량 및 다른 사물이 자동으로 데이터링크를 통해 방송 형태 로 항공기 식별부호, 위치 및 추가 데이터 등의 데이터 를 송수신할 수 있는 시스템을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ADS-C",
    "krName": "자동종속감시시설 - 계약",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "지상시스템과 항공기 간에 ADS 보고가 시작되는 조건, 보고에 포함될 데이터 에 대하여 계약 조건에 따라 송수신하는 것을 말한다. 주기 - \"ADS-C\"이라는 약어는 일반적으로 ADS event contract, ADS demand contract, ADS periodic contract 또는 비상모드를 가리키기 위해 사용된다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ADS-C AGREEMENT",
    "krName": "ADS-C 계약",
    "definitions": {
      "kr_proc": "ADS-C 보고 자료의 요건(예, 항공교통업무기관이 요구하는 자료 및 합의된 주파수)이 설정된 보고계획",
      "annex11": "A reporting plan which establishes the conditions of ADS-C data reporting (i.e. data required by the air traffic services unit and frequency of ADS-C reports which have to be agreed to prior to using ADS-C in the provision of air traffic services). Note.— The terms of the agreement will be exchanged between the ground system and the aircraft by means of a contract, or a series of contracts.",
      "doc4444": "A reporting plan which establishes the conditions of ADS-C data reporting (i.e. data required by the air traffic services unit and frequency of ADS-C reports which have to be agreed to prior to using ADS-C in the provision of air traffic services). Note.— The terms of the agreement will be exchanged between the ground system and the aircraft by means of a contract, or a series of contracts.",
      "faa_pcg": null,
      "kr_ats": "ADS-C 데이터 보고 조 건(예. 항공교통업무 제공을 위해 ADS-C를 이용하기 전 합의되어야는 항공교통업무시설에서 필요로 하는 ADS-C 데이터 및 보고 빈도 등)을 설정한 계획을 말한다. 주기 - 합의 조건은 지상시스템과 항공기간 하나의 계약 또는 일련의 계약으로 합의하는 것을 의미한다."
    }
  },
  {
    "enName": "ADVISE INTENTIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "당신의 의도를 알려주시오",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Tell me what you plan to do.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ADVISORY",
    "krName": "조언",
    "definitions": {
      "kr_proc": "항공기의 안전한 비행 및 이동을 위하여 조종사에게 제공하는 조언 및 정보.\n(참조) : ADVISORY SERVICE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Advice and information provided to assist pilots in the safe conduct of flight and aircraft movement. (See ADVISORY SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ADVISORY AIRSPACE",
    "krName": "조언공역",
    "definitions": {
      "kr_proc": "조종사에게 항공교통 정보조언업무가 제공되는 공역 또는 항공로",
      "annex11": "An airspace of defined dimensions, or designated route, within which air traffic advisory service is available.",
      "doc4444": "An airspace of defined dimensions, or designated route, within which air traffic advisory service is available.",
      "faa_pcg": null,
      "kr_ats": "항공교통조언업무가 제공 되는 일정 규모의 공역 또는 지정 비행경로를 말한다."
    }
  },
  {
    "enName": "ADVISORY FREQUENCY",
    "krName": "조언주파수",
    "definitions": {
      "kr_proc": "공항조언업무에 사용되는 주파수\n(참조) : LOCAL AIRPORT ADVISORY,UNICOM,",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The appropriate frequency to be used for Airport Advisory Service. (See LOCAL AIRPORT ADVISORY.) (See UNICOM.) (Refer to ADVISORY CIRCULAR NO. 90-66.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ADVISORY ROUTE",
    "krName": "조언항공로",
    "definitions": {
      "kr_proc": "항공교통 정보조언업무가 제공되는 비행정보구역내의 항공로",
      "annex11": "A designated route along which air traffic advisory service is available.",
      "doc4444": "A designated route along which air traffic advisory service is available. Note.— Air traffic control service provides a much more complete service than air traffic advisory service; advisory areas and routes are therefore not established within controlled airspace, but air traffic advisory service may be provided below and above control areas.",
      "faa_pcg": null,
      "kr_ats": "항공교통조언업무가 제 공되도록 지정한 비행경로를 말한다. 주기 - 관제공역 내에는 조언공역/조언비행경로가 설 정되지 않지만, 관제구 외에서 조언업무가 제공될 수도 있다."
    }
  },
  {
    "enName": "ADVISORY SERVICE",
    "krName": "조언업무",
    "definitions": {
      "kr_proc": "항공기의 안전한 비행 및 이동을 위하여 조종사에게 제공되는 항공교통업무시설에 의한 조언 또는 정보.\n(참조) : ADDITIONAL SERVICE,\nEN-ROUTE FLIGHT ADVISORY SERVICE,\nLOCAL AIRPORT ADVISORY,\nRADAR ADVISORY,\nSAFETY ALERT,\nTRAFFIC ADVISORIES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Advice and information provided by a facility to assist pilots in the safe conduct of flight and aircraft movement. (See ADDITIONAL SERVICES.) (See LOCAL AIRPORT ADVISORY.) (See RADAR ADVISORY.) (See SAFETY ALERT.) (See TRAFFIC ADVISORIES.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AERIAL REFUELING",
    "krName": "공중급유",
    "definitions": {
      "kr_proc": "비행중인 군용항공기에 대한 연료 공급 절차\n(참조) : VFR/IFR wall planning chart",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A procedure used by the military to transfer fuel from one aircraft to another during flight. (Refer to VFR/IFR Wall Planning Charts.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AERODROME",
    "krName": "비행장",
    "definitions": {
      "kr_proc": "항공기의 이ㆍ착륙(이ㆍ착수 포함)을 위하여 사용되는 육지 또는 수면(건물, 가설 및 장비)",
      "annex11": "A defined area on land or water (including any buildings, installations and equipment) intended to be used either wholly or in part for the arrival, departure and surface movement of aircraft.",
      "doc4444": "A defined area on land or water (including any buildings, installations and equipment) intended to be used either wholly or in part for the arrival, departure and surface movement of aircraft. Note.— The term “aerodrome” where used in the provisions relating to flight plans and ATS messages is intended to cover also sites other than aerodromes which may be used by certain types of aircraft, e.g. helicopters or balloons.",
      "faa_pcg": "A defined area on land or water (including any buildings, installations and equipment) intended to be used either wholly or in part for the arrival, departure, and movement of aircraft.",
      "kr_ats": "공항시설법 제2조제2항에 따라 항 공기의 이륙(이수를 포함한다. 이하 같다), 착륙(착수를 포함한다. 이하 같다)을 위하여 사용되는 육지 또는 수 면을 말한다. 주기 - 비행계획 및 항공교통업무 전문에 포함되는 \" 비행장\"은 헬리콥터나 열기구 등 특정 유형의 항공기 또는 경량항공기(이하 \"항공기\"라 한다)가 이용하는 비 행장 이외의 장소를 나타내기 위하여 사용할 수 있다."
    }
  },
  {
    "enName": "AERODROME BEACON",
    "krName": "비행장 등대",
    "definitions": {
      "kr_proc": "비행장의 위치를 알려주기 위하여 설치하는 등화.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aeronautical beacon used to indicate the location of an aerodrome from the air.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AERODROME CONTROL SERVICE",
    "krName": "비행장관제업무",
    "definitions": {
      "kr_proc": "비행장이동지역 및 비행장 주변의 항공기에 대하여 제공되는 항공교통관제업무(이동 지역 내 계류장에서의 항공기에 대한 지상유도를 담당하는 계류장관제업무를 포함한다.)",
      "annex11": "Air traffic control service for aerodrome traffic.",
      "doc4444": "Air traffic control service for aerodrome traffic.",
      "faa_pcg": "Air traffic control service for aerodrome traffic.",
      "kr_ats": "비행장 교 통(aerodrome traffic)을 대상으로 제공되는 항공교통관 제업무를 말한다."
    }
  },
  {
    "enName": "AERODROME CONTROL TOWER",
    "krName": "비행장관제탑",
    "definitions": {
      "kr_proc": "비행장이동지역 및 비행장 주변의 항공기에게 항공교통관제업무를 제공하기 위하여 설치된 기관",
      "annex11": "A unit established to provide air traffic control service to aerodrome traffic.",
      "doc4444": "A unit established to provide air traffic control service to aerodrome traffic.",
      "faa_pcg": "A unit established to provide air traffic control service to aerodrome traffic.",
      "kr_ats": "비행장 교통 에 대하여 항공교통관제업무를 제공하기 위해 설치된 항공교통관제시설을 말한다."
    }
  },
  {
    "enName": "AERODROME ELEVATION",
    "krName": "비행장표고",
    "definitions": {
      "kr_proc": "착륙지역의 가장 높은 지점의 표고.",
      "annex11": null,
      "doc4444": "The elevation of the highest point of the landing area.",
      "faa_pcg": "The elevation of the highest point of the landing area.",
      "kr_ats": "착륙구역(landing area) 중 가장 높은 지점의 표고를 말한다."
    }
  },
  {
    "enName": "AERODROME TRAFFIC",
    "krName": "비행장교통",
    "definitions": {
      "kr_proc": "비행장의 기동지역 내 및 비행장 주변의 운항하는 모든 항공기.",
      "annex11": "All traffic on the manoeuvring area of an aerodrome and all aircraft flying in the vicinity of an aerodrome. Note.— An aircraft is in the vicinity of an aerodrome when it is in, entering or leaving an aerodrome traffic circuit.",
      "doc4444": "All traffic on the manoeuvring area of an aerodrome and all aircraft flying in the vicinity of an aerodrome. Note.— An aircraft is in the vicinity of an aerodrome when it is in, entering or leaving an aerodrome traffic circuit.",
      "faa_pcg": null,
      "kr_ats": "비행장 기동지역 제정 : 2013.05.03. - 90 별표 정의 (manoeuvring area) 내의 모든 교통 및 비행장 주위 공 역에서 운항하는 모든 항공기를 말한다. 주기 - 모든 항공기는 비행장 교통장주 내에 있거나 교통장주를 진입 또는 이탈하는 항공기를 말한다."
    }
  },
  {
    "enName": "AERODROME TRAFFIC CIRCUIT",
    "krName": "비행장 교통장주",
    "definitions": {
      "kr_proc": "비행장주변에서 운항하는 항공기를 위하여 설정된 특정 경로.",
      "annex11": null,
      "doc4444": "The specified path to be flown by aircraft operating in the vicinity of an aerodrome.",
      "faa_pcg": "The specified path to be flown by aircraft operating in the vicinity of an aerodrome.",
      "kr_ats": "비행장 주위 공역에서 운항하는 항공기의 비행을 위하여 별도로 설 정된 경로를 말한다."
    }
  },
  {
    "enName": "AERODROME TRAFFIC ZONE",
    "krName": "비행장교통구역",
    "definitions": {
      "kr_proc": "비행장교통의 보호를 위하여 비행장 주위에 설정한 일정한 범위의 공역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AERONAUTICAL BEACON",
    "krName": "항공등대",
    "definitions": {
      "kr_proc": "공항, 헬리콥터 착륙장, 지형지물의 위치와 산악지역에서 항공로상의 일정 지점 또는 장애물의 표시를 위하여 백색 또는 유색으로 점멸 되는 항공등화시설.\n(참조) : AIRPORT ROTATING BEACON",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A visual NAVAID displaying flashes of white and/or colored light to indicate the location of an airport, a heliport, a landmark, a certain point of a Federal airway in mountainous terrain, or an obstruction. (See AIRPORT ROTATING BEACON.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AERONAUTICAL CHART",
    "krName": "항공지도",
    "definitions": {
      "kr_proc": "지형적 특징, 위험물, 장애물, 항행안전시설, 항공로, 공역, 공항 등에 대한 항공항행용으로 사용되는 다음 각 호의 지도\n1. 비행장장애물지도(Aerodrome Obstacle Chart)-ICAO Type A : 비행장장애물지도- Type A는 항공기운영자가 항공기의 인가된 운영제한을 준수하는데 필요한 자료를 제공하는 지도로서 이륙비행경로 상에 중요한 장애물이 존재하는 모든 비행장은 필수적으로 A 타입의 비행장장애물지도를 발간하여야 한다.\n2. 비행장장애물지도(Aerodrome Obstacle Chart)-ICAO Type B : 비행장장애물지도-ICAO Type B는 선회절차를 비롯한 모든 경우의 최저안전고도 결정, 이륙 또는 착륙시의 비상사태 발생 시 이용 가능한 절차 결정, 장애물 제거 및 표지기준 적용, 항공도 제작에 필요한 기본자료 제공을 목적으로 제작되는 지도로서 TYPE A 지도에서 제공하는 정보에 추가하여 장애물제한표면 및 동 표면을 침투하는 장애물을 수록하고 있다.\n3. 비행장장애물지도(Aerodrome Obstacle Chart)-ICAO Type C : 비행장장애물지도-ICAO Type C는 항공기의 최대허용이륙중량을 제한하는 장애물에 대한 정보를 제공하여, 항공기운영자가 항공기의 운용한계를 준수할 수 있는 비상절차를 개발 할 수 있도록 하기 위하여 제작되는 지도이며, 비행장을 중심으로 45km 거리 내에 위치하고 있는 활주로 상 가장 낮은 표고로 부터 120m(400ft)의 고도를 초과하는 모든 장애물의 고도와 위치에 관한 정보를 제공한다.\n4. 비행장지상이동지도(Aerodrome Ground Movement Chart)- ICAO :  비행장지상이동지도는 항공기승무원들에게 항공기의 주기/접속 또는 항공기주기지점으로 항공기의 지상이동을 용이하게 하기 위한 정보를 제공하는 보충지도이다. 동 지도는 비행장/헬리포트 지도에 정보가 밀집되어 유도로를 통한 항공기주기지점으로의 항공기 지상이동에 필요한 상세한 사항을 명확히 표시할 수 없을 경우에 제작 한다.\n5. 항공기주기/접현지도(Aircraft Parking/Docking chart)-ICAO : 항공기주기/접속지도는 항공기승무원들에게 유도로와 항공기 주기지점간 항공기의 이동 및 항공기의 주기/접속을 용이하게 하기 위하여 상세정보를 제공하는 보충지도로서 탑승동시설의 복잡성으로 인하여 상세한 정보를 비행장/헬기장지도 또는 비행장지상이동지도 상에 명확히 나타낼 수 없는 경우에 제작 한다.\n6. 표준계기출발지도(Standard Departure Chart/SID)-ICAO : 표준계기출발지도는 운항승무원이 이륙단계에서 항공로비행단계까지 지정된 표준출발비행로를 준수 할 수 있도록 하기 위한 정보를 제공하는 지도로서, 표준계기출발비행로가 설정되어 있으나 지역지도상에 명확히 표시할 수 없는 경우에 제작 한다.\n7. 표준계기도착지도(Standard Arrival Chart/STAR)-ICAO : 표준계기도착지도는 운항승무원이 항공로비행단계에서 접근단계까지 지정된 표준계기도착비행로를 준수 할 수 있도록 하기 위한 정보를 제공하는 지도로서, 표준계기출발비행로가 설정되어 있으나 지역지도상에 명확히 표시할 수 없는 경우에 제작 한다.\n8. 시각접근지도(Visual Approach Chart)-ICAO : 시각접근지도는 항공로로부터 시각 참조에 의하여 활주로로 착륙하고자 비행하는 항공기 승무원에게 접근단계로 전환할 수 있도록 정보를 제공하기 위한 지도로서, 비행장에 제한된 항행안전시설만이 사용가능한 경우나 무선통신시설을 사용할 수 없는 경우, 1:500,000 또는 그 이상의 축척으로 비행장과 그 인근지역에 대한 항공지도가 없는 경우, 시각접근절차가 수립되어 있는 경우 시각접근지도를 제작한다.\n9. 항공지도(Aeronautical chart) 1:500,000-ICAO : 항공지도 1:500,000는 중/저고도에서 저속으로 중/단거리 시계공중항법을 하는 항공기에게 필요한 항공정보를 제공하기 위한 지도로서 기본항공지도로써의 역할 수행 및 지역지도 또는 필수적인 시계정보를 제공하지 않는 항공로지도의 보충, 조종사 항행훈련 및 비행 전 비행계획용으로 사용된다. 필수발간지도인 세계항공지도 1:1,000,000보다 큰 축척으로 지도발간이 필요한 경우를 제외하고는 동 지도는 필수적으로 발간하여야 할 의무는 없으며 세계항공지도 1:1,000,000의 대체지도로 사용할 수 있다.\n10. 지역지도(Area Chart)-ICAO : 지역지도는 항공기승무원에게 항공로비행단계와 비행장접근단계간의 전이 및 이륙/실패접근단계와 항공로비행단계간의 전이, 복잡한 ATS비행로지역 또는 공역을 통과하는 비행에 필요한 정보를 제공하기 위한 지도로서 일반적으로 특정 도착, 출발 및 통과비행로가 항공기의 이착륙 또는 통과비행의 안전 및 효율적인 운항을 위하여 요구되어 지는 항공교통이 밀집된 하나 이상의 비행장주변의 터미널구역을 대상으로 제작한다.\n11. 항공로지도(Enroute Chart)-ICAO : 항공로지도는 항공기승무원이 ATS 비행로를 따라 항공교통업무절차를 준수하여 항행을 용이하게 할 수 있도록 정보를 제공하는 지도로서 비행정보구역이 설정된 모든 지역에서 이용할 수 있도록 제작 한다. 상이한 ATS 비행로, 위치보고기준, 비행정보구역의 수평한계 또는 저고도 및 고고도에 설정된 관제구역을 지도상에 분명하게 표시할 수 없는 경우에는 저고도공역과 고고도공역에 대한 별도의 지도를 제작하기도 한다.\n12. 정밀접근지형지도(Precision Approach Terrain Chart) - ICAO : 정밀접근지형도는 항공기운영기관이 최종접근의 특정단계에서 전파고도계(radio altimeter)를 이용하여 지형이 결심고도 결정에 미치는 영향을 평가하기 위하여 필요한 세부적인 지형에 관한 정보(자연 및 인공장애물을 포함)를 제공하기 위한 지도로서 CAT-Ⅱ와 CAT-Ⅲ를 운영하는 정밀접근활주로에 대하여 이용 가능하도록 제작 한다.\n13. 계기접근지도(Instrument Approach Chart)-ICAO : 계기접근지도는 실패접근절차 및 체공장주를 포함하여 착륙 활주로까지 승인된 계기접근절차를 수행할 수 있도록 운항승무원에게 정보를 제공하는 지도로서 국가에 의하여 계기접근절차가 수립된 모든 비행장에서 제작 한다.\n14. 비행장/헬기장지도(Aerodrome/Heliport Chart-ICAO : 비행장/헬기장지도는 항공기의 지상이동을 용이하게 하기 위하여 항공기승무원에게 항공기주기장/헬기장 및 활주로 간의 이동경로, 헬리콥터주기장으로부터 착지/이륙구역 및 최종접근 및 이륙구역까지의 이동경로, 최종접근 및 이륙지역으로부터 착지/상승지역 및 헬리콥터 주기장까지의 경로, 헬리콥터 지상/공중유도로, 공중통과로에 대한 정보를 제공하는 비행장/헬리포트에 대한 필수 운영정보를 수록하는 지도로서 모든 비행장/헬리포트에 대하여 제작 한다.\n15. 세계항공지도(World Aeronautical Chart)-ICAO 축척 1:1,000,000 : 세계항공지도 축척 1:1,000,000은 시계비행에 필요한 조건을 충족시키기 위하여 제작하는 지도이며, 기본 항공지도로서 지역지도 또는 항공로지도에 시계비행을 위한 필수정보자료가 제공되지 아니하였거나 기복을 제외한 측면지세자료가 일률적으로 표기된 일정한 축척의 전 세계가 포함되는 지도를 제공및 기타 항공지도 제작의 기초자료로 사용되며, 비행 전 비행계획수립을 위한 지도로서 사용된다.\n16. 항공항행지도/소축척(Aeronautical Navigation Chart/Small Scale) -ICAO : 항공항행지도/소축척은 고고도 장거리비행을 하는 항공기승무원의 공중항행을 위하여 고속ㆍ고고도에서 시각적인 위치확인을 위한 확인지점과 무선시설/전자항행안전시설이 없는 지역 또는 시각항행이 필요한 지역을 통과하는 장거리비행 중 지상시각참조물 정보를 제공하고 장거리비행계획 수립 및 운항경로 도시를 위하여 제작되는 지도를 말한다.\n17. 레이더최저고도지도(Radar Minimum Altitude Chart) - ICAO : 항공기가 레이더유도절차에 의한 비행 중 지형지물과의 충돌방지를 위한 고도 확인을 위하여 레이더유도절차와 관련된 각종 정보를 효과적으로 제공하기 위하여 제작한 지도.\n18. 프로팅지도(Plotting Chart)-ICAO : 다양한 위치확인방법 및 추측항법에 의하여 항공기의 위치에 대한 계속적인 기록 및 계획된 비행로를 유지하기 위한 방법을 제공하는데 유용한 지도이다. 동 지도는 대양지역 또는 고립된 지역을 통과하는 주요 항공로를 국제상업항공운송용 항공기가 운항할 경우 적합한 지도로서 제작이 필요하다고 인정될 때 제작한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A representation of a portion of the earth, its culture and relief, specifically designated to meet the requirements of air navigation.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AERONAUTICAL FIXED SERVICE ; AFS",
    "krName": "항공고정업무",
    "definitions": {
      "kr_proc": "항공항행의 안전과 질서 있고 효율적이며 경제적인 항공업무를 위하여 제공되는 특정 고정지점 간의 통신업무",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AERONAUTICAL FIXED STATION",
    "krName": "항공고정국",
    "definitions": {
      "kr_proc": "항공고정업무를 담당하는 기관",
      "annex11": null,
      "doc4444": "A station in the aeronautical fixed service.",
      "faa_pcg": null,
      "kr_ats": "항공고정통 신업무를 담당하는 시설을 말한다."
    }
  },
  {
    "enName": "AERONAUTICAL GROUND LIGHT",
    "krName": "항공지상등화",
    "definitions": {
      "kr_proc": "항공기 자체등화를 제외한, 항공항행지원을 위한 모든 등화시설",
      "annex11": null,
      "doc4444": "Any light specially provided as an aid to air navigation, other than a light displayed on an aircraft.",
      "faa_pcg": null,
      "kr_ats": "항공기 자체 등화를 제외한 항행 지원을 위해 제공되는 모든 등화를 말한다. 항공정보간행물(AIP, Aeronautical Information Publication). 항행에 필요한 지속적인 성격의 항공정보 를 수록하기 위하여 정부당국이 발행하는 간행물을 말 한다."
    }
  },
  {
    "enName": "AERONAUTICAL INFORMATION MANUAL ; AIM",
    "krName": "항공정보매뉴얼",
    "definitions": {
      "kr_proc": "비행정보, 항공교통관제절차, 건강, 항공의학, 비행안전에 영향을 미치는 요인, 사고 및 장애보고, 항공지도 및 용도와 관련한 일반적인 항공정보를 운항승무원에게 제공을 위한 매뉴얼",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AERONAUTICAL INFORMATION PUBLICATION ; AIP",
    "krName": "항공정보간행물",
    "definitions": {
      "kr_proc": "항공기의 항행에 필수적인 최신 정보를 수록하고 있는 책자로서 국토교통부장관이 발행하는 간행물",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AERONAUTICAL MOBILE SERVICE",
    "krName": "항공이동업무",
    "definitions": {
      "kr_proc": "항공국과 항공기국 간 또는 항공기국 상호간의 이동통신업무로써, 여기에 구조용 항공기국도 참여할 수 있음. 즉 비상위치지시용 무선국도 지정된 조난 및 비상주파수로 동 통신업무에 참여할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "항공국 과 항공기국 간 또는 항공기국 상호간의 이동통신업무 를 말한다. 비상위치 지시용 무선국도 지정된 조난비상 주파수로 이 업무에 참여할 수 있다."
    }
  },
  {
    "enName": "AERONAUTICAL STATION",
    "krName": "항공국",
    "definitions": {
      "kr_proc": "항공이동업무를 수행하는 육상 기지국으로서, 경우에 따라 선박이나 해상구조물 등에 위치할 수도 있음.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "항공이동통신업무를 하는 육상 기지국을 말한다. 경우에 따라 항공국은 선박이나 해상구조물 등에 위치할 수도 있다."
    }
  },
  {
    "enName": "AERONAUTICAL TELECOMMUNICATION SERVICE",
    "krName": "항공통신업무",
    "definitions": {
      "kr_proc": "항공업무 목적으로 제공되는 모든 통신업무",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AERONAUTICAL TELECOMMUNICATION STATION",
    "krName": "항공통신국",
    "definitions": {
      "kr_proc": "항공통신업무를 수행하는 무선국",
      "annex11": "A station in the aeronautical telecommunication service.",
      "doc4444": "A station in the aeronautical telecommunication service.",
      "faa_pcg": null,
      "kr_ats": "항공통신업무를 수행하는 무선국을 말한다."
    }
  },
  {
    "enName": "AEROPLANE",
    "krName": "비행기",
    "definitions": {
      "kr_proc": "비행 중 양력을 주로 비행상태에 따라 고정된 표면에 발생하는 공기역학적 반작용으로부터 얻는, 공기보다 무거운 동력항공기",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AFFIRMATIVE",
    "krName": "",
    "definitions": {
      "kr_proc": "YES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Yes.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AFS, Aeronautical fixed service",
    "krName": "항공고정통신업무",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항 행의 안전 및 질서 있고 효율적이며 경제적인 항공업무 를 위하여 제공되는 특정 고정통신국 간의 통신업무를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "AIR",
    "krName": "",
    "definitions": {
      "kr_proc": "TAXIING(공중유도)[ICAO]. 헬리콥터 또는 수직이착륙기가 공항상공을 지표면효과를 고려하여 대기속도 37㎞/h(20kt) 이하로 비행하는 기동형태",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR DEFENSE IDENTIFICATION ZONE/ADIZ",
    "krName": "방공식별구역",
    "definitions": {
      "kr_proc": "자국의 국가방위를 위하여 영공 및 영해로부터 일정 범위를 연장하여 동 구역 내에 침투하는 비행체의 적아식별, 위치확인 및 통제를 위하여 설정된 구역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR NAVIGATION FACILITY",
    "krName": "항행안전시설",
    "definitions": {
      "kr_proc": "유선통신, 무선통신, 인공위성, 불빛, 색채 또는 전파(전파)를 이용하여 항공기의 항행을 돕기 위한 시설로서 국토교통부령으로 정하는 시설을 말한다.\n(참조) : 항공안전법 제2조제24호",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any facility used in, available for use in, or designed for use in, aid of air navigation, including landing areas, lights, any apparatus or equipment for disseminating weather information, for signaling, for radio-directional finding, or for radio or other electrical communication, and any other structure or mechanism having a similar purpose for guiding or controlling flight in the air or the landing and takeoff of aircraft. (See NAVIGATIONAL AID.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR ROUTE SURVEILLANCE RADAR",
    "krName": "항공로감시레이더",
    "definitions": {
      "kr_proc": "터미널공역 간 항공로 상에 있는 동안 항공기의 위치 탐지 및 시현을 위하여 사용되는 지역관제소(ACC)의 레이더. 관제사는 항공기가 ARSR 범위 내에 있을 때 레이더 항공교통관제업무를 제공 한다. 일부 지역관제소는 접근관제소가 제공하는 접근관제업무 보다는 다소 제한된 범위 내에서 터미널레이더서비스를 제공할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Air route traffic control center (ARTCC) radar used primarily to detect and display an aircraft’s position while en route between terminal areas. The ARSR enables controllers to provide radar air traffic control service when aircraft are within the ARSR coverage. In some instances, ARSR may enable an ARTCC to provide terminal radar services similar to but usually more limited than those provided by a radar approach control.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR START",
    "krName": "공중시동",
    "definitions": {
      "kr_proc": "항공기가 공중에서 훈련 또는 실제 엔진 정지 시 항공기 엔진의 시동.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The starting of an aircraft engine while the aircraft is airborne, preceded by engine shutdown during training flights or by actual engine failure.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR TAXI",
    "krName": "공중활주",
    "definitions": {
      "kr_proc": "보통 100피트 AGL 미만에서 수행되는 헬리콥터/수직 이착륙 항공기를 설명하기 위하여 사용된다. 항공기는 20KTS 이상의 속도로 Hover Taxi 또는 비행을 할 수 있다. 조종사는 비행 시, 안전한 속도/고도를 유지할 책임이 있다.\n(참조) : HOVER TAXIAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to describe a helicopter/VTOL aircraft movement conducted above the surface but normally not above 100 feet AGL. The aircraft may proceed either via hover taxi or flight at speeds more than 20 knots. The pilot is solely responsible for selecting a safe airspeed/altitude for the operation being conducted. (See HOVER TAXI.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR TAXI",
    "krName": "에어택시",
    "definitions": {
      "kr_proc": "회전익항공기 또는 단거리 이착륙 항공기가 지표로부터 대략 8킬로미터(25피트) 이상의 고도를 유지하면서 시간당 37킬로미터(20 노트)의 대지속도 이하로 공항상공을 이동하는 것",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to describe a helicopter/VTOL aircraft movement conducted above the surface but normally not above 100 feet AGL. The aircraft may proceed either via hover taxi or flight at speeds more than 20 knots. The pilot is solely responsible for selecting a safe airspeed/altitude for the operation being conducted. (See HOVER TAXI.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR TRAFFIC",
    "krName": "항공교통",
    "definitions": {
      "kr_proc": "비행장의 기동지역에서 운항하거나 주변 지역을 비행하는 모든 항공기\n(참조) : ICAO air traffic",
      "annex11": "All aircraft in flight or operating on the manoeuvring area of an aerodrome.",
      "doc4444": "All aircraft in flight or operating on the manoeuvring area of an aerodrome.",
      "faa_pcg": "All aircraft in flight or operating on the maneuvering area of an aerodrome.",
      "kr_ats": "비행 중 또는 비행장 기동지역에 서 운항하는 모든 항공기를 말한다."
    }
  },
  {
    "enName": "AIR TRAFFIC ADVISORY SERVICE",
    "krName": "항공교통정보조언업무",
    "definitions": {
      "kr_proc": "항공기가 계기비행계획에 따라 조언공역 내에서 운항하는 항공기간에 가능한 한 분리를 유지하기 위하여 항공교통관제기관에서 제공하는 업무",
      "annex11": "A service provided within advisory airspace to ensure separation, in so far as practical, between aircraft which are operating on IFR flight plans.",
      "doc4444": "A service provided within advisory airspace to ensure separation, in so far as practical, between aircraft which are operating on IFR flight plans.",
      "faa_pcg": null,
      "kr_ats": "조언공역 에서 IFR 비행계획에 따라 운항하는 항공기에 간의 분 리를 유지하기 위해 제공되는 업무를 말한다."
    }
  },
  {
    "enName": "AIR TRAFFIC CLEARANCE",
    "krName": "항공교통허가",
    "definitions": {
      "kr_proc": "관제공역 내에서 식별된 항공기간 충돌방지를 위한 목적과 특정 교통상황 하에서 진행 할 항공기를 위한 항공교통관제허가. 항공기의 조종사(PIC)는 비상상황에 처한 경우를 제외하고 수정허가를 발부받지 아니한 경우 VFR 또는 IFR 항공교통허가를 위반하여서는 아니 된다. 추가적으로, 조종사 가용 정보에 의거 다른 코스의 선택이 실질적으로 도움을 줄 수 있거나 항공기 장비제한 또는 항공사 절차에 의거 발부된 허가의 준수가 곤란한 경우, 조종사는 관제사가 발부한 허가와 다른 허가를 요구할 수 있다. 허가가 충분히 이해되지 않거나 비행안전을 위하여 수용할 수 없는 경우, 조종사는 확인 또는 수정허가를 요청할 수 있다. 운영상 및 안전문제에 있어서 관제사는 조종사의 요구를 수용하여야 한다. FAR part 91.3 (a) : “항공기 조종사는(PIC) 당해 항공기 운항에 대한 직접적인 책임 및 최종적인 권한이 있다”. 항공교통관제허가가 규칙 또는 규정을 위반토록 하여, 항공기를 위험한 상황에 처하게 할 것으로 판단되는 경우, 조종사는 수정허가를 요구할 책임이 있다.\n(참조) : ATC INSTRUCTIONICAO ATC CLEARANCE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An authorization by air traffic control for the purpose of preventing collision between known aircraft, for an aircraft to proceed under specified traffic conditions within controlled airspace. The pilot-in-command of an aircraft may not deviate from the provisions of a visual flight rules (VFR) or instrument flight rules (IFR) air traffic clearance except in an emergency or unless an amended clearance has been obtained. Additionally, the pilot may request a different clearance from that which has been issued by air traffic control (ATC) if information available to the pilot makes another course of action more practicable or if aircraft equipment limitations or company procedures forbid compliance with the clearance issued. Pilots may also request clarification or amendment, as appropriate, any time a clearance is not fully understood, or considered unacceptable because of safety of flight. Controllers should, in such instances and to the extent of operational practicality and safety, honor the pilot’s request. 14 CFR part 91.3(a) states: “The pilot in command of an aircraft is directly responsible for, and is the final authority as to, the operation of that aircraft.” THE PILOT IS RESPONSIBLE TO REQUEST AN AMENDED CLEARANCE if ATC issues a clearance that would cause a pilot to deviate from a rule or regulation, or in the pilot’s opinion, would place the aircraft in jeopardy. (See ATC INSTRUCTIONS.) (See ICAO term AIR TRAFFIC CONTROL CLEARANCE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR TRAFFIC CONTROL",
    "krName": "항공교통관제",
    "definitions": {
      "kr_proc": "공중충돌의 방지 및 안전ㆍ질서ㆍ신속한 항공교통흐름을 조절ㆍ촉진하기 위하여 항공교통관제기관에 의하여 행해지는 업무.\n(참조) : ATC SERVICE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A service operated by appropriate authority to promote the safe, orderly and expeditious flow of air traffic. (See ICAO term AIR TRAFFIC CONTROL SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR TRAFFIC CONTROL CLEARANCE",
    "krName": "항공교통관제허가",
    "definitions": {
      "kr_proc": "항공기가 항공교통 관제기관에서 지정한 조건하에서 진행할 수 있는 허가.\n(주기) 1 : 편의상 “항공교통관제허가” 용어는 해당 상황에서 사용될 때는 종종 “허가”로 생략된다.\n(주기) 2 : 생략된 “허가” 용어는 지상활주, 이륙, 출발, 항공로, 접근 또는 착륙이란 말 앞에 붙어서 항공교통 관제허가와 관련된 비행의 특정사항을 나타낸다.",
      "annex11": "Authorization for an aircraft to proceed under conditions specified by an air traffic control unit. Note 1.— For convenience, the term “air traffic control clearance” is frequently abbreviated to “clearance” when used in appropriate contexts. Note 2.— The abbreviated term “clearance” may be prefixed by the words “taxi,” “take-off,” “departure,” “en route,” “approach” or “landing” to indicate the particular portion of flight to which the air traffic control clearance relates.",
      "doc4444": "Authorization for an aircraft to proceed under conditions specified by an air traffic control unit. Note 1.— For convenience, the term “air traffic control clearance” is frequently abbreviated to “clearance” when used in appropriate contexts. Note 2.— The abbreviated term “clearance” may be prefixed by the words “taxi”, “take-off”, “departure”, “en-route”, “approach” or “landing” to indicate the particular portion of flight to which the air traffic control clearance relates.",
      "faa_pcg": "Authorization for an aircraft to proceed under conditions specified by an air traffic control unit. Note 1: For convenience, the term air traffic control clearance is frequently abbreviated to clearance when used in appropriate contexts. Note 2: The abbreviated term clearance may be prefixed by the words taxi, takeoff, departure, en route, approach or landing to indicate the particular portion of flight to which the air traffic control clearance relates.",
      "kr_ats": "항공교 통관제시설이 지정하는 조건에 따라 항공기가 비행하도 록 허가하는 것을 말한다.(이하 ‘허가’라 한다)"
    }
  },
  {
    "enName": "AIR TRAFFIC CONTROL INSTRUCTION",
    "krName": "항공교통관제지시",
    "definitions": {
      "kr_proc": "조종사에게 특정행동을 하도록 요구하기 위하여 항공교통관제기관이 발부하는 지시",
      "annex11": null,
      "doc4444": "Directives issued by air traffic control for the purpose of requiring a pilot to take a specific action.",
      "faa_pcg": null,
      "kr_ats": "조종 사에게 특정 행동을 취하도록 요구하기 위하여 항공교 통관제시설이 발부하는 지시를 말한다."
    }
  },
  {
    "enName": "AIR TRAFFIC CONTROL SERVICE",
    "krName": "항공교통관제업무",
    "definitions": {
      "kr_proc": "다음의 각호의 목적을 위하여 항공교통관제기관에서 제공하는 업무\n1. 충돌방지\n가. 항공기 간\n나. 기동지역 내에서 항공기와 장애물 간\n2. 항공교통의 촉진 및 질서유지\n3. 항공기의 안전하고 효율적인 운항에 필요한 조언 및 정보제공\n4. 필요시 수색ㆍ구조를 필요로 하는 항공기에 대하여 조종사ㆍ항공관계부서에 통보ㆍ협조",
      "annex11": "A service provided for the purpose of: a) preventing collisions: 1) between aircraft, and 2) on the manoeuvring area between aircraft and obstructions; and b) expediting and maintaining an orderly flow of air traffic.",
      "doc4444": "A service provided for the purpose of: a) preventing collisions: 1) between aircraft, and 2) on the manoeuvring area between aircraft and obstructions; and b) expediting and maintaining an orderly flow of air traffic.",
      "faa_pcg": "A service provided for the purpose of: a. Preventing collisions: 1. Between aircraft; and 2. On the maneuvering area between aircraft and obstructions. b. Expediting and maintaining an orderly flow of air traffic.",
      "kr_ats": "다음의 목 적을 위해 제공되는 업무를 말한다. 가) 충돌 방지: 1) 항공기 간; 및 2) 기동지역 내의 항공기와 장애물 간; 및 나) 항공교통의 촉진 및 질서 유지"
    }
  },
  {
    "enName": "AIR TRAFFIC CONTROL SPECIALIST",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제업무를 제공토록 인가된 사람.\n(참조) : ATC  ICAO controller",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A person authorized to provide air traffic control service. (See AIR TRAFFIC CONTROL.) (See FLIGHT SERVICE STATION.) (See ICAO term CONTROLLER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR TRAFFIC CONTROL UNIT",
    "krName": "항공교통관제기관",
    "definitions": {
      "kr_proc": "지역관제소, 접근관제소 또는 비행장관제탑 등 여러 가지 의미를 가지는 일반적인 용어",
      "annex11": "A generic term meaning variously, area control centre, approach control unit or aerodrome control tower.",
      "doc4444": "A generic term meaning variously, area control centre, approach control unit or aerodrome control tower. 10/11/16",
      "faa_pcg": null,
      "kr_ats": "항공교통관 제업무를 수행하는 시설로 지역관제소, 접근관제소 또 는 비행장관제탑 등을 포함한다. ."
    }
  },
  {
    "enName": "AIR TRAFFIC FLOW MANAGEMENT ; ATFM",
    "krName": "항공교통흐름관리",
    "definitions": {
      "kr_proc": "ATC 당국이 설정한 교통량을 효율적으로 처리함과 동시에 항공교통의 안전하고 질서 있으며 신속한 흐름을 제공하기 위한 업무",
      "annex11": null,
      "doc4444": "A service established with the objective of contributing to a safe, orderly and expeditious flow of air traffic by ensuring that ATC capacity is utilized to the maximum extent possible, and that the traffic volume is compatible with the capacities declared by the appropriate ATS authority.",
      "faa_pcg": null,
      "kr_ats": "항공교통 수용능력(ATC capacity)을 최대한으로 활용하 고, 교통량이 해당 항공교통업무기관이 설정한 항공교 통 수용량을 초과하지 않도록 함으로써 항공교통의 안 전하고 질서 있으며 신속한 흐름에 기여할 목적으로 설 정된 업무를 말한다."
    }
  },
  {
    "enName": "AIR TRAFFIC MANAGEMENT",
    "krName": "항공교통관리",
    "definitions": {
      "kr_proc": "모든 당사자와 공중 및 지상기반 기능부서와 협력하여 시설 및 서비스의 원활한 제공을 통한 안전하고, 경제적이며, 효율적인 항공교통업무, 공역관리 및 항공교통흐름 관리의 역동적인 통합관리.\nAIR TRAFFIC SERVICE(항공교통업무)\n1. 비행정보 업무 (Flight Information Service)\n2. 경보 업무 (Alerting Service)\n3. 항공교통 조언업무 (Air Traffic Advisory Service)\n4. 항공교통 관제업무 (Air Traffic Control Service)가. 지역관제업무 (Area Control Service)나. 접근관제업무 (Approach Control Service)다. 공항관제업무 (Airport Control Service)",
      "annex11": null,
      "doc4444": "The dynamic, integrated management of air traffic and airspace including air traffic services, airspace management and air traffic flow management — safely, economically and efficiently — through the provision of facilities and seamless services in collaboration with all parties and involving airborne and ground- based functions.",
      "faa_pcg": null,
      "kr_ats": "항공교통 업무, 공역관리업무 및 항공교통흐름관리업무를 포함한 시설의 제공 및 관련 이해당사자들 간의 협력을 통한 중단없는 서비스 제공을 통해 안전하고, 경제적이며 효 율적으로 항공교통 및 공역의 역동적이고 통합적인 관 리를 말한다."
    }
  },
  {
    "enName": "Air traffic management system",
    "krName": "항공교통관리시스템",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "공대지 그리고/또는 우주기반 통신, 항행 및 감시시스 - 개정 : 2026.07.06. 항공교통업무기준 템이 지원하는 인간, 정보, 기술, 시설 및 업무의 협력 적인 통합을 통해 항공교통관리를 제공하는 시스템을 말한다.",
      "annex11": "",
      "doc4444": "A system that provides ATM through the collaborative integration of humans, information, technology, facilities and services, supported by air and ground- and/or space-based communications, navigation and surveillance.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "AIR TRAFFIC SERVICE AIRSPACE",
    "krName": "항공교통업무공역",
    "definitions": {
      "kr_proc": "특정한 비행이 행해지고 항공교통업무와 운항규칙이 지정되어 있는 공역으로서 알파벳순(A 내지 G등급화 지정) 설정되는 공역",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "특정한 형식의 비행이 이루어지고 항공교통업무와 운항 규칙이 정해져 있는 지정된 규모의 공역으로 알파벳순으로 등 급을 지정한 공역을 말한다. 항공교통업무보고취급소(Air traffic service reporting office). 항공교통업무 및 항공기 출발 전에 비행계획서 제출에 관한 보고를 접수하기 위하여 설치된 시설을 말 한다. 주기 - 항공교통업무보고취급소는 단독으로 또는 항 공교통업무기관이나 항공정보업무기관 등과 통합해서 설치될 수 있다."
    }
  },
  {
    "enName": "AIR TRAFFIC SERVICE UNIT",
    "krName": "항공교통업무기관",
    "definitions": {
      "kr_proc": "항공교통관제기관, 비행정보소 또는 항공교통업무보고취급소 등 여러 가지 의미를 가지는 일반적인 용어",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "해당 공 로부터 「항공안전법」에 따라 위임받은 기관을 말한다."
    }
  },
  {
    "enName": "AIR TRAFFIC SERVICES REPORTING OFFICE",
    "krName": "항공교통업무보고취급소",
    "definitions": {
      "kr_proc": "항공교통업무 및 항공기가 출발 전에 비행계획서 제출에 관한 사항을 접수하기 위한 목적으로 설치한 기관",
      "annex11": "A unit established for the purpose of receiving reports concerning air traffic services and flight plans submitted before departure. Note.— An air traffic services reporting office may be established as a separate unit or combined with an existing unit, such as another air traffic services unit, or a unit of the aeronautical information service.",
      "doc4444": "A unit established for the purpose of receiving reports concerning air traffic services and flight plans submitted before departure. Note.— An air traffic services reporting office may be established as a separate unit or combined with an existing unit, such as another air traffic services unit, or a unit of the aeronautical information service.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR-GROUND COMMUNICATION",
    "krName": "공지통신",
    "definitions": {
      "kr_proc": "항공기와 지상의 무선국 또는 지상국간의 양방향 통신",
      "annex11": "Two-way communication between aircraft and stations or locations on the surface of the earth.",
      "doc4444": "Two-way communication between aircraft and stations or locations on the surface of the earth.",
      "faa_pcg": null,
      "kr_ats": "항공기와 지상의 무선국 간의 양방향 통신을 말한다."
    }
  },
  {
    "enName": "AIR-GROUND CONTROL RADIO STATION",
    "krName": "공지관제무선국",
    "definitions": {
      "kr_proc": "일정 지역내 항공기의 운항 및 관제에 관한 통신을 취급하는 항공통신국",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIR-REPORT",
    "krName": "항공기보고",
    "definitions": {
      "kr_proc": "위치, 운항 상 및/또는 기상보고의 기준에 따라 실시하는 비행중인 항공기로부터의 보고",
      "annex11": null,
      "doc4444": "A report from an aircraft in flight prepared in conformity with requirements for position, and operational and/or meteorological reporting.",
      "faa_pcg": null,
      "kr_ats": "비행중인 항공기가 위치, 운항상 및/또는 기상에 관한 보고의 기준에 따라 실시하는 보 고를 말한다."
    }
  },
  {
    "enName": "Air-taxiing",
    "krName": "공중유도",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "회전익항공기/수직이·착륙항공기가 일반적으로 대지속도 37㎞/h(20㏏) 미만으로 지표면 효 과로 비행장 지표 상공을 비행하는 기동형태를 말한다. 제정 : 2013.05.03. - 91 별표 주기 － 실제고도는 각 운항별 달라질 수 있으며, 일 부 회전익항공기의 경우 지면 효과(ground effect)를 감 소시키거나, 화물운송을 위하여 8m (25ft) AGL 이상으 로 공중유도를 요청할 수도 있다.",
      "annex11": "",
      "doc4444": "Movement of a helicopter/VTOL above the surface of an aerodrome, normally in ground effect and at a ground speed normally less than 37 km/h (20 kt). Note.— The actual height may vary, and some helicopters may require air-taxiing above 8 m (25 ft) AGL to reduce ground effect turbulence or provide clearance for cargo slingloads.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "AIR-TO-GROUND COMMUNICATION",
    "krName": "공대지통신",
    "definitions": {
      "kr_proc": "항공기와 지구표면에 있는 무선국 또는 지점 간 단방향 통신",
      "annex11": null,
      "doc4444": "One-way communication from aircraft to stations or locations on the surface of the earth.",
      "faa_pcg": null,
      "kr_ats": "항공기가 지상의 무선국과 수행하는 단방향 통신을 말한다."
    }
  },
  {
    "enName": "AIRBORNE",
    "krName": "비행 중",
    "definitions": {
      "kr_proc": "항공기의 모든 부분이 지상에서 떨어져 있을 때 항공기는 비행 중으로 간주된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft is considered airborne when all parts of the aircraft are off the ground.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRBORNE COLLISION AVOIDANCE SYSTEM",
    "krName": "ACAS:공중충돌경고장치",
    "definitions": {
      "kr_proc": "조종사에게 2차감시레이더(SSR) 응답기를 장착한 항공기와의 잠재적 충돌에 관한 조언을 제공하는 장비로써, 지상장비와 독립적으로 운영되며 2차감시레이더 응답기신호를 근거로 작동하는 항공기시스템",
      "annex11": "An aircraft system based on secondary surveillance radar (SSR) transponder signals which operates independently of ground-based equipment to provide advice to the pilot on potential conflicting aircraft that are equipped with SSR transponders.",
      "doc4444": "An aircraft system based on secondary surveillance radar (SSR) transponder signals which operates independently of ground-based equipment to provide advice to the pilot on potential conflicting aircraft that are equipped with SSR transponders.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRBORNE DELAY",
    "krName": "공중지연",
    "definitions": {
      "kr_proc": "체공으로 인한 지연시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Amount of delay to be encountered in airborne holding.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRCRAFT",
    "krName": "항공기",
    "definitions": {
      "kr_proc": "공중에서의 비행에 사용될 목적 또는 실제 사용되는 장치로서 항공교통관제 용어로 쓰일 때는 승무원을 포함함\n(참조) : ICAO aircraft, 항공안전법",
      "annex11": "Any machine that can derive support in the atmosphere from the reactions of the air other than the reactions of the air against the earth’s surface. 8/11/18 1-2",
      "doc4444": "Any machine that can derive support in the atmosphere from the reactions of the air other than the reactions of the air against the earth’s surface.",
      "faa_pcg": "Any machine that can derive support in the atmosphere from the reactions of the air other than the reactions of the air against the earth’s surface.",
      "kr_ats": "공기의 반작용(지표면 또는 수면에 대 한 공기의 반작용은 제외한다. 이하 같다)으로 뜰 수 있 로 정하는 기준에 해당하는 다음 각 목의 기기와 그 밖 에 대통령령으로 정하는 기기를 말한다. - 개정 : 2026.07.06. 항공교통업무기준"
    }
  },
  {
    "enName": "Aircraft address",
    "krName": "항공기어드레스",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "공지통신, 항행, 감시 목적으로 항공기에 배정하는 24비트의 고유조합을 말 한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "AIRCRAFT APPROACH CATEGORY",
    "krName": "항공기 접근범주",
    "definitions": {
      "kr_proc": "최대 착륙 중량에서 착륙 시 실속속도의 1.3배에 기초한 항공기 분류를 말하며 원칙적으로 한 항공기는 한 범주에만 속한다. 당해 범주의 속도 범위 상한선을 넘어서 기동의 필요성이 있는 경우, 차기 범주의 최저치를 사용하여야 한다. 그 예로서, 카테고리 A에 속하는 항공기가 91노트 이상으로 착륙을 위한 선회 시 접근카테고리 B 최저치를 사용하여야 한다. 항공기 범주는 다음 각 호와 같다.\n1. 범주 A\n- 91노트 미만\n2. 범주 B\n- 91노트 이상 121노트 미만\n3. 범주 C\n- 121노트 이상 141노트 미만\n4. 범주 D\n- 141노트 이상 166노트 미만\n5. 범주 E\n- 166노트 이상",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A grouping of aircraft based on a speed of 1.3 times the stall speed in the landing configuration at maximum gross landing weight. An aircraft must fit in only one category. If it is necessary to maneuver at speeds in excess of the upper limit of a speed range for a category, the minimums for the category for that speed must be used. For example, an aircraft which falls in Category A, but is circling to land at a speed in excess of 91 knots, must use the approach Category B minimums when circling to land. The categories are as follows: a. Category A− Speed less than 91 knots. b. Category B− Speed 91 knots or more but less than 121 knots. c. Category C− Speed 121 knots or more but less than 141 knots. d. Category D− Speed 141 knots or more but less than 166 knots. e. Category E− Speed 166 knots or more. (Refer to 14 CFR part 97.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRCRAFT CLASSES",
    "krName": "항공기등급",
    "definitions": {
      "kr_proc": "항적난기류 분리를 목적으로 하는 항공기 분류이며, 항공기등급은 다음 각 호와 같이 분류한다.\n1. 초대형(SUPER)\n- A380-800 항공기\n2. 대형(HEAVY)\n- 비행 시의 중량에 상관없이 최대이륙중량이 136,000kg (300,000파운드) 이상인 항공기\n3. 중형(MEDIUM)\n- 최대이륙중량이 7,000Kg (15,000파운드) 초과 136,000kg (300,000파운드) 미만인 항공기\n4. 소형(LIGHT)\n- 최대이륙중량이 7,000Kg (15,000파운드) 이하인 항공기\n(참고 : FAA Order 7110.65는 항적난기류 항공기 등급을 Super, Heavy, Large, Small 로 분류하고 있음)\nAIRCRAFT WAKE TURBULENCE GROUP(항적난기류 그룹)[민 적용]\n1. 그룹 A(Group A)\n- 최대이륙중량이 136,000kg 이상이고, 주 날개폭(Wing Span)이 74.68m 초과 80m 이하인 항공기\n2. 그룹 B(Group B)\n- 최대이륙중량이 136,000kg 이상이고, 주 날개폭(Wing Span)이 53.34m 초과 74.68m 이하인 항공기\n3. 그룹 C(Group C)\n- 최대이륙중량이 136,000kg 이상이고, 주 날개폭(Wing Span)이 38.1m 초과 53.34m 이하인 항공기\n4. 그룹 D(Group D)\n- 최대이륙중량이 18,600kg 초과 136,000kg 미만이고, 주 날개폭(Wing Span)이 32m를 초과하는 항공기\n5. 그룹 E(Group E)\n- 최대이륙중량이 18,600kg 초과 136,000kg 미만이고, 주 날개폭(Wing Span)이 27.43m 초과 32m 이하인 항공기\n6. 그룹 F(Group F)\n- 최대이륙중량이 18,600kg 초과 136,000kg 미만이고, 주 날개폭(Wing Span)이 27.43m 이하인 항공기\n7. 그룹 G(Group G)\n- 주 날개폭(Wing Span)에 관계없이, 최대이륙중량 18,600kg 이하인 항공기\n(주기) 그룹 A(Group A)는 기존 항공기 등급의‘초대형(super)’, 그룹 B, C(Group B, C)는 기존 항공기 등급의‘대형(heavy)’과 동일하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "For the purposes of Wake Turbulence Separation Minima, ATC classifies aircraft as Super, Heavy, Large, and Small as follows: a. Super− The Airbus A−380−800 (A388) is classified as a super aircraft. A super aircraft is a Category A for terminal wake turbulence separation purposes. b. Heavy− Aircraft capable of takeoff weights of 300,000 pounds or more whether or not they are operating at this weight during a particular phase of flight. Heavy aircraft are Category B, C, or D for terminal wake turbulence separation purposes. c. Large− Aircraft of more than 41,000 pounds, maximum certificated takeoff weight, up to but not including 300,000 pounds. Large aircraft are Category F and G for terminal wake turbulence separation purposes. d. Small− Aircraft of 41,000 pounds or less maximum certificated takeoff weight. Small aircraft are Category H and I for terminal wake turbulence separation purposes. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRCRAFT CONFLICT",
    "krName": "항공기충돌경보",
    "definitions": {
      "kr_proc": "두 항공기간 또는 항공기와 공역 내에서의 충돌예상, 분리가 5마일 이하로 근접이 예상 될 때 적색경보가 발부된다.\n황색경보는 항공기간 5마일에서 12마일로 근접이 예상될 경우이며, 청색경보는 항공기와 공역 간 이용된다.\n(참조) : EN-ROUTE DECISION SUPPORT TOOL",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Predicted conflict, within EDST of two aircraft, or between aircraft and airspace. A Red alert is used for conflicts when the predicted minimum separation is 5 nautical miles or less. A Yellow alert is used when the predicted minimum separation is between 5 and approximately 12 nautical miles. A Blue alert is used for conflicts between an aircraft and predefined airspace. (See EN ROUTE DECISION SUPPORT TOOL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRCRAFT IDENTIFICATION",
    "krName": "항공기식별부호",
    "definitions": {
      "kr_proc": "공지통신에서 사용되는 항공기호출부호와 서로 일치시키거나 동일하게 코드화시킨 문자ㆍ숫자 또는 이들의 조합으로 이루어진 부호이며, 지점 간 항공교통업무 통신에서 항공기식별을 하기 위하여 사용된다.",
      "annex11": null,
      "doc4444": "A group of letters, figures or a combination thereof which is either identical to, or the coded equivalent of, the aircraft call sign to be used in air-ground communications, and which is used to identify the aircraft in ground-ground air traffic services communications.",
      "faa_pcg": null,
      "kr_ats": "공지통신에서 사용되는 항공기 호출부호와 일치하거나 동일하게 코드 화시킨 문자, 숫자 또는 이들의 조합으로 이루어진 부 호를 말하며, 기지국간 항공교통업무 통신에서 항공기 식별을 위하여 사용되는 것을 말한다."
    }
  },
  {
    "enName": "AIRCRAFT LIST(ACL)",
    "krName": "",
    "definitions": {
      "kr_proc": "EDST의 화면으로 특정 섹터 공역에 현재 혹은 예상되는 항공기를 목록화 한다. 이 화면은 원문의 항공기 데이터 정보를 포함하며 섹터 팀이 구체적으로 필요로 한 것들을 여러 가지 순서로 분류한다.\n(참조) : EN ROUTE DECISION SUPPORT TOOL.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A view available with EDST that lists aircraft currently in or predicted to be in a particular sector’s airspace. The view contains textual flight data information in line format and may be sorted into various orders based on the specific needs of the sector team. (See EN ROUTE DECISION SUPPORT TOOL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRCRAFT OBSERVATION",
    "krName": "항공기관측",
    "definitions": {
      "kr_proc": "비행중인 항공기가 수행하는 하나 이상의 기상요소에 대한 관측",
      "annex11": null,
      "doc4444": "The evaluation of one or more meteorological elements made from an aircraft in flight.",
      "faa_pcg": null,
      "kr_ats": "비행 중인 항공기가 하나 이상의 기상요소에 대해 관찰·평가를 하는 것을 말한다."
    }
  },
  {
    "enName": "AIRCRAFT PROXIMITY",
    "krName": "항공기근접",
    "definitions": {
      "kr_proc": "조종사 또는 항공교통업무종사자가 항공기간의 거리와 상대적인 위치 및 속도를 고려하여 관련 항공기의 안전이 저해되었다고 판단하는 상황으로 항공기근접은 다음과 같이 분류한다.\nㆍRisk of collision\n(충돌위험)\n- 항공기간의 심각한 충돌 위험이 있었던 경우\nㆍSafety not assured\n(안전 미확보)\n- 항공기간 위태로운 충돌 위험이 있었던 경우\nㆍNo risk of collision\n(충돌위험 없음)\n- 표준분리기준이상의 간격이 유지되었고, 충돌 위험이 없었을 경우\nㆍRisk not determined\n(위험미결정)\n- 위험정도 결정에 필요한 자료가 불충분하거나 명확하지 않을 경우\n⇒ 조종사 특별보고\n- 두 항공기간의 간격이 150미터(500피트)이상 이지만, 조종사가 충돌위험이 있었다고 특별히 보고하는 경우",
      "annex11": null,
      "doc4444": "A situation in which, in the opinion of a pilot or air traffic services personnel, the distance between aircraft as well as their relative positions and speed have been such that the safety of the aircraft involved may have been compromised. An aircraft proximity is classified as follows:",
      "faa_pcg": null,
      "kr_ats": "조종사 또는 항공교통업 무종사자가 항공기간의 거리와 상대적인 위치 및 속도 를 고려하여 관련 항공기의 안전이 저해되었다고 판단 하는 상황을 말한다. 항공기근접은 다음과 같이 분류된 다. (항공기근접을 항공기준사고, 항공안전장애, 기타 이 벤트 등으로 분류하는 사항은 별도의 기준에 따라 실시 한다) 가) 충돌위험(Risk of collision). 항공기간 심각한 충돌 위험이 있었을 경우 나) 안전 미확보(Safety not assured). 항공기의 안전 에 지장이 있었을 경우 다) 충돌위험 없음(No risk of collision). 충돌위험이 없었을 경우 라) 위험미결정(Risk not determined). 위험정도 결정 에 필요한 자료가 불충분하거나, 상반되는 증거 로 인하여 결정이 불가능한 경우"
    }
  },
  {
    "enName": "AIRMET",
    "krName": "항공종사자 기상정보",
    "definitions": {
      "kr_proc": "저고도에서 운항하는 항공기의 안전에 영향을 미치는 항공로 기상현상의 예상 또는 발생 등 기상대가 제공하는 정보를 말한다. 이 경우 관련 비행정보구역내의 저고도에서 운항하는 항공기에게 이미 발부된 예보는 생략한다.\n(참조) : AWWCONVECTIVE SIGMETSIGMETCWAAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRMET information",
    "krName": "저고도위험기상정보",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "저고도 항공 기 운항의 안전에 영향을 미치며 당해 비행정보구역 및 그의 일부지역에 이미 발행된 예보에 포함되지 않은 항 공로상 발생 및 발생 가능한 특정 기상현상에 관해 기 상감시소가 발행한 정보를 말한다.",
      "annex11": "",
      "doc4444": "Information issued by a meteorological watch office concerning the occurrence or expected occurrence of specified en-route weather phenomena which may affect the safety of low-level aircraft operations and which was not already included in the forecast issued for low-level flights in the flight information region concerned or sub-area thereof.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "AIRPORT",
    "krName": "비행장",
    "definitions": {
      "kr_proc": "항공기의 이ㆍ착륙(이수 및 착수를 포함)을 위하여 사용되는 육지 또는 수면의 건물을 포함한다.\n(참조) : 항공안전법 제2조제3호",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An area on land or water that is used or intended to be used for the landing and takeoff of aircraft and includes its buildings and facilities, if any.",
      "kr_ats": "공항시설법 제2조제2항에 따라 항 공기의 이륙(이수를 포함한다. 이하 같다), 착륙(착수를 포함한다. 이하 같다)을 위하여 사용되는 육지 또는 수 면을 말한다. 주기 - 비행계획 및 항공교통업무 전문에 포함되는 \" 비행장\"은 헬리콥터나 열기구 등 특정 유형의 항공기 또는 경량항공기(이하 \"항공기\"라 한다)가 이용하는 비 행장 이외의 장소를 나타내기 위하여 사용할 수 있다."
    }
  },
  {
    "enName": "AIRPORT ADVISORY AREA",
    "krName": "공항조언구역",
    "definitions": {
      "kr_proc": "관제탑이 설치되지 않았거나 운영되지 않는 공항으로부터 반경 10마일 이내의 구역과 FSS가 위치한 구역.\n(참조) : LOCAL AIRPORT ADVISORYAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The area within ten miles of an airport without a control tower or where the tower is not in operation, and on which a Flight Service Station is located. (See LOCAL AIRPORT ADVISORY.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT ARRIVAL RATE",
    "krName": "공항도착수용률",
    "definitions": {
      "kr_proc": "공항 또는 공역이 ACC로부터 시간당 수용할 수 있는 도착항공기의 숫자를 표시하는 동적인 수치. 공항수용률은 연속적인 도착항공기간에 요구되는 간격을 산출하기 위하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A dynamic input parameter specifying the number of arriving aircraft which an airport or airspace can accept from the ARTCC per hour. The AAR is used to calculate the desired interval between successive arrival aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT DEPARTURE RATE",
    "krName": "공항출발수용률",
    "definitions": {
      "kr_proc": "공항 또는 공역이 시간당 수용할 수 있는 출발항공기의 숫자를 표시하는 동적인 수치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A dynamic parameter specifying the number of aircraft which can depart an airport and the airspace can accept per hour.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT ELEVATION",
    "krName": "공항표고",
    "definitions": {
      "kr_proc": "평균해면고도로부터 피트/미터 로 측정된 공항의 사용 활주로의 가장 높은 지점의 고도.\n(참조) : TOUCHDOWN ZONE ELEVATION, ICAO AERODROME ELEVATION",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The highest point of an airport’s usable runways measured in feet from mean sea level. (See TOUCHDOWN ZONE ELEVATION.) (See ICAO term AERODROME ELEVATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT INFORMATION AID",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : AIRPORT INFORMATION DESK)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT INFORMATION DESK",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사 자체 임무보고, 비행계획 작성, 비행계획서 정리의 목적을 가진 공항무인시설.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT LIGHTING",
    "krName": "공항등",
    "definitions": {
      "kr_proc": "공항에 설치된 여러 가지 등(LIGHT).",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Various lighting aids that may be installed on an airport. Types of airport lighting include: a. Approach Light System (ALS)− An airport lighting facility which provides visual guidance to landing aircraft by radiating light beams in a directional pattern by which the pilot aligns the aircraft with the extended centerline of the runway on his/her final approach for landing. Condenser-Discharge Sequential Flashing Lights/Sequenced Flashing Lights may be installed in conjunction with the ALS at some airports. Types of Approach Light Systems are: 1. ALSF-1− Approach Light System with Sequenced Flashing Lights in ILS Cat-I configuration. 2. ALSF-2− Approach Light System with Sequenced Flashing Lights in ILS Cat-II configuration. The",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT MARKING AIDS",
    "krName": "공항표지보조물",
    "definitions": {
      "kr_proc": "특정 활주로, 활주로 threshold, 중심선, 대기선 등화를 식별할 수 있도록 활주로 및 유도로 상에 사용된 표식. 활주로는 용도에 맞추어 다음과 같이 표시하여야 한다.\n1. 시계접근\n2. 비정밀계기접근\n3. 정밀 계기접근(AIM 참고)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Markings used on runway and taxiway surfaces to identify a specific runway, a runway threshold, a centerline, a hold line, etc. A runway should be marked in accordance with its present usage such as: a. Visual. b. Nonprecision instrument. c. Precision instrument. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT REFERENCE POINT",
    "krName": "공항 참조점",
    "definitions": {
      "kr_proc": "활주로(공항)의 기하학적 중심점",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The approximate geometric center of all usable runway surfaces.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT ROTATING BEACON",
    "krName": "공항 회전식별등",
    "definitions": {
      "kr_proc": "항행중의 항공기에 비행장의 위치를 알려주기 위하여 비행장 또는 그 주변에 설치하는 등화로서 보조비행장등대 외의 등화. 민간공항에서는 백색 및 녹색 섬광등을 교체시키는 것은 공항의 위치를 표시한다. 군 공항에서는 백색 및 녹색이 섬광하나 녹색등 간에 백색등이 두번 섬광하는 민간 비컨과는 다르다.\n(참조) : SPECIAL VFR OPERATION,\nINSTRUMENT FLIGHT RULES,\nAIM,\nICAO AERODROME BEACON",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A visual NAVAID operated at many airports. At civil airports, alternating white and green flashes indicate the location of the airport. At military airports, the beacons flash alternately white and green, but are differentiated from civil beacons by dualpeaked (two quick) white flashes between the green flashes. (See INSTRUMENT FLIGHT RULES.) (See SPECIAL VFR OPERATIONS.) (See ICAO term AERODROME BEACON.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT SURFACE DETECTION EQUIPMENT",
    "krName": "공항지표면탐지기",
    "definitions": {
      "kr_proc": "항공기 및 차량을 포함하여 공항 지표면상의 모든 주요물체를 탐지하고 모든 영상을 관제탑에 있는 레이더콘솔에 나타나도록 특별히 고안된 레이더장비. 관제탑 근무자에 의하여 활주로와 유도로상에 있는 항공기 및/또는 차량의 육안관측을  보조하기 위하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Surveillance equipment specifically designed to detect aircraft, vehicular traffic, and other objects, on the surface of an airport, and to present the image on a tower display. Used to augment visual observation by tower personnel of aircraft and/or vehicular movements on runways and taxiways. There are three ASDE systems deployed in the NAS: a. ASDE−3− a Surface Movement Radar. b. ASDE−X− a system that uses an X−band Surface Movement Radar, multilateration, and ADS−B. c. Airport Surface Surveillance Capability (ASSC)− A system that uses Surface Movement Radar, multilateration, and ADS−B.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT SURVEILLANCE RADAR",
    "krName": "공항 감시레이더",
    "definitions": {
      "kr_proc": "터미널공역에 있는 항공기를 탐지 및 시현시키기 위하여 사용되는 접근관제 레이더. 공항감시레이더는 거리 및 방위정보는 제공하지만 고도정보는 제공하지 않는다. 공항감시레이더의 포착범위는 60마일까지 확장될 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Approach control radar used to detect and display an aircraft’s position in the terminal area. ASR provides range and azimuth information but does not provide elevation data. Coverage of the ASR can extend up to 60 miles.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT TAXI CHARTS",
    "krName": "공항유도로지도",
    "definitions": {
      "kr_proc": "(참조 : AERONAUTICAL CHART)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AERONAUTICAL CHART.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT TRAFFIC CONTROL SERVICE",
    "krName": "공항교통관제업무",
    "definitions": {
      "kr_proc": "이동지역 및 공항근처에서 항공기운항에 대하여 관제탑에 의하여 제공되는 업무.\n(참조) : MOVEMENT AREA,\nTOWER,\nICAO AERODROME CONTROL SERVICE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A service provided by a control tower for aircraft operating on the movement area and in the vicinity of an airport. (See MOVEMENT AREA.) (See TOWER.) (See ICAO term AERODROME CONTROL SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT TRAFFIC CONTROL TOWER",
    "krName": "공항교통관제탑",
    "definitions": {
      "kr_proc": "(참조 : TOWER)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TOWER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPORT/FACILITY DIRECTORY",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사용 참고 간행물로서 모든 공항, 수상 비행장, 헬기장의 항행안전시설 주파수 목록, 특별 공지와 절차 등을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRPROX",
    "krName": "AIRPROX",
    "definitions": {
      "kr_proc": "항공교통사고보고서의 항공기간 근접을 나타내는 용어",
      "annex11": null,
      "doc4444": "The code word used in an air traffic incident report to designate aircraft proximity.",
      "faa_pcg": null,
      "kr_ats": "항공안전장애 및 항공기 준사고에 대한 안전 보고 등에서 항공기간 근접을 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "AIRSPACE HIERARCHY",
    "krName": "공역체계",
    "definitions": {
      "kr_proc": "공역 내에 등급이 정해져 있고 공역이 중복될 경우에는 등급 A는 등급 B에, 등급 B는 등급 C에, 등급 C는 등급 D에, 등급 D는 등급 E에, 등급 E는 등급 G에 우선한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Within the airspace classes, there is a hierarchy and, in the event of an overlap of airspace: Class A preempts Class B, Class B preempts Class C, Class C preempts Class D, Class D preempts Class E, and Class E preempts Class G.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRSPEED",
    "krName": "속도",
    "definitions": {
      "kr_proc": "주위를 둘러싸고 있는 공기에 대한 상대적인 항공기 속도.\n1. 지시대기속도(Indicated Airspeed) : 항공기 계기에 나타난 속도. 조종사/관제사 송수신 시 일반적인 용어 “속도”로 사용되는 속도이다.\n2. 진대기 속도(True Airspeed) : 안정된 공기에 상대적인 항공기 속도. 비행계획 및 항공로비행 위치에서 주로 이용된다. 조종사/관제사 교신 시 “true airspeed ”라고 하며 “air speed”로 축약하여서는 안 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The speed of an aircraft relative to its surrounding air mass. The unqualified term “airspeed” means one of the following: a. Indicated Airspeed− The speed shown on the aircraft airspeed indicator. This is the speed used in pilot/controller communications under the general term “airspeed.” (Refer to 14 CFR part 1.) b. True Airspeed− The airspeed of an aircraft relative to undisturbed air. Used primarily in flight planning and en route portion of flight. When used in pilot/controller communications, it is referred to as “true airspeed” and not shortened to “airspeed.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "AIRWAY",
    "krName": "항공로",
    "definitions": {
      "kr_proc": "국토교통부장관이 항공기의 항행에 적합하다고 지정한 지구의 표면상에 표시한 공간의 길을 말 한다\n(참조) : federal airways AIM ICAO airway",
      "annex11": "A control area or portion thereof established in the form of a corridor.",
      "doc4444": "A control area or portion thereof established in the form of a corridor.",
      "faa_pcg": "A control area or portion thereof established in the form of corridor equipped with radio navigational aids.",
      "kr_ats": "회랑 형태로 구성된 관제구(control area) 또는 관제구의 일부분을 말한다."
    }
  },
  {
    "enName": "AIRWAY BEACON",
    "krName": "항공로등대",
    "definitions": {
      "kr_proc": "원거리 산악지역에서 항공로구간을 표시하기 위하여 사용된다. 빛은 비컨 위치를 식별할 수 있도록 모르스 부호로 나타낸다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to mark airway segments in remote mountain areas. The light flashes Morse Code to identify the beacon site. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALERFA",
    "krName": "경고단계",
    "definitions": {
      "kr_proc": "경보단계를 나타내는 부호",
      "annex11": "The code word used to designate an alert phase.",
      "doc4444": "The code word used to designate an alert phase.",
      "faa_pcg": null,
      "kr_ats": "경보단계를 나타내기 위한 부호를 말한다."
    }
  },
  {
    "enName": "ALERT AREA",
    "krName": "경계구역",
    "definitions": {
      "kr_proc": "(참조 :  SPECIAL USE AIRSPACE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SPECIAL USE AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALERT NOTICE",
    "krName": "경보통지",
    "definitions": {
      "kr_proc": "도착지연, 미보고 또는 실종항공기에 대한 광범위한 통신수색을 위하여 비행정보실(FIS) 또는 지역관제소(ACC)에 발령되는 요청",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A request originated by a flight service station (FSS) or an air route traffic control center (ARTCC) for an extensive communication search for overdue, unreported, or missing aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALERT PHASE",
    "krName": "경보단계",
    "definitions": {
      "kr_proc": "항공기 및 탑승자의 안전이 염려되는 비상상황",
      "annex11": "A situation wherein apprehension exists as to the safety of an aircraft and its occupants.",
      "doc4444": "A situation wherein apprehension exists as to the safety of an aircraft and its occupants.",
      "faa_pcg": null,
      "kr_ats": "항공기와 탑승자의 안전이 우려 가 되는 상황을 말한다."
    }
  },
  {
    "enName": "ALERTING SERVICE",
    "krName": "경보업무",
    "definitions": {
      "kr_proc": "비행정보구역내에서 수색ㆍ구조를 필요로 하는 항공기에 대하여 조종사ㆍ항공관계부서에 통보ㆍ협조하는 업무로서 비행정보기관에서 수행하는 업무.",
      "annex11": "A service provided to notify appropriate organizations regarding aircraft in need of search and rescue aid, and assist such organizations as required.",
      "doc4444": "A service provided to notify appropriate organizations regarding aircraft in need of search and rescue aid, and assist such organizations as required.",
      "faa_pcg": "A service provided to notify appropriate organizations regarding aircraft in need of search and rescue aid and assist such organizations as required.",
      "kr_ats": "수색구조를 필요로 하는 항 공기에 관한 사항을 관련 기관에 통보하고, 필요에 따 라 그 기관을 지원하기 위한 업무를 말한다."
    }
  },
  {
    "enName": "Allocation, allocate",
    "krName": "할당",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "국가, 기관 또는 관련 부서에 주파수, 2차감시레이더 코드 등의 배분, 국가 또는 일반 등록당국에 24비트 항공기 어드레스를 배분하는 것을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ALNOT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ALERT NOTICE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ALERT NOTICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALPHANUMERIC DISPLAY",
    "krName": "알파벳/숫자 전시",
    "definitions": {
      "kr_proc": "레이더 전시면상의 타겟과 관련한 항공기 호출부호, 고도, BEACON 코드 및 기타 정보를 표현하기 위하여 사용되는 문자 및 숫자.\n(참조) : AUTOMATED RADAR TERMINAL SYSTEMS",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Letters and numerals used to show identification, altitude, beacon code, and other information concerning a target on a radar display.",
      "kr_ats": ""
    }
  },
  {
    "enName": "alphanumerics",
    "krName": "수문자",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "문자와 숫자가 결합된 용어를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ALTERNATE AERODROME",
    "krName": "교체비행장",
    "definitions": {
      "kr_proc": "착륙하고자 하는 비행장으로의 비행 또는 착륙이 불가능하거나, 부적절할 경우에 비행하고자 하는 비행장. 교체비행장은 다음과 같이 분류한다.\n1. Take-off alternate(이륙교체비행장) 이륙직후 착륙하여야 할 필요가 발생했으나 출발비행장 사용이 불가능하게 되었을 때 항공기가 착륙할 수 있는 교체비행장.\n2. En-route alternate(비행중교체비행장) 비행 중 비정상 또는 비상사태의 발생 시 항공기가 착륙할 수 있는 비행장.\n3. Destination alternate(목적지교체비행장) 착륙비행장에 착륙이 불가능하거나 부적절할 경우에 비행하고자 하는 교체비행장.\n(주기) 출발비행장이 비행 중 교체비행장 또는 목적지교체비행장이 될 수 있음.",
      "annex11": "An aerodrome to which an aircraft may proceed when it becomes either impossible or inadvisable to proceed to or to land at the aerodrome of intended landing where the necessary services and facilities are available, where aircraft performance requirements can be met and which is operational at the expected time of use. Alternate aerodromes include the following:",
      "doc4444": "An aerodrome to which an aircraft may proceed when it becomes either impossible or inadvisable to proceed to or to land at the aerodrome of intended landing where the necessary services and facilities are available, where aircraft performance requirements can be met and which is operational at the expected time of use. Alternate aerodromes include the following:",
      "faa_pcg": "An aerodrome to which an aircraft may proceed when it becomes either impossible or inadvisable to proceed to or to land at the aerodrome of intended landing. Note: The aerodrome from which a flight departs may also be an en-route or a destination alternate aerodrome for the flight.",
      "kr_ats": "착륙하고자 하는 비 행장으로의 비행 또는 착륙이 불가능하거나, 부적절할 경우 필요한 업무 및 시설이 사용 가능하고, 항공기 성 능요건에 부합하며 예상되는 사용시간에 운영되어 비행 하고자 하는 비행장을 말한다. 교체비행장은 다음을 포 함한다. 제정 : 2013.05.03. - 92 별표 가) 이륙 교체비행장(Take-off alternate). 이륙 직후 착륙해야 할 필요가 발생했으나 출발비행장 사용 이 불가능하게 되었을 때 항공기가 착륙할 수 있 는 비행장을 말한다. 나) 항공로 교체비행장(En-route alternate). 항공로 상에서 회항이 결정된 된 경우 착륙할 수 있는 교체비행장. 다) 목적지 교체비행장(Destination alternate). 착륙예 정인 비행장에 착륙이 불가능하거나 부적절할 경 우에 착륙할 수 있는 교체비행장. 주기 - 출발비행장이 비행 중 교체비행장 또는 목적 지 교체비행장이 될 수도 있다."
    }
  },
  {
    "enName": "ALTERNATE AIRPORT",
    "krName": "교체공항",
    "definitions": {
      "kr_proc": "목적 공항에 착륙할 수 없는 경우 항공기가 대체 착륙할 수 있는 공항.\n(참조) : ICAO alternate aerodrome",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An airport at which an aircraft may land if a landing at the intended airport becomes inadvisable. (See ICAO term ALTERNATE AERODROME.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALTIMETER SETTING",
    "krName": "고도계 수정치",
    "definitions": {
      "kr_proc": "현재 대기압에서 기압치 변화량을 조정 또는 표준 기압치(29.92)를 맞추기 위하여 사용되는 대기압 수치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The barometric pressure reading used to adjust a pressure altimeter for variations in existing atmospheric pressure or to the standard altimeter setting (29.92). (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALTITUDE",
    "krName": "고도",
    "definitions": {
      "kr_proc": "절대고도(AGL) 또는 평균해면고도(MSL)로 측정된 평면, 지점 또는 장애물의 피트/미터 단위의 높이. (참조 : FLIGHT LEVEL)\n1. MSL 고도 : 해수면으로부터 측정된 피트/미터 단위의 고도\n2. AGL 고도 : 지표면으로부터 측정된 피트/미터 단위의 고도\n3. 지시고도 : 고도계상에 나타난 고도. 압력 또는 대기고도계 상에서 표준대기상태에서 변화량을 보상하지 않고 계기오차를 수정하지 않은 고도.\n(참조) : ICAO altitude",
      "annex11": "The vertical distance of a level, a point or an object considered as a point, measured from mean sea level.",
      "doc4444": "The vertical distance of a level, a point or an object considered as a point, measured from mean sea level (MSL).",
      "faa_pcg": "The vertical distance of a level, a point or an object considered as a point, measured from mean sea level (MSL).",
      "kr_ats": "비행 중인 항공기의 수직위치에 관한 일반 적인 용어로서 높이, 고도(altitude) 또는 비행고도(flight level) 등 여러 의미를 가진다."
    }
  },
  {
    "enName": "ALTITUDE READOUT",
    "krName": "고도 판독",
    "definitions": {
      "kr_proc": "Mode C 트랜스폰더로 송출된 항공기 고도로서 판독능력을 갖춘 레이더 스코프상에 100피트 단위로 전시된다.\n(참조) : AUTOMATED RADAR TERMINAL SYSTEMS,ALPHANUMERIC DISPLAY AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft’s altitude, transmitted via the Mode C transponder feature, that is visually displayed in 100-foot increments on a radar scope having readout capability. (See ALPHANUMERIC DISPLAY.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALTITUDE RESERVATION",
    "krName": "고도유보",
    "definitions": {
      "kr_proc": "항공기 대량이동 또는 기타 특수 상황의 이용 목적으로 사용자가 사전에 사용할 고도에 대한 허가가 요구 되는 공역 활용 기능. 고도 유보는 지역관제소의 공역과에 의하여 허가된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airspace utilization under prescribed conditions normally employed for the mass movement of aircraft or other special user requirements which cannot otherwise be accomplished. ALTRVs are approved by the appropriate FAA facility. ALTRVs must be classified as either “moving” or “stationary.” (See MOVING ALTITUDE RESERVATION.) (See STATIONARY ALTITUDE RESERVATION.) (See AIR TRAFFIC CONTROL SYSTEM COMMAND CENTER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALTITUDE RESTRICTION",
    "krName": "고도제한",
    "definitions": {
      "kr_proc": "특정지점 또는 시간에 도달할 때까지 유지하여야할 고도. 고도제한은 항공교통, 지형지물, 기타 공역 사항을 고려하여 발부된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An altitude or altitudes, stated in the order flown, which are to be maintained until reaching a specific point or time. Altitude restrictions may be issued by ATC due to traffic, terrain, or other airspace considerations.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ALTITUDE RESTRICTIONS ARE CANCELLED",
    "krName": "고도제한취소",
    "definitions": {
      "kr_proc": "상승 또는 강하 중 종전에 발부한 고도 제한 사항의 유지가 더 이상 필요치 않음.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ALTRV",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : altitude reservation)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ALTITUDE RESERVATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AMVER",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : automated mutual-assistance vessel rescue system)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AUTOMATED MUTUAL-ASSISTANCE VESSEL RESCUE SYSTEM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "APPROACH CLEARANCE",
    "krName": "접근허가",
    "definitions": {
      "kr_proc": "조종사에게 대한 계기접근 허가. 당해 계기 접근의 허가 및 기타 관련 정보는 접근허가 발부 시 제공된다.\n(참조) : CLEARED APPROACHINSTRUMENT APPROACH PROCEDUREAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Authorization by ATC for a pilot to conduct an instrument approach. The type of instrument approach for which a clearance and other pertinent information is provided in the approach clearance when required. (See CLEARED APPROACH.) (See INSTRUMENT APPROACH PROCEDURE.) (Refer to AIM.) (Refer to 14 CFR part 91.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "APPROACH CONTROL FACILITY",
    "krName": "접근관제시설",
    "definitions": {
      "kr_proc": "터미널구역에서 접근관제업무를 제공하는 항공교통관제 시설.\n(참조) : approach control service radar approach contrl facility",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A terminal ATC facility that provides approach control service in a terminal area. (See APPROACH CONTROL SERVICE.) (See RADAR APPROACH CONTROL FACILITY.)",
      "kr_ats": "하나 또는 그 이 상의 비행장에서 출 도착하는 관제항공기에게 항공교통 관제업무를 제공하기 위하여 설립된 시설을 말한다."
    }
  },
  {
    "enName": "APPROACH CONTROL SERVICE",
    "krName": "접근관제업무",
    "definitions": {
      "kr_proc": "국토교통부장관이 지정하는 공역(이하 “접근관제구역”이라 한다)에서 비행하는 항공기 및 이들 공역안의 특별관제구역에서 비행하는 항공기에 대하여 접근관제기관에서 행하는 관제업무로서 비행장관제업무외의 관제업무. 도착 및 출발 VFR/IFR 항공기와 경우에 따라서는 항공로상 항공기에게 제공되는 접근관제시설에 의한 항공교통관제업무. 접근관제시설이 없는 일부 공항에서는 지역관제소(ACC)가 접근관제업무를 제공한다.\nAPPROACH CONTROL SERVICE(접근관제업무)[ICAO〕 : 출발 및 도착하는 관제항공기에 대한 항공교통관제업무",
      "annex11": "Air traffic control service for arriving or departing controlled flights.",
      "doc4444": "Air traffic control service for arriving or departing controlled flights.",
      "faa_pcg": "Air traffic control service for arriving or departing controlled flights.",
      "kr_ats": "도착 또는 출 발하는 관제항공기에 대한 항공교통관제업무를 말한다."
    }
  },
  {
    "enName": "APPROACH GATE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기를 최종접근진로로 레이더유도하기 위한 기준점으로서 항공교통관제업무에서 사용되는 가상지점. 게이트는 최종접근지점으로부터 1마일 바깥 그리고 활주로 말단으로부터 5NM 초과하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An imaginary point used within ATC as a basis for vectoring aircraft to the final approach course. The gate will be established along the final approach course 1 mile from the final approach fix on the side away from the airport and will be no closer than 5 miles from the landing threshold.",
      "kr_ats": ""
    }
  },
  {
    "enName": "APPROACH LIGHT SYSTEM",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport lighting)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT LIGHTING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "APPROACH SEQUENCE",
    "krName": "접근순서",
    "definitions": {
      "kr_proc": "접근을 위한 항공기의 순서\n(참조) : sequence ICAO approach sequence",
      "annex11": null,
      "doc4444": "The order in which two or more aircraft are cleared to approach to land at the aerodrome.",
      "faa_pcg": "The order in which two or more aircraft are cleared to approach to land at the aerodrome.",
      "kr_ats": "비행장에 착륙하기 위한 접근을 하도록 허가를 받은 항공기들의 순서를 말한다."
    }
  },
  {
    "enName": "APPROACH SPEED",
    "krName": "접근속도",
    "definitions": {
      "kr_proc": "착륙을 위한 접근 시 조종사가 사용하는 항공기교범상의 권고속도. 이 속도는 항공기 중량 및 특성뿐만 아니라  접근의 각 단계에 따라 다르다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The recommended speed contained in aircraft manuals used by pilots when making an approach to landing. This speed will vary for different segments of an approach as well as for aircraft weight and configuration. APPROACH WITH VERTICAL GUIDANCE (APV)– A term used to describe RNAV approach procedures that provide lateral and vertical guidance but do not meet the requirements to be considered a precision approach.",
      "kr_ats": ""
    }
  },
  {
    "enName": "APPROACH WITH VERTICAL GUIDANCE",
    "krName": "수직유도접근",
    "definitions": {
      "kr_proc": "RNAV 접근 시 사용되는 용어이며 수평 및 수직 유도 제공하며 정밀접근 고려 시 필요조건을 충족하지 못한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "APPROPRIATE ATS AUTHORITY",
    "krName": "관계 항공교통업무당국",
    "definitions": {
      "kr_proc": "관련 공역 내에서 국토교통부장관이 지정한 항공교통업무 제공의 책임이 있는 항공교통업무기관",
      "annex11": "The relevant authority designated by the State responsible for providing air traffic services in the airspace concerned.",
      "doc4444": "The relevant authority designated by the State responsible for providing air traffic services in the airspace concerned. Appropriate authority. a) Regarding flight over the high seas: The relevant authority of the State of Registry. b) Regarding flight other than over the high seas: The relevant authority of the State having sovereignty over the territory being overflown.",
      "faa_pcg": "The relevant authority designated by the State responsible for providing air traffic services in the airspace concerned. In the United States, the “appropriate ATS authority” is the Program Director for Air Traffic Planning and Procedures, ATP-1.",
      "kr_ats": "해당 공 로부터 「항공안전법」에 따라 위임받은 기관을 말한다."
    }
  },
  {
    "enName": "APPROPRIATE AUTHORITY",
    "krName": "관계당국",
    "definitions": {
      "kr_proc": "1. 공해상에서의 비행 관련 : 등록국가의 관련 당국\n2. 공해상 이외의 비행관련 : 통과하는 지역에 대하여 주권을 가지고 있는 국가의 관련 당국",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. Regarding flight over the high seas: the relevant authority is the State of Registry. b. Regarding flight over other than the high seas: the relevant authority is the State having sovereignty over the territory being overflown.",
      "kr_ats": "가) 공해상: 항공기 등록국의 관계 당국 나) 공해상 외: 통과하는 지역에 대하여 주권을 가지 고 있는 국가의 관계 당국"
    }
  },
  {
    "enName": "APPROPRIATE OBSTACLE CLEARANCE MINIMUM ALTITUDE",
    "krName": "장애물 최저회피고도",
    "definitions": {
      "kr_proc": "다음 사항을 참조할 것 :\n(참조) : minimum IFR altitude-MIA minimum en route altitude-MEA minimum obstruction clearance altitude-MOCA minimum vectoring altitude-MVA",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any of the following: (See MINIMUM EN ROUTE IFR ALTITUDE.) (See MINIMUM IFR ALTITUDE.) (See MINIMUM OBSTRUCTION CLEARANCE ALTITUDE.) (See MINIMUM VECTORING ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "APPROPRIATE TERRAIN CLEARANCE MINIMUM ALTITUDE",
    "krName": "지형 최저회피고도",
    "definitions": {
      "kr_proc": "다음 사항을 참조할 것 :\n(참조) : minimum IFR altitude-MIAminimum en route altitude-MEAminimum obstruction clearance altitude-MOCAminimum vectoring altitude-MVA",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any of the following: (See MINIMUM EN ROUTE IFR ALTITUDE.) (See MINIMUM IFR ALTITUDE.) (See MINIMUM OBSTRUCTION CLEARANCE ALTITUDE.) (See MINIMUM VECTORING ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "APRON",
    "krName": "계류장",
    "definitions": {
      "kr_proc": "승객ㆍ우편물ㆍ화물을 싣고 내리거나 급유ㆍ주기 또는 정비를 수행할 수 있는 육상비행장, 수상비행장, 헬리포트의 지정한 구역\n(참조) : ICAO APRON",
      "annex11": "A defined area, on a land aerodrome, intended to accommodate aircraft for purposes of loading or unloading passengers, mail or cargo, fuelling, parking or maintenance. 8/11/18 1-4",
      "doc4444": "A defined area, on a land aerodrome, intended to accommodate aircraft for purposes of loading or unloading passengers, mail or cargo, fuelling, parking or maintenance.",
      "faa_pcg": "A defined area, on a land aerodrome, intended to accommodate aircraft for purposes of loading or unloading passengers, mail or cargo, refueling, parking or maintenance.",
      "kr_ats": "승객, 우편물, 또는 화물을 싣고 내리거 나, 급유, 주기 또는 정비하는 항공기를 수용하기 위하 여 육상비행장에 설정된 구역을 말한다."
    }
  },
  {
    "enName": "APV",
    "krName": "수직유도접근절차",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "3D 계기접근운영 A유형으로 설계된 성능기반항행(PBN) 계기접근절차",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ARC",
    "krName": "",
    "definitions": {
      "kr_proc": "거리측정장비(DME)를 참조로 하나의 항행안전시설로부터 일정한 거리를 비행하는 항공기의 경로.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The track over the ground of an aircraft flying at a constant distance from a navigational aid by reference to distance measuring equipment (DME).",
      "kr_ats": ""
    }
  },
  {
    "enName": "AREA CONTROL CENTER",
    "krName": "지역관제소",
    "definitions": {
      "kr_proc": "항공로비행을 하는 동안 계기비행 항공기에게 제공되는 항공교통관제업무의 일차적인 책임이 있는 항공교통관제기관의 ICAO 명칭. 미국은 중앙항공로관제소(ARTCC)를 명칭으로 사용하고 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An air traffic control facility primarily responsible for ATC services being provided IFR aircraft during the en route phase of flight. The U.S. equivalent facility is an air route traffic control center (ARTCC).",
      "kr_ats": "관할 관제구 내 의 관제항공기에게 항공교통관제업무를 제공하기 위해 설치된 시설을 말한다."
    }
  },
  {
    "enName": "AREA CONTROL SERVICE",
    "krName": "지역관제업무",
    "definitions": {
      "kr_proc": "관제공역내에서 비행하는 항공기에 대하여 지역관제기관(Area Control Center)에서 행하는 관제업무로서 비행장관제업무 및 접근관제업무외의 관제업무",
      "annex11": "Air traffic control service for controlled flights in control areas.",
      "doc4444": "Air traffic control service for controlled flights in control areas.",
      "faa_pcg": null,
      "kr_ats": "관제구 내의 관제 항공기에 대해 제공되는 항공교통관제업무를 말한다. 지역항법(Area navigation)이란 지상 또는 위성 항행안 전시설의 운용범위 내, 자체 탑재된 항법장비의 성능한 - 개정 : 2026.07.06. 항공교통업무기준 계 내 또는 이를 구성하여 원하는 어떠한 비행경로로도 항공기의 운항을 가능하게 하는 항행항법을 말하며, 성 능기반항행(PBN)과 성능기반항행의 요건을 충족하지 않는 다른 운항을 모두 포함한다."
    }
  },
  {
    "enName": "AREA NAVIGATION",
    "krName": "지역항법",
    "definitions": {
      "kr_proc": "지상항행안전시설 또는 자체탑재장비 성능 범위 내 또는 양 시스템을 활용하여 항공기가 필요한 경로를 따라 비행하도록 가능토록 항행 방법.\nAREA NAVIGATION ROUTE(지역항법비행로) 지역항법의 능력을 갖춘 항공기가 사용하도록 설정된 ATS 비행로",
      "annex11": "A method of navigation which permits aircraft operation on any desired flight path within the coverage of ground- or space-based navigation aids or within the limits of the capability of self-contained aids, or a combination of these. Note.— Area navigation includes performance-based navigation as well as other operations that do not meet the definition of performance-based navigation.",
      "doc4444": "A method of navigation which permits aircraft operation on any desired flight path within the coverage of ground- or space-based navigation aids or within the limits of the capability of self-contained aids, or a combination of these.",
      "faa_pcg": "A method of navigation which permits aircraft operation on any desired flight path within the coverage of ground− or space−based navigation aids or within the limits of the capability of self-contained aids, or a combination of these. Note: Area navigation includes performance−based navigation as well as other operations that do not meet the definition of performance−based navigation. AREA NAVIGATION (RNAV) APPROACH CONFIGURATION: a. STANDARD T− An RNAV approach whose design allows direct flight to any one of three initial approach fixes (IAF) and eliminates the need for procedure turns. The standard design is to align the procedure on the extended centerline with the missed approach point (MAP) at the runway threshold, the final approach fix (FAF), and the initial approach/intermediate fix (IAF/IF). The other two IAFs will be established perpendicular to the IF.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Area navigation route",
    "krName": "지역항법비행로",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "지역항법을 수 행할 수 있는 항공기가 사용하도록 설정된 항공교통로 를 말한다.",
      "annex11": "",
      "doc4444": "An ATS route established for the use of aircraft capable of employing area navigation. Assignment, assign. Distribution of frequencies to stations. Distribution of SSR codes or 24-bit aircraft addresses to aircraft.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ARINC(Aeronautical Radio Incorporated)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공사 그룹이 소유하고 있는 항공무선통신기업(Aeronautical Radio, Inc)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ARO",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport reservation office)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT RESERVATION OFFICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRESTING SYSTEM",
    "krName": "초과저지망 시스템",
    "definitions": {
      "kr_proc": "테일훅(tail-hook) 장착 또는 미장착 항공기의 속도제어를 위한 안전장치로서 항공기를 붙잡는 장치와 에너지를 흡수하는 2개 주요 구성품으로 구성된다. 항공기가 착륙 후 또는 이륙을 포기하는 동안 멈출 수 없을 때 활주로 이탈을 방지하기 위하여 사용된다. 속도제어장치는 Arresting Gear, Hook Device, Wire Barrier Cable등과 같은 명칭을 갖고 있다.\n(참조) : abortAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A safety device consisting of two major components, namely, engaging or catching devices and energy absorption devices for the purpose of arresting both tailhook and/or nontailhook-equipped aircraft. It is used to prevent aircraft from overrunning runways when the aircraft cannot be stopped after landing or during aborted takeoff. Arresting systems have various names; e.g., arresting gear, hook device, wire barrier cable. (See ABORT.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRIVAL AIRCRAFT INTERVAL",
    "krName": "도착항공기 간격",
    "definitions": {
      "kr_proc": "공항도착수용률(AAR)에 근거하여 1/100분으로 내부적으로 시작되는 프로그램. 도착항공기 간격은 최종지점에서 연속 도착 항공기 간 요구되는 최적간격",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRIVAL CENTER",
    "krName": "",
    "definitions": {
      "kr_proc": "공항수용률을 초과하는 공항에 대하여 관할권을 갖는 지역관제소.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The ARTCC having jurisdiction for the impacted airport.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRIVAL DELAY",
    "krName": "도착지연",
    "definitions": {
      "kr_proc": "지정된 공항에 도착하는 항공기를 수용할 수 없는 시간을 나타내는 매개변수.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A parameter which specifies a period of time in which no aircraft will be metered for arrival at the specified airport.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRIVAL SECTOR",
    "krName": "",
    "definitions": {
      "kr_proc": "하나 또는 둘 이상의 미터픽스를 포함하고 있는 운영통제구역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRIVAL SECTOR ADVISORY LIST",
    "krName": "",
    "definitions": {
      "kr_proc": "미터 픽스를 조절하는 섹터의 PVD/MDM에 전시된 도착 항공기에 대한 자료목록",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRIVAL SEQUENCING PROGRAM",
    "krName": "",
    "definitions": {
      "kr_proc": "동일한 공항에 도착하는 항공기의 순서배정을 지원하기 위하여 설계된 자동화된 프로그램.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ARRIVAL TIME",
    "krName": "도착시간",
    "definitions": {
      "kr_proc": "도착항공기가 접지하는 시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The time an aircraft touches down on arrival.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ARSR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : air route surveillance radar)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIR ROUTE SURVEILLANCE RADAR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ARTCC",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : air route traffic control center)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIR ROUTE TRAFFIC CONTROL CENTER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ARTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : automatic radar terminal systems)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ASD",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : aircraft situation display)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ASDA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : accelerate - stop distance available)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ICAO Term ACCELERATE-STOP DISTANCE AVAILABLE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ASDE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport surface detection equipment)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT SURFACE DETECTION EQUIPMENT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ASLAR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : aircraft surge launch and recovery)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRCRAFT SURGE LAUNCH AND RECOVERY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ASP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : arrival sequencing program)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ASR",
    "krName": "",
    "definitions": {
      "kr_proc": "(airport surveillance radar)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT SURVEILLANCE RADAR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ASR APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : surveillance radar)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SURVEILLANCE APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Assignment, assign",
    "krName": "배정",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "무선국에 대한 주파수 할당 또는 항공기에 대한 SSR 코드 또는 24비트 어드레스를 분배하는 것을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ATC",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ATC)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIR TRAFFIC CONTROL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATC ADVISES",
    "krName": "항공교통관제조언",
    "definitions": {
      "kr_proc": "항공교통관제사가 아닌 다른 종사자가 항공기에게 정보 중계 시 접두어로 사용하는 비관제 정보메시지 ATS 용어.\n(참조) : advisory",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to prefix a message of noncontrol information when it is relayed to an aircraft by other than an air traffic controller. (See ADVISORY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATC ASSIGNED AIRSPACE",
    "krName": "",
    "definitions": {
      "kr_proc": "지정 공역 내에서 수행되는 특정 목적의 활동과 다른 계기비행 항공기간의 분리를 제공할 목적으로 항공교통관제시설에 의하여 수직/수평 공역으로 지정, 사용됨.\n(참조) : special use airspace",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airspace of defined vertical/lateral limits, assigned by ATC, for the purpose of providing air traffic segregation between the specified activities being conducted within the assigned airspace and other IFR air traffic. (See SPECIAL USE AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATC CLEARANCE -",
    "krName": "참조",
    "definitions": {
      "kr_proc": "air traffic clearance)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIR TRAFFIC CLEARANCE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATC CLEARS",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제사가 아닌 다른 종사자가 항공기에게 허가를 중계할 때 접두어로 사용하는 ATS 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to prefix an ATC clearance when it is relayed to an aircraft by other than an air traffic controller.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATC INSTRUCTIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사에게 특정조치 즉 “Turn left heading two five zero”, “Go around”, “Clear the runway”등을 행하도록 항공교통관제사가 발부하는 지시.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Directives issued by air traffic control for the purpose of requiring a pilot to take specific actions; e.g., “Turn left heading two five zero,” “Go around,” “Clear the runway.” (Refer to 14 CFR part 91.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATC REQUESTS",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제사가 아닌 다른 종사자 의하여 항공기에게 요구를 중계할 때 접두어로 사용하는 ATS 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to prefix an ATC request when it is relayed to an aircraft by other than an air traffic controller.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATCAA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ATC assigned airspace)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ATC ASSIGNED AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATCRBS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : radar)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADAR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATCSCC",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ATC system command center)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIR TRAFFIC CONTROL SYSTEM COMMAND CENTER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATCT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : tower)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TOWER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ATIS",
    "krName": "ATIS",
    "definitions": {
      "kr_proc": "(참조 : automatic terminal information service)",
      "annex11": null,
      "doc4444": "The symbol used to designate automatic terminal information service.",
      "faa_pcg": "(See ICAO Term AUTOMATIC TERMINAL INFORMATION SERVICE.)",
      "kr_ats": "하루 종일 또는 하루의 일 제정 : 2013.05.03. - 93 별표 정기간 동안 계속적이고 반복적인 방송으로 도착/출발 항공기에게 최신의 일상적인 정보를 제공하는 업무를 말한다. 데이터링크-공항정보자동방송업무(D-ATIS) 데이터링크 를 통한 ATIS 제공 음성- 공항정보자동방송업무(Voice-ATIS) 지속적이고 반 복적인 음성방송을 통한 ATIS 제공"
    }
  },
  {
    "enName": "ATS ROUTE",
    "krName": "항공교통업무비행로",
    "definitions": {
      "kr_proc": "항공교통업무 제공이 필요하여 설정한 특정 항공로로서 항공로, 조언항공로, 관제ㆍ비관제항공로, 도착ㆍ출발항공로 등의 의미를 가지는 것\n(주기) :“ATS ROUTE” 용어는 항공로, 조언경로, 관제 또는 비관제 경로, 도착 또는 출발 등을 뜻하는 것으로 다양하게 사용된다.",
      "annex11": "A specified route designed for channelling the flow of traffic as necessary for the provision of air traffic services. Note 1.— The term “ATS route” is used to mean variously, airway, advisory route, controlled or uncontrolled route, arrival or departure route, etc. Note 2.— An ATS route is defined by route specifications which include an ATS route designator, the track to or from significant points (waypoints), distance between significant points, reporting requirements and, as determined by the appropriate ATS authority, the lowest safe altitude. Automatic dependent surveillance — broadcast (ADS-B). A means by which aircraft, aerodrome vehicles and other objects can automatically transmit and/or receive data such as identification, position and additional data, as appropriate, in a broadcast mode via a data link. Automatic dependent surveillance — contract (ADS-C). A means by which the terms of an ADS-C agreement will be exchanged between the ground system and the aircraft, via a data link, specifying under what conditions ADS-C reports would be initiated, and what data would be contained in the reports. Note.— The abbreviated term “ADS contract” is commonly used to refer to ADS event contract, ADS demand contract, ADS periodic contract or an emergency mode.",
      "doc4444": "A specified route designed for channelling the flow of traffic as necessary for the provision of air traffic services. Note 1.— The term “ATS route” is used to mean variously, airway, advisory route, controlled or uncontrolled route, arrival or departure route, etc. Note 2.— An ATS route is defined by route specifications which include an ATS route designator, the track to or from significant points (waypoints), distance between significant points, reporting requirements and, as determined by the appropriate ATS authority, the lowest safe altitude. 10/11/16",
      "faa_pcg": "A specified route designed for channeling the flow of traffic as necessary for the provision of air traffic services. Note: The term “ATS Route” is used to mean variously, airway, advisory route, controlled or uncontrolled route, arrival or departure, etc.",
      "kr_ats": "항공교통업무 제공의 필요에 따 라 항공교통 흐름을 조정하기 위해 설정한 특정 비행로 를 말한다. 주기1 - 항공교통로는 항공로, 조언경로, 관제 비행로 또는 비관제 비행로, 도착 또는 출발경로 등 여러 가지 의미를 가진다. 주기2 - 항공교통로는 항공교통로의 명칭, 주요지점 으로/부터의 경로, 거리, 보고요건, 최저안전고도(해당 항공교통업무기관에서 결정한) 등으로 정의된다."
    }
  },
  {
    "enName": "ATS surveillance service",
    "krName": "항공교통 감시업무",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공교통 업무 감시시스템을 활용해 직접 제공되는 업무를 가리 키기 위해 사용되는 용어를 말한다.",
      "annex11": "",
      "doc4444": "A term used to indicate a service provided directly by means of an ATS surveillance system.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ATS surveillance system",
    "krName": "항공교통 감시시스템",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "ADS-B, PSR, SSR 또는 이와 동등하게 항공기를 식별할 수 있 는 지상기반시스템을 의미하는 일반적 용어를 말한다. 주기 - 동등한 지상기반시스템이란 비교평가 또는 다 른 방법을 통하여 모노펄스 SSR과 같거나 그 이상의 안전수준과 성능을 갖추고 있음을 증명한 시스템을 의 미한다.",
      "annex11": "",
      "doc4444": "A generic term meaning variously, ADS-B, PSR, SSR or any comparable ground-based system that enables the identification of aircraft. Note.— A comparable ground-based system is one that has been demonstrated, by comparative assessment or other methodology, to have a level of safety and performance equal to or better than monopulse SSR. Automatic dependent surveillance — broadcast (ADS-B). A means by which aircraft, aerodrome vehicles and other objects can automatically transmit and/or receive data such as identification, position and additional data, as appropriate, in a broadcast mode via a data link. Automatic dependent surveillance — contract (ADS-C). A means by which the terms of an ADS-C agreement will be exchanged between the ground system and the aircraft, via a data link, specifying under what conditions ADS-C reports would be initiated, and what data would be contained in the reports. Note.— The abbreviated term “ADS contract” is commonly used to refer to ADS event contract, ADS demand contract, ADS periodic contract or an emergency mode.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ATS, Air traffic service",
    "krName": "항공교통업무",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공교통관제업 무(지역관제업무, 접근관제업무 또는 비행장관제업무), 비행정보업무, 경보업무, 항공교통조언업무 등 여러 가 지 의미를 가지는 일반적인 용어를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "AUTOLAND APPROACH",
    "krName": "자동착륙접근",
    "definitions": {
      "kr_proc": "자동착륙접근은 활주로 접지부분과 경우에 따라, 착륙 끝부분까지의 정밀계기접근이다. 자동착륙접근은 탑재 항법장비로부터 위치정보 및/또는 방향지시를 수신하는 항공기자동조종장치에 의하여 수행된다. 자동 착륙시스템은 자동조종장치 시스템의 보조 시스템이다. 항공기의 자동조종장치는 자동 착륙시스템이 작동하고 있을 때 장비의 정확성과 성능을 감시하고 명령한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An autoland system aids by providing control of aircraft systems during a precision instrument approach to at least decision altitude and possibly all the way to touchdown, as well as in some cases, through the landing rollout. The autoland system is a sub-system of the autopilot system from which control surface management occurs. The aircraft autopilot sends instructions to the autoland system and monitors the autoland system performance and integrity during its execution.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATED INFORMATION TRANSFER",
    "krName": "자동정보이양",
    "definitions": {
      "kr_proc": "업무규정에 의하여 사전 협조된 과정으로 완전 데이터 블록의 정보 교환을 통하여 관제사간에 구두 협의 없이 수행되는 고도조절 및/또는 레이더 식별이양.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A precoordinated process, specifically defined in facility directives, during which a transfer of altitude control and/or radar identification is accomplished without verbal coordination between controllers using information communicated in a full data block.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATED RADAR TERMINAL SYSTEMS",
    "krName": "레이더자료 자동처리시스템",
    "definitions": {
      "kr_proc": "일반적인 용어로 터미널자동화시스템(TAS)은 여러 가지 추적시스템에 포함된다. 시스템상의 중요 수정은 로마숫자 접미어로 나타냄.\n1. ARST IIIA : 레이더추적 및 BEACON 추적수준의 모듈로 프로그램 할 수 있는 자동화 레이더 터미널장비. ARTS IIIA는 2차 레이더로 얻은 항공기 목표물은 물론 1차 레이더 목표물을 탐지, 식별 및 예측한다. ARTIIIA 더욱 정교한 컴퓨터 주요 장비는 추적을 강화시키고, 연속자료 저장 및 어느 한 부분이 고장이 나도 다른 부분이 연동하여 피해를 최소화시키는(Fail-soft) 능력을 갖춤으로써 기존 ART III장비 성능을 향상시킨다.\n2. ARTS : ARTS IIE, ARTS IIIE 그리고 ACD(DTAS)와 연동된 ART IIIE는 기존의 ARTS 시스템의 기능들을 갖고 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATED UNICOM",
    "krName": "",
    "definitions": {
      "kr_proc": "자동화 UNICOM 시스템은 완벽한 자동 기상정보, 무선교신 능력 그리고 공항조언 정보를 제공한다. 이 시스템은 마이크로폰을 눌러 여러 가지 기능을 선택할 수 있다. 공항/시설 안내서 및 접근 지도에서 이용가능하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Provides completely automated weather, radio check capability and airport advisory information on an Automated UNICOM system. These systems offer a variety of features, typically selectable by microphone clicks, on the UNICOM frequency. Availability will be published in the Chart Supplement and approach charts.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATED WEATHER SYSTEM",
    "krName": "자동기상시스템",
    "definitions": {
      "kr_proc": "모든 자동화 기상감지기 장비는 공항의 기상 자료를 수집하여 유무선 통신을 이용하여 전파한다. 이 시스템은 ASOS, AWSS, AWOS 등이 포함된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any of the automated weather sensor platforms that collect weather data at airports and disseminate the weather information via radio and/or landline. The systems currently consist of the Automated Surface Observing System (ASOS) and Automated Weather Observation System (AWOS).",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC ALTITUDE REPORT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : altitude readout)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ALTITUDE READOUT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC ALTITUDE REPORTING",
    "krName": "자동고도보고",
    "definitions": {
      "kr_proc": "항공기의 고도를 100피트 단위로 전송함으로서 MODE C 질문기에 응답하는 수신기의 기능.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "That function of a transponder which responds to Mode C interrogations by transmitting the aircraft’s altitude in 100-foot increments.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC CARRIER LANDING SYSTEM",
    "krName": "항공모함 자동착륙시스템",
    "definitions": {
      "kr_proc": "항공모함에 항공기 최종접근 시 컴퓨터 데이터 링크와 연결되어 있는 정밀추적 레이더로 구성된 미 해군의 최종접근 장비로서, 항공기에게는 계속적인 정보와 조종사 및 보조 접근 시스템에는 감시 능력을 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "U.S. Navy final approach equipment consisting of precision tracking radar coupled to a computer data link to provide continuous information to the aircraft, monitoring capability to the pilot, and a backup approach system.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC DEPENDENT SURVEILLANCE",
    "krName": "자동감시",
    "definitions": {
      "kr_proc": "데이터 링크나 항공기에 탑재된 항행 및 위치결정시스템을 통하여 항공기명칭, 위치 및 필요한 추가 자료를 자동으로 제공하는 감시기법",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "CONTRACT (ADS−C)− A data link position reporting system, controlled by a ground station, that establishes contracts with an aircraft’s avionics that occur automatically whenever specific events occur, or specific time intervals are reached.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC DEPENDENT SURVEILLANCE- REBROADCAST(ADS-R)",
    "krName": "",
    "definitions": {
      "kr_proc": "ADS-B 지상시스템의 데이터 링크 번역 기능으로서 두 개의 분리된 운영주파수(978Mhz 및 1090ES)의 수용이 필요하다. ADS-B 시스템은 하나의 주파수에서 송신된 메시지를 수신하며 ADS-R은 또 다른 주파수에서 재방송하고 사용하기 위하여 정보를 변형한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A datalink translation function of the ADS−B ground system required to accommodate the two separate operating frequencies (978 MHz and 1090 MHz). The ADS−B system receives the ADS−B messages transmitted on one frequency and ADS−R translates and reformats the information for rebroadcast and use on the other frequency. This allows ADS−B In equipped aircraft to see nearby ADS−B Out traffic regardless of the operating link of the other aircraft. Aircraft operating on the same ADS−B frequency exchange information directly and do not require the ADS−R translation function.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC DEPENDENT SURVEILLANCE-BROADCAST(ADS-B)",
    "krName": "",
    "definitions": {
      "kr_proc": "데이터 링크를 통하여 항공기, 공항 내 차량 및 기타 이동물체가 식별, 위치 및 적절한 추가 정보를 자동으로 송수신하는 수단. 항공기나 차량은 GPS에서 수신한 위치 및 속도 정보를 데이터 링크를 통하여 방송하며, 데이터 링크는 항공관제시설에서 이 정보를 처리 및 시현하기 위하여 송수신기에서 수신한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC DEPENDENT SURVEILLANCE-CONTRACT(ADS-C)",
    "krName": "",
    "definitions": {
      "kr_proc": "ADS 보고가 개시되는 조건 및 보고에 포함되는 자료가 정해진 상태에서 ADS-C 합의서의 데이터들이 지상시스템 및 항공기간에 교환되는 수단",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC DIRECTION FINDER",
    "krName": "자동방향탐지기",
    "definitions": {
      "kr_proc": "L/MF 무지향표지시설(NDB) 지상송신기에 반응하여 방향을 지시하는 항공기 항행안전무선시설. 방향은 자방위 또는 항공기에 장착된 지시계의 형태에 따라 항공기의 종적인 측면에 대한 상대적인 방향으로 조종사에게 지시된다. 군과 같은 곳에 적용할 경우 ADF 운용은 VHF/UHF 주파수 대역에서 공중 또는 지상송신기에 기초할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft radio navigation system which senses and indicates the direction to a L/MF nondirectional radio beacon (NDB) ground transmitter. Direction is indicated to the pilot as a magnetic bearing or as a relative bearing to the longitudinal axis of the aircraft depending on the type of indicator installed in the aircraft. In certain applications, such as military, ADF operations may be based on airborne and ground transmitters in the VHF/UHF frequency spectrum. (See BEARING.) (See NONDIRECTIONAL BEACON.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOMATIC TERMINAL INFORMATION SERVICE ; ATIS",
    "krName": "공항정보방송업무",
    "definitions": {
      "kr_proc": "특정 날짜의 일부분 또는 내내 출발 및 도착하는 항공기에게 현재, 정례적인 정보를 계속적이고 반복적으로 제공하는 방송.",
      "annex11": null,
      "doc4444": "The automatic provision of current, routine information to arriving and departing aircraft throughout 24 hours or a specified portion thereof:",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "AUTOROTATION",
    "krName": "",
    "definitions": {
      "kr_proc": "회전익이 공기의 움직임으로 구동되는 회전익 항공기의 비행상태.\n1. Autorotative Landing/Touchdown Autorotation조종사에 의하여 회전익에 동력을 가하지 않고 착륙할 것임을 지시하기 위하여 사용됨.\n2. Low Level Autorotation통상 100피트 AGL 이하의 낮은 장주 고도에서 시작하고 주로 전술적 군사훈련을 위하여 사용된다.\n3. 180 도 회전\nDownwind 기수방향에서 시작되고 정상 장주에서는 안쪽에서 시작된다.\n“복행”은 이러한 기동 중에는 불가 할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A rotorcraft flight condition in which the lifting rotor is driven entirely by action of the air when the rotorcraft is in motion. a. Autorotative Landing/Touchdown Autorotation. Used by a pilot to indicate that the landing will be made without applying power to the rotor. b. Low Level Autorotation. Commences at an altitude well below the traffic pattern, usually below 100 feet AGL and is used primarily for tactical military training. c. 180 degrees Autorotation. Initiated from a downwind heading and is commenced well inside the normal traffic pattern. “Go around” may not be possible during the latter part of this maneuver.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AVAILABLE LANDING DISTANCE",
    "krName": "착륙가능거리",
    "definitions": {
      "kr_proc": "착륙항공기 및 LAHSO 항공기 착륙 후 활주를 위한 활주로의 부분이다. 이 거리는 착륙시단에서 정지부분까지이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The portion of a runway available for landing and roll-out for aircraft cleared for LAHSO. This distance is measured from the landing threshold to the hold-short point.",
      "kr_ats": ""
    }
  },
  {
    "enName": "AVIATION WEATHER SERVICE",
    "krName": "항공기상업무",
    "definitions": {
      "kr_proc": "조종사, 항공기 운용자 및 관제사에게 항공교통관제업무를 위하여 기상기관에서 관련된 기상정보를 수집, 전파, 제공하는 업무.\n(참조) : enroute flight advisory servicetranscribed weather broadcastweather advisorypilots automatic telephone weather answering service\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A service provided by the National Weather Service (NWS) and FAA which collects and disseminates pertinent weather information for pilots, aircraft operators, and ATC. Available aviation weather reports and forecasts are displayed at each NWS office and FAA FSS. (See TRANSCRIBED WEATHER BROADCAST.) (See WEATHER ADVISORY.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "AWW",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : severe weather forecast alter)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "BACK-TAXI",
    "krName": "",
    "definitions": {
      "kr_proc": "교통흐름을 위하여 사용활주로 반대방향으로 지상활주를 지시할 때, 사용되는 용어. 항공기에게 활주로를 개방하거나 출발목적으로 활주로 끝(end)에 도착하기 전 어떤 지점 또는 활주로의 시작점까지 역주행이 지시될 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A term used by air traffic controllers to taxi an aircraft on the runway opposite to the traffic flow. The aircraft may be instructed to back-taxi to the beginning of the runway or at some point before reaching the runway end for the purpose of departure or to exit the runway.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BASE LEG",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : traffic pattern)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAFFIC PATTERN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "BASE TURN",
    "krName": "베이스선회",
    "definitions": {
      "kr_proc": "항공기가 첫 접근하는 동안 외향진로의 끝과 중간 또는 최종접근로의 시작지점 사이에서 행하는 선회\n(주기) 최종접근선회는 각 절차별 상황에 따라, 수평비행 중 또는 강하비행 중에 실시하도록 정할 수 있다.",
      "annex11": "A turn executed by the aircraft during the initial approach between the end of the outbound track and the beginning of the intermediate or final approach track. The tracks are not reciprocal. Note.— Base turns may be designated as being made either in level flight or while descending, according to the circumstances of each individual procedure. 1-5 8/11/18",
      "doc4444": "A turn executed by the aircraft during the initial approach between the end of the outbound track and the beginning of the intermediate or final approach track. The tracks are not reciprocal. Note.— Base turns may be designated as being made either in level flight or while descending, according to the circumstances of each individual procedure.",
      "faa_pcg": null,
      "kr_ats": "항공기가 첫 접근하는 동안 아웃 바운드 진로의 끝과 중간 또는 최종접근로의 시작지점 사이에서 선회하는 기동을 말한다. 주기 - 베이스턴은 각 절차별 상황에 따라, 수평 비 행 중 또는 강하비행 중에 실시하도록 정할 수 있다."
    }
  },
  {
    "enName": "BEACON",
    "krName": "비컨",
    "definitions": {
      "kr_proc": "(참조) : radar beacon nondirectional beacon airport rotating beacon aeronautical beacon airway beacon",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AERONAUTICAL BEACON.) (See AIRPORT ROTATING BEACON.) (See AIRWAY BEACON.) (See MARKER BEACON.) (See NONDIRECTIONAL BEACON.) (See RADAR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "BEARING",
    "krName": "방위",
    "definitions": {
      "kr_proc": "한 지점에 대한 또는 한 지점으로부터의 수평방향이며 일반적으로 진북, 자북 또는 360도에 대한 다른 지점으로부터 시계방향으로 측정된다.\n(참조) : non-directional beacon",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The horizontal direction to or from any point, usually measured clockwise from true north, magnetic north, or some other reference point through 360 degrees. (See NONDIRECTIONAL BEACON.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "BELOW MINIMUMS",
    "krName": "최저치미만 기상상태",
    "definitions": {
      "kr_proc": "규정에 의하여 명시된 최저치 미만의 기상 상태.(착륙최저치, 이륙최저치)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Weather conditions below the minimums prescribed by regulation for the particular action involved; e.g., landing minimums, takeoff minimums.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BLAST FENCE",
    "krName": "",
    "definitions": {
      "kr_proc": "제트 또는 프로펠러 후류를 회피 또는 분산시키기 위하여 사용되는 저지망.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A barrier that is used to divert or dissipate jet or propeller blast.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BLAST PAD",
    "krName": "",
    "definitions": {
      "kr_proc": "제트 후류 및 프로펠러 후류로 인한 부식영향을 감소하기 위한 활주로말단 부근의 표면",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A surface adjacent to the ends of a runway provided to reduce the erosive effect of jet blast and propeller wash.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BLIND SPEED",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 안테나에 대한 상대적인 타겟의 이탈 또는 밀폐율로 레이더 장비에서 이동표적지시기(MTI) 회로에 의하여 1차레이더 타겟의 제거가 신호의 감소 또는 완전한 손실을 야기한다.\n(참조) : ICAO BLIND VELOCITY",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The rate of departure or closing of a target relative to the radar antenna at which cancellation of the primary radar target by moving target indicator (MTI) circuits in the radar equipment causes a reduction or complete loss of signal. (See ICAO term BLIND VELOCITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "BLIND SPOT",
    "krName": "",
    "definitions": {
      "kr_proc": "무선 통신 또는 레이더 반사가 수신되지 않는 지역. 용어는 또한 관제탑으로부터 보이지 않는 공항의 해당부분에 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An area from which radio transmissions and/or radar echoes cannot be received. The term is also used to describe portions of the airport not visible from the control tower.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BLIND TRANSMISSION",
    "krName": "맹목방송",
    "definitions": {
      "kr_proc": "(참조 : transmitting in the blind)",
      "annex11": null,
      "doc4444": "A transmission from one station to another station in circumstances where two-way communication cannot be established but where it is believed that the called station is able to receive the transmission.",
      "faa_pcg": "(See TRANSMITTING IN THE BLIND.)",
      "kr_ats": "양방향통신이 수립되지 않지만 호출되는 무선국이 그 송신을 수신한다고 여겨 지는 상황에서 한 무선국에서 다른 무선국으로의 송신 하는 것을 말한다."
    }
  },
  {
    "enName": "BLIND VELOCITY",
    "krName": "",
    "definitions": {
      "kr_proc": "고정된 반사 억제를 조정한 1차 레이더에서 감지 할 수 없는 이동 타겟의 시선속도",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The radial velocity of a moving target such that the target is not seen on primary radars fitted with certain forms of fixed echo suppression.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BLIND ZONE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : blind spot)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See BLIND SPOT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "BLOCKED",
    "krName": "",
    "definitions": {
      "kr_proc": "무선통신이 다중동시무선으로 인하여 부정확하거나 중단을 나타내기 위하여 사용되는 용어.\nBRAKING ACTION(GOOD, GOOD TO MEDIUM, MEDIUM, MEDIUM TO POOR, FAIR, POOR, LESS THAN POOR or NIL)(제동상태) : 조종사에게 예상되는 활주로제동의 정도/상태를 제공하는 상태보고. 제동치는 GOOD, GOOD TO MEDIUM, MEDIUM, MEDIUM TO POOR, FAIR, POOR, LESS THAN POOR 또는 NIL로 보고된다.\n(참조) : RUNWAY CONDITION READING\nRUNWAY CONDITION REPORT\nRUNWAY CONDITION CODE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Phraseology used to indicate that a radio transmission has been distorted or interrupted due to multiple simultaneous radio transmissions. BOTTOM ALTITUDE– In reference to published altitude restrictions on a STAR or STAR runway transition, the lowest altitude authorized.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BOTTOM ALTITUDE",
    "krName": "",
    "definitions": {
      "kr_proc": "STAR 또는 STAR RWY TRANSITION에서 인가된 최저고도",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "BRAKING ACTION ADVISORIES",
    "krName": "제동상태조언",
    "definitions": {
      "kr_proc": "관제탑 관제사가 \"MEDIUM\", “POOR”, “LESS THAN POOR”, “NIL”를 포함하여 활주로 제동치 보고를 접수했을 경우, 또는 기상상태가 악화되거나 활주로 제동상태가 빠르게 변할 경우, 관제탑은 ATIS 방송에 포함시켜야 한다.(즉, “braking action advisories are in effect”) 제동치 조언이 발효되는 동안 항공교통관제기관은 도착 및 출발 항공기에게 사용활주로에 대한 최근 제동치 보고를 발부한다. 조종사는 악화되는 제동상태를 위한 준비를 해야 하고 관제사가 조언하지 않으면, 최근 활주로상태 보고를 요구하여야 한다. 조종사는 또한 착륙 후 관제사에게 기술적인 활주로상태 보고를 제공을 준비하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "When tower controllers receive runway braking action reports which include the terms “medium,” “poor,” or “nil,” or whenever weather conditions are conducive to deteriorating or rapidly changing runway braking conditions, the tower will include on the ATIS broadcast the statement, “Braking Action Advisories are in Effect.” During the time braking action advisories are in effect, ATC will issue the most current braking action report for the runway in use to each arriving and departing aircraft. Pilots should be prepared for deteriorating braking conditions and should request current runway condition information if not issued by controllers. Pilots should also be prepared to provide a descriptive runway condition report to controllers after landing.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BREAKOUT",
    "krName": "",
    "definitions": {
      "kr_proc": "접근로에서 벗어나도록 항공기에게 지시하는 기법이다. 근접 평행운영에서 Breakout은 항공기를 서로 떨어지도록 지시하는데 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A technique to direct aircraft out of the approach stream. In the context of simultaneous (independent) parallel operations, a breakout is used to direct threatened aircraft away from a deviating aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "BROADCAST",
    "krName": "방송",
    "definitions": {
      "kr_proc": "회답을 기대하지 않는 일방적인 정보 송신.\n(참조) : ICAO broadcast",
      "annex11": null,
      "doc4444": "A transmission of information relating to air navigation that is not addressed to a specific station or stations.",
      "faa_pcg": "A transmission of information relating to air navigation that is not addressed to a specific station or stations.",
      "kr_ats": "특정 주파수국(들)을 수신처로 하지 않 은 항행에 관련된 정보의 전송을 말한다."
    }
  },
  {
    "enName": "BROADCAST",
    "krName": "방송",
    "definitions": {
      "kr_proc": "특정 국 또는 국에 수신되지 않는 항행에 연관되는 정보의 송신.",
      "annex11": null,
      "doc4444": "A transmission of information relating to air navigation that is not addressed to a specific station or stations.",
      "faa_pcg": "A transmission of information relating to air navigation that is not addressed to a specific station or stations.",
      "kr_ats": "특정 주파수국(들)을 수신처로 하지 않 은 항행에 관련된 정보의 전송을 말한다."
    }
  },
  {
    "enName": "BUFFER AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "최저유도고도/계기비행최저고도 차트에 적용하기 위해, 고립된 장애물을 포함한 최저유도고도/계기비행최저고도 섹터에 3NM 또는 5 NM 반경으로  그려진 구역. 완충구역은 MVA/MIA 섹터 경계에 포함 될 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "As applied to an MVA or MIA chart, a depicted 3 NM or 5 NM radius MVA/MIA sector isolating a displayed obstacle for which the sector is established. A portion of a buffer area can also be inclusive of a MVA/MIA sector polygon boundary.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CALCULATED LANDING TIME",
    "krName": "산출된 착륙시간",
    "definitions": {
      "kr_proc": "임시 또는 실제 계산된 착륙시간(즉, 어느 것이 적용되든지) 대신에 사용될 수 있는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A term that may be used in place of tentative or actual calculated landing time, whichever applies. CALIBRATED AIRSPEED (CAS) – The indicated airspeed of an aircraft, corrected for position and instrument error. Calibrated airspeed is equal to true airspeed in standard atmosphere at sea level.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CALL FOR RELEASE",
    "krName": "",
    "definitions": {
      "kr_proc": "지역관제소(ACC)가 관할 터미널시설에 항공로에 진입하는 출발항공기의 릴리스를 발부받을 것을 요구하기 위하여 사전에 구두협의를 요구하는 것",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Wherein the overlying ARTCC requires a terminal facility to initiate verbal coordination to secure ARTCC approval for release of a departure into the en route environment.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CALL UP",
    "krName": "",
    "definitions": {
      "kr_proc": "호출 받는 기관과 호출하는 기관의 식별을 이용하여 시설과 항공기간 최초 음성교신.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Initial voice contact between a facility and an aircraft, using the identification of the unit being called and the unit initiating the call. (Refer to AIM.) Canadian domestic airspace within which MNPS separation may be applied.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CARDINAL ALTITUDES",
    "krName": "",
    "definitions": {
      "kr_proc": "“홀수” 또는 “짝수”의 천피트 고도 또는 비행고도 (예) 5,000, 6,000, 7,000, FL250, FL260, FL270\nCARDINAL FLIGHT LEVELS\n(참조) : cardinal altitudes",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "“Odd” or “Even” thousand-foot altitudes or flight levels; e.g., 5,000, 6,000, 7,000, FL 250, FL 260, FL 270. (See ALTITUDE.) (See FLIGHT LEVEL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CAT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : clear air turbulence)\nCATEGORIES OF PRECISION APPROACH AND LANDING OPERATIONS.\n1. Category Ⅰ(Cat Ⅰ) : 결심고도 60미터(200미터) 이상 및 시정 800미터 또는 활주로가시범위(RVR) 550미터 이상의 기상상태에서 실시하는 정밀접근\n2. Category Ⅱ(Cat Ⅱ) : 결심고도 30미터(200미터) 이상 60미터(200미터) 미만 및 활주로가시범위(RVR) 300미터 이상의 기상상태에서 실시하는 정밀접근\n3. Category Ⅲ(Cat Ⅲ)\na) 결심고도 30미터(100피트) 미만 또는 적용하지 아니함(No DH)\nb) 활주로가시범위(RVR) 300미터 미만 또는 적용하지 아니함(No RVR)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CLEAR-AIR TURBULENCE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CEILING",
    "krName": "운고",
    "definitions": {
      "kr_proc": "“BROKEN”, “OVERCAST” 또는 “OBSCURATION”으로 보고되고 “THIN” 또는 “PARTIAL”로는 분류되지 않는 지표면상의 가장 낮은 구름층 또는 악기상 현상의 높이.",
      "annex11": null,
      "doc4444": "The height above the ground or water of the base of the lowest layer of cloud below 6 000 m (20 000 ft) covering more than half the sky.",
      "faa_pcg": "The height above the ground or water of the base of the lowest layer of cloud below 6,000 meters (20,000 feet) covering more than half the sky.",
      "kr_ats": "하늘의 절반 이상을 덮고 있으며 지상 또 는 수면으로부터, 높이 6,000m (20,000ft)미만인 가장 낮은 구름층 바닥까지의 높이를 말한다."
    }
  },
  {
    "enName": "CENRAP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : center radar arts presentation/processing-plus)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CENTER",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : air route traffic control center)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIR ROUTE TRAFFIC CONTROL CENTER.) CENTER’S AREA− The specified airspace within which an air route traffic control center (ARTCC) provides air traffic control and advisory service. (See AIR ROUTE TRAFFIC CONTROL CENTER.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CENTER WEATHER ADVISORY",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제시설이 2시간내 존재하거나 예상되는 악기상 상태를 조종사에게 경고하기 위하여 중앙기상업무 관측자에 의하여 발부되는 비계획된 기상조언. CWA는 악시정(SIGMET)을 수정하거나 재 지정할 수 있다.\n(참조) : AWW SIGMET 대류 SIGMET AIR MET AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An unscheduled weather advisory issued by Center Weather Service Unit meteorologists for ATC use to alert pilots of existing or anticipated adverse weather conditions within the next 2 hours. A CWA may modify or redefine a SIGMET. (See AIRMET.) (See CONVECTIVE SIGMET.) (See GRAPHICAL AIRMEN’S METEOROLOGICAL INFORMATION.) (See SAW.) (See SIGMET.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CENTER'S AREA",
    "krName": "센터책임구역",
    "definitions": {
      "kr_proc": "항공교통관제와 조언업무가 제공되는 지역관제소(ACC)내의 특정 공역.\n(참조) : air route traffic control centerAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CEP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : central east pacific)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CENTRAL EAST PACIFIC.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CERAP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : combined central rapcon)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CERTIFICATE OF WAIVER OR AUTHORIZATION (COA)",
    "krName": "",
    "definitions": {
      "kr_proc": "특정 비행운항 또는 공역허가, 면제를 위한 허가의 승인",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An FAA grant of approval for a specific flight operation or airspace authorization or waiver.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CERTIFIED TOWER RADAR DISPLAY (CTRD)",
    "krName": "",
    "definitions": {
      "kr_proc": "인가된 관제탑 레이더전시기",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An FAA radar display certified for use in the NAS.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CFR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : call for release)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CALL FOR RELEASE.) CHA (See CONTINGENCY HAZARD AREA)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CHAFF",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더전파를 반사하기 위하여 사용되는 주파수에 대하여 반응하는 얇고 좁은 금속조각. 이 금속조각들이 항공기에서 투하 되고 아래로 표류하게 될 때, 레이더 전시기에 다수의 항공기가 표시된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Thin, narrow metallic reflectors of various lengths and frequency responses, used to reflect radar energy. These reflectors, when dropped from aircraft and allowed to drift downward, result in large targets on the radar display.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CHANGE-OVER POINT",
    "krName": "주파수변경지점",
    "definitions": {
      "kr_proc": "전방향무선표지시설(VOR)로 구성된 항공로를 비행하는 항공기가 후방의 시설로부터 전방의 시설로 기본항행목표를 변경하는 지점",
      "annex11": "The point at which an aircraft navigating on an ATS route segment defined by reference to very high frequency omnidirectional radio ranges is expected to transfer its primary navigational reference from the facility behind the aircraft to the next facility ahead of the aircraft. Note.— Change-over points are established to provide the optimum balance in respect of signal strength and quality between facilities at all levels to be used and to ensure a common source of azimuth guidance for all aircraft operating along the same portion of a route segment.",
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CHARTED VFR FLYWAYS",
    "krName": "",
    "definitions": {
      "kr_proc": "지정된 시계비행규칙 비행로는 대형 터빈항공기가 어떤 지역을 통과하기 위하여 사용되는 권고된 비행로이다. 조종사는 권고된 비행로와 해당 고도를 엄격히 따라야 한다. 시계비행규칙 비행로 계획지도는 시계비행규칙 터미널지역지도의 뒷면에 발간된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Charted VFR Flyways are flight paths recommended for use to bypass areas heavily traversed by large turbine-powered aircraft. Pilot compliance with recommended flyways and associated altitudes is strictly voluntary. VFR Flyway Planning charts are published on the back of existing VFR Terminal Area charts.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CHARTED VISUAL FLIGHT PROCEDURE APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "시계비행으로 진행하도록 항공기 조종사에게 인가된 그리고 시각참조물을 참조하여 공항의 구름을 회피하도록 하고 지정된 시계비행절차상 기술된 정보가 인가된 계기비행규칙 비행계획상을 운항하는 동안 수행되는 접근. 동 접근은 해당 항공교통관제시설의 관제 하에서 허가되어야 한다. 관련 기상최저치는 이 지도에 서술되어 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An approach conducted while operating on an instrument flight rules (IFR) flight plan which authorizes the pilot of an aircraft to proceed visually and clear",
      "kr_ats": ""
    }
  },
  {
    "enName": "CHASE",
    "krName": "추적",
    "definitions": {
      "kr_proc": "훈련 또는 시험 비행 중 일반적으로 항공기의 성능을 관측하기 위하여 항공기에 근접하여 비행하는 것.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft flown in proximity to another aircraft normally to observe its performance during training or testing.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CHASE AIRCRAFT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : chase)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CHASE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CHOP",
    "krName": "",
    "definitions": {
      "kr_proc": "난기류의 한 형태\n1. Light Chop : 고도의 뚜렷한 변화 없이 주기적으로 약하고 빠르게 덜컹거리는 난기류\n2. Moderate Chop : 강도가 조금 강한 Light Chop과 유사한 난기류. 고도의 뚜렷한 변화 없이 빠르게 덜컹임을 유발",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A form of turbulence. a. Light Chop– Turbulence that causes slight, rapid and somewhat rhythmic bumpiness without appreciable changes in altitude or attitude. b. Moderate Chop– Turbulence similar to Light Chop but of greater intensity. It causes rapid bumps or jolts without appreciable changes in aircraft altitude or attitude. (See TURBULENCE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CIRCLE TO RUNWAY(runway number)",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사에게 사용활주로 계기접근절차가 설정된 활주로가 아니기 때문에 착륙하기 위하여 선회해야 한다는 것을 통보하기 위하여 사용 된다. 공항/활주로에 관련 선회기동의 방향이 요구될 경우, 관제사는 방향을 지정해야 하고(8 자침방향), 왼쪽 또는 오른쪽 downwind 또는 base leg를 지정해야 한다.(즉, “cleared VOR runway 36 approach circle to runway 22” or “circle NW of the airport for a right downwind to runway 22”)\n(참조) : CIRCLE-TO-LAND MANEUVERLANDING MINIMUMSAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to inform the pilot that he/she must circle to land because the runway in use is other than the runway aligned with the instrument approach procedure. When the direction of the circling maneuver in relation to the airport/runway is required, the controller will state the direction (eight cardinal compass points) and specify a left or right downwind or base leg as appropriate; e.g., “Cleared VOR Runway Three Six Approach circle to Runway Two Two,” or “Circle northwest of the airport for a right downwind to Runway Two Two.” (See CIRCLE-TO-LAND MANEUVER.) (See LANDING MINIMUMS.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CIRCLE-TO-LAND MANEUVER",
    "krName": "선회착륙기동",
    "definitions": {
      "kr_proc": "계기접근에서 직진입 착륙이 불가능하거나 착륙을 위하여 활주로에 항공기를 정대 시키기 위하여 조종사에 의하여 시작되는 기동. 이 기동은 항공교통관제허가를 득하고 조종사가 공항에 대하여 요구되는 시각 참조점을 설정된 경우에만 이루어진다.\n(참조) : circle to runway landing minimums AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A maneuver initiated by the pilot to align the aircraft with a runway for landing when a straight-in landing from an instrument approach is not possible or is not desirable. At tower controlled airports, this maneuver is made only after ATC authorization has been obtained and the pilot has established required visual reference to the airport. (See CIRCLE TO RUNWAY.) (See LANDING MINIMUMS.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CIRCLING APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : circle-to-maneuver)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CIRCLE-TO-LAND MANEUVER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CIRCLING MANEUVER",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : circle-to-maneuver)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CIRCLE-TO-LAND MANEUVER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLASS A AIRSPACE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : controlled airspace)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CONTROLLED AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLASS C AIRSPACE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : controlled airspace)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CONTROLLED AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLASS D AIRSPACE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : controlled airspace)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CONTROLLED AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLASS E AIRSPACE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : controlled airspace)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CONTROLLED AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLASS G AIRSPACE",
    "krName": "G 등급 공역",
    "definitions": {
      "kr_proc": "등급 A, C, D, E에 지정되지 않는 공역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airspace that is not designated in 14 CFR part 71 as Class A, Class B, Class C, Class D, or Class E controlled airspace is Class G (uncontrolled) airspace. (See UNCONTROLLED AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEAR-AIR-TURBULENCE",
    "krName": "청천요란",
    "definitions": {
      "kr_proc": "구름이 없는 대기에서 만나는 요란. 이 용어는 일반적으로 저고도 풍향/풍속 급변과 연관된 고고도 요란에 적용된다. CAT는 종종 제트기류(Jet Stream)  부근에서도 만난다.\n(참조) : windshear jet stream\nCLEAR OF THE RUNWAY(활주로 개방)\n1. 활주로로 접근중인 지상 활주 항공기는 항공기의 모든 부분이 활주로 대기 지점 표시 전에 있을 때이다.\n2. 조종사나 관제사는 항공기의 전 부분이 활주로 끝을 지나고 관제지시가 없어도 지속적인 이동으로 대기지점표시를 지나는 항공기가 개방한 것으로 간주한다.\n3. 조종사, 관제사는 적절치 않는 활주로 경계선 또는 대기지점표시가 있는 공항의 활주로 및 유도로에서 항공기간 적절한 분리의 유지를 위하여 신중한 판단을 하여야한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Turbulence encountered in air where no clouds are present. This term is commonly applied to high-level turbulence associated with wind shear. CAT is often encountered in the vicinity of the jet stream. (See WIND SHEAR.) (See JET STREAM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARANCE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : air traffic clearance)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIR TRAFFIC CLEARANCE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARANCE LIMIT",
    "krName": "허가한계",
    "definitions": {
      "kr_proc": "항공교통관제허가를 발부 시, 항공기에게 허가된 픽스, 지점, 위치.\n(참조) : ICAO clearance void time\nCLEARANCE LIMIT[ICAO](허가한계) : 항공교통관제허가 상 운항이 한정되는 지점.",
      "annex11": "The point to which an aircraft is granted an air traffic control clearance.",
      "doc4444": "The point to which an aircraft is granted an air traffic control clearance.",
      "faa_pcg": "The point to which an aircraft is granted an air traffic control clearance.",
      "kr_ats": "항공교통관제허가에 따라 항공기의 진행이 보장되는 특정 지점을 말한다."
    }
  },
  {
    "enName": "CLEARANCE VOID IF NOT OFF BY(time)",
    "krName": "",
    "definitions": {
      "kr_proc": "지정된 시간까지 이륙하지 못한 경우, 출발허가의 자동취소를 항공기에게 조언하기 위한 관제용어이다. 조종사는 지정된 시간까지 이륙하지 아니한 경우, 새로운 허가를 발부 받거나 IFR 비행계획을 제출하여야 한다.\n(참조) : ICAO clearance limit",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to advise an aircraft that the departure release is automatically canceled if takeoff is not made prior to a specified time. The expiration of a clearance void time does not cancel the departure clearance or IFR flight plan. It withdraws the pilot’s authority to depart IFR until a new departure release/release time has been issued by ATC. Pilots who choose to depart VFR after their clearance void time has expired should not depart using the previously assigned IFR transponder code. (See ICAO term CLEARANCE VOID TIME.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARANCE VOID TIME",
    "krName": "비행허가무효시간",
    "definitions": {
      "kr_proc": "허가받은 해당 항공기가 행동을 취하지 않는다면, 허가중지가 유효하도록 ATC 기관에 의하여 명시된 시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A time specified by an air traffic control unit at which a clearance ceases to be valid unless the aircraft concerned has already taken action to comply therewith.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARED APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "공항의 표준 또는 특정 계기접근절차를 실행하도록 항공기에 대한 ATC 인가. 일반적으로 항공기에게 특정 계기접근 절차를 허가한다.\n(참조) : instrument approach procedure cleared type of approach AIM FAR part 91",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "ATC authorization for an aircraft to execute any standard or special instrument approach procedure for that airport. Normally, an aircraft will be cleared for a specific instrument approach procedure. (See CLEARED (Type of) APPROACH.) (See INSTRUMENT APPROACH PROCEDURE.) (Refer to 14 CFR part 91.) (Refer to AIM.) CLEARED (Type of) APPROACH− ATC authorization for an aircraft to execute a specific instrument approach procedure to an airport; e.g., “Cleared ILS Runway Three Six Approach.” (See APPROACH CLEARANCE.) (See INSTRUMENT APPROACH PROCEDURE.) (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARED AS FILED",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기가 제출된 비행계획서의 비행로에 따라서 진행을 허가하는 것을 의미한다. 동 허가서는 고도, SID, 변경 SID는 포함되지 않는다.\n(참조) : request full route clearance, AIM\nCLEARED (type of) APPROACH : 항공기에게 공항으로 특정 계기접근절차를 실행하도록 하는 항공교통관제허가 (즉, cleared ILS runway 36 approach)\n(참조) : instrument approach procedure approach clearance AIM FAR part 91",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Means the aircraft is cleared to proceed in accordance with the route of flight filed in the flight plan. This clearance does not include the altitude, DP, or DP Transition. (See REQUEST FULL ROUTE CLEARANCE.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARED FOR TAKE-OFF",
    "krName": "",
    "definitions": {
      "kr_proc": "출발 항공기에 대한 항공교통관제(ATC) 허가. 이륙허가는 알려진 교통과 물리적인 공항상태를 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "ATC authorization for an aircraft to depart. It is predicated on known traffic and known physical airport conditions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARED FOR THE OPTION",
    "krName": "임의허가",
    "definitions": {
      "kr_proc": "조종사의 재량으로 항공기의 착륙형태 (touch-and-go”, “low approach”, “missed approach”, “stop-and-go” 또는 “ full stop landing”)를 선택하도록 하는 항공교통관제허가. 이것은 보통 교관이 변화하는 상황에서 학생조종사의 조종수행능력을 평가 할 수 있도록 하기 위하여 훈련 시에 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "ATC authorization for an aircraft to make a touch-and-go, low approach, missed approach, stop and go, or full stop landing at the discretion of the pilot. It is normally used in training so that an instructor can evaluate a student’s performance under changing situations. Pilots should advise ATC if they decide to remain on the runway, of any delay in their stop and go, delay clearing the runway, or are unable to comply with the instruction(s). (See OPTION APPROACH.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARED THROUGH",
    "krName": "",
    "definitions": {
      "kr_proc": "허가한계점까지 항공로 비행 시 비행계획서를 다시 제출치 않고 특정 공항에 중간기착을 하는 항공기에 대한 항공교통관제허가",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "ATC authorization for an aircraft to make intermediate stops at specified airports without refiling a flight plan while en route to the clearance limit.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARED TO LAND",
    "krName": "착륙허가",
    "definitions": {
      "kr_proc": "착륙항공기에 대한 항공교통관제(ATC) 허가. 착륙허가는 알려진 교통과 알려진 물리적 공항상태를 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "ATC authorization for an aircraft to land. It is predicated on known traffic and known physical airport conditions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLEARWAY",
    "krName": "",
    "definitions": {
      "kr_proc": "지형 또는 고정 장애물이 특정 한계지역을 진입하지 않는 공항당국의 관리하에 있는 이륙활주로 바깥부분. 이 지역은 특정 터빈 항공기 운영을 위하여 요구될 수 있으며 이 지역의 크기와 경사도는 항공기가 이용하도록 승인되었던 시점에 따라 달라진다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An area beyond the takeoff runway under the control of airport authorities within which terrain or fixed obstacles may not extend above specified limits. These areas may be required for certain turbine-powered operations and the size and upward slope of the clearway will differ depending on when the aircraft was certificated. (Refer to 14 CFR part 1.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLIMB TO VFR",
    "krName": "",
    "definitions": {
      "kr_proc": "기상제한 사항이 제한된 시정인 경우, Class B, C, D, E 공항교통구역 내에서 항공기에게 시계비행규칙 조건으로 상승하도록 하는 항공교통관제허가. 항공기는 시계비행규칙 조건까지 상승하는 동안 구름의 회피가 이루어지도록 하여야 한다.\n(참조) : special VFRAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "ATC authorization for an aircraft to climb to VFR conditions within Class B, C, D, and E surface areas when the only weather limitation is restricted visibility. The aircraft must remain clear of clouds while climbing to VFR. (See SPECIAL VFR CONDITIONS.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLIMB VIA",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제허가의 약어로서, 허가받은 경로나 절차의 고도제한, 협의된 속도 제한 그리고 수평비행로 절차 준수 등을 필요로 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CLIMBOUT",
    "krName": "",
    "definitions": {
      "kr_proc": "이륙과 최초 순항고도 사이의 비행부분.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "That portion of flight operation between takeoff and the initial cruising altitude. CLIMB VIA– An abbreviated ATC clearance that requires compliance with the procedure lateral path, associated speed restrictions, and altitude restrictions along the cleared route or procedure.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLOSE PARALLEL RUNWAYS",
    "krName": "근접 평행활주로",
    "definitions": {
      "kr_proc": "항공교통관제에 의해 동시 독립 ILS 접근이 허가된 정밀활주로감시(PRM) 장치를 가진 활주로 중심선 간격이 4,300피트 미만과 3,000피트(SOIA 경우 750피트)로 분리된 2개 평행활주로. 이중 통신망, 조종사 특별 훈련, AAUP, 시각과 청각 경고 신호 가능한 NTZ 등이 필요하다. 활주로나 접근 경로 공간을 위한 고성능 감시 센서가 필요하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Two parallel runways whose extended centerlines are separated by less than 4,300 feet and at least 3000 feet (750 feet for SOIA operations) for which ATC is authorized to conduct simultaneous independent approach operations. PRM and simultaneous close parallel appear in approach title. Dual communications, special pilot training, an Attention All Users Page (AAUP), NTZ monitoring by displays that have aural and visual alerting algorithms are required. A high update rate surveillance sensor is required for certain runway or approach course spacing.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLOSED RUNWAY",
    "krName": "폐쇄활주로",
    "definitions": {
      "kr_proc": "항공기운항이 불안전한 활주로. 공항운영자/군작전 부서만이 활주로를 폐쇄할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A runway that is unusable for aircraft operations. Only the airport management/military operations office can close a runway.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLOSED TRAFFIC",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기가 교통장주를 벗어나지 않는 이륙과 착륙 또는 low approach를 포함하는 연속적인 운항.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Successive operations involving takeoffs and landings or low approaches where the aircraft does not exit the traffic pattern.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLOUD",
    "krName": "구름",
    "definitions": {
      "kr_proc": "구름은 지구 표면 위 대기에 있는 극미한 물방울들 혹은 얼음 입자들의 시각적인 축적물이다. 구름은 땅 안개, 안개, 빙무들과 다르며 지구표면 접촉 여부에 따라 각 문자로 정의된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A cloud is a visible accumulation of minute water droplets and/or ice particles in the atmosphere above the Earth’s surface. Cloud differs from ground fog, fog, or ice fog only in that the latter are, by definition, in contact with the Earth’s surface.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : calculated landing time)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CALCULATED LANDING TIME.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CLUTTER",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 운영에서 레이더회신은 강수, 금속조각 지형, 대량 항공기 타겟 또는 기타 현상에 의하여 야기된 레이더반사의 수신 그리고 시간적 전시를 나타낸다. 그러한 반사체는 항공교통관제시설이 레이더에 근거한 업무를 제공하는데 제한 또는 방해 할 수 있다.\n(참조) : ground clutter chaff precipitation target ICAO radar clutter",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "In radar operations, clutter refers to the reception and visual display of radar returns caused by precipitation, chaff, terrain, numerous aircraft targets, or other phenomena. Such returns may limit or preclude ATC from providing services based on radar. (See CHAFF.) (See GROUND CLUTTER.) (See PRECIPITATION.) (See TARGET.) (See ICAO term RADAR CLUTTER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "COASTAL FIX",
    "krName": "",
    "definitions": {
      "kr_proc": "국내 노선물과 해양 노선물간 항공기가 이동하는 곳의 항행참조물 또는 중간지점.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A navigation aid or intersection where an aircraft transitions between the domestic route structure and the oceanic route structure.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CODES",
    "krName": "",
    "definitions": {
      "kr_proc": "트랜스폰더에 의하여 송신된 신호에 응답하는 특정한 여러 신호로 배정된 숫자.\n(참조) : DISCRETE CODE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The number assigned to a particular multiple pulse reply signal transmitted by a transponder. (See DISCRETE CODE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "COLD TEMPERATURE COMPENSATION",
    "krName": "저온 보정",
    "definitions": {
      "kr_proc": "저온의 영향으로 항공기의 지시고도와 지형상의 진고도 비교하여 조종사가 항공기의 지시고도를 조정하는 절차. 장소의 높이에 따라 온도의 증감률은 더 많은 보정양이 필요하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "COMBINED CENTER-RAPCON",
    "krName": "",
    "definitions": {
      "kr_proc": "ACC의 기능과 레이더 접근관제시설을 결합한 항공교통관제기관.\n(참조) : ARTCC radar approach control facility",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "COMMON POINT",
    "krName": "공통지점",
    "definitions": {
      "kr_proc": "두 대 이상의 항공기가 동일 또는 벗어나는 진로로 비행하기 전에 통과할 것이라고 또는 통과한다고 보고할 중요지점. 거리분리를 수립/유지하기 위하여, 관제사는 항공기의 비행계획에 의하지 않는 공통지점을 결정하고 공통지점 상공으로 항공기를 비행하도록 허가한다.\n(참조) : signification point",
      "annex11": null,
      "doc4444": "A point on the surface of the earth common to the tracks of two aircraft, used as a basis for the application of separation (e.g. significant point, waypoint, navigation aid, fix).",
      "faa_pcg": "A significant point over which two or more aircraft will report passing or have reported passing before proceeding on the same or diverging tracks. To establish/maintain longitudinal separation, a controller may determine a common point not originally in the aircraft’s flight plan and then clear the aircraft to fly over the point. (See SIGNIFICANT POINT.)",
      "kr_ats": "항공기 두 대의 진로가 동일 한 지표면 위의 지점으로, 분리의 기준으로 사용되는 지점을 말한다.(예. 주요지점, 웨이포인트, 항행안전시설, 픽스)"
    }
  },
  {
    "enName": "COMMON ROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "내부 항행시설과 해안 픽스 간 북미노선의 부분",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SEGMENTS OF A SID/STAR)",
      "kr_ats": ""
    }
  },
  {
    "enName": "COMMON TRAFFIC ADVISORY FREQUENCY",
    "krName": "",
    "definitions": {
      "kr_proc": "관제탑이 운영되지 않은 공항에서 운항하는 동안 공항 조언 지침서를 수행할 목적으로 계획된 주파수, CTAF는 UNICOM, MULICON, FSS 또는 관제탑주파수일 수 있고 해당 항공간행물로 식별된다.\n(참조) : AC 90-42(traffic advisory practices at airport without operating towers)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A frequency designed for the purpose of carrying out airport advisory practices while operating to or from an airport without an operating control tower. The CTAF may be a UNICOM, Multicom, FSS, or tower frequency and is identified in appropriate aeronautical publications. (See DESIGNATED COMMON TRAFFIC ADVISORY FREQUENCY (CTAF) AREA.) (Refer to AC 90-66, Non−Towered Airport Flight Operations.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "COMPASS LOCATOR",
    "krName": "자침지시기",
    "definitions": {
      "kr_proc": "계기착륙장치(ILS)의 OM 또는 MM 위치에 설치된 L/MF 무선비컨. 대략 15마일 거리 내에서 또는 접근절차의 허가된 사항대로 항법목적으로 사용될 수 있다.\n1. OUTER COMPASS LOCATOR(OM) : ILS의 OM 지점에 설치된 자침지시기.\n(참조) : 항공안전법, AIM\n2. MIDDLE COMPASS LOCATOR(MM) : ILS의 MM 지점에 설치된 자침지시기\n(참조) : 항공안전법,\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A low power, low or medium frequency (L/MF) radio beacon installed at the site of the outer or middle marker of an instrument landing system (ILS). It can be used for navigation at distances of approximately 15 miles or as authorized in the approach procedure. a. Outer Compass Locator (LOM)− A compass locator installed at the site of the outer marker of an instrument landing system. (See OUTER MARKER.) b. Middle Compass Locator (LMM)− A compass locator installed at the site of the middle marker of an instrument landing system. (See MIDDLE MARKER.) (See ICAO term LOCATOR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "COMPASS ROSE",
    "krName": "",
    "definitions": {
      "kr_proc": "공항의 지상에 표시되거나 지도를 인쇄하거나 각도를 측정, 원형, 진북/ 자북 방향을 참조로 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A circle, graduated in degrees, printed on some charts or marked on the ground at an airport. It is used as a reference to either true or magnetic direction.",
      "kr_ats": ""
    }
  },
  {
    "enName": "COMPOSITE FLIGHT PLAN",
    "krName": "혼합 비행계획서",
    "definitions": {
      "kr_proc": "비행의 한 부분에 대한 VFR 운항을 지정하고 다른 부분에 대하여는 IFR 운항을 지정한 비행계획.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A flight plan which specifies VFR operation for one portion of flight and IFR for another portion. It is used primarily in military operations. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "COMPULSORY REPORTING POINTS",
    "krName": "필수보고지점",
    "definitions": {
      "kr_proc": "항공교통관제기관에 필수적으로 보고가 필요한 지점. 이것은 삼각형 모양으로 항공로지도에 명시되거나, 직항공로를 정의하기 위하여 선택된 픽스로서 비행계획상에 제출된다. 이러한 지점들은 항행 보조/픽스로 정의되는 지정학적 위치이다. 관제기관에 의해 항공기가 “radar contact” 되면 조종사는 필수보고지점에서 보고를 중단해야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Reporting points which must be reported to ATC. They are designated on aeronautical charts by solid triangles or filed in a flight plan as fixes selected to define direct routes. These points are geographical locations which are defined by navigation aids/fixes. Pilots should discontinue position reporting over compulsory reporting points when informed by ATC that their aircraft is in “radar contact.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "Computer",
    "krName": "컴퓨터",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "사람의 간섭 없이 자료의 수치, 논 리적 연산을 수행하는 장비를 말한다. 주기 - 본 표에서 컴퓨터란 용어는 컴퓨터 복합체를 의미하는 말로써 한 대 이상의 컴퓨터와 주변장치들을 모두 포함한다.",
      "annex11": "",
      "doc4444": "A device which performs sequences of arithmetical and logical steps upon data without human intervention. Note.— When the word “computer” is used in this document it may denote a computer complex, which includes one or more computers and peripheral equipment. 10/11/16",
      "faa_pcg": ""
    }
  },
  {
    "enName": "CONDITIONS NOT MONITORED",
    "krName": "",
    "definitions": {
      "kr_proc": "공항운영자가 이동지역 또는 이동지역 이외를 감독할 수 없을 이 정보는 NOTAM으로 발송된다. 보통 공항운영과 관련한 인원, 운영시간 등의 감소요가 수반된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "When an airport operator cannot monitor the condition of the movement area or airfield surface area, this information is issued as a NOTAM. Usually necessitated due to staffing, operating hours or other mitigating factors associated with airport operations.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONFIDENCE MANEUVER",
    "krName": "",
    "definitions": {
      "kr_proc": "만약 항공교통관제의 지시를 받고 따를 수 있을 때, 권한이 있는 조종사의 한 번 이상의 상승, 하강 또는 조종사의 임의적인 움직임.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A confidence maneuver consists of one or more turns, a climb or descent, or other maneuver to determine if the pilot in command (PIC) is able to receive and comply with ATC instructions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONFLICT ALERT",
    "krName": "충돌경고",
    "definitions": {
      "kr_proc": "즉각적인 주의/조치가 요구되는 관측된 타겟(IFR 또는 VFR로 알려진 항공기) 간에 발생 또는 발생이 예상되는 상황을 레이더 관제사에게 경고하기 위하여 설계된 항공교통관제 자동화 시스템의 한 기능\n(참조) : Mode C intruder alert",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A function of certain air traffic control automated systems designed to alert radar controllers to existing or pending situations between tracked targets (known IFR or VFR aircraft) that require his/her immediate attention/action. (See MODE C INTRUDER ALERT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONFLICT RESOLUTION",
    "krName": "충돌해소",
    "definitions": {
      "kr_proc": "레이더식별이 되고 항공교통관제기관과 교신중인 항공기 간 레이더타겟이 맞닿지 않도록 하는 잠재적 충돌해소. 이러한 절차가 적용될 시 적절한 교통정보조언이 발부된다.\n(주기) : 이 절차는 모자이크 레이더장비를 이용한 동 정보의 제공은 지양하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The resolution of potential conflictions between aircraft that are radar identified and in communication with ATC by ensuring that radar targets do not touch. Pertinent traffic advisories must be issued when this procedure is applied. Note: This procedure must not be provided utilizing mosaic radar systems.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONFORMANCE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 현재 비행계획과 경로를 참고해서 항공기의 실제 위치가 항공기 주변에 구성된 일치하는 구역에 있는 상태",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The condition established when an aircraft’s actual position is within the conformance region constructed around that aircraft at its position, according to the trajectory associated with the aircraft’s Current Plan.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTACT",
    "krName": "",
    "definitions": {
      "kr_proc": "1. 통신으로 교신(시설 명칭과 적용된다면 주파수가 따름)\n2. 조종사가 항공기의 자세를 확인하고, 표면에 대한 시각 참조물을 이용하여 비행하는 비행조건.\n(참조) : CONTACT APPROACH RADAR CONTACT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. Establish communication with (followed by the name of the facility and, if appropriate, the frequency to be used). b. A flight condition wherein the pilot ascertains the attitude of his/her aircraft and navigates by visual reference to the surface. (See CONTACT APPROACH.) (See RADAR CONTACT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTACT APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "계기비행계획의 항공기가 항공교통관제시설의 허가를 갖고 구름으로부터 최소 1마일의 비행시정으로 회피하여 그러한 조건으로 목적공항까지 진행할 것이라고 상당한 기대가 되는 경우 수행되는 접근으로, 항공기는 계기접근절차로부터 전환하여 목적공항까지 지면에 대한 시각참조물을 참조하여 비행할 수 있다. 이 접근은 조종사가 요구하고 목적공항의 보고된 지상시정이 최소 1SM 이상인 경우 허가된다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An approach wherein an aircraft on an IFR flight plan, having an air traffic control authorization, operating clear of clouds with at least 1 mile flight visibility and a reasonable expectation of continuing to the destination airport in those conditions, may deviate from the instrument approach procedure and proceed to the destination airport by visual reference to the surface. This approach will only be authorized when requested by the pilot and the reported ground visibility at the destination airport is at least 1 statute mile. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTAMINATED RUNWAY",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로는 활주로 상에 고인 물, 얼음, 눈, slush, 서리, 다량의 바퀴자국 또는 기타 물질이 존재하는 경우 불확실하다고 판단된다. 활주로는 ALD내의 활주로 500피트에 대한 평균 마찰계수가 권고 최저마찰수준 이하로 내려간 경우 및 인접한 500피트 부분에서 평균 마찰계수가 정비 유지계획 마찰수준 이하로 내려간 경우 고무의 양 또는 다른 마찰을 감소시키는 물질과 관련하여 불확실해진다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A runway is considered contaminated whenever standing water, ice, snow, slush, frost in any form, heavy rubber, or other substances are present. A runway is contaminated with respect to rubber deposits or other friction-degrading substances when the average friction value for any 500-foot segment of the runway within the ALD fails below the recommended minimum friction level and the average friction value in the adjacent 500-foot segments falls below the maintenance planning friction level.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTINUE",
    "krName": "",
    "definitions": {
      "kr_proc": "관제지시로 사용될 때는 명확하게 또 다른 단어 사용돼야 한다.\n예 : CONTINUE TAXI, CONTINUE DESCENT, CONTINUE INBOUND",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "When used as a control instruction should be followed by another word or words clarifying what is expected of the pilot. Example: “continue taxi,” “continue descent,” “continue inbound,” etc.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTROL AREA",
    "krName": "관제구",
    "definitions": {
      "kr_proc": "지구상의 일정한 고도한계로부터 상부의 특정높이까지 연장되는 관제공역\nCONTROLLED AERODROME(관제비행장) 비행장교통에 대하여 항공교통관제업무를 제공하는 비행장\n(주기) 관제비행장이란 용어는 항공교통관제업무가 비행장교통에 제공됨을 나타내고 있을 뿐이며, 관제권이 존재한다는 것을 의미하지는 않음.",
      "annex11": "A controlled airspace extending upwards from a specified limit above the earth.",
      "doc4444": "A controlled airspace extending upwards from a specified limit above the earth.",
      "faa_pcg": "A controlled airspace extending upwards from a specified limit above the earth.",
      "kr_ats": "지구상의 일정한 고도한계 상부 의 특정 높이까지 연장되는 관제공역을 말한다."
    }
  },
  {
    "enName": "CONTROL SECTOR",
    "krName": "관제섹터",
    "definitions": {
      "kr_proc": "일반적으로 지역관제소 또는 접근관제시설에서 관제사가 항공교통관제의 책임을 갖는 지정된 수평, 수직 크기의 공역. 관제권은 현저한 교통 흐름, 고도층 그리고 관제사의 업무량에 따라 수립된다. 관제권내의 비행 중 조종사의 통신은 일반적으로 관제권에 할당된 개별 주파수에 따라 유지된다.\n(참조) : DISCRETE FREQUENCY",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An airspace area of defined horizontal and vertical dimensions for which a controller or group of controllers has air traffic control responsibility, normally within an air route traffic control center or an approach control facility. Sectors are established based on predominant traffic flows, altitude strata, and",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTROL SLASH",
    "krName": "",
    "definitions": {
      "kr_proc": "해당 항공기의 실제 위치를 나타내는 RADAR BEACON SLASH.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A radar beacon slash representing the actual position of the associated aircraft. Normally, the control slash is the one closest to the interrogating radar beacon site. When ARTCC radar is operating in narrowband (digitized) mode, the control slash is converted to a target symbol.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTROL ZONE",
    "krName": "관제권",
    "definitions": {
      "kr_proc": "지구표면으로부터 일정한 상부한계까지의 관제공역",
      "annex11": "A controlled airspace extending upwards from the surface of the earth to a specified upper limit.",
      "doc4444": "A controlled airspace extending upwards from the surface of the earth to a specified upper limit.",
      "faa_pcg": null,
      "kr_ats": "지구표면으로 부터 일정한 상부 한계까지의 관제공역을 말한다."
    }
  },
  {
    "enName": "Controlled aerodrome",
    "krName": "관제비행장",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "비행장교통에 대하 여 항공교통관제업무가 제공되는 비행장을 말한다. 주기 - \"관제비행장\"이라는 용어는 비행장 교통에 대 - 개정 : 2026.07.06. 항공교통업무기준 해 항공교통관제서비스가 제공됨을 의미하지만, 반드시 관제권이 존재함을 의미하는 것은 아니다.",
      "annex11": "",
      "doc4444": "An aerodrome at which air traffic control service is provided to aerodrome traffic. Note.— The term “controlled aerodrome” indicates that air traffic control service is provided to aerodrome traffic but does not necessarily imply that a control zone exists.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "CONTROLLED AIRSPACE",
    "krName": "관제공역",
    "definitions": {
      "kr_proc": "1. 관제공역은 A, B, C, D, E등급으로 구분한다.\n2. 관제공역은 모든 항공기 운영자가 조종사 자격, 비행 규칙, 탑재장비 요구조건을 갖춰야 하는 공역이다. 관제공역 내에서 계기비행방식 운영을 위해 조종사는 계기비행규칙 비행계획서를 제출해야 하며 적절한 항공교통관제허가를 받아야 한다. B, C, D등급 공역은 공역이 지정된 곳에 최소한 하나의 주요 공항을 포함하고 있다.\n3. 관제공역은 다음과 같이 지정된다.\n3-1. A등급 공역 : 평균해면 20000피트 초과 평균해면 60000피트 이하의 항공로(Airways)이며, 계기비행규칙으로 비행하여야 한다.\n3-2. B등급 공역 : 항공기 운항이나 승객 수송이 특별히 많은 공항 주변의 공역이며, 계기/시계비행 운항이 모두 가능하다.\n3-3. C등급 공역 : 항공기 운항이나 승객 수송이 많은 공항 주변의 공역이며, 계기/시계비행 운항이 모두 가능하다.\n3-4. D등급 공역 : 관제탑이 운영되는 공항 주변의 공역 또는 최저항공로고도(MEA) 이상 평균해면 20000피트 이하의 모든 항공로 또는 서울접근관제구역 중 B등급 이외의 관제공역으로서 평균해면 10000피트 초과 평균해면 18500피트 이하의 공역이며, 계기/시계비행 운항이 모두 가능하다.\n3-5. E등급 공역 : A, B, C, D등급 공역 이외의 관제공역으로 영공에서는 해면 또는 지표면으로부터 1000피트 이상 평균해면 60000피트 이하, 공해상에서는 해면에서 5500피트 이상 평균해면 60000피트 이하이며, 계기/시계비행 운항이 모두 가능하다.",
      "annex11": "An airspace of defined dimensions within which air traffic control service is provided in accordance with the airspace classification. Note.— Controlled airspace is a generic term which covers ATS airspace Classes A, B, C, D and E as described in 2.6.",
      "doc4444": "An airspace of defined dimensions within which air traffic control service is provided in accordance with the airspace classification. Note.— Controlled airspace is a generic term which covers ATS airspace Classes A, B, C, D and E as described in",
      "faa_pcg": "An airspace of defined dimensions within which air traffic control service is provided to IFR flights and to VFR flights in accordance with the airspace classification. Note: Controlled airspace is a generic term which covers ATS airspace Classes A, B, C, D, and E.",
      "kr_ats": "공역등급에 따라 항공교 통관제업무를 계기비행 또는 시계비행항공기에게 제공 하는 일정범위의 공역을 말한다. 주기 － 관제공역은 일반적으로 항공교통업무공역 Class A, B, C, D 및 E를 포함한다."
    }
  },
  {
    "enName": "CONTROLLED DEPARTURE TIME PROGRAMS",
    "krName": "",
    "definitions": {
      "kr_proc": "계획표는 항공기의 지연이 항공로체계 또는 착륙 의도된 지역에서 생기도록 계획될 경우, 출발공항의 지상에 대기시키는 흐름통제 진행장치이다. 이들 계획표의 목적은 항공교통체계의 혼잡을 줄이거나 도착센터 또는 터미널지역에서 체공하도록 제한된다. CDT는 예상출발허가시간(EDCT)와 같이 비행계획서상에 나타난 특정 출발 SLOT이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTROLLED FLIGHT",
    "krName": "관제항공기",
    "definitions": {
      "kr_proc": "항공교통관제허가에 의하여 비행하는 항공기",
      "annex11": "Any flight which is subject to an air traffic control clearance.",
      "doc4444": "Any flight which is subject to an air traffic control clearance.",
      "faa_pcg": null,
      "kr_ats": "항공교통관제허가에 따라 비행하는 항공기를 말한다."
    }
  },
  {
    "enName": "CONTROLLED TIME OF ARRIVAL",
    "krName": "",
    "definitions": {
      "kr_proc": "교통 관리 프로그램 중의 할당된 도착 시각. 이 시각은 세부조정 또는 사용자 옵션에 따라 수정될 수도 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Arrival time assigned during a Traffic Management Program. This time may be modified due to adjustments or user options.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONTROLLER",
    "krName": "관제사",
    "definitions": {
      "kr_proc": "ATC 업무를 제공하도록 인가된 사람.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A person authorized to provide air traffic control services.",
      "kr_ats": "한 항 공기에 대한 항공교통관제업무 제공의 책임을 비행로를 따라 다음 항공교통교통관제시설/관제사에 이양하는 항 공교통교통관제시설/관제사를 말한다."
    }
  },
  {
    "enName": "CONTROLLER PILOT DATA LINK COMMUNICATIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "지상 또는 위성 기반의 무선 중계국을 이용하여 조종사와 관제사간 문자화된 항공교통관제 메시지를 교환하는 양방향 디지털 통신 시스템.",
      "annex11": "A means of communication between controller and pilot, using data link for ATC communications.",
      "doc4444": "A means of communication between controller and pilot, using data link for ATC communications.",
      "faa_pcg": "A two−way digital communications system that conveys textual air traffic control messages between controllers and pilots using ground or satellite-based radio relay stations.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CONVECTIVE SIGMET",
    "krName": "SIGMET : 대류",
    "definitions": {
      "kr_proc": "항공기의 안전에 중요한 대류성 기상에 관련한 조언. 이 기상조언에는 토네이도, 뇌우 전선, 어떤 강도의 예견된 뇌우, 4/10 또는 그 이상 지역범위의 VIP 수준 4보다 크거나 같은 뇌우지역 그리고 3/4인치 또는 이상의 우박이 있는 지역을 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A weather advisory concerning convective weather significant to the safety of all aircraft. Convective SIGMETs are issued for tornadoes, lines of thunderstorms, embedded thunderstorms of any intensity level, areas of thunderstorms greater than or equal to VIP level 4 with an area coverage of 4/ (40%) or more, and hail 3/ inch or greater. (See AIRMET.) (See CWA.) (See GRAPHICAL AIRMEN’S METEOROLOGICAL INFORMATION.) (See SAW.) (See SIGMET.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "COORDINATES",
    "krName": "",
    "definitions": {
      "kr_proc": "위치결정을 위하여 사용되는 위도와 경도가 일반적으로 도/분/초로 표시되는 참조선의 교차점",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The intersection of lines of reference, usually expressed in degrees/minutes/seconds of latitude and longitude, used to determine position or location.",
      "kr_ats": ""
    }
  },
  {
    "enName": "COORDINATION FIX",
    "krName": "",
    "definitions": {
      "kr_proc": "관제시설이 항공기를 이양하거나 또는 비행진행정보를 조정하는데 관련하는 지점. 공항시설에 대하여, 이 지점은 또한 도착 항공기를 위한 허가지점으로 사용된다.\nCOPTER\n(참고) : HELICOPTER",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The fix in relation to which facilities will handoff, transfer control of an aircraft, or coordinate flight progress data. For terminal facilities, it may also serve as a clearance for arriving aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CORRECTION",
    "krName": "",
    "definitions": {
      "kr_proc": "교신중 오류가 발생했을 시 수정지시를 따른다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An error has been made in the transmission and the correct version follows.",
      "kr_ats": ""
    }
  },
  {
    "enName": "COUPLED APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "Coupled approach는 항공기의 자동착륙장치에 의하여 수행되는 계기접근이며, 자동착륙장치는 장착된 항법장비로부터 위치정보 그리고/또는 시각적으로 묘사되는 조종지시를 수신한다. 일반적으로, 비정밀 coupled approach는 최저강하고도 아래 50피트(AGL) 이하의 고도에서는 수동(자동조종해제)으로 비행이 이루어져야한다. 그리고 정밀 coupled approach는 50피트(AGL) 이하에서는 수동(자동조종해제)으로 비행이 이루어져야한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An instrument approach performed by the aircraft autopilot, and/or visually depicted on the flight director, which is receiving position information and/or steering commands from onboard navigational equipment. In general, coupled non-precision approaches must be flown manually (autopilot disengaged) at altitudes lower than 50 feet AGL below the minimum descent altitude, and coupled precision approaches must be flown manually (autopilot disengaged) below 50 feet AGL unless authorized to conduct autoland operations. Coupled instrument approaches are commonly flown to the allowable IFR weather minima established by the operator or PIC, or flown VFR for training and safety.",
      "kr_ats": ""
    }
  },
  {
    "enName": "COURSE",
    "krName": "",
    "definitions": {
      "kr_proc": "1. 북쪽으로부터 각도로 측정된 수평면에서 계획된 비행방향.\n2. 일반적으로 전방진로 또는 후방진로로 명시되는 ILS 로컬라이저 신호형태",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. The intended direction of flight in the horizontal plane measured in degrees from north. b. The ILS localizer signal pattern usually specified as the front course or the back course. (See BEARING.) (See INSTRUMENT LANDING SYSTEM.) (See RADIAL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CPDLC",
    "krName": "관제사-조종사 데이터링크통신",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공교통관제 통신을 위해 데이터링크를 사용하여 관제사와 조종사 간 통신하는 방법을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "CPDLC message",
    "krName": "CPDLC 전문",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "공중시스템과 지상시스 템 간에 교환되는 정보를 말한다. CPDLC 전문은 전송 개시자에 의한 단일 전문 또는 단일 송신 내 포함되는 다수의 단일 전문요소의 조합으로 구성된다.",
      "annex11": "",
      "doc4444": "Information exchanged between an airborne system and its ground counterpart. A CPDLC message consists of a single message element or a combination of message elements conveyed in a single transmission by the initiator.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "CPDLC message set",
    "krName": "CPDLC 전문 구성",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "CPDLC전문을 구성하는 표준 전문 요소 및 자유 텍스트 전문 목록을 말한다.",
      "annex11": "",
      "doc4444": "A list of standard message elements and free text message elements.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "CPL, Current flight plan",
    "krName": "최신비행계획서",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "허가 등에 따 라 변경된 최신의 비행계획을 말한다. 주기 - \"전문(message)\"이란 용어가 최신비행계획서 문미에 덧붙여 사용될 때, 이는 한 기관에서 다른 기관 으로 보내진 유효 비행계획 자료의 내용과 형식을 의미 한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "CRITICAL ENGINE",
    "krName": "",
    "definitions": {
      "kr_proc": "엔진 고장으로 항공기의 성능 또는 조작에 많은 영향을 미칠수 있는 상태의 엔진.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The engine which, upon failure, would most adversely affect the performance or handling qualities of an aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CROSS BLEED START",
    "krName": "",
    "definitions": {
      "kr_proc": "지상전원 공급이 이루어지지 않은 경우 항공기 자체전원을 이용하여 엔진시동을 시도하는 것으로써, 주기장 내에서는 허가될 수 없으며, 항공기 후미 500피트 이상의 안전거리가 확보된 경우에 한하여 제한적으로 허가\nCROSS (fix) AT (altitude) - 특정지점에서 특정한 고도제한이 요구되는 경우 항공교통관제시설에서 사용되는 용어.\nCROSS (fix) AT OR ABOVE (altitude) - 특정지점에서 고도제한이 요구되는 경우 항공교통관제시설에서 사용되는 용어. 이 용어는 해당 지점을 설정 고도보다 높게 통과하는 것을 의미하나, 다음 지점에 설정된 고도제한 또는 배정된 고도까지 위반하여도 된 다는 뜻은 아니다.\nCROSS (fix) AT OR BELOW (altitude) - 특정 지점에서 최대통과고도가 요구되는 경우 항공교통관제시설에서 사용되는 용어. 이것은 그 지점에서 더 낮은 고도로 통과하는 것을 의미한다. 그러나 이것은 최소계기비행고도 이상이 되어야한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CROSSWIND",
    "krName": "",
    "definitions": {
      "kr_proc": "1. 교통장주와 관련하여 사용되는 경우, 󰡒crosswind leg󰡓을 의미한다.\n2. 바람상태와 관련하여 사용되는 경우, 활주로와 평행하지 않은 또는 항공기의 비행로와 평행하지 않은 바람을 의미한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. When used concerning the traffic pattern, the word means “crosswind leg.” (See TRAFFIC PATTERN.) b. When used concerning wind conditions, the word means a wind not parallel to the runway or the path of an aircraft. (See CROSSWIND COMPONENT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CROSSWIND COMPONENT",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로의 종측에 대하여 90도 범위안에서 Knots로 측정된 바람요소.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The wind component measured in knots at 90 degrees to the longitudinal axis of the runway.",
      "kr_ats": ""
    }
  },
  {
    "enName": "CRUISE",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사에게 최소계기비행고도 이상 허가된 고도 이하에서 자유롭게 고도를 비행하도록 지시할 때 사용하는 용어. 조종사는 이 고도구역 내의 중간고도에서 수평비행을 할 수 있다. 이 구역에서의 상승/강하는 조종사의 재량에 따라 이루어진다. 일단 조종사가 강하를 시작하고 특정고도를 이탈한다고 보고하면 추가적인 항공교통관제허가 없이 그 고도로 돌아갈 수 없다. 추가로 이 용어는 목적공항으로 비행하고 접근하라는 조종사를 위한 승인이며, 다음과 연결되어 사용될 수 있다.\n1. 표준/특별 계기접근절차가 수립된 지역에서 공항의 허가한계지점. 공항으로의 계기강하가 요구 될 때, 조종사는 당해 공항에 대한 표준/특별 계기접근절차에 따른 강하가 요구된다.\n2. 관제구역 내/이하/외부의 그리고 표준/특별계기접근절차가 없는 지역에서 공항의 허가한계지점. 이러한 허가사항은 조종사에게 계기비행 기상조건에서 적용 가능한 최소계기비행고도 이하로 강하하도록 허가하는 것이 아니며 또한 그것은 항공교통관제시설이 Class G 공역에서 항공기에 대한 관제를 제공한다는 것을 의미하지 않는다. 그러나 이 용어는 항공기에게 시계비행규칙에 따라 목적공항으로 비행하는 것을 허가하는 의미이며 또한 계기비행계획이 끝나는 시점까지 수색 및 구조업무를 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used in an ATC clearance to authorize a pilot to conduct flight at any altitude from the minimum IFR altitude up to and including the altitude specified in the clearance. The pilot may level off at any intermediate altitude within this block of airspace. Climb/descent within the block is to be made at the discretion of the pilot. However, once the pilot starts descent and verbally reports leaving an altitude in the block, he/she may not return to that altitude without additional ATC clearance. Further, it is approval for the pilot to proceed to and make an approach at destination airport and can be used in conjunction with:",
      "kr_ats": ""
    }
  },
  {
    "enName": "CRUISE CLIMB",
    "krName": "순항상승",
    "definitions": {
      "kr_proc": "비행중 항공기 중량 감소에 따라 항공기 엔진추력을 유지시키면서 고도를 증가시키며 비행하는 항공기의 운항기술.",
      "annex11": null,
      "doc4444": "An aeroplane cruising technique resulting in a net increase in altitude as the aeroplane mass decreases.",
      "faa_pcg": "A climb technique employed by aircraft, usually at a constant power setting, resulting in an increase of altitude as the aircraft weight decreases.",
      "kr_ats": "항공기 중량이 감소함에 따라 고 도를 단계적으로 상승시키는 항공기 순항기법을 말한다."
    }
  },
  {
    "enName": "CRUISE LEVEL",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : cruising altitude)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CRUISING ALTITUDE",
    "krName": "순항고도",
    "definitions": {
      "kr_proc": "항공로 수평 비행시 유지할 고도 또는 비행고도. 이것은 일정한 고도이고 순항허가와 혼돈 되지 않아야 한다.\n(참조) : altitude ICAO cruising level",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An altitude or flight level maintained during en route level flight. This is a constant altitude and should not be confused with a cruise clearance. (See ALTITUDE.) (See ICAO term CRUISING LEVEL.)",
      "kr_ats": "비행의 대부분의 기간 동안 유지하는 고도를 말한다."
    }
  },
  {
    "enName": "CRUISING LEVEL",
    "krName": "순항비행고도",
    "definitions": {
      "kr_proc": "주요 비행부분에서 유지하는 고도",
      "annex11": "A level maintained during a significant portion of a flight.",
      "doc4444": "A level maintained during a significant portion of a flight.",
      "faa_pcg": "A level maintained during a significant portion of a flight.",
      "kr_ats": "비행의 대부분의 기간 동안 유지하는 고도를 말한다."
    }
  },
  {
    "enName": "CTA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : controlled time of arrival)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CONTROLLED TIME OF ARRIVAL.) (See ICAO term CONTROL AREA.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CTAF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : common traffic advisory frequency)\nCURRENT FLIGHT PLAN[ICAO](최신 비행계획서) : 허가 등을 받고 변경된 최신비행계획.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See COMMON TRAFFIC ADVISORY FREQUENCY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Current data authority",
    "krName": "관할데이터기관",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "조종사와 현재 해당 조종사가 운항을 하는 항공기를 관제하고 있는 관 제사 간의 CPDLC 대화가 이루어질 수 있도록 지정된 지상시스템을 말한다.",
      "annex11": "",
      "doc4444": "The designated ground system through which a CPDLC dialogue between a pilot and a controller currently responsible for the flight is permitted to take place.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "CURRENT PLAN",
    "krName": "최신 계획서",
    "definitions": {
      "kr_proc": "항공기가 비행예정이며 항공교통관제허가서를 받음",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "CVFP APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : charted visual flight procedure approach)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CHARTED VISUAL FLIGHT PROCEDURE APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CWA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : center weather advisory and weather advisory)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CENTER WEATHER ADVISORY and WEATHER ADVISORY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "CYCLIC REDUNDANCY CHECK/CRC",
    "krName": "순환중복검사",
    "definitions": {
      "kr_proc": "자료의 손상 또는 변질 여부에 대한 확인단계를 제공하는 자료의 디지털적인 표현방식에 적용되는 수학적 알고리즘",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "Data convention",
    "krName": "자료입력규칙",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "자료를 의미 있는 통신 형태로 결합할 수 있는 방법이나 순서에 대한 합의된 규칙을 말한다.",
      "annex11": "",
      "doc4444": "An agreed set of rules governing the manner or sequence in which a set of data may be combined into a meaningful communication.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "DATA LINK COMMUNICATIONS",
    "krName": "데이터링크통신",
    "definitions": {
      "kr_proc": "데이터링크로 메시지를 교환하기 위한 통신 형태\nDANGER AREA(위험공역)[ICAO]] : 특정한 시간에 항공기의 비행에 위험스러운 활동이 존재하는 한정된 크기의 구역.\n(참조 : 항공안전법)",
      "annex11": "A form of communication intended for the exchange of messages via a data link.",
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "Data processing",
    "krName": "자료처리",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "데이터에 대해 수행되는 체 계적인 일련의 작업을 말한다. 주기 - 작업의 예로는 정보를 추출 또는 수정하거나 정보의 표현을 변경하기 위한 병합, 정렬, 계산 또는 기 타 변형 또는 재배열이 있다. 결심고도(DA) 또는 결심높이(DH). 접근을 계속할 수 있 게 하는 필요한 시각 참조물 확인 이루어지지 않을 경 우, 실패접근을 시작해야 하는 3D 계기접근 시의 특정 고도 또는 높이를 말한다. 주기1 - 결심고도는 평균해수면, 결심높이는 활주로 시단으로 부터의 높이를 말한다. 주기2 - 필요한 시각 참조물이란 조종사가 원하는 비 행경로와 관련하여 항공기 위치 및 위치 변화율을 판단 할 수 있도록 충분한 시간 동안 시야에 있어야 하는 시 각보조장비 또는 접근구역의 일부를 의미한다. 결심높이 가 있는 CAT III 운항에서 필요한 시각참조물은 특정 절 차 및 운항을 위해 지정된 시각적 기준을 의미한다. 주기 3.- 편의상 두 가지가 함께 쓰일 때는 ‘결심고도 /높이’ 및 약어 ‘DA/H’로 쓰기도 한다.",
      "annex11": "",
      "doc4444": "A systematic sequence of operations performed on data. Note.— Examples of operations are the merging, sorting, computing or any other transformation or rearrangement with the object of extracting or revising information, or of altering the representation of information.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "DEAD RECKONING",
    "krName": "추측항법",
    "definitions": {
      "kr_proc": "비행에 적용되는 추측항법은 대기속도, 진로, 기수, 풍향과 풍속, 지상속도 그리고 경과된 시간에 근거하여 계산된 추측항법이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Dead reckoning, as applied to flying, is the navigation of an airplane solely by means of computations based on airspeed, course, heading, wind direction, and speed, groundspeed, and elapsed time.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DECISION ALTITUDE(DA)",
    "krName": "",
    "definitions": {
      "kr_proc": "계기접근(ILS, GLS, 수직유도 RNAV) 절차 시 조종사가 시각참조물을 확인하지 못할 경우 계속접근할지 혹은 실패접근을 시작할지 결정해야하는 특정고도.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A specified altitude (mean sea level (MSL)) on an instrument approach procedure (ILS, GLS, vertically guided RNAV) at which the pilot must decide whether to continue the approach or initiate an immediate missed approach if the pilot does not see the required visual references.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DECISION ALTITUDE/HEIGHT",
    "krName": "결심고도/높이",
    "definitions": {
      "kr_proc": "접근을 수행하는데 요구되는 시계참조물을 확인하지 못한 경우, 실패접근이 시작되는 정밀접근에서의 특정고도(DH/A).\n1. 결심고도(DA)는 평균해면고도(MSL)을 기준으로 표시하고 결심고도(DH)는 활주로 말단(threshold) 고도를 기준으로 표시한다.\n2. CAT Ⅱ 및 CAT Ⅲ 최저치는 DA가 아닌 DH로 표현된다. DH 최저치는 기압고도계가 아닌 전파고도계로 산정된다.\n3. 요구되는 시각참조물은 조종사가 희망하는 비행로와 관련하여, 항공기의 위치와 위치변화율을 조정하기에 충분한 시간 확보를 위하여 육안으로 확인되어야 할 시각보조시설 구역 또는 접근구역을 의미한다.",
      "annex11": null,
      "doc4444": "The vertical distance of a level, a point or an object considered as a point, measured from a specified datum.",
      "faa_pcg": null,
      "kr_ats": "장애물 회피 기준을 준수하기 위해 관련 활주로시단의 비행장표고로 또는 비행장표고로부터 설정된 가장 낮은 고도 또는 높이를 말한다. 주기1 - 장애물회피고도는 평균해수면을 기준으로 하 고, 장애물회피높이는 활주로시단 높이를 기준으로 한 다. 비정밀접근절차의 경우 비행장표고를 기준으로 하 되, 활주로시단 높이가 비행장 표고보다 2m (7ft) 이상 낮을 때는 활주로시단 높이를 기준으로 한다. 선회접근 절차의 경우에는 비행장 표고를 기준으로 한다. 주기2 - 편의상 두 가지 표현이 함께 사용될 때는 장 애물 ‘회피고도/높이’와 약어 ‘OCA/H’로 사용한다."
    }
  },
  {
    "enName": "DECISION HEIGHT",
    "krName": "결심고도",
    "definitions": {
      "kr_proc": "항공기의 운항과 관련하여 ILS, PAR 계기접근 중 접근의 계속 진행 또는 실패접근의 수행에 관한 판단이 이루어져야만 하는 높이를 의미한다.\n(참조) : ICAO DECISION ALTITUDE/HEIGHT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "With respect to the operation of aircraft, means the height at which a decision must be made during an ILS or PAR instrument approach to either continue the approach or to execute a missed approach. (See ICAO term DECISION ALTITUDE/DECISION HEIGHT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DECLARED CAPACITY",
    "krName": "",
    "definitions": {
      "kr_proc": "정상 상황에서 항공기에 제공할 수 있는 업무로 측정된 ATC 시스템 또는 하부 시스템의 능력. 해당 공역에서 담당관제사의 업무량에 영향을 주는 기상, ATC 기관의 구성, 가용인원, 장비, 기타 요소에 따라, 주로 특정 시간대에 특정 공역으로 진입하는 항공기의 대수로 나타냄",
      "annex11": "A measure of the ability of the ATC system or any of its subsystems or operating positions to provide service to aircraft during normal activities. It is expressed as the number of aircraft entering a specified portion of airspace in a given period of time, taking due account of weather, ATC unit configuration, staff and equipment available, and any other factors that may affect the workload of the controller responsible for the airspace.",
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "DECODER",
    "krName": "",
    "definitions": {
      "kr_proc": "선택한 코드로 전시기에 유효한 ATCRBS 트랜스폰더(transponder)로부터 수신된 신호를 판독하는 장치.\n(참조) : CODES, RADAR",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The device used to decipher signals received from ATCRBS transponders to effect their display as select codes. (See CODES.) (See RADAR.) DEFENSE AREA– Any airspace of the contiguous United States that is not an ADIZ in which the control of aircraft is required for reasons of national security.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DEFENSE VISUAL FLIGHT RULES",
    "krName": "DVFR ; 방어시계비행규칙",
    "definitions": {
      "kr_proc": "시계비행규칙 하에서 ADIZ내에 비행하는데 적용되는 규칙.\nDELAY INDEFINITE (Reason If Know) EXPECT FURTHER CLEARANCE (Time) : 지연시간 또는 지연 이유를 즉시 알 수 없는 경우, 조종사에게 통보하기 위하여 항공교통관제시설에서 사용되는 용어. 예를 들면, 활주로상의 고장 항공기, 공항 또는 항공로지역의 수용한계초과 착륙 최저치 미만의 기상 등.\n(참조) : EXPECT FURTHER CLEARANCE (TIME))",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Rules applicable to flights within an ADIZ conducted under the visual flight rules in 14 CFR part 91. (See AIR DEFENSE IDENTIFICATION ZONE.) (Refer to 14 CFR part 91.) (Refer to 14 CFR part 99.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DELAY TIME",
    "krName": "지연시간",
    "definitions": {
      "kr_proc": "픽스 도착예정시간에서 당해 픽스의 실제교차시간과의 시간차. 이것은 ACLT와 VTA 간의 차이이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "DEPARTURE CENTER",
    "krName": "출발관제소",
    "definitions": {
      "kr_proc": "비행에 영향을 끼치는 공항이 있는 공역 관할권을 가지는 지역관제소(ACC).",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The ARTCC having jurisdiction for the airspace that generates a flight to the impacted airport. DEPARTURE CLEARANCE (DCL) APPLICATION– The DCL application provides up to nine Selectable Fields for the tower controller to enter all other clearance information.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DEPARTURE CONTROL",
    "krName": "출발관제사",
    "definitions": {
      "kr_proc": "출발 계기비행항공기 및 특정조건에서 시계비행항공기에 대한 항공교통관제업무를 제공하는 접근관제시설의 기능.\n(참조) : approach control facility AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A function of an approach control facility providing air traffic control service for departing IFR and, under certain conditions, VFR aircraft. (See APPROACH CONTROL FACILITY.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DEPARTURE SEQUENCING PROGRAM",
    "krName": "",
    "definitions": {
      "kr_proc": "출발을 위하여 일반지점에서 특정한 간격이 유지되도록 설계된 프로그램.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A program designed to assist in achieving a specified interval over a common point for departures.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DEPARTURE TIME",
    "krName": "출발시간",
    "definitions": {
      "kr_proc": "항공기가 이륙(airborne)한 시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The time an aircraft becomes airborne.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DEPENDENT PARALLEL APPROACHES",
    "krName": "종속평행접근",
    "definitions": {
      "kr_proc": "인접한 활주로 중심 연장선상의 항공기간 레이더 분리 최저치가 규정된 평행 또는 준 평행 계기 활주로로 진행하는 동시 접근",
      "annex11": null,
      "doc4444": "Simultaneous approaches to parallel or near-parallel instrument runways where ATS surveillance system separation minima between aircraft on adjacent extended runway centre lines are prescribed.",
      "faa_pcg": null,
      "kr_ats": "인접한 활 주로 중심 연장선상의 항공기간 항공교통업무 감시시스 템 분리최저치가 규정된 평행 또는 준평행 계기활주로 로 동시에 접근하는 것을 말한다."
    }
  },
  {
    "enName": "DESCEND VIA",
    "krName": "",
    "definitions": {
      "kr_proc": "발간된 수평 경로와 관련 속도 제한 및 발간된 고도제한 사항을 준수하며 조종사 재량 고도 강하가 요구되는 축약된 항공교통관제 허가",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "DESCENT SPEED ADJUSTMENTS",
    "krName": "강하 속도조절",
    "definitions": {
      "kr_proc": "정확한 VTA를 결정하기 위하여 만들어진 속도감속계산. 이들 계산은 전이지점에서 시작하고 최고점까지 도착 속도단계를 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Speed deceleration calculations made to determine an accurate VTA. These calculations start at the transition point and use arrival speed segments to the vertex.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DESIRED COURSE",
    "krName": "",
    "definitions": {
      "kr_proc": "1. TRUE - 사전에 정해진 진행하고자 하는 진로(진북으로부터의 각도로 측정된)\n2. MAGNETIC - 사전에 정해진 진행하고자 하는 진로(해당위치의 자북으로부터 각도로 측정된)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. True− A predetermined desired course direction to be followed (measured in degrees from true north). b. Magnetic− A predetermined desired course direction to be followed (measured in degrees from local magnetic north).",
      "kr_ats": ""
    }
  },
  {
    "enName": "DESIRED TRACK",
    "krName": "",
    "definitions": {
      "kr_proc": "두 웨이포인트(waypoint)간 계획되거나 예정된 트랙(track). 자북 또는 진북으로부터의 각도(degrees)로 측정된다. 순간의 각도는 웨이포인트(waypoint) 사이의 큰 원 트랙을 따라 점대점(point to point)으로부터 변할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The planned or intended track between two waypoints. It is measured in degrees from either magnetic or true north. The instantaneous angle may change from point to point along the great circle track between waypoints.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DETRESFA(DISTRESS PHASE)",
    "krName": "DETRESFA",
    "definitions": {
      "kr_proc": "항공기 및 탑승자가 중대하고 절박한 위험에 처해 있으며 긴급한 도움이 필요하다는 상당한 확신이 있는 상황\n1. 경보단계에 뒤 이은 항공기와의 교신시도를 실패하고, 여러 관련 부서에 조회결과 항공기가 조난의 가능성이 있는 경우\n2. 항공기 탑재연료가 고갈되거나 안전을 유지하기가 곤란한 경우\n3. 항공기의 비행능력이 상실되어 불시착하였을 가능성이 있음을 나타내는 정보가 입수된 경우\n4. 항공기가 불시착중이거나 불시착했다는 정보입수 및 확실한 경우(다만, 항공기 및 탑승자에게 중대하고 긴박한 위험에 있지 않으며, 긴급한 도움이 필요치 않다는 상당한 확신이 있는 경우에는 제외한다.)\nDEVIATIONS(이탈)\n1. 기상 또는 요란을 피하기 위하여 진로의 변경과 같은, 현재 허가로부터의 이탈.\n2. 특별히 인가되고 조종사가 요구시, ATC는 관련 규정으로부터 벗어나서 운항토록 조종사에게 허가할 수 있다.",
      "annex11": "The code word used to designate a distress phase.",
      "doc4444": "The code word used to designate a distress phase.",
      "faa_pcg": "The code word used to designate an emergency phase wherein there is reasonable certainty that an aircraft and its occupants are threatened by grave and imminent danger or require immediate assistance.",
      "kr_ats": "조난단계를 나타내는 부호를 말한다,"
    }
  },
  {
    "enName": "DIGITAL-AUTOMATIC TERMINAL INFORMATION SERVICE (D-ATIS)",
    "krName": "",
    "definitions": {
      "kr_proc": "일반전화 및 데이터링크 통신을 이용하여 문자로 항공기, 항공사 및 기존 ATIS 수신 범위 외 이용자에게 제공하는 업무이다. 또한 D-ATIS는 송신기의 송신범위 내 모든 항공기에게 컴퓨터 동기화된 음성메세지를 제공한다. Terminal Data Link System(TDLS) D-ATIS 응용프로그램은 사용자에게 일반적인 정보를 제공하기 위해 국지 자동기상정보 또는 사전에 프로그램화된 기상자료를 수동으로 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The service provides text messages to aircraft, airlines, and other users outside the standard reception range of conventional ATIS via landline and data link communications to the cockpit. Also, the service provides a computer−synthesized voice message that can be transmitted to all aircraft within range of existing transmitters. The Terminal Data Link System (TDLS) D-ATIS application uses weather inputs from local automated weather sources or manually entered meteorological data together with preprogrammed menus to provide standard information to users. Airports with D-ATIS capability are listed in the Chart Supplement U.S.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DIRECT",
    "krName": "",
    "definitions": {
      "kr_proc": "두 항행안전시설, 지점, 위치 또는 항행안전시설ㆍ지점ㆍ위치가 조합된 직선비행. 항공로의 이탈을 표현하기 위하여 조종사에 의하여 사용되는 경우, 직선로 부분을 지정하는 지점은 항공기가 레이더식별 하에 있지 않는 한, 필수보고지점이 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Straight line flight between two navigational aids, fixes, points, or any combination thereof. When used by pilots in describing off-airway routes, points defining direct route segments become compulsory reporting points unless the aircraft is under radar contact.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DIRECTLY BEHIND",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기는 후류요란 분리기준을 적용할 때를 제외하고는 선행항공기의 지표상 비행경로를 뒤따라 운항할 때 바로 뒤에 있다고 여겨진다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft is considered to be operating directly behind when it is following the actual flight path of the lead aircraft over the surface of the earth except when applying wake turbulence separation criteria.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DISCRETE CODE",
    "krName": "식별코드",
    "definitions": {
      "kr_proc": "ATCRBS(항공교통관제 레이더 비컨시스템)에 사용되는 선택가능한 4096 Mode 3/A 항공기 트랜스폰더 코드중 하나로 끝에 zero zero로 끝나는 경우는 제외한다.(즉, 개별코드 : 0010, 1201, 2317, 7777; 비개별코드 : 0100, 1200, 7700) 비개별코드는 일반적으로 개별코드를 장착하지 않는 레이더시설 및 비상(7700), VFR 항공기(1200)등 과 같이 다른 목적을 위하여 유보되어 있다.\n(참조) : radar AIM",
      "annex11": null,
      "doc4444": "A four-digit SSR code with the last two digits not being “00”.",
      "faa_pcg": "As used in the Air Traffic Control Radar Beacon System (ATCRBS), any one of the 4096 selectable Mode 3/A aircraft transponder codes except those ending in zero zero; e.g., discrete codes: 0010, 1201,",
      "kr_ats": "마지막 두 자리가 \"00\"이 아 닌 4자리로 이루어진 SSR 코드를 말한다."
    }
  },
  {
    "enName": "DISCRETE FREQUENCY",
    "krName": "",
    "definitions": {
      "kr_proc": "동시에 특정 주파수를 운영하는 항공기의 수를 제한하여 주파수 혼잡을 줄이기 위하여 항공교통관제의 조종사-관제사 통신에 사용되는 무선 주파수 분리. 일반적으로 discrete frequency은 항공로/공항 항공교통관제시설 각 관제섹터(control sector)에 배정된다.\n(참조) : control sector",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A separate radio frequency for use in direct pilot-controller communications in air traffic control which reduces frequency congestion by controlling the number of aircraft operating on a particular frequency at one time. Discrete frequencies are normally designated for each control sector in en route/terminal ATC facilities. Discrete frequencies are listed in the Chart Supplement U.S. and the DoD FLIP IFR En Route Supplement. (See CONTROL SECTOR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DISPLACED THRESHOLD",
    "krName": "이설활주로말단",
    "definitions": {
      "kr_proc": "활주로 시작점으로 설계된 것과 다른 활주로 상 지점에 위치된 활주로 시단.\n(참조) - radar AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A threshold that is located at a point on the runway other than the designated beginning of the runway. (See THRESHOLD.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DISTANCE MEASURING EQUIPMENT",
    "krName": "거리측정시설",
    "definitions": {
      "kr_proc": "DME 항행안전시설로부터 항공기의 빗변거리로 해상마일(NM)로 측정하는데 사용되는 (탑재 및 지상)장비.\n(참조) : TACANVORTAC",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Equipment (airborne and ground) used to measure, in nautical miles, the slant range distance of an aircraft from the DME navigational aid. (See TACAN.) (See VORTAC.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DISTRESS",
    "krName": "조난",
    "definitions": {
      "kr_proc": "심각하거나 긴박한 위험 그리고 즉각적인 협조가 요구되는 상태.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A condition of being threatened by serious and/or imminent danger and of requiring immediate assistance.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Distress phase",
    "krName": "조난단계",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기 및 그 탑승자가 중대 하고 급박한 위험에 직면하였거나 즉각적인 도움이 필 요하다고 합리적인 확신이 되는 상황을 말한다.",
      "annex11": "",
      "doc4444": "A situation wherein there is reasonable certainty that an aircraft and its occupants are threatened by grave and imminent danger or require immediate assistance. eFPL. The symbol used to designate a filed flight plan exchanged using FF-ICE services.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "DIVERSE VECTOR AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 상에서 수립된 출발 경로가 장애물 회피를 위한 유일한 경로가 아닌 구역. 임의출발(diverse departure), 장애물 그리고 비행회피에 대하여 TERPS 기준에 따라 수립된 MVA/MIA 이하로 임의 레이더유도(random radar vector)가 출발 항공기에게 제공되는 지역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "In a radar environment, that area in which a prescribed departure route is not required as the only suitable route to avoid obstacles. The area in which random radar vectors below the MVA/MIA, established in accordance with the TERPS criteria for diverse departures, obstacles and terrain avoidance, may be issued to departing aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DIVERSION(DVRSN)",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사나 항공사의 통제 불가능한 악기상으로 원래의 목적 공항 외 다른 곳으로 착륙할 경우.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Flights that are required to land at other than their original destination for reasons beyond the control of the pilot/company, e.g. periods of significant weather.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DLIC",
    "krName": "데이터링크개시능력",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "데이터링크 어플리케이션을 개시하는데 필요한 어드레스, 이름 및 버전을 교환할 제정 : 2013.05.03. - 94 별표 수 있는 능력을 제공하는 데이터링크 어플리케이션을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "DME FIX",
    "krName": "",
    "definitions": {
      "kr_proc": "거리 및 방위 정보를 제공하는 항행안전시설을 참조하여 결정된 지리적 위치. 항행안전시설로부터 자방위로 레디얼, 방위 또는 진로(즉, 로칼라이져) 및 해상마일(NM)로 특정 거리를 정해준다.\n(참조) : distance measuring equipment  fix",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A geographical position determined by reference to a navigational aid which provides distance and azimuth information. It is defined by a specific distance in nautical miles and a radial, azimuth, or course (i.e., localizer) in degrees magnetic from that aid. (See DISTANCE MEASURING EQUIPMENT.) (See FIX.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DME SEPARATION",
    "krName": "DME 분리",
    "definitions": {
      "kr_proc": "거리측정시설(DME)를 참조하여 결정된 거리(NM)에 기초를 둔 항공기 간격.\n(참조) : distance measuring equipment",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Spacing of aircraft in terms of distances (nautical miles) determined by reference to distance measuring equipment (DME). (See DISTANCE MEASURING EQUIPMENT.) DoD FLIP− Department of Defense Flight Information Publications used for flight planning, en route, and terminal operations. FLIP is produced by the National Geospatial−Intelligence Agency (NGA) for world-wide use. United States Government Flight Information Publications (en route charts and instrument approach procedure charts) are incorporated in DoD FLIP for use in the National Airspace System (NAS).",
      "kr_ats": ""
    }
  },
  {
    "enName": "DOWNBURST",
    "krName": "",
    "definitions": {
      "kr_proc": "지상 또는 주위에 피해를 유발하는 강한 하강기류. 직풍이든지 굽은 바람이든지 피해성 바람은 높게 분출된다. 와류의 크기는 1/2마일 이하에서 10마일 이상까지 다양하다. 심한 와류는 종종 광범위하게 피해를 야기한다. 5분에서 30분까지 지속되며, 속도가 120노트까지도 이른다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A strong downdraft which induces an outburst of damaging winds on or near the ground. Damaging winds, either straight or curved, are highly divergent. The sizes of downbursts vary from 1/2 mile or less to more than 10 miles. An intense downburst often causes widespread damage. Damaging winds, lasting 5 to 30 minutes, could reach speeds as high as 120 knots. DOWNLINK– CPDLC message sent from the flight deck to ATC.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DRAG CHUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기 착륙 시 감속을 위하여 탑재한 낙하산장비.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A parachute device installed on certain aircraft which is deployed on landing roll to assist in deceleration of the aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DROP ZONE",
    "krName": "",
    "definitions": {
      "kr_proc": "의도적 낙하 이후 낙하산 또는 물체가 착지하는 사전 지정된 구역",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any pre-determined area upon which parachutists or objects land after making an intentional parachute jump or drop. (Refer to 14 CFR §105.3, Definitions)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DUE REGARD",
    "krName": "",
    "definitions": {
      "kr_proc": "국가 항공기의 조종사가 모든 타 항공기로부터 자기 항공기를 분리시킬 책임을 보장하는 비행의 단계.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A phase of flight wherein an aircraft commander of a State-operated aircraft assumes responsibility to separate his/her aircraft from all other aircraft. (See also FAA Order JO 7110.65, Para 1−2−1, WORD MEANINGS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DUTY RUNWAY",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : RUNWAY IN USE/ACTIVE RUNWAY)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RUNWAY IN USE/ACTIVE RUNWAY/DUTY RUNWAY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "DVFR FLIGHT PLAN",
    "krName": "방어 시계비행규칙 비행계획서",
    "definitions": {
      "kr_proc": "국가안보상 필요한 공역내에서 운항예정인 VFR 항공기의 관제 및 위치, 식별을 위하여 제출된 비행계획서.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A flight plan filed for a VFR aircraft which intends to operate in airspace within which the ready identification, location, and control of aircraft are required in the interest of national security.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DYNAMIC",
    "krName": "",
    "definitions": {
      "kr_proc": "조건을 충족시키기 위한 계속적인 검토, 평가 및 변경.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Continuous review, evaluation, and change to meet demands.",
      "kr_ats": ""
    }
  },
  {
    "enName": "DYNAMIC RESTRICTIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "지역 시설에서 예측 불가능한 교통 수요의 변동을 관리하기 위해 \"요구에 따라\" 부과되는 제한 사항.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Those restrictions imposed by the local facility on an “as needed” basis to manage unpredictable fluctuations in traffic demands.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ELEVATION",
    "krName": "표고",
    "definitions": {
      "kr_proc": "평균해면(MSL)으로부터 측정된 지표면 상의 어떤 지점 또는 평면의 수직거리.",
      "annex11": null,
      "doc4444": "The vertical distance of a point or a level, on or affixed to the surface of the earth, measured from mean sea level.",
      "faa_pcg": null,
      "kr_ats": "평균해수면으로부터 측정한 지표면 또 는 지표면에 부착된 지점까지의 수직 거리를 말한다."
    }
  },
  {
    "enName": "EMERGENCY",
    "krName": "비상",
    "definitions": {
      "kr_proc": "조난 또는 긴급한 상황.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A distress or an urgency condition.",
      "kr_ats": ""
    }
  },
  {
    "enName": "EMERGENCY LOCATOR TRANSMITTER",
    "krName": "비상위치지시용 무선표지설비",
    "definitions": {
      "kr_proc": "주파수 121.5 MHZ 및 243.0 Mhz를 자체 동력으로 작동하는 항공기에 장착된 무선송신기. 이것은 초당 2-4회, 하향 주기적으로 변화하는 오디오 음을 발사함으로써 추락한 항공기 위치를 찾는데 도움이 된다. 이것은 사고가 발생하는 경우 인위적 조작 없이 작동하도록 설계되었다.\n(참조) : FAR PART 91 AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A radio transmitter attached to the aircraft structure which operates from its own power source on 121.5 MHz and 243.0 MHz. It aids in locating downed aircraft by radiating a downward sweeping audio tone, 2-4 times per second. It is designed to function without human action after an accident. (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Emergency phase",
    "krName": "비상단계",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "불확실단계, 경보단계, 조 난단계 등을 의미하는 일반적인 용어을 말한다.",
      "annex11": "",
      "doc4444": "A generic term meaning, as the case may be, uncertainty phase, alert phase or distress phase.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ENHANCED FLIGHT VISION SYSTEM",
    "krName": "",
    "definitions": {
      "kr_proc": "EFVS는 항공기에 설치된 시스템으로 전자적인 방법으로 이미지 센서를 통해 지형 영상을(항공기가 진행하는 방향의 자연 또는 인공물의 위치나 높이) 제공함. 이미지 센서에 한정되지 않고 적외선 밀리미터 웨이브메트리, 밀리미터 웨이브, 어두운 빛 이미지 증폭기 등이 있다. EFVS는 디스플레이, 센서, 전원공급장치, 제어장치 등을 포함하고 EFVS 운영자는 기상이 최저치 미만으로 보고될 때 계기비행절차로 비행하도록 명시된 계기비행절차를 실행한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An EFVS is an installed aircraft system which uses an electronic means to provide a display of the forward external scene topography (the natural or man−made features of a place or region especially in a way to show their relative positions and elevation) through the use of imaging sensors, including but not limited to forward−looking infrared, millimeter wave radiometry, millimeter wave radar, or low−light level image intensification. An EFVS includes the display element, sensors, computers and power supplies, indications, and controls. An operator’s authorization to conduct an EFVS operation may have provisions which allow pilots to conduct IAPs when the reported weather is below minimums prescribed on the IAP to be flown. ENHANCED SPECIAL REPORTING SERVICE (eSRS)– An automated service used to enhance search and rescue operations that provides flight service specialists in Alaska direct information from the aircraft’s registered tracking device.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ENROUTE AIR TRAFFIC CONTROL SERVICES",
    "krName": "항공로교통관제업무",
    "definitions": {
      "kr_proc": "일반적으로 지역관제소에 의하여 항공기가 출발공항과 목적공항 사이에서 운항하는 경우, 계기비행규칙 항공기에게 제공하는 항공교통관제업무. 장비, 수용량 및 관제사의 워크로드가 허락될 때, 특정 조언/보조 업무를 시계비행항공기에게 제공할 수 있다.\n(참조) : NAS STAGE-A AIR ROUTE TRAFFIC CONTROL CENTER AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Air traffic control service provided aircraft on IFR flight plans, generally by centers, when these aircraft are operating between departure and destination terminal areas. When equipment, capabilities, and controller workload permit, certain advisory/assistance services may be provided to VFR aircraft. (See AIR ROUTE TRAFFIC CONTROL CENTER.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ENROUTE DESCENT",
    "krName": "",
    "definitions": {
      "kr_proc": "비행로를 따라 비행하는 항공로 순항고도로부터 강하.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Descent from the en route cruising altitude which takes place along the route of flight.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ENROUTE FLIGHT ADVISORY SERVICE",
    "krName": "항공로비행 조언업무",
    "definitions": {
      "kr_proc": "조종사의 요구에 의하여 비행형태, 비행로 및 고도와 관련한 적시의 기상정보를 제공하기 위하여 특별히 지정된 업무.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ENROUTE MINIMUM SAFE ALTITUDE WARNING",
    "krName": "항공로 최저안전고도 경고",
    "definitions": {
      "kr_proc": "식별된 항공기가 사전에 결정된 최저 IFR 고도(MIA) 미만으로 내려가는 것이 컴퓨터에 의하여 예상 되거나 MIA 이하일 경우, 관제사에게 경고함으로써 관제사에게 도움을 주는 지역관제소(ACC) 컴퓨터의 한 기능.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ENROUTE SPACING PROGRAM",
    "krName": "",
    "definitions": {
      "kr_proc": "필요한 항적 공간을 이루기 위하여 해당 섹터를 협조하도록 설계된 프로그램.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ESTABLISHED",
    "krName": "",
    "definitions": {
      "kr_proc": "비행로, 항공로구역, 고도, 기수상에 고정되거나 안정된 상태.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "To be stable or fixed at an altitude or on a course, route, route segment, heading, instrument approach or departure procedure, etc. ESTABLISHED ON RNP (EoR) CONCEPT– A system of authorized instrument approaches, ATC procedures, surveillance, and communication requirements that allow aircraft operations to be safely conducted with approved reduced separation criteria once aircraft are established on a PBN segment of a published instrument flight procedure.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ESTIMATED ELAPSED TIME",
    "krName": "예상소요시간",
    "definitions": {
      "kr_proc": "한 주요지점에서 다른 지점까지 진행하는데 필요한 예상시간.\n(참조) : ICAO 용어, total estimated elapsed time",
      "annex11": null,
      "doc4444": "The estimated time required to proceed from one significant point to another.",
      "faa_pcg": "The estimated time required to proceed from one significant point to another. (See ICAO Term TOTAL ESTIMATED ELAPSED TIME.)",
      "kr_ats": "한 지점에서 다 른 지점까지 진행하는데 소요되는 예정 시간을 말한다."
    }
  },
  {
    "enName": "Estimated off-block time",
    "krName": "예상주기장출발시각",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기 가 출발을 위해 주기장에서 이동을 시작할 것으로 예상 되는 시각을 말한다. - 개정 : 2026.07.06. 항공교통업무기준",
      "annex11": "",
      "doc4444": "The estimated time at which the aircraft will commence movement associated with departure.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "ESTIMATED OFF-BLOCK TIME ; EOBT",
    "krName": "이동예정시간",
    "definitions": {
      "kr_proc": "항공기가 출발에 관련된 이동을 시작하게 될 예상 시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ESTIMATED TIME ENROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "출발지점에서 목적지(lift-off to touchdown)까지 예상비행시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The estimated flying time from departure point to destination (lift-off to touchdown).",
      "kr_ats": ""
    }
  },
  {
    "enName": "ESTIMATED TIME OF ARRIVAL",
    "krName": "도착예정시간",
    "definitions": {
      "kr_proc": "계기비행 항공기의 경우 항행안전시설을 이용하여 설정된 계기접근 시작지점의 도착예정시간이며, 비행장에 항행안전시설이 없거나 시계비행항공기의 경우에는 비행장상공 도착예정시간.",
      "annex11": null,
      "doc4444": "For IFR flights, the time at which it is estimated that the aircraft will arrive over that designated point, defined by reference to navigation aids, from which it is intended that an instrument approach procedure will be commenced, or, if no navigation aid is associated with the aerodrome, the time at which the aircraft will arrive over the aerodrome. For VFR flights, the time at which it is estimated that the aircraft will arrive over the aerodrome.",
      "faa_pcg": "The time the flight is estimated to arrive at the gate (scheduled operators) or the actual runway on times for nonscheduled operators.",
      "kr_ats": "IFR 항공기의 경우 항행안전시설을 이용하여 정의된 계기접근절차 시 작지점에 도착할 것으로 예상되는 시각, 또는 목적비행 장에 항행안전시설이 없을 경우 목적비행장 상공에 도 착이 예상되는 시각을 말한다.. VFR 항공기의 경우 목적 비행장 상공에 도착할 것으로 예정되는 시각을 말한다."
    }
  },
  {
    "enName": "EXECUTE MISSED APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "계기접근을 실시하는 항공기에게 제공되는 지시로서, 실패접근지점까지 계속하여 비행하고 계기접근절차 지도의 실패접근 절차를 실행하는 것을 의미한다. 조종사는 실패접근을 할 때, 실패접근절차에 명시된 고도로 즉시 상승할 수 있다. 실패접근지점 도달 전에 어떠한 선회도 시작하여서는 안 되며, ASR 또는 PAR 접근을 하는 경우, “execute missed approach”의 지시를 받은 지체 없이 지정된 실패접근을 하여야 한다.\n(참조) : AIM\nEXPECT (Altitude) AT (Time) or (fix) : 양방향 통신이 두절될 경우 조종사에게 고도 제공 목적의 계기출발허가의 종류\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Instructions issued to a pilot making an instrument approach which means continue inbound to the missed approach point and execute the missed approach procedure as described on the Instrument Approach Procedure Chart or as previously assigned by ATC. The pilot may climb immediately to the altitude specified in the missed approach procedure upon making a missed approach. No turns should be initiated prior to reaching the missed approach point. When conducting an ASR or PAR approach, execute the assigned missed approach procedure immediately upon receiving instructions to “execute missed approach.” (Refer to AIM.) EXPECT (ALTITUDE) AT (TIME) or (FIX)− Used under certain conditions to provide a pilot with an altitude to be used in the event of two-way communications failure. It also provides altitude information to assist the pilot in planning. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "EXPECT APPROACH TIME",
    "krName": "접근예정시간",
    "definitions": {
      "kr_proc": "도착항공기가 지연(delay)에 이어서 접근을 위하여 체공픽스를 떠날 것으로 항공교통관제기관이 예상하는 시간\n(주기) : 체공픽스를 실제 떠나는 사간은 접근허가에 따라 달라짐.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "EXPECT DEPARTURE CLEARANCE TIME",
    "krName": "출발허가 예상시간",
    "definitions": {
      "kr_proc": "통제된 출발시간 계획에 따라 항공기에게 배정된 활주로 허가시간 및 EDCT와 같은 비행진행기록지에 명시된 활주로 허가시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The runway release time assigned to an aircraft in a traffic management program and shown on the flight progress strip as an EDCT. (See GROUND DELAY PROGRAM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "EXPECT FURTHER CLEARANCE (Time)",
    "krName": "",
    "definitions": {
      "kr_proc": "허가한계점 이후에 대한 허가발부를 조종사가 예상 할 수 있는 시간.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The time a pilot can expect to receive clearance beyond a clearance limit.",
      "kr_ats": ""
    }
  },
  {
    "enName": "EXPECT FURTHER CLEARANCE VIA (Airways, Routes Or Fixes)",
    "krName": "",
    "definitions": {
      "kr_proc": "제출한 비행계획서와 단거리허가한계점 이후 비행로가 부분적으로 상이한 경우, 조종사에게 예상되는 비행로를 통보하기 위하여 사용되는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to inform a pilot of the routing he/she can expect if any part of the route beyond a short range clearance limit differs from that filed.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Expected approach time",
    "krName": "예상접근시각",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "도착 항공기가 지연을 위해 체공을 하다가 착륙을 위한 접근을 하기 위해 체공지점을 떠날 것으로 항공교통교통관제시설에 서 예상하는 시간을 말한다. 주기 - 체공지점을 실제 떠나는 시간은 접근허가에 따라 달라진다.",
      "annex11": "",
      "doc4444": "The time at which ATC expects that an arriving aircraft, following a delay, will leave the holding fix to complete its approach for a landing. Note.— The actual time of leaving the holding fix will depend upon the approach clearance.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "EXPEDITE",
    "krName": "",
    "definitions": {
      "kr_proc": "위험한 상황으로 악화를 방지하기 위하여 신속한 이행이 요구될 때 항공교통관제사에 의하여 사용되는 경고",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC when prompt compliance is required to avoid the development of an imminent situation. Expedite climb/descent normally indicates to a pilot that the approximate best rate of climb/descent should be used without requiring an exceptional change in aircraft handling characteristics.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FAST FILE",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사가 전화를 통해 비행계획을 제출하는 시스템으로 비행계획은 녹음되며 해당 항공교통관제시설로 전송된다.\n(참조) : AIM\nFAST/TAIL EAST/WEST/SOUTH/NORTH 주기장 항공기의 후방견인 허가시 항공기의 기수/후미방향을 명확하게 지정하고자 할 경우에 사용되는 계류장 관제용어",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An FSS system whereby a pilot files a flight plan via telephone that is recorded and later transcribed for transmission to the appropriate air traffic facility. (Alaska only.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FAWP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : final approach waypoint)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Final Approach Waypoint",
      "kr_ats": ""
    }
  },
  {
    "enName": "FEATHERED PROPELLER",
    "krName": "",
    "definitions": {
      "kr_proc": "날개의 앞전과 뒷전(leading and trailing edges)이 항력과 엔진의 회전을 멈추거나 최소화하기 위하여, 항공기의 비행로와 거의 평행하도록 회전하는 날개(blade)를 갖는 프로펠러. 일반적으로 고장으로 인한 왕복운동 또는 터보프롭 엔진의 정지를 나타내기 위하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A propeller whose blades have been rotated so that the leading and trailing edges are nearly parallel with the aircraft flight path to stop or minimize drag and engine rotation. Normally used to indicate shutdown of a reciprocating or turboprop engine due to malfunction.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FEEDER FIX",
    "krName": "",
    "definitions": {
      "kr_proc": "전이로의 시작점을 정하는 계기접근절차 지도에 명시된 지점.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The fix depicted on Instrument Approach Procedure Charts which establishes the starting point of the feeder route.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FEEDER ROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공로에서 첫 접근지점(IAF)까지 비행하는 항공기를 위하여 비행로를 지정하기 위하여 계기접근절차 도면에 명시된 노선.\n(참조) : instrument approach procedure",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A route depicted on instrument approach procedure charts to designate routes for aircraft to proceed from the en route structure to the initial approach fix (IAF). (See INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FERRY FLIGHT",
    "krName": "",
    "definitions": {
      "kr_proc": "아래 목적을 위한 비행.\n1. 항공기가 기지로 귀환.\n2. 한 위치에서 다른 위치로 항공기를 이동 .\n3. 정비기지로/까지 항공기 이동할 경우 - 어떠한 조건하에서 ferry flight은 특별비행허가의 조건으로 수행될 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A flight for the purpose of: a. Returning an aircraft to base. b. Delivering an aircraft from one location to another. c. Moving an aircraft to and from a maintenance base. Ferry flights, under certain conditions, may be conducted under terms of a special flight permit.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FIELD ELEVATION",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : AIRPORT ELEVATION)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT ELEVATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FILED",
    "krName": "",
    "definitions": {
      "kr_proc": "일반적으로 항공교통관제기관에 제출된 비행계획을 의미하는, 비행계획서와 관련하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Normally used in conjunction with flight plans, meaning a flight plan has been submitted to ATC.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FILED ENROUTE DELAY",
    "krName": "",
    "definitions": {
      "kr_proc": "특별 비행계획 제출과 취급 기술을 요하는, 비행로를 따라 수립된 지점/지역에서 다음의 기 계획된 지연중의 하나.\n1. 터미널지역 지연. 터미널구역 내에서 touch and go, low approach 또는 기타 터미널구역 활동을 위한 지연.\n2. 특별 사용 공역 지연. 군 작전지역, 제한지역, 경보지역 또는 ATC 지정공역내의 지연.\n3. 공중급유 지연. 공중급유 트랙 또는 Anchor내의 지연.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any of the following preplanned delays at points/areas along the route of flight which require special flight plan filing and handling techniques. a. Terminal Area Delay. A delay within a terminal area for touch-and-go, low approach, or other terminal area activity. b. Special Use Airspace Delay. A delay within a Military Operations Area, Restricted Area, Warning Area, or ATC Assigned Airspace. c. Aerial Refueling Delay. A delay within an Aerial Refueling Track or Anchor.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FILED FLIGHT PLAN",
    "krName": "제출된 비행계획",
    "definitions": {
      "kr_proc": "후속 변경 또는 허가 없이 조종사 또는 지정된 대리인에 의하여 ATC 기관에 제출된 비행계획서.",
      "annex11": null,
      "doc4444": "The latest flight plan as submitted by the pilot, an operator or a designated representative for use by ATS units. Note.— The FPL denotes a filed flight plan exchanged using aeronautical fixed service while eFPL denotes a filed flight plan exchanged using FF-ICE services. The eFPL allows for the exchange of additional information not contained within the FPL.",
      "faa_pcg": "The flight plan as filed with an ATS unit by the pilot or his/her designated representative without any subsequent changes or clearances.",
      "kr_ats": "조종사 또는 지 정된 대리인이 항공교통업무시설에 제출한 원래의 비행 계획을 말한다. 주기 - \"message\"가 이 용어의 뒤에 사용되면, 전송 된 제출비행계획서 자료의 내용과 형식을 의미한다."
    }
  },
  {
    "enName": "FINAL",
    "krName": "",
    "definitions": {
      "kr_proc": "일반적으로 항공기가 최종접근로 상에 있거나 착륙지역과 일직선으로 정대하였다는 의미로 사용된다.\n(참조) : final approach coursefinal approach-IFRsegment of an instrument approach procedure",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Commonly used to mean that an aircraft is on the final approach course or is aligned with a landing area. (See FINAL APPROACH COURSE.) (See FINAL APPROACH-IFR.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL APPROACH",
    "krName": "최종접근",
    "definitions": {
      "kr_proc": "정해진 최종접근픽스에서 시작되는 계기접근절차의 한 부분 또는 정해져 있지 않을 경우 픽스 또는 지점.\n1. 최후의 절차선회, Base turn 또는 Base track  차의 내향선회의 끝\n2. 접근절차에 명시된 최종진로진입지점에서 시작되어,\n가. 착륙이 가능하거나, 또는\n나. 실패접근절차가 시작되는, 비행장 주위의 지점에서 끝나는 계기접근절차의 한 부분",
      "annex11": "That part of an instrument approach procedure which commences at the specified final approach fix or point, or where such a fix or point is not specified, a) at the end of the last procedure turn, base turn or inbound turn of a racetrack procedure, if specified; or b) at the point of interception of the last track specified in the approach procedure; and ends at a point in the vicinity of an aerodrome from which: 1) a landing can be made; or 2) a missed approach procedure is initiated. * All ISO Standards are listed at the end of this chapter. 1-7 288/1/111/2/41 8",
      "doc4444": "That part of an instrument approach procedure which commences at the specified final approach fix or point, or where such a fix or point is not specified, a) at the end of the last procedure turn, base turn or inbound turn of a racetrack procedure, if specified; or b) at the point of interception of the last track specified in the approach procedure; and 102/81/111//1264",
      "faa_pcg": "That part of an instrument approach procedure which commences at the specified final approach fix or point, or where such a fix or point is not specified. a. At the end of the last procedure turn, base turn or inbound turn of a racetrack procedure, if specified; or b. At the point of interception of the last track specified in the approach procedure; and ends at a point in the vicinity of an aerodrome from which: 1. A landing can be made; or 2. A missed approach procedure is initiated.",
      "kr_ats": "지정된 최종접근픽스/지점 또 는 그러한 픽스/지점이 수립되어 있지 않는 곳에서는, 가) 지정되어 있는 마지막 절차선회, 베이스턴 또는 racetrack 절차의 입항 선회의 끝부분에서; 또는 나) 접근절차에 지정된 마지막 진로의 진입지점에서 시작되어, 1) 착륙이 가능하거나; 또는 2) 실패접근절차가 시작되는; 비행장 부근의 지점에서 끝나는 계기접근절차의 한 부 분을 말한다."
    }
  },
  {
    "enName": "FINAL APPROACH COURSE",
    "krName": "최종접근진로",
    "definitions": {
      "kr_proc": "거리와는 상관없이 활주로 또는 활주로 연장중심선까지 계기접근절차의 방위/레디얼/트랙.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A bearing/radial/track of an instrument approach leading to a runway or an extended runway centerline all without regard to distance.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL APPROACH FIX",
    "krName": "최종접근픽스",
    "definitions": {
      "kr_proc": "공항으로의 최종접근(IFR)이 수행되고 최종접근 단계의 시작을 나타내는 픽스. 동픽스는 비정밀접근에 대하여는 Maltese Cross symbol, 정밀접근에 대하여는 bolt symbol에 의한 항공정보간행물에 명시된다. 또는 ATC가 설정된 활공각/활공로 교차고도보다 낮을 경우, 활공로/활공각의 실제지점이다.\n(참조) : final approach point glideslope intercept altitude segment of an instrument approach procedure",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The fix from which the final approach (IFR) to an airport is executed and which identifies the beginning of the final approach segment. It is designated on Government charts by the Maltese Cross symbol for nonprecision approaches and the lightning bolt symbol, designating the PFAF, for precision approaches; or when ATC directs a lower-than-published glideslope/path or vertical path intercept altitude, it is the resultant actual point of the glideslope/path or vertical path intercept. (See FINAL APPROACH POINT.) (See GLIDESLOPE INTERCEPT ALTITUDE.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL APPROACH POINT",
    "krName": "최종접근지점",
    "definitions": {
      "kr_proc": "최종접근픽스가 명시되지 않은 비정밀접근에서만 적용하는 지점으로 절차선회로부터 최종접근진로 상으로 항공기 진입로가 설정된 곳 및 최종접근 강하가 시작되는 지점. 최종접근지점은 최종접근픽스(FAF)로 이용할 수 있으며, 최종접근구역의 시작점으로 할 수 있다.\n(참조) : FINAL APPROACH FIXSEGMENT OF AN INSTRUMENT APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The point, applicable only to a nonprecision approach with no depicted FAF (such as an on airport VOR), where the aircraft is established inbound on the final approach course from the procedure turn and where the final approach descent may be commenced. The FAP serves as the FAF and identifies the beginning of the final approach segment. (See FINAL APPROACH FIX.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL APPROACH SEGMENT",
    "krName": "최종접근구역",
    "definitions": {
      "kr_proc": "착륙을 위한 조정 및 강하가 이루어지는 계기접근절차의 부분.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "That segment of an instrument approach procedure in which alignment and descent for landing are accomplished.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL APPROACH-IFR",
    "krName": "최종접근-계기비행규칙",
    "definitions": {
      "kr_proc": "최종계기접근 진로 상에서 공항으로 입항하는 항공기의 비행로, 최종접근픽스/지점에서 시작 및 공항으로의 연장 또는 선회접근 기동지점 또는 실패접근이 실행되는 지점.\n(참조) : segment of an instrument approach procedure final approach fix final approach course final approach point ICAO final approach",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The flight path of an aircraft which is inbound to an airport on a final instrument approach course, beginning at the final approach fix or point and extending to the airport or the point where a circle-to-land maneuver or a missed approach is executed. (See FINAL APPROACH COURSE.) (See FINAL APPROACH FIX.) (See FINAL APPROACH POINT.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.) (See ICAO term FINAL APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL CONTROLLER",
    "krName": "최종접근관제사",
    "definitions": {
      "kr_proc": "레이더장비를 활용하여 PAR 및 ASR 접근 시 정보 및 최종접근가이드를 제공하는 관제사.\n(참조) : radar approach",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The controller providing information and final approach guidance during PAR and ASR approaches utilizing radar equipment. (See RADAR APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL MONITOR AID",
    "krName": "",
    "definitions": {
      "kr_proc": "동시 평행 접근이 운영되는 동안 NTZ를 모니터 하기 위해 사용되는 하드웨어/소프트웨어의 관제사 경보 시스템을 장착한 고해상도 전시기. 이 전시기는 NTZ에 항적이 진입하거나 진입이 예상 될 때 타겟의 예측 변수들을 색상 변경 경보로 제공하는 경고 알고리즘을 포함하며, 합성음성 경보, 디지털 지도제작 기능들도 포함하고 있다.\n(참조) : RADAR APPROACH",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A high resolution color display that is equipped with the controller alert system hardware/software used to monitor the no transgression zone (NTZ) during simultaneous parallel approach operations. The display includes alert algorithms providing the target predictors, a color change alert when a target penetrates or is predicted to penetrate the no transgression zone (NTZ), synthesized voice alerts, and digital mapping. (See RADAR APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FINAL MONITOR CONTROLLER",
    "krName": "최종 감시관제사",
    "definitions": {
      "kr_proc": "동시평행(접근경로 공간  9000ft 미만/9200 feet above 5000 feet)과 동시 근접평행 접근이 운영될 시 항공기의 비행경로를 레이더 감시하는 전담관제사가 배정되어야 한다. 동시평행과 동시근접 평행 ILS접근 시 각 활주로에 최종 감시 관제사가 배정되어야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Air Traffic Control Specialist assigned to radar monitor the flight path of aircraft during simultaneous parallel (approach courses spaced less than 9000 feet/9200 feet above 5000 feet) and simultaneous close parallel approach operations. Each runway is assigned a final monitor controller during simultaneous parallel and simultaneous close parallel ILS approaches.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FIS",
    "krName": "",
    "definitions": {
      "kr_proc": "B는 올바른 장비를 갖춘 항공기의 조종사와 승무원에게 조종석의 디스플레이를 통해 특정 항공기상과 항공 정보를 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "B− (See FLIGHT INFORMATION SERVICE−BROADCAST.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FIX",
    "krName": "픽스",
    "definitions": {
      "kr_proc": "지면에 대한 시각 참조, 하나 이상의 무선 항행안전시설참조, 천체항법 또는 다른 항법장치에 의하여 결정된 지리학적 위치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A geographical position determined by visual reference to the surface, by reference to one or more radio NAVAIDs, by celestial plotting, or by another navigational device.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FIX BALANCING",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 지연 또는 관제사 업무량을 줄이기 위하여 몇몇 유용한 도착 픽스에 항공기를 균등하게 할당하는 방법.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A process whereby aircraft are evenly distributed over several available arrival fixes reducing delays and controller workload.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLAG",
    "krName": "",
    "definitions": {
      "kr_proc": "아래 사항을 나타내는 탑재 항법 및 비행계기에 통합된 경고장치.\n1. 계기가 작동되지 않거나 그밖에 안전하게 운영되지 않을 경우.\n2. 수신신호의 강도 및 질이 허용치 미만으로 떨어질 경우.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A warning device incorporated in certain airborne navigation and flight instruments indicating that: a. Instruments are inoperative or otherwise not operating satisfactorily, or b. Signal strength or quality of the received signal falls below acceptable values.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLAMEOUT",
    "krName": "엔진정지",
    "definitions": {
      "kr_proc": "엔진출력이 떨어져 발생한 비상상태.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An emergency condition caused by a loss of engine power.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLAMEOUT PATTERN",
    "krName": "",
    "definitions": {
      "kr_proc": "엔진출력이나 조작의 불능 또는 불능의 예상을 겪고 있는 단발엔진 군용기에 의하여 일반적으로 수행되는 접근. 표준원형장주는 비교적 높은 고도에서 시작되고(“HIGH KEY”), 높고 넓은 지속적인 180도 선회가 이어지며(“LOW KEY”), 계속적인 180도 최종선회로 이어진다. 표준 직진입장주는 활주로로 높은 강하율로 직진입접근을 수반하는 지점에서 시작된다. 엔진정지 접근은 조종사에 의하여 요구된 접근형태로 종료된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An approach normally conducted by a single-engine military aircraft experiencing loss or anticipating loss of engine power or control. The standard overhead approach starts at a relatively high altitude over a runway (“high key”) followed by a continuous 180 degree turn to a high, wide position (“low key”) followed by a continuous 180 degree turn final. The standard straight-in pattern starts at a point that results in a straight-in approach with a high rate of descent to the runway. Flameout approaches terminate in the type approach requested by the pilot (normally fullstop).",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGH STATUS",
    "krName": "비행상태",
    "definitions": {
      "kr_proc": "항공교통업무기관에 의한 특별취급의 필요성 여부를 표시하는 것.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGH VISIBILITY",
    "krName": "비행시정",
    "definitions": {
      "kr_proc": "비행중인 항공기 조종실로부터의 시정",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "비행 중인 항공기 조종실로부 터의 시정을 말한다."
    }
  },
  {
    "enName": "FLIGHT CHECK",
    "krName": "",
    "definitions": {
      "kr_proc": "항행안전시설과 비행절차의 비행점검/검증하는 항공기가 사용하는 호출부호 접두어. “flight check 320 recorded”는 자동화된 비행점검이 터미널구역내에서 진행중인 것을 나타낸다. “recorded” 라는 접미어가 붙을 수 있다.\n(참조) : FLIGHT INSPECTIONAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A call sign prefix used by FAA aircraft engaged in flight inspection/certification of navigational aids and flight procedures. The word “recorded” may be added as a suffix; e.g., “Flight Check 320 recorded” to indicate that an automated flight inspection is in progress in terminal areas. (See FLIGHT INSPECTION.) (Refer to AIM.) FLIGHT DATA [FSS]– The primary task of the FSS flight data position is information management. Flight data services include the development, translation, processing, and coordination of aeronautical, meteorological, and aviation information.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT CREW MEMBER",
    "krName": "운항승무원",
    "definitions": {
      "kr_proc": "비행중 항공기의 운항에 필수적인 임무를 수행하는 유자격승무원",
      "annex11": "A licensed crew member charged with duties essential to the operation of an aircraft during a flight duty period.",
      "doc4444": "A licensed crew member charged with duties essential to the operation of an aircraft during a flight duty period.",
      "faa_pcg": null,
      "kr_ats": "비행근무시간 중 항 공기의 운항에 필수적인 임무를 수행하는 유자격 승무 원을 말한다."
    }
  },
  {
    "enName": "FLIGHT INFORMATION CENTER",
    "krName": "비행정보센터",
    "definitions": {
      "kr_proc": "비행정보업무 및 경보업무를 제공하기 위하여 설치된 항공교통업무기관",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "Flight information centre",
    "krName": "비행정보소",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "비행정보업무 및 경보업무를 제공하기 위한 시설을 말한다.",
      "annex11": "",
      "doc4444": "A unit established to provide flight information service and alerting service.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "FLIGHT INFORMATION REGION",
    "krName": "비행정보구역",
    "definitions": {
      "kr_proc": "비행정보업무 및 경보업무가 아래와 같이 제공되는 한정된 공역.\n1. 비행정보업무 : 비행의 안전하고 능률적인 수행을 위하여 유용한 조언 및 정보를 제공하는 업무.\n2. 경보업무 : 수색ㆍ구조업무, 필요한 것으로 여겨지는 항공기를 해당 기구에게 통보 및 필요시 동 기구를 협조하는 업무.",
      "annex11": "An airspace of defined dimensions within which flight information service and alerting service are provided.",
      "doc4444": "An airspace of defined dimensions within which flight information service and alerting service are provided.",
      "faa_pcg": "An airspace of defined dimensions within which Flight Information Service and Alerting Service are provided. a. Flight Information Service. A service provided for the purpose of giving advice and information useful for the safe and efficient conduct of flights. b. Alerting Service. A service provided to notify appropriate organizations regarding aircraft in need of search and rescue aid and to assist such organizations as required.",
      "kr_ats": "비행정보업무 및 경보업무를 제공하 는 일정한 범위의 공역을 말한다."
    }
  },
  {
    "enName": "FLIGHT INFORMATION SERVICE",
    "krName": "비행정보업무",
    "definitions": {
      "kr_proc": "안전하고 효율적인 비행에 유용한 조언 및 정보를 제공할 목적으로 수행하는 업무",
      "annex11": "A service provided for the purpose of giving advice and information useful for the safe and efficient conduct of flights.",
      "doc4444": "A service provided for the purpose of giving advice and information useful for the safe and efficient conduct of flights.",
      "faa_pcg": "BROADCAST (FIS−B)− A ground broadcast service provided through the ADS−B Broadcast Services network over the UAT data link that operates on 978 MHz. The FIS−B system provides pilots and flight crews of properly equipped aircraft with a cockpit display of certain aviation weather and aeronautical information.",
      "kr_ats": "안전하고 효 율적인 비행에 유용한 조언 및 정보를 제공할 목적으로 수행하는 업무를 말한다."
    }
  },
  {
    "enName": "FLIGHT INFORMATION SERVICE BROADCAST (FIS-B)",
    "krName": "",
    "definitions": {
      "kr_proc": "지상방송 서비스는 978Mhz로 운영되는 UAT 데이터 링크 네트워크를 이용한 ADS-B를 통해 제공된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT INSPECTION",
    "krName": "비행점검",
    "definitions": {
      "kr_proc": "설정된 허용오차를 충족하는지를 결정하기 위하여 항행안전시설에 대한 비행 중 평가 및 점검.\n(참조) : navigational AIDflight check",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Inflight investigation and evaluation of a navigational aid to determine whether it meets established tolerances. (See FLIGHT CHECK.) (See NAVIGATIONAL AID.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT LEVEL",
    "krName": "비행고도",
    "definitions": {
      "kr_proc": "수은 29.92 인치의 기준점을 참조하여 공기압을 비교한 100피트 단위로 3개 숫자로 나타낸 고도. 100피트 단위로 명시된다. FL 250은 25,000피트의 기압지시 고도를 나타낸다. FL 255는 25,500피트를 지시한다.\n(참조) : ICAO FLIGHT LEVEL",
      "annex11": "A surface of constant atmospheric pressure which is related to a specific pressure datum, 1 013.2 hectopascals (hPa), and is separated from other such surfaces by specific pressure intervals. Note 1.— A pressure type altimeter calibrated in accordance with the Standard Atmosphere: a) when set to a QNH altimeter setting, will indicate altitude; b) when set to a QFE altimeter setting, will indicate height above the QFE reference datum; c) when set to a pressure of 1 013.2 hPa, may be used to indicate flight levels. Note 2.— The terms “height” and “altitude”, used in Note 1 above, indicate altimetric rather than geometric heights and altitudes.",
      "doc4444": "A surface of constant atmospheric pressure which is related to a specific pressure datum, 1 013.2 hectopascals (hPa), and is separated from other such surfaces by specific pressure intervals. Note 1.— A pressure type altimeter calibrated in accordance with the Standard Atmosphere: a) when set to a QNH altimeter setting, will indicate altitude; b) when set to QFE altimeter setting, will indicate height above the QFE reference datum; c) when set to a pressure of 1 013.2 hPa, may be used to indicate flight levels. Note 2.— The terms “height” and “altitude”, used in Note 1 above, indicate altimetric rather than geometric heights and altitudes.",
      "faa_pcg": null,
      "kr_ats": "1013.2 (hpa)을 기준으로 하고 특정한 기압 간격으로 다른 표면과 분리는 일정한 대기압 표면을 말한다. 주기1 - 표준대기에 따라 조정된 기압형 고도계는 ; 가) QNH 고도계수정치로 수정할 경우, 고도(altitude) 를 나타냄. 나) QFE 고도계수정치로 수정할 경우, QFE 기준면으 로 부터의 높이를 나타냄. 다) 기압 1013.2 hpa로 수정할 경우, 비행고도(Flight Level)를 나타냄. 주기2 - 위 주기1에서 사용된 용어 \"높이\"/\"고도\"는 기하학적인 높이/고도라기 보다는 고도계적인 것을 나 타내는 것이다."
    }
  },
  {
    "enName": "FLIGHT LINE",
    "krName": "",
    "definitions": {
      "kr_proc": "민 사진촬영 항공기의 사전 결정된 고도ㆍ진로에 따른 정밀한 이동을 표현하는데 사용되는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A term used to describe the precise movement of a civil photogrammetric aircraft along a predetermined course(s) at a predetermined altitude during the actual photographic run.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT MANAGEMENT SYSTEMS",
    "krName": "",
    "definitions": {
      "kr_proc": "자료 로더(data loader)로 시스템에 입력되고 프로그램된 허용 비행로에 대한 거대한 데이터베이스를 이용하는 컴퓨터 시스템. 시스템은 항행안전시설 관련 위치정확성에 대하여 지속적으로 새로운 정보를 갱신한다. 프로그램 및 관련된 데이터베이스는 정보갱신동안 가장 적절한 시설이 자동적으로 선택되도록 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A computer system that uses a large data base to allow routes to be preprogrammed and fed into the system by means of a data loader. The system is constantly updated with respect to position accuracy by reference to conventional navigation aids. The sophisticated program and its associated data base ensures that the most appropriate aids are automatically selected during the information update cycle.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT MANAGEMENT SYSTEMS PROCEDURE",
    "krName": "FMS 절차",
    "definitions": {
      "kr_proc": "빗금(/) E 또는 빗금(/) F 장비 접미어의 항공기에 의하여 사용되도록 개발된 출발, 도착 또는 접근절차.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT PATH",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기가 비행중이거나 비행할 예정인 line, 진로, track.\n(참조) : track course",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A line, course, or track along which an aircraft is flying or intended to be flown. (See COURSE.) (See TRACK.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Flight path monitoring",
    "krName": "비행경로감시",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공교통업무 감 시시스템을 이용해 항공기가 공칭 비행 진로로부터 현저 히 이탈(항공교통관제 허가사항에서 이탈한 것도 포함) 한 것과 관련된 정보 및 조언을 제공하는 것을 말한다. 주기 - 비행경로감시 기능 지원을 이해 일부 애플리 케이션은 레이더 등 특정 기술이 요구될 수도 있다.",
      "annex11": "",
      "doc4444": "The use of ATS surveillance systems for the purpose of providing aircraft with information and advice relative to significant deviations from nominal flight path, including deviations from the terms of their air traffic control clearances. Note.— Some applications may require a specific technology, e.g. radar, to support the function of flight path monitoring.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "FLIGHT PLAN",
    "krName": "비행계획서",
    "definitions": {
      "kr_proc": "항공교통업무기관에 전자적 방법, 구두 또는 서면으로 제출하는 계획된 비행과 관련한 일정한 정보\n(참조) : fast file filed",
      "annex11": "Specified information relative to an intended flight or portion of a flight of an aircraft. Note 1.— The term flight plan may be prefixed by the words “preliminary”, “filed”, “current” or “operational” to indicate the context and different stages of a flight. Note 2.— When the word “message” is used as a suffix to this term, it denotes the content and format of the flight plan data as transmitted.",
      "doc4444": "Specified information relative to an intended flight or portion of a flight of an aircraft. Note 1.— The term flight plan may be prefixed by the words “preliminary”, “filed”, “current” or “operational” to indicate the context and different stages of a flight. Note 2.— When the word “message” is used as a suffix to this term, it denotes the content and format of the flight plan data as transmitted. Flight and flow — information for a collaborative environment (FF-ICE). Information necessary for planning, coordination, and notification of flights, exchanged in a standardized format between members of the ATM community, including those involved in flight operations and aerodrome operations. Flight and flow — information for a collaborative environment (FF-ICE) services. A set of services established for the purposes of facilitating the exchange of FF-ICE, accurate assessment of demands, appropriate resource planning, and optimizing flight planning and execution. 2180/1/11/12/41 6",
      "faa_pcg": "Specified information relating to the intended flight of an aircraft that is filed electronically, orally, or in writing with an FSS, third−party vendor, or an ATC facility. (See FAST FILE.) (See FILED.) (Refer to AIM.)",
      "kr_ats": "계획된 비행 또는 비행의 일부분 에 관하여 항공교통업무기관에 제출하는 일정한 정보를 말한다. 주기 - 비행계획에 관한 자세한 사항은 「항공안전법 시행규칙」에 따른다."
    }
  },
  {
    "enName": "FLIGHT RECORDER",
    "krName": "비행기록계",
    "definitions": {
      "kr_proc": "비행중 항공기의 성능 또는 비행 중 조우되는 상황에 관한 정보를 기록하는 계기 또는 기기에 적용하는 일반적인 용어. 비행기록계는 항공기속도, 외부 대기온도, 수직가속, 엔진회전수(RPM), 기내 기압, 비행 시 기타 다양한 기록을 할 수 있다.\n(참조) : ICAO flight recorder",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any type of recorder installed in the aircraft for the purpose of complementing accident/incident investigation. Note: See Annex 6 Part I, for specifications relating to flight recorders.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT RECORDER",
    "krName": "",
    "definitions": {
      "kr_proc": "중사고/경사고 조사를 보완하기 위한 목적으로 항공기에 설치된 녹음기",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any type of recorder installed in the aircraft for the purpose of complementing accident/incident investigation. Note: See Annex 6 Part I, for specifications relating to flight recorders.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT SERVICE STATION",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사브리핑, 항공로 통신 및 시계비행 항공기 수색 및 구조업무, 비상상황에 있는 항공기 및 실종항공기 협조, 항공교통관제허가 전달, 항공고시보(NOTAM) 발송, 항공기상 및 NAS 정보 방송, 계기비행(IFR) 비행계획서의 접수 및 발송 그리고 항법시설의 감시를 제공하는 항공교통시설. 덧붙어, 선택된 위치에서, FSS는 항공로비행 조언업무(비행감시), 기상관측 취합, 공항조언을 발부 및 국제선 출ㆍ입국 절차를 조언한다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An air traffic facility which provides pilot briefings, flight plan processing, en route flight advisories, search and rescue services, and assistance to lost aircraft and aircraft in emergency situations. FSS also relay ATC clearances, process Notices to Airmen, and broadcast aviation weather and aeronautical information. In Alaska, FSS provide Airport Advisory Services. (See FLIGHT PLAN AREA.) (See TIE-IN FACILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT STANDARDS DISTRICT OFFICE",
    "krName": "",
    "definitions": {
      "kr_proc": "수송 및 일반 항공기의 승인 및 운항에 관계된 일반공무와 일반 항공산업에 종사하는 비행기준요원이 배치되고 지정된 지리학적 지역을 관할하는 FAA 분야의 사무소. 주요 활동은 운영상 안전, 항공종사자 및 항공기의 분류, 사고 예방, 검사, 실행 등을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An FAA field office serving an assigned geographical area and staffed with Flight Standards personnel who serve the aviation industry and the general public on matters relating to the certification and operation of air carrier and general aviation aircraft. Activities include general surveillance of operational safety, certification of airmen and aircraft, accident prevention, investigation, enforcement, etc.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT TERMINATION",
    "krName": "",
    "definitions": {
      "kr_proc": "통제 상실, 복구가 불가능한 연결 실패, 그 외 비행안전을 위태롭게 하는 다른 실패 발생 시 무인기 비행을 의도적이고, 계획적으로 종료 처리한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The intentional and deliberate process of terminating the flight of a UA in the event of an unrecoverable lost link, loss of control, or other failure that compromises the safety of flight.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLIGHT TEST",
    "krName": "비행시험",
    "definitions": {
      "kr_proc": "아래의 목적으로 하는 비행.\n1. 항공기 또는 운영/비행중인 항공기의 특성 조사.\n2. 조종사에게 자격증을 주거나 자격기준의 적용평가.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A flight for the purpose of: a. Investigating the operation/flight characteristics of an aircraft or aircraft component. b. Evaluating an applicant for a pilot certificate or rating.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLOW CONTROL",
    "krName": "흐름관리",
    "definitions": {
      "kr_proc": "공역의 가장 효율적인 활용을 위하여 관할 공역, 관할 비행로 또는 비행장 경계의 교통흐름을 조정하기 위하여 계획된 방법.\n(참조) : quota flow control공항/시설 내규",
      "annex11": null,
      "doc4444": "Measures designed to adjust the flow of traffic into a given airspace, along a given route, or bound for a given aerodrome, so as to ensure the most effective utilization of the airspace.",
      "faa_pcg": null,
      "kr_ats": "일정한 공역, 비행로, 비행장에 입·출항하는 교통흐름을 조정하여 공역활용의 극대화를 도모하는 방법을 말한다."
    }
  },
  {
    "enName": "FLY HEADING (DEGREES)",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사에게 제공된 비행해야할 기수. 조종사는 지침을 준수하기 위해 특정 방향으로 회전하거나 계속 회전해야 할 수도 있다. 조종사는 항공교통관제사가 별도로 지시를 발부하지 아니한 경우, 관제사가 지시한 방향으로부터 가까운 방향으로 선회하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Informs the pilot of the heading he/she should fly. The pilot may have to turn to, or continue on, a specific compass direction in order to comply with the instructions. The pilot is expected to turn in the shorter direction to the heading unless otherwise instructed by ATC.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLY-BY WAYPOINT",
    "krName": "",
    "definitions": {
      "kr_proc": "다음 비행구역의 오버슛(overshoot)을 회피하기 위하여 예상선회의 사용이 요구되는 fly-by waypoint.",
      "annex11": "A waypoint which requires turn anticipation to allow tangential interception of the next segment of a route or procedure, or",
      "doc4444": "A waypoint which requires turn anticipation to allow tangential interception of the next segment of a route or procedure, or",
      "faa_pcg": "A fly-by waypoint requires the use of turn anticipation to avoid overshoot of the next flight segment.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLY-OVER WAYPOINT",
    "krName": "",
    "definitions": {
      "kr_proc": "이 지점까지 예상선회가 금지되며 통과 후 다음 비행구역으로의 진입 기동이 허용된다.",
      "annex11": "A waypoint at which a turn is initiated in order to join the next segment of a route or procedure. _____________________ ISO 191 04* ** ISO Standard 19104 — Geographic information — Terminology 19108 — Geographic information — Temporal schema 8/151/1/11/820 1-12",
      "doc4444": "A waypoint at which a turn is initiated in order to join the next segment of a route or procedure. _____________________ 102/81/111//1264",
      "faa_pcg": "A fly-over waypoint precludes any turn until the waypoint is overflown and is followed by an intercept maneuver of the next flight segment.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FLYAWAY",
    "krName": "",
    "definitions": {
      "kr_proc": "조종자가 항공기를 제어할 수 없어 결과적으로 무인항공기(UA)가 예측가능하거나 계획된 방식으로 운영되지 않음",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "When the pilot is unable to effect control of the aircraft and, as a result, the UA is not operating in a predictable or planned manner.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FO",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : simulated flameout)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "FOLLOW (description)",
    "krName": "",
    "definitions": {
      "kr_proc": "운항중인 항공기에 대한 진행순서 배정을 목적으로 이동경로 상에 앞서 진행 중인 항공기를 뒤따를 것을 지시하고자 할 때에 사용되는 관제용어(앞선 항공기의 진행상황을 설명)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "FORECAST",
    "krName": "기상예보",
    "definitions": {
      "kr_proc": "특정 시간 또는 기간 및 특정한 지역 또는 공역에 예상되는 기상예보",
      "annex11": "A statement of expected meteorological conditions for a specified time or period, and for a specified area or portion of airspace.",
      "doc4444": "A statement of expected meteorological conditions for a specified time or period, and for a specified area or portion of airspace.",
      "faa_pcg": null,
      "kr_ats": "특정한 시간 또는 기간, 및 특정한 지역 또는 공역에 예상되는 기상상태에 대해 설명하는 것을 말한다."
    }
  },
  {
    "enName": "FORMATION FLIGHT",
    "krName": "편대비행",
    "definitions": {
      "kr_proc": "조종사 간 사전 조정으로, 항행 및 위치보고를 고려하여 단일 항공기로 운영되는 하나 이상의 항공기. 편대책임 기장과 각 기장이 항공기간의 분리책임을 진다.\n1. 표준편대는 종적 및 횡적으로 1마일(군적용)/1KM(민적용) 그리고 편대기로부터 100피트 수직범위의 근접이 각 기장에 의하여 유지된다.\n2. 비표준 편대는 아래 조건하에서 운영된다.\n가. 편대 책임기장이 요구 및 항공교통관제기관이 표준 편대 규모 외에 인가한 경우.\n나. 허가된 고도유보(ALTRV)내 또는 합의서에 의거 운항하는 경우.\n다. 비항이 특별 임무를 위하여 설계된 공역 내에서 수행될 경우.\n(참조) : ALTITUDE RESERVATIONFAR PART91",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "More than one aircraft which, by prior arrangement between the pilots, operate as a single aircraft with regard to navigation and position reporting. Separation between aircraft within the formation is the responsibility of the flight leader and the pilots of the other aircraft in the flight. This includes transition periods when aircraft within the formation are maneuvering to attain separation from each other to effect individual control and during join-up and breakaway. a. A standard formation is one in which a proximity of no more than 1 mile laterally or longitudinally and within 100 feet vertically from the flight leader is maintained by each wingman.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Free text message element",
    "krName": "자유 텍스트메시지 요소",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "PANS-ATM(Doc 4444)에서 정의하는 표준 메시지 요소 에 부합되지 않는 메시지의 일부를 말한다.",
      "annex11": "",
      "doc4444": "Part of a message that does not conform to any standard message element in the PANS-ATM (Doc 4444).",
      "faa_pcg": ""
    }
  },
  {
    "enName": "FRICTION MEASUREMENT",
    "krName": "마찰 측정",
    "definitions": {
      "kr_proc": "AC 150/5320-12(측정치, 구조, skid 저항 공항포장 표면) 포함된 설명서, 절차 및 계획표에 따라서 연속적으로 수면 마찰측정장비를 사용하여 활주로 포장표면의 마찰특성의 측정.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A measurement of the friction characteristics of the runway pavement surface using continuous self-watering friction measurement equipment in accordance with the specifications, procedures and schedules contained in AC 150/5320−12, Measurement, Construction, and Maintenance of Skid Resistant Airport Pavement Surfaces.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FUEL DUMPING",
    "krName": "연료 투하",
    "definitions": {
      "kr_proc": "사용할 수 있는 연료의 공중 투하. 연료 탱크를 버리는 것은 제외된다.\n(참조) : jettisoning of external",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airborne release of usable fuel. This does not include the dropping of fuel tanks. (See JETTISONING OF EXTERNAL STORES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "FUEL REMAINING",
    "krName": "잔여 연료",
    "definitions": {
      "kr_proc": "실제 연료 소모까지 항공기에 남아있는 연료에 관하여 조종사 또는 관제사에 의해 사용되는 문구. 관제사에게 조종사가 주의 조언을 하거나 관제사의 질문에 대한 답변으로 해당 정보를 전달하면, 조종사는 항공기가 잔여연료로 비행할 수 있는 시간을 대략적인 분단위로 말한다. 모든 저장 연료는 명시된 시간에 반드시 포함되어야 하며, 연료 게이지 시스템 고장에 대한 오차 허용범위까지도 포함하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A phrase used by either pilots or controllers when relating to the fuel remaining on board until actual fuel exhaustion. When transmitting such information in response to either a controller question or pilot initiated cautionary advisory to air traffic control, pilots will state the APPROXIMATE NUMBER OF MINUTES the flight can continue with the fuel remaining. All reserve fuel SHOULD BE INCLUDED in the time stated, as should an allowance for established fuel gauge system error.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FUEL SIPHONING",
    "krName": "연료 유출",
    "definitions": {
      "kr_proc": "연료의 의도되지 않은 유출.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Unintentional release of fuel caused by overflow, puncture, loose cap, etc.",
      "kr_ats": ""
    }
  },
  {
    "enName": "FUSION",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기 분리 서비스를 위하여 가능한 모든 감시 정보를 종합하여 단일 포착 항적에 시현. FUSION은 현재 단일센서 레이더 디스플레이와 동일하다. FUSION 성능은 단일센서 레이더 디스플레이 체계의 특성을 갖는다. Terminal 구역은 단일펄스 이차감시 레이더(ASR 9, Mode S 또는 ASR 11, MSSR)를 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "the combination of all available surveillance sources (airport surveillance radar [ASR], air route surveillance radar [ARSR], ADS-B, etc.) into the display of a single tracked target for air traffic control separation services. FUSION is the equivalent of the current single-sensor radar display. FUSION performance",
      "kr_ats": ""
    }
  },
  {
    "enName": "GATE HOLD PROCEDURE",
    "krName": "계류장대기절차",
    "definitions": {
      "kr_proc": "공항에서 출발 지연이 과도하거나 15분 이상 예상 될 때마다 계류장 또는 다른 지상 위치에서 항공기를 대기시키기 위한 절차이다. 출발 순서는 흐름관리 제한에 따라서 수정되지 않는 경우, 호출순서에 따라서 정해진다. 조종사는 엔진시동/유도조언 또는 지연이 변경되는 경우, 새로 계획된 출발/유도 시간을 지정받기 위하여 지상관제 및 허가중계주파수를 청취하여야 한다.\n(참조) : flow control",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "GENERAL AVIATION",
    "krName": "일반 항공",
    "definitions": {
      "kr_proc": "정기 및 부정기 항공 운송업 또는 상업적 우주 비행을 포함하지 않는 민간항공의 한 부분을 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "All civil aviation operations other than scheduled air services and nonscheduled air transport operations for remuneration or hire.",
      "kr_ats": ""
    }
  },
  {
    "enName": "GEO MAP",
    "krName": "",
    "definitions": {
      "kr_proc": "ASR-9 레이더시스템과 관련하여 작성된 디지털지도이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The digitized map markings associated with the ASR-9 Radar System.",
      "kr_ats": ""
    }
  },
  {
    "enName": "GIVE WAY(description)",
    "krName": "",
    "definitions": {
      "kr_proc": "운항중인 항공기로 하여금 타 항공기에게 진행우선권을 양보하도록 지시하고자 할 경우에 사용되는 관제용어(타 항공기의 진행상황을 설명)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "GLIDEPATH",
    "krName": "활공로",
    "definitions": {
      "kr_proc": "최종접근 시 수직적인 유도를 위하여 설정된 강하경로",
      "annex11": null,
      "doc4444": "A descent profile determined for vertical guidance during a final approach.",
      "faa_pcg": "A descent profile determined for vertical guidance during a final approach.",
      "kr_ats": "최종접근 시 수직적 유도를 위해 설정된 강하 프로파일을 말한다."
    }
  },
  {
    "enName": "GLIDESLOPE",
    "krName": "",
    "definitions": {
      "kr_proc": "접근 및 착륙 중 항공기에게 수직 유도를 제공한다. glideslope/glidepath는 다음 각호의 사항에 근거한다.\n1. 신호를 방출하는 전자적 구성요소로서 ILS처럼 계기접근하는 동안 탑재 장비에 수직 유도를 제공한다.\n2. VFR 접근 또는 계기접근의 시각접근 및 착륙을 위하여 수직 안내를 제공하는 VASI와 같은 시각보조물.\n3. 정밀접근레이더(PAR). 항공교통관제기관이 PAR 접근중인 항공기에게 강하단면과 관련하여 동 항공기의 수직적 위치를 알리기 위하여 사용.\n(참조) : ICAO GLIDEPATH",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Provides vertical guidance for aircraft during approach and landing. The glideslope/glidepath is based on the following: a. Electronic components emitting signals which provide vertical guidance by reference to airborne instruments during instrument approaches such as ILS; or, b. Visual ground aids, such as VASI, which provide vertical guidance for a VFR approach or for the visual portion of an instrument approach and landing. c. PAR. Used by ATC to inform an aircraft making a PAR approach of its vertical position (elevation) relative to the descent profile. (See ICAO term GLIDEPATH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "GLIDESLOPE INTERCEPT ALTITUDE",
    "krName": "활공로 교차고도",
    "definitions": {
      "kr_proc": "계기접근 시 중간 접근 부분에서 glideslope에 교차하기 위한 최저 고도를 말하며, 공인된 도면상에 번개모양의 부호는 교차점을 식별하기 위하여 사용되며 이 교차점은 정밀최종접근 픽스이다. 관제사가 더 높은 고도를 지시한 경우 그에 따른 보다 높은 진입 위치가 당시의 최종접근 픽스가 된다.\n(참조) : FINAL APPROACH FIX SEGMENT OF AN INSTRUMENT APPROACH PROCEDURE\nGLOBAL NAVIGATION SATELLITE SYSTEM(위성측위시스템)(위성항행시스템) : GNSS는 하나 또는 그 이상의 위성체계로부터 이용 가능한 전 세계 위치, 항법, 시간 결정 능력을 통합적으로 가리킨다. GNSS 체계는 무결성 및 위치 정확성을 증가시키기 위해 지상시설 및/또는 정지궤도 위성과 함께 사용되어 증강 될 수 있다.\n(참조) : GBAS(GROUND BASED AUGMENTATION SYSTEM)\n(참조) : SBAS(SATELLITE BASED AUGMENTATION SYSTEM)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The published minimum altitude to intercept the glideslope in the intermediate segment of an instrument approach. Government charts use the lightning bolt symbol to identify this intercept point. This intersection is called the Precise Final Approach fix (PFAF). ATC directs a higher altitude, the resultant intercept becomes the PFAF. (See FINAL APPROACH FIX.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "GLOBAL NAVIGATION SATELLITE SYSTEM MINIMUM EN ROUTE IFR ALTITUDE",
    "krName": "위성측위시스템 최저항로고도",
    "definitions": {
      "kr_proc": "발간된 ATS항로 또는 GNSS 수신이 보장되고 장애물 분리간격 요건을 충족하는 항로 부분의 최소 계기비행고도",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "GLOBAL POSITION SYSTEM",
    "krName": "위성위치식별시스템",
    "definitions": {
      "kr_proc": "GPS는 미국의 위성체계를 통하여 사용 가능한 전 지구적 위치, 속도, 시간 측정 능력과 관련된다. 민간 사용을 위한 GPS 서비스는 GPS Standard Positioning System Performance Standard(GPS 표준측위시스템 수행 표준)에 규정된다. GPS는 공간, 통제 및 사용자 요소로 구성된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "GO AROUND",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사에게 착륙을 위한 접근 포기 지시이며, 추가적인 지시가 따를 수 있다. 관제 기관의 별도 지시가 없는 경우, 시계비행(VFR) 항공기 또는 비주얼접근을 하는 항공기는 교통장주 고도로 상승 중, 활주로 상공을 통과하여야 하며, CROSSWIND LEG를 경유해서 교통장주로 진입하여야 한다. 계기접근을 하는 계기비행(IFR)항공기 조종사는 발간된 실패접근을 하거나 관제기관의 지시를 따라야 한다. : 예를 들면, “Go around”(요구시 추가적인 지시)\n(참조) : low approach missed approach",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Instructions for a pilot to abandon his/her approach to landing. Additional instructions may follow. Unless otherwise advised by ATC, a VFR aircraft or an aircraft conducting visual approach should overfly the runway while climbing to traffic pattern altitude and enter the traffic pattern via the crosswind leg. A pilot on an IFR flight plan making an instrument approach should execute the published missed approach procedure or proceed as instructed by ATC; e.g., “Go around” (additional instructions if required). (See LOW APPROACH.) (See MISSED APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "GROSS NAVIGATION ERROR(GNE)",
    "krName": "",
    "definitions": {
      "kr_proc": "허가된 항로로부터 10마일 이상의 수평적 이탈.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A lateral deviation of 10 NM or more from the aircraft’s cleared route. GROUND BASED AUGMENTATION SYSTEM (GBAS)– A ground based GNSS station which provides local differential corrections, integrity parameters and approach data via VHF data broadcast to GNSS users to meet real-time performance requirements for CAT I precision approaches. The aircraft applies the broadcast data to improve the accuracy and integrity of its GNSS signals and computes the deviations to the selected approach. A single ground station can serve multiple runway ends up to an approximate radius of 23 NM.",
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND - BASED TRANSCEIVER(GBT)",
    "krName": "",
    "definitions": {
      "kr_proc": "지상 송/수신기는 레이더 화면상의 또 다른 항적의 시현 및 진행을 항공교통관제시설에 전달하는 ADSB의 메시지를 수신한다.\n(참조) : AUTOMATIC DEPENDENT SURVEILLANCE -BROADCAST",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND BASED AUGMENTATION SYSTEM (GBAS)",
    "krName": "",
    "definitions": {
      "kr_proc": "CATⅠ 정밀접근을 위한 성능요건을 실시간 충족하기 위하여 GNSS 사용자에게 국지적 오차 보정, 무결성 및 VHF 데이터 송출을 제공하는 GNSS 지상시설이다. 항공기는 GNSS 신호의 정확성과 무결성 및 선택된 접근을 위한 편차 계산 등을 향상시키기 위하여 방송데이터를 적용한다. 하나의 지상 시설은 복수활주로 끝으로부터 약 23NM의 원호로 신호를 제공한다.\nGROUND BASED AUGMENTATION SYSTEM (GBAS) LANDING SYSTEM (GLS) :  보정된 GNSS 데이터, 완전무결성 및 접근정보를 송신하는 하나의 GBAS 시설을 이용하여 GNSS의 국지보정을 기본으로 하는 정밀계기접근 절차이다. GBAS GLSS는 하나의 공역에서 조종사에게 증가된 신뢰성 및 융통성을 이용할 수 있어 정밀접근시 항공기의 GNSS 수신기의 정확성을 향상시킨다. GLS 절차는 지정된 활주로 및 200피트 기상최저치로 표준계기접근절차 차트에 GLS란 명칭으로 발간된다. 향후에는 CAT II , CAT III 운영 지원 예정이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND CLUTTER",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 영향권 내에서 레이더 반사를 감소시킬 수 있는 지면 반사에 의하여 레이더 화면상에 생성된 형상. 이동 중인 타겟만 레이더 전시기에 나타나게 하는 레이더 장치인 이동타겟지시기(MTI)를 사용해서 그 영향을 최소화할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A pattern produced on the radar scope by ground returns which may degrade other radar returns in the affected area. The effect of ground clutter is minimized by the use of moving target indicator (MTI) circuits in the radar equipment resulting in a radar presentation which displays only targets which are in motion. (See CLUTTER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND CONTROLLED APPROACH",
    "krName": "지상접근관제",
    "definitions": {
      "kr_proc": "관제사가 무선으로 조종사에게 지시를 보내는 방식으로 지상에서 운영되는 레이더접근시스템이다. 접근업무 수행에는 감시레이더(ASR) 단독 또는 감시레이더(ASR)와 정밀접근레이더(PAR) 모두 사용할 수 있다. GCA 시설로 보낼 때를 제외하고 조종사가 “GCA” 용어 사용을 지양하여야 한다. 조종사는 정밀레이더접근이 요구되는 경우, PAR 접근을 별도로 요구하고, 비정밀레이더접근이 요구되는 경우에는 “ASR󰡓 또는 “surveillance” 접근을 요구하여야 한다.\n(참조) : RADAR approach",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A radar approach system operated from the ground by air traffic control personnel transmitting instructions to the pilot by radio. The approach may be conducted with surveillance radar (ASR) only or with both surveillance and precision approach radar (PAR). Usage of the term “GCA” by pilots is discouraged except when referring to a GCA facility. Pilots should specifically request a “PAR” approach when a precision radar approach is desired or request an “ASR” or “surveillance” approach when a nonprecision radar approach is desired. (See RADAR APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND DELAY PROGRAM(GDP)",
    "krName": "",
    "definitions": {
      "kr_proc": "지상지연프로그램. 항공기가 지상에서 대기 시 항공교통통제센터(ATCC)가 조절하는 교통관리 절차이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A traffic management process administered by the ATCSCC, when aircraft are held on the ground. The purpose of the program is to support the TM mission and limit airborne holding. It is a flexible program and may be implemented in various forms depending upon the needs of the AT system. Ground delay programs provide for equitable assignment of delays to all system users.",
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND EFFECT",
    "krName": "지표면효과",
    "definitions": {
      "kr_proc": "회전익항공기나 수직 이ㆍ착륙기가 지면 근처를 운항할 때, 회전익의 공기흐름에 대한 지표면의 간섭으로 인해 발생하는 상승효과\n(주기) : 대부분의 회전익항공기에서 회전익 효율은 회전날개 직경의 높이에 대한 지면효과로 증가 한다",
      "annex11": null,
      "doc4444": "A condition of improved performance (lift) due to the interference of the surface with the airflow pattern of the rotor system when a helicopter or other VTOL aircraft is operating near the ground. Note.— Rotor efficiency is increased by ground effect to a height of about one rotor diameter for most helicopters.",
      "faa_pcg": null,
      "kr_ats": "회전익항공기나 수직이착륙항 공기가 지면 근처를 운항할 때, 회전익의 공기 흐름에 대한 지표면의 간섭으로 인해 성능(양력)이 향상되는 효과를 말한다. - 개정 : 2026.07.06. 항공교통업무기준 주기 - 대부분의 회전익항공기에서 회전익(rotor) 효 율은 지면효과에 의해 회전익(rotor) 직경의 높이로 향 상될 수 있다."
    }
  },
  {
    "enName": "GROUND SPEED",
    "krName": "대지속도",
    "definitions": {
      "kr_proc": "지표와 관련한 항공기 속도를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The speed of an aircraft relative to the surface of the earth.",
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND STOP",
    "krName": "",
    "definitions": {
      "kr_proc": "일반적으로, 최종 이용 방법으로 터미널시설이 추후 통보가 있을 때까지 지역관제소(ACC) 공역으로 진입하고자 하는 어떠한 출발도 허용하지 않을 때, 지시하는 것이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The GS is a process that requires aircraft that meet a specific criteria to remain on the ground. The criteria may be airport specific, airspace specific, or equipment specific; for example, all departures to San Francisco, or all departures entering Yorktown sector, or all Category I and II aircraft going to Charlotte. GSs normally occur with little or no warning.",
      "kr_ats": ""
    }
  },
  {
    "enName": "GROUND VISIBILITY",
    "krName": "지상시정",
    "definitions": {
      "kr_proc": "기상관측자 또는 자동시스템에 의하여 보고되는 비행장 시정",
      "annex11": null,
      "doc4444": "The visibility at an aerodrome, as reported by an accredited observer or by automatic systems.",
      "faa_pcg": "(See VISIBILITY.)",
      "kr_ats": "자격을 갖춘 관측자 또는 자동시스템에 의해 보고된 비행장의 시정을 말한다."
    }
  },
  {
    "enName": "GROUND-TO-AIR COMMUNICATION",
    "krName": "지대공통신",
    "definitions": {
      "kr_proc": "지상의 무선국 또는 지역국에서 항공기에 송신하는 일방향 통신",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HANDOFF",
    "krName": "관제이양",
    "definitions": {
      "kr_proc": "항공기가 인수관제사의 공역으로 진입하고, 무선교신이 이양될 경우 이양 관제사로부터 인수관제사에게 항공기의 레이더식별을 이양하기 위하여 취하는 조치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An action taken to transfer the radar identification of an aircraft from one controller to another if the aircraft will enter the receiving controller’s airspace and radio communications with the aircraft will be transferred.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HAVE NUMBERS",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사가 사용 활주로, 바람, 그리고 고도계수정치 정보만을 수신했다는 것을 항공교통관제기관에 알리기 위하여 사용하는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by pilots to inform ATC that they have received runway, wind, and altimeter information only.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HAZARDOUS INFLIGHT WEATHER ADVISORY SERVICE",
    "krName": "비행중 악기상 조언업무",
    "definitions": {
      "kr_proc": "비행중 악기상 조언업무 방송 지역에서 VOR 송신국을 통해 비행중인 조종사에게 방송되는 지속적으로 녹음된 비행중 악기상 예보를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HAZARDOUS WEATHER INFORMATION",
    "krName": "악기상정보",
    "definitions": {
      "kr_proc": "SIGMET/WS, convective SIGMET/\nWST, urgent PIREP/UUA(Urgent Pilot Weather Reports), CWA, AIRMET/WA 등을 말하며, 기타 급속히 발달하고 세력이 증가하는 독립된 폭풍 또는 심각할 정도로 넓게 펼쳐져 있는 악시정 또는 실링과 같은 기상이 현재 발효 중인 악기상조언에 포함되지 않은 경우, 이를 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Summary of significant meteorological information (SIGMET/ WS), convective significant meteorological information (convective SIGMET/WST), urgent pilot weather reports (urgent PIREP/UUA), center weather advisories (CWA), airmen’s meteorological information (AIRMET/WA), graphical airmen’s meteorological information (G−AIRMET) and any other weather such as isolated thunderstorms that are rapidly developing and increasing in intensity, or low ceilings and visibilities that are becoming widespread which is considered significant and are not included in a current hazardous weather advisory.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HEADING",
    "krName": "기수방향",
    "definitions": {
      "kr_proc": "통상 북쪽(진북, 자북, compass, grid North)을 기준한 각도로 나타내는 항공기의 세로방향",
      "annex11": null,
      "doc4444": "The direction in which the longitudinal axis of an aircraft is pointed, usually expressed in degrees from North (true, magnetic, compass or grid).",
      "faa_pcg": null,
      "kr_ats": "통상 북쪽(진북, 자북, compass 또 는 grid north)을 기준한 각도로 나타내는 항공기의 세 로축이 가리키는 방향을 말한다."
    }
  },
  {
    "enName": "HEIGHT",
    "krName": "높이",
    "definitions": {
      "kr_proc": "특정한 기준으로부터 일정한 고도, 지점 또는 지점으로 간주되는 물체까지의 수직거리를 말한다.",
      "annex11": "The vertical distance of a level, a point or an object considered as a point, measured from a specified datum.",
      "doc4444": "The vertical distance of a level, a point or an object considered as a point, measured from a specified datum.",
      "faa_pcg": null,
      "kr_ats": "장애물 회피 기준을 준수하기 위해 관련 활주로시단의 비행장표고로 또는 비행장표고로부터 설정된 가장 낮은 고도 또는 높이를 말한다. 주기1 - 장애물회피고도는 평균해수면을 기준으로 하 고, 장애물회피높이는 활주로시단 높이를 기준으로 한 다. 비정밀접근절차의 경우 비행장표고를 기준으로 하 되, 활주로시단 높이가 비행장 표고보다 2m (7ft) 이상 낮을 때는 활주로시단 높이를 기준으로 한다. 선회접근 절차의 경우에는 비행장 표고를 기준으로 한다. 주기2 - 편의상 두 가지 표현이 함께 사용될 때는 장 애물 ‘회피고도/높이’와 약어 ‘OCA/H’로 사용한다."
    }
  },
  {
    "enName": "HEIGHT ABOVE AIRPORT(HAA)",
    "krName": "",
    "definitions": {
      "kr_proc": "발간된 공항표고 상공의 최저강하고도로 선회접근 최저치 설정에 사용된다.\n(참조) : MDA",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The height of the Minimum Descent Altitude above the published airport elevation. This is published in conjunction with circling minimums. (See MINIMUM DESCENT ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "HEIGHT ABOVE LANDING",
    "krName": "",
    "definitions": {
      "kr_proc": "지정된 헬리콥터 착륙지역 상공의 높이를 말하며 헬리콥터 계기접근절차에 이용된다.\n(참조) : FAR part 97",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The height above a designated helicopter landing area used for helicopter instrument approach procedures. (Refer to 14 CFR part 97.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "HEIGHT ABOVE TOUCHDOWN(HAT)",
    "krName": "",
    "definitions": {
      "kr_proc": "접지구역(활주로 첫 3000피트 지점까지)에서 가장 높은 활주로 표고 상공의 결심고도 또는 최저강하고도의 높이를 말한다. HAT는 모든 직진입 착륙최저치와 연계되어 계기접근절차 도면에 표시된다.\n(참조) : DHMDA",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The height of the Decision Height or Minimum Descent Altitude above the highest runway elevation in the touchdown zone (first 3,000 feet of the runway). HAT is published on instrument approach charts in conjunction with all straight-in minimums. (See DECISION HEIGHT.) (See MINIMUM DESCENT ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "HELICOPTER",
    "krName": "헬리콥터",
    "definitions": {
      "kr_proc": "주로 공기의 반작용에 의하여 비행하며, 실질적으로 수직축에 붙은 하나 이상의 동력구동 회전익이 부양 작용을 하는 항공기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A rotorcraft that, for its horizontal motion, depends principally on its engine-driven rotors. (See ROTORCRAFT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "HELIPAD",
    "krName": "헬리패드",
    "definitions": {
      "kr_proc": "작게 지정된 구역으로서, 주로 헬기장, 이착륙 지역, 계류장, 이동구역표면에 마련되어 헬리콥터의 이착륙 또는 주기목적으로 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A small, designated area, usually with a prepared surface, on a heliport, airport, landing/takeoff area, apron/ramp, or movement area used for takeoff, landing, or parking of helicopters.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HELIPORT",
    "krName": "헬리포트",
    "definitions": {
      "kr_proc": "육상, 수상, 또는 구조물로 된 헬리콥터의 이착륙에 사용하거나 사용 의도를 가진 지역을 말하며 건물 또는 시설물이 있을 경우, 이것을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An area of land, water, or structure used or intended to be used for the landing and takeoff of helicopters and includes its buildings and facilities if any.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HELIPORT REFERENCE POINT(HRP)",
    "krName": "",
    "definitions": {
      "kr_proc": "헬기장의 중심 지점을 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The geographic center of a heliport.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HERTZ",
    "krName": "",
    "definitions": {
      "kr_proc": "전자파동의 초당 진동수에 해당하는 주파수의 단위기준이다. 킬로헤르츠(KHZ)는 초당 천회의 진동수를 가진 주파수이고, 메가헤르츠(MHz)는 초당 일백만 회의 순환주기를 가진 주파수를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The standard radio equivalent of frequency in cycles per second of an electromagnetic wave. Kilohertz (kHz) is a frequency of one thousand cycles per second. Megahertz (MHz) is a frequency of one million cycles per second.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : high frequency)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See HIGH FREQUENCY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "HIGH ALTITUDE REDESIGN(HAR)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기에 탑재된 FMS 혹은 RNAV를 이용하여 HAR 프로그램과 관련된 모든 WAYPOINT를 이용하는 제한 없는 항로 업무 수준를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HIGH FREQUENCY",
    "krName": "단파",
    "definitions": {
      "kr_proc": "3 ~ 30 MHz사이의 주파수대.\n(High Frequency Communication를 볼 것)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The frequency band between 3 and 30 MHz. (See HIGH FREQUENCY COMMUNICATIONS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "HIGH FREQUENCY COMMUNICATION",
    "krName": "단파통신",
    "definitions": {
      "kr_proc": "장거리 운항에 사용되는 3 ~ 30 MHz 사이의 무선 주파수(HF)에 의한 음성공지통신",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HIGH SPEED TAXIWAY",
    "krName": "고속이탈유도로",
    "definitions": {
      "kr_proc": "활주로 중심선에서부터 유도로 중심지점까지 항공기의 경로를 표시하기 위한 등화와 표식시설을 갖추고, 항공기가 고속(60Knots)으로 주행할 수 있도록 설계되어진 장반경의 유도로로 이것은 장반경 출구 또는 선회개방 유도로라고도 부른다. 고속이탈 유도로는 항공기가 착륙 후 활주로 개방을 신속하게 할 수 있도록 설계되며, 활주로 점유 시간을 단축시킬 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A long radius taxiway designed and provided with lighting or marking to define the path of aircraft, traveling at high speed (up to 60 knots), from the runway center to a point on the center of a taxiway. Also referred to as long radius exit or turn-off taxiway. The high speed taxiway is designed to expedite aircraft turning off the runway after landing, thus reducing runway occupancy time.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HIGH UPDATE RATE SURVEILLANCE",
    "krName": "",
    "definitions": {
      "kr_proc": "센서 갱신 시간이 4.8초 미만인 감시 시스템",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HIWAS BROADCAST AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "악기상 조언방송을 위하여 FSS에 배정된 책임지역을 말하며, 하나 이상의 HIWAS 송출국을 포함하고 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HIWAS OUTLET AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "HIWAS 송출국 지역으로 150NM범위이며, 필요에 따라 범위가 확장된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HOLD (descriptions)",
    "krName": "",
    "definitions": {
      "kr_proc": "운항중인 항공기 또는 주기장에서 후방견인을 요청하는 항공기로 하여금 대기를 지시하고자 할 경우에 사용되는 계류장관제용어(적절한 사유를 제공)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HOLD FOR RELEASE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제시설에서 사용하며 기상, 교통량과 같은 교통운용상 항공기를 지연시키기 위한 것이다. 출발을 위한 대기지시(출발지연 정보를 포함해서)는 조종사 또는 관제사 (직접 또는 중계를 통해)에게 이들이 접수한 출발허가시간 또는 추가 지시까지 계기비행(IFR) 출발허가가 적절치 않음을 통보하기 위하여 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to delay an aircraft for traffic management reasons; i.e., weather, traffic volume, etc. Hold for release instructions (including departure delay information) are used to inform a pilot or a controller (either directly or through an authorized relay) that an IFR departure clearance is not valid until a release time or additional instructions have been received. (See ICAO term HOLDING POINT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "HOLD PROCEDURE",
    "krName": "체공절차",
    "definitions": {
      "kr_proc": "항공기가 지정된 공역내에서 항공교통관제허가를 기다리는 동안 따라야 하는 예상된 비행절차를 말한다. 또한 지상운행 중에 있는 항공기가 관제허가를 기다리는 동안 지정된 지역 또는 지정된 지점 내에서 대기할 때 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A predetermined maneuver which keeps aircraft within a specified airspace while awaiting further clearance from air traffic control. Also used during ground operations to keep aircraft within a specified area or at a specified point while awaiting further clearance from air traffic control. (See HOLDING FIX.) (Refer to AIM.)",
      "kr_ats": "항공기가 추후에 발부될 허가를 기다리는 동안 특정 공역 내에서 유지하여야 할 예정된 기동을 말한다."
    }
  },
  {
    "enName": "HOLD-SHORT POINT",
    "krName": "",
    "definitions": {
      "kr_proc": "LAHSO 간격을 가진 착륙 항공기가 진행하도록 허가되지 않은 활주로 지점, 이 지점 은 교차 활주로 , 유도로 , 사전 결정된 지점 또는 접근/출발 비행 계획 이전에 위치할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A point on the runway beyond which a landing aircraft with a LAHSO clearance is not authorized to proceed. This point may be located prior to an intersecting runway, taxiway, predetermined point, or approach/departure flight path.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HOLD-SHORT POSITION LIGHTS",
    "krName": "근접대기 위치등",
    "definitions": {
      "kr_proc": "Hold-short Point에 설치된 횐색 매립등.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Flashing in-pavement white lights located at specified hold-short points.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HOLD-SHORT POSITION MARKING",
    "krName": "근접대기 위치표시",
    "definitions": {
      "kr_proc": "페인트로 도색한 활주로 표식으로 모든 LAHSO 활주로의 Hold-short Point에 표시되어 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The painted runway marking located at the hold-short point on all LAHSO runways.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HOLD-SHORT SIGNS",
    "krName": "",
    "definitions": {
      "kr_proc": "Hold-short Point을 따라 나란히 설치된 적백색의 대기지점 표시",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HOLDING FIX",
    "krName": "체공픽스",
    "definitions": {
      "kr_proc": "체공 중 항공기의 위치 설정 및 유지를 위한 참조점으로 사용되는 지점으로 지상의 항행안전시설 또는 시각참조물에 의하여 조종사에게 식별 가능한 특정지점.",
      "annex11": null,
      "doc4444": "A geographical location that serves as a reference for a holding procedure.",
      "faa_pcg": "A specified fix identifiable to a pilot by NAVAIDs or visual reference to the ground used as a reference point in establishing and maintaining the position of an aircraft while holding. (See FIX.) (See VISUAL HOLDING.) (Refer to AIM.)",
      "kr_ats": "체공절차를 위한 참조점 역할을 하는 지리적 위치를 말한다."
    }
  },
  {
    "enName": "HOLDING POINT",
    "krName": "",
    "definitions": {
      "kr_proc": "시각 또는 기타 다른 방법에 의하여서 식별이 되고, 비행 중에 있는 항공기 위치 부근에서 항공교통관제 허가에 따라서 유지되는 일정한 장소를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A specified location, identified by visual or other means, in the vicinity of which the position of an aircraft in flight is maintained in accordance with air traffic control clearances.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HOMING",
    "krName": "",
    "definitions": {
      "kr_proc": "바람보정 없이, 0°의 방위각으로 항공기 기수를 조정하여 항행안전시설을 향해 행하는 비행\n(참고) : BEARING",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The procedure of using the direction-finding equipment of one radio station with the emission of another radio station, where at least one of the stations is mobile, and whereby the mobile station proceeds continuously towards the other station.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Hot spot",
    "krName": "주의지점",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "활주로 침범이 발생했던 실제 사례 가 있었거나 잠재적 위험이 있는, 비행장 이동지역 내 의 지점으로서 조종사와 운전자의 높은 주의가 요구되 는 위치를 말한다.",
      "annex11": "",
      "doc4444": "A location on an aerodrome movement area with a history or potential risk of collision or runway incursion, and where heightened attention by pilots/drivers is necessary.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "HOVER CHECK",
    "krName": "",
    "definitions": {
      "kr_proc": "헬리콥터/VTOL항공기가 공중활주, 또는 이륙전에 성능/출력 점검을 수행하기 위하여 안정된 공중부양을 요구하는 경우를 말하며, 공중 체공고도는 점검 목적에 따라 다양하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to describe when a helicopter/VTOL aircraft requires a stabilized hover to conduct a performance/power check prior to hover taxi, air taxi, or takeoff. Altitude of the hover will vary based on the purpose of the check.",
      "kr_ats": ""
    }
  },
  {
    "enName": "HOVER TAXI",
    "krName": "",
    "definitions": {
      "kr_proc": "헬리콥터/VTOL항공기가 지표면위를 대략 20KT미만의 속도로 공중 활주하는 이동을 말한다. 실제 고도는 다양하며, 어떤 헬리콥터는 지표면효과에 의한 요란을 감소시킬 목적으로 또는 화물에 닿기 위하여 지면고도 25피트(AGL) 이상을 요구하기도 한다.\nHOW DO YOU HEAR ME? - 송신 감도 도는 송신이 얼마나 잘 수신되는 지를 측정하기 위한 질문",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to describe a helicopter/VTOL aircraft movement conducted above the surface and in ground effect at airspeeds less than approximately 20 knots. The actual height may vary, and some helicopters may require hover taxi above 25 feet AGL to reduce ground effect turbulence or provide clearance for cargo slingloads. (See AIR TAXI.) (See HOVER CHECK.) (Refer to AIM.) HOW DO YOU HEAR ME?− A question relating to the quality of the transmission or to determine how well the transmission is being received.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Human factor principles",
    "krName": "인적요인원칙",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공학적 설계, 자격, 훈련, 운영 및 유지관리에 적용되며, 인적능력을 적절히 고려하여 인간과 다른 시스템 요소와의 안전한 상호교환을 구현하기 위한 원칙을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "HUMAN FACTORS PRINCIPLES",
    "krName": "",
    "definitions": {
      "kr_proc": "항공설계, 자격, 훈련, 운영 및 유지관리에 적용되고, 인간의 능력에 대한 적절한 이해를 바탕으로 다른 시스템 요소와의 안전한 상호교환을 이룰 수 있는 원칙",
      "annex11": "Principles which apply to aeronautical design, certification, training, operations and maintenance and which seek safe interface between the human and other system components by proper consideration to human performance.",
      "doc4444": "Principles which apply to aeronautical design, certification, training, operations and maintenance and which seek safe interface between the human and other system components by proper consideration to human performance.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "HUMAN PERFORMANCE",
    "krName": "인적수행능력",
    "definitions": {
      "kr_proc": "항공운영상의 안전과 효율성에 영향을 주는 인간의 능력 및 한계\n\nI SAY AGAIN – 송신을 다시 반복하겠다는 용어.",
      "annex11": "Human capabilities and limitations which have an impact on the safety and efficiency of aeronautical operations. 1-",
      "doc4444": "Human capabilities and limitations which have an impact on the safety and efficiency of aeronautical operations.",
      "faa_pcg": null,
      "kr_ats": "항공 운항의 안전과 효율성에 영향을 주는 인간의 능력 및 한계를 말한다."
    }
  },
  {
    "enName": "IAF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : initial approach fix)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INITIAL APPROACH FIX.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IAP",
    "krName": "계기접근절차",
    "definitions": {
      "kr_proc": "(참조 : instrument approach procedure)\nIAWP – (참고 : INITIAL APPROACH WAYPOINT)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": "첫 접근픽스 또는 정해진 도착 비행로의 시작점으로부터 착륙이 완료될 수 있는 지점까지, 또는 착륙이 완료되 지 못할 경우 체공 또는 항공로 장애물 회피기준이 적 용되는 지점까지 장애물로부터 일정하게 보호될 수 있 도록 비행계기를 참조하여 수행하는 사전에 결정된 일 련의 절차를 말한다. 계기접근절차는 다음과 같이 분류된다: 비정밀 접근절차. 2D 계기접근운영 A유형을 위해 설계 된 계기접근절차 주기 － 비정밀 접근절차는 연속강하최종접근(CDFA) 기법을 사용해 비행할 수 있다. 항공기 탑재장비에 의 해 산출된 조언적 VNAV 유도를 갖춘 CDFA는 3D 계기 접근운영으로 간주될 수 있다. 필요한 강하율을 수동으 로 계산하는 CDFA는 2D 계기접근운영으로 간주될 수 있다. CDFA에 대한 자세한 내용은 PANS-OPS(Doc 8168) Volume I, Part II, Section 5를 참조한다."
    }
  },
  {
    "enName": "ICAO",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : international civil aviation organization)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ICAO Term INTERNATIONAL CIVIL AVIATION ORGANIZATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ICAO",
    "krName": "국제민간항공기구",
    "definitions": {
      "kr_proc": "(참조 : international civil aviation organization)\nICAO Three−Letter Designator (3LD) : ICAO 3LD는 항공편 번호와 함께 사용될 때 항공기 호출부호가 되고, 항공교통관제기관(ATC)에게 고유한 항공기 식별을 제공하는 독점적인 지정자. ICAO는 항공교통시스템의 안전성과 보안성을 강화하기 위하여 3LDs를 승인한다. ICAO 3LD는 회사, 기관 또는 조직에 할당될 수 있으며, ATC 운영 및 보안 목적으로 항공기 등록번호 대신 사용된다. ICAO 3LD는 비행계획서 및 관련 메시지에서 항공기 식별에도 사용되며, 국내 및 국제 비행에 사용할 수 있다. ICAO 3LD와 관련된 연락은 무선통신을 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ICAO Term INTERNATIONAL CIVIL AVIATION ORGANIZATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ICAO 3LD",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ICAO Term ICAO Three-Letter Designator)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ICAO Term ICAO Three−Letter Designator) ICAO Three−Letter Designator (3LD)− An ICAO 3LD is an exclusive designator that, when used together with a flight number, becomes the aircraft call sign and provides distinct aircraft identification to air traffic control (ATC). ICAO approves 3LDs to enhance the safety and security of the air traffic system. An ICAO 3LD may be assigned to a company, agency, or organization and is used instead of the aircraft registration number for ATC operational and security purposes. An ICAO 3LD is also used for aircraft identification in the flight plan and associated messages and can be used for domestic and international flights. A telephony associated with an ICAO 3LD is used for radio communication.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ICING",
    "krName": "착빙",
    "definitions": {
      "kr_proc": "항공기 동체에 발생하는 결빙현상.\n1. 착빙의 종류\n가. Rime Ice - 거칠고, 우유빛을 내며, 불투명한 얼음으로 작은 과냉각 물방울이 순간적으로 얼어서 형성된다.\n나. Clear Ice - 반짝이며, 맑고, 투명한 얼음으로 비교적 서서히 얼거나 큰 물방울에 의하여 만들어진다.\n다. Mixed - 맑은착빙 및 거친착빙의 혼합물.\n2. 착빙의 강도\n가. Trace - 결빙이 감지되는 상태. 결빙율이 승화율보다 약간 크다. 결빙 시간이 (1 시간 이상)지속되지 않으며 제빙/방빙 장비를 사용하지 않는다.\n나. Light - 만약 이런 상황에서 (1시간 이상)비행을 지속했을 경우에 결빙율이 문제를 야기 할 수 있다. 결빙의 제거 또는 방지하기 위하여 제빙/방빙 장비를 간헐적으로 사용한다. 제빙/방빙 장비가 사용되는 경우 문제가 되지 않는다.\n다. Moderate - 결빙율이 짧은 시간이나마 잠재적 위험을 초래하며 제빙/방빙 장비 사용 또는 비행로 변경이 필요하다.\n라. Severe - 결빙율이 방빙/제빙 장비로도 위험을 줄이거나 통제할 수 없을 정도이며, 즉각적인 비행로 변경이 필요하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The accumulation of airframe ice. Types of icing are: a. Rime Ice− Rough, milky, opaque ice formed by the instantaneous freezing of small supercooled water droplets. b. Clear Ice− A glossy, clear, or translucent ice formed by the relatively slow freezing of large supercooled water droplets. c. Mixed− A mixture of clear ice and rime ice. Intensity of icing: a. Trace− Ice becomes noticeable. The rate of accumulation is slightly greater than the rate of sublimation. A representative accretion rate for reference purposes is less than ¼ inch (6 mm) per hour on the outer wing. The pilot should consider exiting the icing conditions before they become worse. b. Light− The rate of ice accumulation requires occasional cycling of manual deicing systems to minimize ice accretions on the airframe. A representative accretion rate for reference purposes is ¼ inch to 1 inch (0.6 to 2.5 cm) per hour on the unprotected part of the outer wing. The pilot should consider exiting the icing condition. c. Moderate− The rate of ice accumulation requires frequent cycling of manual deicing systems to minimize ice accretions on the airframe. A representative accretion rate for reference purposes is 1 to 3 inches (2.5 to 7.5 cm) per hour on the unprotected part of the outer wing. The pilot should consider exiting the icing condition as soon as possible. d. Severe− The rate of ice accumulation is such that ice protection systems fail to remove the accumulation of ice and ice accumulates in locations not normally prone to icing, such as areas aft of protected surfaces and any other areas identified by the manufacturer. A representative accretion rate for reference purposes is more than 3 inches (7.5 cm) per hour on the unprotected part of the outer wing. By regulation, immediate exit is required. Note: Severe icing is aircraft dependent, as are the other categories of icing intensity. Severe icing may occur at any ice accumulation rate when the icing rate or ice accumulations exceed the tolerance of the aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "IDENT",
    "krName": "식별",
    "definitions": {
      "kr_proc": "조종사에게 항공기 식별장치의 작동을 요청하는 것이며, 관제사의 항공기식별 확인 또는 항공기식별을 돕는다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A request for a pilot to activate the aircraft transponder identification feature. This will help the controller to confirm an aircraft identity or to identify an aircraft. (Refer to AIM.)",
      "kr_ats": "특정 항공기의 위치표시가 상황전 시기에 보이고 확실히 식별된 상황을 말한다."
    }
  },
  {
    "enName": "IDENT FEATURE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제 레이더비컨시스템(ATCRBS)장비 상 나타나는 기술적인 현상으로서, 다른 비컨타겟으로부터 하나의 전시 비컨타겟을 즉시 구별하기 위하여 사용된다.\n(참조) : IDENT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The special feature in the Air Traffic Control Radar Beacon System (ATCRBS) equipment. It is used to immediately distinguish one displayed beacon target from other beacon targets. (See IDENT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IDENTIFICATION",
    "krName": "식별",
    "definitions": {
      "kr_proc": "특정 항공기의 위치표시가 상황전시기 상에 표시되어 명확하게 식별되는 상황",
      "annex11": null,
      "doc4444": "The situation which exists when the position indication of a particular aircraft is seen on a situation display and positively identified. 102/81/111//1264",
      "faa_pcg": "The situation which exists when the position indication of a particular aircraft is seen on a situation display and positively identified.",
      "kr_ats": "특정 항공기의 위치표시가 상황전 시기에 보이고 확실히 식별된 상황을 말한다."
    }
  },
  {
    "enName": "IF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : intermediate fix)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INTERMEDIATE FIX.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IF NO TRANSMISSION RECEIVED FOR (TIME)",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더접근 시 통신두절을 대비하여 조종사가 따라야 할 절차를 사전에 알려주는 용어\n(참조) : lost communications",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC in radar approaches to prefix procedures which should be followed by the pilot in event of lost communications. (See LOST COMMUNICATIONS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IF/ IAWP",
    "krName": "중간픽스/첫 접근진로지점",
    "definitions": {
      "kr_proc": "T자 접근의 최종접근진로가 T자의 가로대와 만나는 곳에 위치한다. 이 지점은 (TAA와 관련해서) 특정 방향에서 공항으로 접근할 경우에는 IAWP로, 그리고 다른 IAWP로부터 접근을 시작하는 경우에는 IFWP로 사용하기 위하여 표시된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Intermediate Fix/Initial Approach Waypoint. The waypoint where the final approach course of a T approach meets the crossbar of the T. When designated (in conjunction with a TAA) this waypoint will be used as an IAWP when approaching the airport from certain directions, and as an IFWP when beginning the approach from another IAWP.",
      "kr_ats": ""
    }
  },
  {
    "enName": "IFR",
    "krName": "IFR",
    "definitions": {
      "kr_proc": "계기비행규칙을 나타내는 약어(참조 : instrument flight rules)",
      "annex11": "The symbol used to designate the instrument flight rules.",
      "doc4444": "The symbol used to designate the instrument flight rules.",
      "faa_pcg": "(See INSTRUMENT FLIGHT RULES.)",
      "kr_ats": "계기비행규칙을 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "IFR AIRCRAFT",
    "krName": "계기비행 항공기",
    "definitions": {
      "kr_proc": "계기비행규칙에 따라서 비행하는 항공기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft conducting flight in accordance with instrument flight rules.",
      "kr_ats": ""
    }
  },
  {
    "enName": "IFR CONDITIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "기상조건이 시계비행규칙 최저치 미만의 기상 상태.\n(참조) : instrument meteorological condition",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Weather conditions below the minimum for flight under visual flight rules. (See INSTRUMENT METEOROLOGICAL CONDITIONS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IFR DEPARTURE PROCEDURE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고 :　IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IFR FLIGHT -",
    "krName": "계기비행",
    "definitions": {
      "kr_proc": "계기비행규칙에 따라 행하는 비행(참조 : IFR aircraft)",
      "annex11": "A flight conducted in accordance with the instrument flight rules. 8/2181/1/118/2 4 1-8",
      "doc4444": "A flight conducted in accordance with the instrument flight rules.",
      "faa_pcg": "(See IFR AIRCRAFT.)",
      "kr_ats": "계기비행규칙에 따른 비행을 말한다."
    }
  },
  {
    "enName": "IFR LANDING MINIMUMS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고 : LANDING MINIMUMS)\nIFR MILITARY TRAINING ROUTES(IFR 군훈련 비행로) (IR) : 국방부에서 저고도 항법훈련을 수행할 목적으로 계기비행과 시계비행 모든 기상 조건에서 평균해면고도 10,000피트 미만에서 250KT(IAS)를 넘는 속도로 사용하는 비행로를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LANDING MINIMUMS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES",
    "krName": "계기비행 이륙최저치 및 출발절차",
    "definitions": {
      "kr_proc": "일부 공항에는 장애물 또는 기타 요인들로 인해서 비표준 이륙최저치, 이륙절차 수립이 요구되며, 둘 모두 조종사로 하여금 장애물을 회피하면서 최저항공로고도까지 상승할 수 있도록 수립되어야 한다. 공항은 AIP/FLIP 계기접근도면(IAP's)에 “IFR 이륙최저치와 출발절차”라는 제목 하에 수록되어 있다. AIP/FLIP IAP 도면 범례에는 조종사에게 비표준 이륙최저치와 출발절차를 경고하기 위하여 사용된 부호들에 대한 설명이 있다. 여기에 수록된 공항 또는 출발절차, SID's 또는 이용 가능한 항공교통관제(ATC) 시설이 없는 기타 공항으로부터 계기비행으로 출발할 경우, 조종사는 어떠한 출발 제한사항에 대하여든 항공교통관제시설에 조언하여야 한다. 관제사는 조종사에게 자신에게 맞는 출발방향, 선회 또는 이륙 후 기수를 결정했는지 질문할 수 있다. 조종사는 출발절차에 익숙해야 하고 자신의 항공기가 특정한 어떤 명시된 상승률을 충족하거나 초과하는지 확인하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Title 14 Code of Federal Regulations, part 91, prescribes standard takeoff rules for certain civil users. At some airports, obstructions or other factors require the establishment of nonstandard takeoff minimums, departure procedures, or both to assist pilots in avoiding obstacles during climb to the minimum en route altitude. Those airports are listed in FAA/DoD Instrument Approach Procedures (IAPs) Charts under a section entitled “IFR Takeoff Minimums and Departure Procedures.” The FAA/DoD IAP chart legend illustrates the symbol used to alert the pilot to nonstandard takeoff minimums and departure procedures. When departing IFR from such airports or from any airports where there are no departure procedures, DPs, or ATC facilities available, pilots should advise ATC of any departure limitations. Controllers may query a pilot to determine acceptable departure directions, turns, or headings after takeoff. Pilots should be familiar with the departure procedures and must assure that their aircraft can meet or exceed any specified climb gradients.",
      "kr_ats": ""
    }
  },
  {
    "enName": "IFR/IFR",
    "krName": "IFR",
    "definitions": {
      "kr_proc": "표준 IFR 분리",
      "annex11": null,
      "doc4444": "The symbol used to designate the instrument flight rules.",
      "faa_pcg": "IFR separation; IFR/VFR−traffic advisories and conflict resolution; and VFR/VFR−traffic advisories and, as appropriate, safety alerts. The normal radius will be 20 nautical miles with some variations based on site-specific requirements. The outer area extends outward from the primary Class C airspace airport and extends from the lower limits of radar/radio coverage up to the ceiling of the approach control’s delegated airspace excluding the Class C charted area and other airspace as appropriate. (See CONFLICT RESOLUTION.) (See CONTROLLED AIRSPACE.)",
      "kr_ats": "계기비행규칙을 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "IFR/VFR",
    "krName": "VFR",
    "definitions": {
      "kr_proc": "교통정보 및 충돌해소",
      "annex11": null,
      "doc4444": "The symbol used to designate the instrument flight rules.",
      "faa_pcg": null,
      "kr_ats": "시계비행규칙을 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "IFWP",
    "krName": "",
    "definitions": {
      "kr_proc": "중간지점 웨이포인트(waypoint)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Intermediate Fix Waypoint",
      "kr_ats": ""
    }
  },
  {
    "enName": "ILS PRM APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로 중심선 간격이 4,300피트 이하 그리고 최소 3,00피트가 분리된 동시근접평행접근을 말한다. 또한 LDA PRM, RNAV PRM 또는 GLS PRM 접근은 동시 오프셋 계기접근(SOIA)과 관련 있다. 이 접근들은 진입금지구역(NTZ) 감시가 필요하다. 항공교통관제사는 활주로의 특정 공간의 PRM 높은 자료 갱신율(High Update Rate)의 감시 센서와 경보장치가 있는 화면전시기를 활용해야 한다. 조종사 PRM 훈련을 위하여 AAUP(Attention All User Page)의 발관과 2차 주파수의 사용은 모든 PRM 접근에 요구된다.\n(참고 : AIM)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "IM",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : inner marker)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INNER MARKER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IMC",
    "krName": "IMC",
    "definitions": {
      "kr_proc": "계기비행기상상태를 나타내는 약어\n(참조 : instrument meteorological condition)",
      "annex11": "The symbol used to designate instrument meteorological conditions.",
      "doc4444": "The symbol used to designate instrument meteorological conditions.",
      "faa_pcg": "(See INSTRUMENT METEOROLOGICAL CONDITIONS.)",
      "kr_ats": "시계비행기상조건의 최저치 미 만으로서, 시정, 구름으로부터의 거리 및 운고로 표시되 는 기상상태를 말한다. 주기1 - 시계비행기상조건의 최저치는 「항공안전법 시행규칙」 제5장에 기술되어 있다. 주기2 - 관제권 내에서 항공교통교통관제시설의 허가 를 받은 경우, 계기비행기상상태 하에서도 시계비행을 할 수 있다. ITP 항공기. 운항당국에 의해 일렬종대절차(ITP)를 수행 할 수 있도록 허가받은 항공기를 말한다. ITP 거리. ITP 항공기와 기준 항공기간의 거리로 다음과 같이 정의된다. 가) 동일경로상의 항공기 - 각 항공기 경로의 투영선 을 따라 산출한 공통지점에 대한 거리 차이; 또 는 나) 평행경로상의 항공기 - 계산된 항공기의 위치 및 계산된 타 항공기의 위치에서 직각 방향의 (abeam) 지점을 사용해 한 항공기의 경로를 따 라 측정한 거리 주기 - 기준 항공기는 5.4.2.7에 기술된 ITP 기준을 충족하는 ADS-B 데이터가 있는 하나 또는 두 대의 항 공기를 지칭하며, ITP 항공기에 의한 ITP 허가요청의 일 부가 항공교통관제시설에 표시된다."
    }
  },
  {
    "enName": "IMMEDIATELY",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제 또는 조종사가 쓰는 용어로 급박한 위험을 피하기 위한 조치가 요구될 때 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC or pilots when such action compliance is required to avoid an imminent situation. INCERFA (Uncertainty Phase) [ICAO]− A situation wherein uncertainty exists as to the safety of an aircraft and its occupants. INCREASED SEPARATION REQUIRED (ISR)– Indicates the confidence level of the track requires 5 NM separation. 3 NM separation, 1 ½ NM separation, and target resolution cannot be used.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INCERFA (Uncertainty Phase)",
    "krName": "INCERFA",
    "definitions": {
      "kr_proc": "항공기 및 탑승자의 안전이 불확실한 상황.",
      "annex11": "The code word used to designate an uncertainty phase.",
      "doc4444": "The code word used to designate an uncertainty phase.",
      "faa_pcg": null,
      "kr_ats": "불확실 단계를 나타내는 부호를 말한다."
    }
  },
  {
    "enName": "INCIDENT",
    "krName": "항공안전장애 등",
    "definitions": {
      "kr_proc": "항공사고(Accident) 이외에 항공안전에 영향을 줄 수 있었거나 주는 항공기의 운영과 관련된 준사건\n(주기) : 항공사고예방을 위하여 ICAO에서 관심을 가지는 사건(Incident)의 종류는 ICAO 사고/준사고보고 메뉴얼(Doc 9156) 참조",
      "annex11": "An occurrence, other than an accident, associated with the operation of an aircraft which affects or could affect the safety of operation. Note.— The types of incidents which are of main interest to the International Civil Aviation Organization for accident prevention studies are listed in Annex 13, Attachment C.",
      "doc4444": "An occurrence, other than an accident, associated with the operation of an aircraft which affects or could affect the safety of operation. Note.— The type of incidents which are of main interest to the International Civil Aviation Organization for accident prevention studies can be found at http://www.icao.int/anb/aig.",
      "faa_pcg": null,
      "kr_ats": "항공기 안전 운항에 영향을 주거나 줄 수 있는 항공기사고 이외의 사건을 말한다. (예: 항공기준사고, 항공안전장애 및 그 밖의 사건 등을 의미한다)"
    }
  },
  {
    "enName": "INCREASED SEPARATION REQUIRED (ISR)",
    "krName": "",
    "definitions": {
      "kr_proc": "5NM 분리가 필요한 Track의 신뢰 수준. 3NM 분리, 1 ½ NM 분리, 그리고 표적분해(target resolution)는 사용할 수 없다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "INDEPENDENT PARALLEL APPROACH",
    "krName": "독립평행접근",
    "definitions": {
      "kr_proc": "확장된 인접 활주로 중심선상의 항공기 간 레이더 최소분리기준을 규정하지 않은 평행 또는 평행활주로의 동시 접근",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "인접한 활주로 중심 연장선상 항공기간의 항공교통업무 감시시 스템 분리최저치가 규정되어 있지 않은 평행 또는 준평 행 계기활주로로 동시에 접근하는 것을 말한다. 제정 : 2013.05.03. - 96 별표"
    }
  },
  {
    "enName": "INDEPENDENT PARALLEL DEPARTURE",
    "krName": "독립평행출발",
    "definitions": {
      "kr_proc": "평행 또는 거의 평행한 계기 활주로에서의 동시 이륙",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "평행 또는 준평행 계기활주로에서 동시에 출발하는 것을 말한다."
    }
  },
  {
    "enName": "INERTIAL NAVIGATION SYSTEM",
    "krName": "관성항법 시스템",
    "definitions": {
      "kr_proc": "자체 항행설비를 갖춘 RNAV시스템이다.\n(참조) : RNAV",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An RNAV system which is a form of self-contained navigation. (See Area Navigation/RNAV.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INFORMATION REQUEST",
    "krName": "정보요구",
    "definitions": {
      "kr_proc": "FSS의 VFR 미도착 항공기와 관련한 정보 요청이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A request originated by an FSS for information concerning an overdue VFR aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INITIAL APPROACH FIX",
    "krName": "첫 접근 픽스",
    "definitions": {
      "kr_proc": "계기접근절차 도면상에서 첫 접근 부분의 시작지점으로 도시된 픽스를 말한다.\n(참조) : FIX\nSEGMENT OF AN INSTRUMENT APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The fixes depicted on instrument approach procedure charts that identify the beginning of the initial approach segment(s). (See FIX.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INITIAL APPROACH SEGMENT",
    "krName": "첫접근구간",
    "definitions": {
      "kr_proc": "(참조 : segment of an instrument approach procedure)",
      "annex11": null,
      "doc4444": "That segment of an instrument approach procedure between the initial approach fix and the intermediate approach fix or, where applicable, the final approach fix or point.",
      "faa_pcg": "That segment of an instrument approach procedure between the initial approach fix and the intermediate approach fix or, where applicable, the final approach fix or point.",
      "kr_ats": "첫접근픽스와 중 간접근픽스 또는 최종접근픽스/지점 간에 설정된 계기 접근절차의 구간을 말한다."
    }
  },
  {
    "enName": "INITIAL APPROACH SEGMENT",
    "krName": "첫 접근구역",
    "definitions": {
      "kr_proc": "계기접근 절차상에서 첫접근 픽스와 중간접근 픽스 또는, 적용된다면, 최종접근픽스/지점 사이의 부분을 말한다.",
      "annex11": null,
      "doc4444": "That segment of an instrument approach procedure between the initial approach fix and the intermediate approach fix or, where applicable, the final approach fix or point.",
      "faa_pcg": "That segment of an instrument approach procedure between the initial approach fix and the intermediate approach fix or, where applicable, the final approach fix or point.",
      "kr_ats": "첫접근픽스와 중 간접근픽스 또는 최종접근픽스/지점 간에 설정된 계기 접근절차의 구간을 말한다."
    }
  },
  {
    "enName": "INNER MARKER",
    "krName": "내측마커",
    "definitions": {
      "kr_proc": "MM과 ILS 활주로의 시단(threshold) 사이에 위치한, ILS(CATⅡ) 정밀 접근과 관련되어 사용되는 마커비컨으로, 초당 6개의 부호를 방사형태로 발산하며 조종사에게 시청각으로 지정된 결심고도(일반적으로 ILS CATⅡ에서 접지구역 표고상의 100피트)에 위치함을 나타낸다. 또한 CAT Ⅲ  접근동안 항공기의 진행을 나타낸다.\n(참조) : AIM ILS INS - (참조 : inertial navigation system)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A marker beacon used with an ILS (CAT II) precision approach located between the middle marker and the end of the ILS runway, transmitting a radiation pattern keyed at six dots per second and indicating to the pilot, both aurally and visually, that he/she is at the designated decision height (DH), normally 100 feet above the touchdown zone elevation, on the ILS CAT II approach. It also marks progress during a CAT III approach. (See INSTRUMENT LANDING SYSTEM.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INSTRUMENT APPROACH OPERATIONS",
    "krName": "계기접근운영",
    "definitions": {
      "kr_proc": "접근 및 착륙 시 계기접근 절차에 항법안내를 기반으로 사용되는 것을 말한다. 계기접근운영을 수행 시 다음 두 가지 수단이 방법이 있다.\n1. 수평의(옆의) 항법 지시로만 이용하는 2D 계기 접근 운영방식\n2. 수평과 수직 항법지시 둘 다 이용하는 3D 계기 접근 운영방식\n주기 : 수평과 수직 항법지시는 다음에 의하여 제공되는\n가. 지상에 기반을 둔 항법장비\n나. 지상, 공중, 자체항법 또는 이들을 모두 결합한 컴퓨터 데이터\n(참고) : ICAO TERM INSTRUMENT APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": "An approach and landing using instruments for navigation guidance based on an instrument approach procedure. There are two methods for executing instrument approach operations: a) a two-dimensional (2D) instrument approach operation, using lateral navigation guidance only; and b) a three-dimensional (3D) instrument approach operation, using both lateral and vertical navigation guidance. Note.— Lateral and vertical navigation guidance refers to the guidance provided either by: a) a ground-based radio navigation aid; or b) computer-generated navigation data from ground-based, space-based, self-contained navigation aids or a combination of these.",
      "faa_pcg": "An approach and landing using instruments for navigation guidance based on an instrument approach procedure. There are two methods for executing instrument approach operations: a. A two−dimensional (2D) instrument approach operation, using lateral navigation guidance only; and b. A three−dimensional (3D) instrument approach operation, using both lateral and vertical navigation guidance. Note: Lateral and vertical navigation guidance refers to the guidance provided either by: a) a ground−based radio navigation aid; or b) computer−generated navigation data from ground−based, space−based, self−contained navigation aids or a combination of these. (See ICAO term INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": "계기접 근절차에 따라 항행 유도를 위해 계기를 사용하는 접근 및 착륙을 말한다. 계기접근운영을 행하는 방법으로 아 래 2가지가 있다: 가) 수평 항행 유도만을 이용하는 2차원(2D) 계기접 근운영; 및 나) 횡적 및 수직 항행 유도를 모두 이용하는 3차원 (3D) 계기접근운영 주기 - 횡적 및 수직 항법 유도는 다음 중 하나에 의 해 제공되는 유도를 의미한다: 가) 지상기반 무선항행안전시설; 또는 나) 지상기반, 우주기반, 자체 항행안전시설 또는 이 들의 조합으로부터 컴퓨터가 산출한 항법 데이터"
    }
  },
  {
    "enName": "INSTRUMENT APPROACH PROCEDURE",
    "krName": "계기접근절차",
    "definitions": {
      "kr_proc": "계기비행상태에서 항공기가 첫접근 시작지점에서 착륙까지 또는 시계로 착륙이 이루어지는 지점까지 질서 있게 이동하도록 만들어진 일련의 예정된 비행절차를 말한다. 이것은 공항을 관할하는 기관에서 작성하여 제공한다.",
      "annex11": null,
      "doc4444": "A series of predetermined manoeuvres by reference to flight instruments with specified protection from obstacles from the initial approach fix, or where applicable, from the beginning of a defined arrival route to a point from which a landing can be completed and thereafter, if a landing is not completed, to a position at which holding or en-route obstacle clearance criteria apply. Instrument approach procedures are classified as follows:",
      "faa_pcg": "A series of predetermined maneuvers by reference to flight instruments with specified protection from obstacles from the initial approach fix, or where applicable, from the beginning of a defined arrival route to a point from which a landing can be completed and thereafter, if a landing is not completed, to a position at which holding or en route obstacle clearance criteria apply. (See ICAO term INSTRUMENT APPROACH OPERATIONS)",
      "kr_ats": "첫 접근픽스 또는 정해진 도착 비행로의 시작점으로부터 착륙이 완료될 수 있는 지점까지, 또는 착륙이 완료되 지 못할 경우 체공 또는 항공로 장애물 회피기준이 적 용되는 지점까지 장애물로부터 일정하게 보호될 수 있 도록 비행계기를 참조하여 수행하는 사전에 결정된 일 련의 절차를 말한다. 계기접근절차는 다음과 같이 분류된다: 비정밀 접근절차. 2D 계기접근운영 A유형을 위해 설계 된 계기접근절차 주기 － 비정밀 접근절차는 연속강하최종접근(CDFA) 기법을 사용해 비행할 수 있다. 항공기 탑재장비에 의 해 산출된 조언적 VNAV 유도를 갖춘 CDFA는 3D 계기 접근운영으로 간주될 수 있다. 필요한 강하율을 수동으 로 계산하는 CDFA는 2D 계기접근운영으로 간주될 수 있다. CDFA에 대한 자세한 내용은 PANS-OPS(Doc 8168) Volume I, Part II, Section 5를 참조한다."
    }
  },
  {
    "enName": "INSTRUMENT DEPARTURE PROCEDURE",
    "krName": "계기출발절차",
    "definitions": {
      "kr_proc": "조종사들의 사용을 목적으로 발간되는 사전계획 IFR 절차는 적절한 항로구조에 대해 터미널 내 장애물 회피요소를 그래픽이나 문자 형태로 제공한다. 여기에는 두 가지 형태가 있는데 문자 형태 또는 그래픽 형태로 출력되는 DP와 ODP 와 항상 그래픽 형태로만 출력되는 표준계기출발절차(SID) 가 있다.\n(참고) : IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURESOBSTACLE DEPARTURE PROCEDURESSTANDARD INSTRUMENT DEPARTURESAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A preplanned instrument flight rule (IFR) departure procedure published for pilot use, in graphic or textual format, that provides obstruction clearance from the terminal area to the appropriate en route structure. There are two types of DP, Obstacle Departure Procedure (ODP), printed either textually or graphically, and, Standard Instrument Departure (SID), which is always printed graphically. (See IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES.) (See OBSTACLE DEPARTURE PROCEDURES.) (See STANDARD INSTRUMENT DEPARTURES.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INSTRUMENT FLIGHT RULES",
    "krName": "계기비행규칙",
    "definitions": {
      "kr_proc": "계기비행 수행에 관한 절차를 통제하는 규칙이며, 또한 조종사나 관제사가 비행계획 형식을 나타낼 때 사용하는 용어이다.\n(참조) : VFR IMC VMC AIM ICAO IFR",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A set of rules governing the conduct of flight under instrument meteorological conditions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INSTRUMENT FLIGHT RULES",
    "krName": "",
    "definitions": {
      "kr_proc": "계기비행 기상조건아래서 수행되는 비행에 대한 절차를 통제하는 규칙.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A set of rules governing the conduct of flight under instrument meteorological conditions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INSTRUMENT LANDING SYSTEM",
    "krName": "계기착륙장치",
    "definitions": {
      "kr_proc": "일반적으로 다음과 같은 전자 장비와 시각 보조 장비로 구성된 정밀계기접근 시스템을 말한다.\n1. 로컬라이저(Localizer)\n2. 글라이드슬롭(Glideslope)\n3. 외측마커(Outer Marker)\n4. 중간마커(Middle Marker)\n5. 접근등(Approach Light)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A precision instrument approach system which normally consists of the following electronic components and visual aids: a. Localizer. (See LOCALIZER.) b. Glideslope. (See GLIDESLOPE.) c. Outer Marker. (See OUTER MARKER.) d. Middle Marker. (See MIDDLE MARKER.) e. Approach Lights. (See AIRPORT LIGHTING.) (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INSTRUMENT METEOROLOGICAL CONDITIONS",
    "krName": "시계비행기상상턔",
    "definitions": {
      "kr_proc": "시계비행기상최저치 미만으로서 시정, 구름으로부터의 거리 및 운고로 표시되는 기상상태",
      "annex11": "Meteorological conditions expressed in terms of visibility, distance from cloud, and ceiling, less than the minima specified for visual meteorological conditions. Note.— The specified minima for visual meteorological conditions are contained in Annex 2.",
      "doc4444": "Meteorological conditions expressed in terms of visibility, distance from cloud, and ceiling, less than the minima specified for visual meteorological conditions. Note 1.— The specified minima for visual meteorological conditions are contained in Chapter 4 of Annex 2. Note 2.— In a control zone, a VFR flight may proceed under instrument meteorological conditions if and as authorized by air traffic control.",
      "faa_pcg": "Meteorological conditions expressed in terms of visibility, distance from cloud, and ceiling less than the minima specified for visual meteorological conditions. (See INSTRUMENT FLIGHT RULES.) (See VISUAL FLIGHT RULES.) (See VISUAL METEOROLOGICAL CONDITIONS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INSTRUMENT RUNWAY",
    "krName": "계기활주로",
    "definitions": {
      "kr_proc": "직진입 착륙최저치까지 정밀 또는 비정밀 접근절차가 인가 되도록 전자 및 시계항법 보조 시설을 갖춘 활주로를 말한다.\n(참조) : ICAO instrument runway",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "One of the following types of runways intended for the operation of aircraft using instrument approach procedures: a. Nonprecision Approach Runway− An instrument runway served by visual aids and a nonvisual aid providing at least directional guidance adequate for a straight-in approach. b. Precision Approach Runway, Category I− An instrument runway served by ILS and visual aids intended for operations down to 60 m (200 feet) decision height and down to an RVR of the order of 800 m. c. Precision Approach Runway, Category II− An instrument runway served by ILS and visual aids intended for operations down to 30 m (100 feet) decision height and down to an RVR of the order of 400 m. d. Precision Approach Runway, Category III− An instrument runway served by ILS to and along the surface of the runway and: 1. Intended for operations down to an RVR of the order of 200 m (no decision height being applicable) using visual aids during the final phase of landing; 2. Intended for operations down to an RVR of the order of 50 m (no decision height being applicable) using visual aids for taxiing; 3. Intended for operations without reliance on visual reference for landing or taxiing. Note 1: See Annex 10 Volume I, Part I, Chapter 3, for related ILS specifications. Note 2: Visual aids need not necessarily be matched to the scale of nonvisual aids provided. The criterion for the selection of visual aids is the conditions in which operations are intended to be conducted.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTEGRITY",
    "krName": "무결성",
    "definitions": {
      "kr_proc": "항법장비가 이용되면 안될 때 적시 경보를 운용자에게 제공하는 시스템 능력",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The ability of a system to provide timely warnings to users when the system should not be used for navigation.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERMEDIATE APPROACH SEGMENT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : segment of an instrument approach procedure",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "That segment of an instrument approach procedure between either the intermediate approach fix and the final approach fix or point, or between the end of a reversal, race track or dead reckoning track procedure and the final approach fix or point, as appropriate.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERMEDIATE APPROACH SEGMENT",
    "krName": "중간접근구역",
    "definitions": {
      "kr_proc": "적절한 중간접근픽스와 최종접근픽스 사이 또는 그 역의 구간, 추측항법절차나 진행진로 그리고 최종접근픽스/지점사이의 계기접근절차상의 한 구간을 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "That segment of an instrument approach procedure between either the intermediate approach fix and the final approach fix or point, or between the end of a reversal, race track or dead reckoning track procedure and the final approach fix or point, as appropriate.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERMEDIATE FIX",
    "krName": "중간접근픽스",
    "definitions": {
      "kr_proc": "계기접근절차 중간접근부분의 시작 지점을 나타낸다. 중간접근픽스(IF) 통상 계기접근절차도면에 나타(표기)나지 않는다.\n(참조) : SEGMENT OF AN INSTRUMENT APPROACH PROCEDURE\nINTERMEDIATE LANDING(중간착륙) – 중간착륙이 요구되는 것은 흔치 않은 일이고, 이는 허가를 받아야한다. 출발 관제소에서는 ATCC에게 반드시 정보를 제공하여 적절한 시간 내에 중간 공항을 지정하여야 한다. 중간 착륙공항 및 도착관제소는 ATCC의 허가 및 협조 없이 수용하여서는 안 된다.\nINTERNATIONAL AIRPORT(국제공항) [ICAO] : 체약국이 자국의 영토에 국제항공교통을 위한 입출항 공항으로 지정한 공항을 말하며, 이곳에서 세관, 출입국 관리, 보건, 동식물 검역 등에 필요한 수속과 이와 유사한 절차들이 수행된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The fix that identifies the beginning of the intermediate approach segment of an instrument approach procedure. The fix is not normally identified on the instrument approach chart as an intermediate fix (IF). (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERNATIONAL AIRPORT",
    "krName": "국제공항",
    "definitions": {
      "kr_proc": "1. 국제공항의 세관업무를 위해 재무부 장관 또는 관세국장으로부터 지정(점유)받은 공항\n2. 공항 착륙권리는 사용을 고려하기 전에 착륙에 대한 세관당국의 특정한 허가를 받아야한다.\n3. 국제 무역 항공 운송 또는 국제 일반 항공을 위하여 국제민간항공협정에 의해 지정된 공항들\n(참고) : ICAO term INTERNATIONAL AIRPORT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any airport designated by the Contracting State in whose territory it is situated as an airport of entry and departure for international air traffic, where the formalities incident to customs, immigration, public health, animal and plant quarantine and similar procedures are carried out.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERNATIONAL CIVIL AVIATION ORGANIZATION",
    "krName": "국제민간항공기구",
    "definitions": {
      "kr_proc": "유엔의 전문기구로 국제항행의 원리와 기술을 개발하고 국제 민간항공운송의 계획과 발전을 촉진하기 위한 목적을 갖고 있다.\n(참고: 포함지역  1. 아프리카 인도양 지역2. 카리브해 지역3. 유럽지역4. 중동/아시아지역5. 북미 지역6. 북대서양 지역7. 태평양 지역8. 남미 지역\nINTERNATIONAL FLIGHT INFORMATION MANUAL(국제비행정보 교범) – 타국 공역으로 비행하거나 타국에서 미국(U.S)로 복귀하는 조종사들이 우선적으로 비행 전 계획시 지침을 위해 제작된 교범",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A specialized agency of the United Nations whose objective is to develop the principles and techniques of international air navigation and to foster planning and development of international civil air transport.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERNATIONAL NOTAM OFFICE",
    "krName": "국제항공고시보취급소",
    "definitions": {
      "kr_proc": "항공고시보의 국제적 교환을 위하여 국가가 설치한 사무소",
      "annex11": "An office designated by a State for the exchange of NOTAM internationally.",
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERNATIONAL NOTAM OFFICE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공고시보의 국제적 교환을 위하여 국가가 설치한 사무소",
      "annex11": "An office designated by a State for the exchange of NOTAM internationally.",
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERROGATOR",
    "krName": "",
    "definitions": {
      "kr_proc": "지상에 설치된 감시레이더 비컨 송수신기로, 통상적으로 1차 레이더와 동시에 신호를 주사하고, 모든 트랜스폰더에 대하여 사용 중인 모드로 응답을 반복적으로 요청하는 개별 무선신호를 송신하게 된다. 수신된 응답은 레이더반향과 혼합되어 지시기(레이더 스코프)상에 같은 위치에 전시된다. 또한 이것은 TACAN/DME시스템의 항공기 탑재 요소로 응용된다.\n(참조) : transponder",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The ground-based surveillance radar beacon transmitter-receiver, which normally scans in synchronism with a primary radar, transmitting discrete radio signals which repetitiously request all transponders on the mode being used to reply. The replies received are mixed with the primary radar returns and displayed on the same plan position indicator (radar scope). Also, applied to the airborne element of the TACAN/DME system. (See TRANSPONDER.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERSECTING RUNWAY",
    "krName": "교차활주로",
    "definitions": {
      "kr_proc": "둘 이상의 활주로가 서로 만나거나 가로지르는 교차 활주로.\n(참조) : intersection",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERSECTION",
    "krName": "교차점",
    "definitions": {
      "kr_proc": "1. 둘 이상의 항행안전시설의 진로, 레디얼 또는 방위가 합류하는 지점을 말한다.\n2. 두 개의 활주로, 활주로와 유도로가 교차하거나 만나는 지점을 나타낼 때 사용하는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. A point defined by any combination of courses, radials, or bearings of two or more navigational aids. b. Used to describe the point where two runways, a runway and a taxiway, or two taxiways cross or meet.",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERSECTION DEPARTURE",
    "krName": "중간이륙",
    "definitions": {
      "kr_proc": "활주로 끝이 아닌 활주로 교차점으로부터의 출발.\n(참조) : intersection",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A departure from any runway intersection except the end of the runway. (See INTERSECTION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "INTERSECTION TAKEOFF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고 : INTERSECTION DEPARTURE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INTERSECTION DEPARTURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고 : IFR MILITARY TRAINING ROUTES)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See IFR MILITARY TRAINING ROUTES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "IRREGULAR SURFACE",
    "krName": "",
    "definitions": {
      "kr_proc": "사용할 수 있는 지상표면이지만, 규정되어 있지 않다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A surface that is open for use but not per regulations.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ISR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : INCREASED SEPARATION REQURED.)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INCREASED SEPARATION REQUIRED.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "JAMMING",
    "krName": "",
    "definitions": {
      "kr_proc": "전기적 또는 기계적 간섭현상을 말하며 항공기 레이더상의 항공기전시 또는 무선통신/항행안전시설의 송수신을 방해하기도 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Denotes emissions that do not mimic Global Navigation Satellite System (GNSS) signals (e.g., GPS and WAAS), but rather interfere with the civil receiver’s ability to acquire and track GNSS signals. Jamming can result in denial of GNSS navigation, positioning, timing and aircraft dependent functions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "JET BLAST",
    "krName": "",
    "definitions": {
      "kr_proc": "제트엔진후류(thrust stream turbulence)\n(참조) : wake turbulence",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The rapid air movement produced by exhaust from jet engines.",
      "kr_ats": ""
    }
  },
  {
    "enName": "JET STREAM",
    "krName": "제트 기류",
    "definitions": {
      "kr_proc": "고고도에서 나타나는 강한 이동기류.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A migrating stream of high-speed winds present at high altitudes.",
      "kr_ats": ""
    }
  },
  {
    "enName": "JETTISONING OF EXTERNAL STORES",
    "krName": "외부장착물 투하",
    "definitions": {
      "kr_proc": "연료탱크, 무기류와 같은 외부장착물 공중 투하를 말한다.\n(참조) : fuel dumpingFAR part 91",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airborne release of external stores; e.g., tiptanks, ordnance. (See FUEL DUMPING.) (Refer to 14 CFR part 91.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "JOINT USE RESTRICTED AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고: RESTRICTED AREA)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RESTRICTED AREA.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "JUMP ZONE",
    "krName": "",
    "definitions": {
      "kr_proc": "이 공역은 DROP ZONE에 포함 된다. 수직과 수평의 제한된 장소를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The airspace directly associated with a Drop Zone. Vertical and horizontal limits may be locally defined.",
      "kr_ats": ""
    }
  },
  {
    "enName": "KNOWN TRAFFIC",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제허가와 관련하여 항공교통관제기관이 고도, 위치, 당해 항공기의 의도를 알고 있는 항공기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "With respect to ATC clearances, means aircraft whose altitude, position, and intentions are known to ATC.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LAHSO",
    "krName": "",
    "definitions": {
      "kr_proc": "“Land and Hold Short Operation”의 약어로 착륙과 교차활주로, 유도로 예정지역 또는 접근/출발 비행로에서의 잠시대기에 관한 운영을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LAND AND HOLD SHORT OPERATIONS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LAHSO-DRY",
    "krName": "",
    "definitions": {
      "kr_proc": "건조한 활주로 상에서의 착륙 및 정지선 대기운영",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "LAND AND HOLD SHORT OPERATIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "동시 이ㆍ착륙 및 착륙절차에 포함된 운영절차로서 착륙항공기 스스로가 교차 활주로/유도로나 지정된 근접대기지점에서 대기할 수 있거나 관제사로부터 지시받아 대기하는 운영절차. 조종사는 근접대기지시를 수용할 수  없을 때는 신속히 관제사에게 통보하여야 한다.\n(참조) : PARALLEL RUNWAYSAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Operations that include simultaneous takeoffs and landings and/or simultaneous landings when a landing aircraft is able and is instructed by the controller to hold short of an intersecting runway or taxiway, a predetermined point, or an approach/departure flightpath. Pilots are expected to promptly inform the controller if the hold short clearance cannot be accepted. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LANDING AREA",
    "krName": "착륙구역",
    "definitions": {
      "kr_proc": "승객 대합실 또는 화물의 적하를 위한 시설물을 제외한 항공기의 이착륙을 위하여 사용되고 있거나 사용하기 위한 공항/헬기장 및 착륙지점을 포함하는 육지, 수면 또는 구조물 지역을 말한다.\n(참조) : ICAO landing area",
      "annex11": null,
      "doc4444": "That part of a movement area intended for the landing or take-off of aircraft.",
      "faa_pcg": "That part of a movement area intended for the landing or take-off of aircraft.",
      "kr_ats": "항공기의 착륙 또는 이륙을 위 한 이동지역의 한 부분을 말한다."
    }
  },
  {
    "enName": "LANDING DIRECTION INDICATOR",
    "krName": "착륙방향지시기",
    "definitions": {
      "kr_proc": "이착륙 방향을 시각적으로 지시를 위하여 고안된 장치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A device which visually indicates the direction in which landings and takeoffs should be made. (See TETRAHEDRON.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LANDING DISTANCE AVAILABLE",
    "krName": "착륙가능거리",
    "definitions": {
      "kr_proc": "항공기 착륙 시 지상활주에 적합한 것으로 공고된 활주로의 길이",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The length of runway which is declared available and suitable for the ground run of an aeroplane landing.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LANDING MINIMUM",
    "krName": "착륙 최저치",
    "definitions": {
      "kr_proc": "계기 접근절차를 이용하여 착륙하는 민 항공기를 위하여 규정된 최저 시정치이다. 이 최저치는 아래 계기접근절차에 따라 AIP/FLIP에 규정된 각 결심고도 또는 강하고도에 대한 제한치가 적용된다.\n1. 직진입 착륙 최저치 - 특정 활주로 상에 직진입 착륙 시 요구되는 최저강하고도와 시정치 또는 결심고도와 시정치\n2. 선회접근 최저치 - 선회접근을 위한 기동 시 요구되어지는 최저강하고도와 시정\n(주기) : 설정된 촤저강하고도 또는 결심고도 이하로의 강하는 착륙하려고 하는 활주로에 정상적으로 착륙할 수 있거나 적절한 시각참조물을 이용해서 시각접근을 할 수 있는 경우가 아닌 때에는 강하하여서는 안 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "LANDING ROLL",
    "krName": "착륙활주",
    "definitions": {
      "kr_proc": "착륙 접지점으로부터 항공기가 멈추거나 활주로를 개방하는 지역까지의 거리.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The distance from the point of touchdown to the point where the aircraft can be brought to a stop or exit the runway.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LANDING SEQUENCE",
    "krName": "착륙순서",
    "definitions": {
      "kr_proc": "항공기가 착륙을 위하여 위치된 순서.\n(참조) : approach sequence",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The order in which aircraft are positioned for landing. (See APPROACH SEQUENCE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LASHO-WET",
    "krName": "",
    "definitions": {
      "kr_proc": "젖은 활주로 상의 착륙 및 정지선 대기운영지역",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "LAST ASSIGNED ALTITUDE",
    "krName": "최종배정고도",
    "definitions": {
      "kr_proc": "항공교통관제기관이 조종사에게 최종적으로 배정한 고도\n(참조) : maintain",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The last altitude/flight level assigned by ATC and acknowledged by the pilot. (See MAINTAIN.) (Refer to 14 CFR part 91.) LATERAL NAVIGATION (LNAV)– A function of area navigation (RNAV) equipment which calculates, displays, and provides lateral guidance to a profile or path.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LATERAL NAVIGATION (LNAV)",
    "krName": "",
    "definitions": {
      "kr_proc": "비행경로 또는 진로의 횡적 참조 정보를 제공, 전시, 계산할 수 있는 지역항법(RNAV) 장비의 기능",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "LATERAL SEPARATION",
    "krName": "횡적분리",
    "definitions": {
      "kr_proc": "항공기가 서로 다른 비행로 또는 서로 다른 지리적인 위치에서 비행 시 요구되는 동일고도에서의 좌우측면의 간격\n(참조) : separation",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The lateral spacing of aircraft at the same altitude by requiring operation on different routes or in different geographical locations. (See SEPARATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LDA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : LOCALIZER TYPE DIRECTIONAL AID.) (참조 : LANDING DISTANCE AVAILABLE.) (참조 : ICAO Term LANDING DISTANCE AVAILABLE.)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LOCALIZER TYPE DIRECTIONAL AID.) (See LANDING DISTANCE AVAILABLE.) (See ICAO Term LANDING DISTANCE AVAILABLE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LEVEL",
    "krName": "고도",
    "definitions": {
      "kr_proc": "비행중인 항공기의 수직위치에 관련되는 일반적인 용어로서, 높이, 고도 또는 비행고도 등 여러 가지 의미를 포함",
      "annex11": "A generic term relating to the vertical position of an aircraft in flight and meaning variously, height, altitude or flight level.",
      "doc4444": "A generic term relating to the vertical position of an aircraft in flight and meaning variously, height, altitude or flight level.",
      "faa_pcg": null,
      "kr_ats": "비행 중인 항공기의 수직위치에 관한 일반 적인 용어로서 높이, 고도(altitude) 또는 비행고도(flight level) 등 여러 의미를 가진다."
    }
  },
  {
    "enName": "LEVEL",
    "krName": "고도",
    "definitions": {
      "kr_proc": "비행중인 항공기의 수직위치에 관련되는 일반적인 용어로서, 높이, 고도, 또는 비행고도 등 여러 가지 의미를 가진다.",
      "annex11": "A generic term relating to the vertical position of an aircraft in flight and meaning variously, height, altitude or flight level.",
      "doc4444": "A generic term relating to the vertical position of an aircraft in flight and meaning variously, height, altitude or flight level.",
      "faa_pcg": null,
      "kr_ats": "비행 중인 항공기의 수직위치에 관한 일반 적인 용어로서 높이, 고도(altitude) 또는 비행고도(flight level) 등 여러 의미를 가진다."
    }
  },
  {
    "enName": "LF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : low frequency)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LOW FREQUENCY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LIGHT GUN",
    "krName": "빛총",
    "definitions": {
      "kr_proc": "관제탑 관제사가 백색, 녹색, 적색의 빛을 선택해서 좁은 한 방향으로 빛을 발사할 수 있게 고안된 장비이며, 빛의 색깔과 발사 형태에 따라 무선통신 두절 시에 조종사는 허가 또는 금지 지시를 예상할 수 있다. 빛총은 공항부근 또는 기동지역 내에서 운항하는 항공기에게 사용한다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A handheld directional light signaling device which emits a brilliant narrow beam of white, green, or red light as selected by the tower controller. The color and type of light transmitted can be used to approve or disapprove anticipated pilot actions where radio communication is not available. The light gun is used for controlling traffic operating in the vicinity of the airport and on the airport movement area. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LIGHTED AIRPORT",
    "krName": "등화시설을 갖춘 공항",
    "definitions": {
      "kr_proc": "활주로 및 장애등이 설치된 공항\n(참조) : airport lighting AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An airport where runway and obstruction lighting is available. (See AIRPORT LIGHTING.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LINE UP AND WAIT(LUAW)",
    "krName": "",
    "definitions": {
      "kr_proc": "관제사가 조종사에게 이륙활주로 상에 진입 후 대기하라는 정보를 제공할 때 사용된다. 이것은 이륙허가를 발부한 것은 아니다. 타항적 또는 다른 이유로 인하여 이륙허가를 즉시 발부할 수 없을 경우에 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to inform a pilot to taxi onto the departure runway to line up and wait. It is not authorization for takeoff. It is used when takeoff clearance cannot immediately be issued because of traffic or other reasons. (See CLEARED FOR TAKEOFF.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCAL AIRPORT ADVISORY(LAA)",
    "krName": "",
    "definitions": {
      "kr_proc": "착륙공항의 관제탑이 폐쇄되었을 때 별개의 공지통신 또는 관제탑 주파수를 보유하고 있는 시설로부터 제공되는 서비스로서, 종사자가 사용할 수 있는 음성 방송을 통한 자동 기상 보고, 지속적인 ASOS/AWSS/AWOS 자료 전시 및 기타 지속적인 직접 판독 계기 또는 수동 관측 등을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A service available only in Alaska and provided by facilities that are located on the landing airport, have a discrete ground−to−air communication frequency or the tower frequency when the tower is closed, automated weather reporting with voice broadcasting, and a continuous ASOS/AWOS data display, other continuous direct reading instruments, or manual observations available to the specialist. (See AIRPORT ADVISORY AREA.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCAL TRAFFIC",
    "krName": "",
    "definitions": {
      "kr_proc": "비행장주 또는 관제탑 시계범위 내, 로컬훈련구역 내에서 출발ㆍ도착 또는 공항에서 계기접근훈련을 하는 항공기를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aircraft operating in the traffic pattern or within sight of the tower, or aircraft known to be departing or arriving from flight in local practice areas, or aircraft executing practice instrument approaches at the airport. (See TRAFFIC PATTERN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCALIZER",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로까지의 진로를 안내하는 ILS의 구성 요소\n(참조) : ILS AIM ICAO localizer course ICAO localizer course",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The component of an ILS which provides course guidance to the runway. (See INSTRUMENT LANDING SYSTEM.) (See ICAO term LOCALIZER COURSE.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCALIZER COURSE",
    "krName": "",
    "definitions": {
      "kr_proc": "주어진 수평평면의 한 지점이고 DDM(difference in depth of modulation)은 “0” 이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The locus of points, in any given horizontal plane, at which the DDM (difference in depth of modulation) is zero.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCALIZER OFFSET",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로 연장선으로부터 3도 이내의 로컬라이저 각도 분기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An angular offset of the localizer aligned within 3\u0002 of the runway alignment.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCALIZER TYPE DIRECTIONAL AID",
    "krName": "",
    "definitions": {
      "kr_proc": "비정밀 계기접근에 사용되며, 활주로 정렬로부터 3도 이상 분기된 로컬라이저로서, 이것의 활용성과 정확도는 일반 로컬라이저에 비견될만하지만 완전한 ILS 구성요소는 아니다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A localizer with an angular offset that exceeds 3\u0002 of the runway alignment, used for nonprecision instrument approaches with utility and accuracy comparable to a localizer, but which are not part of a complete ILS. (Refer to AIM.) LOCALIZER TYPE DIRECTIONAL AID (LDA) PRECISION RUNWAY MONITOR (PRM) APPROACH− An approach, which includes a glideslope, used in conjunction with an ILS PRM, RNAV PRM or GLS PRM approach to an adjacent runway to conduct Simultaneous Offset Instrument Approaches (SOIA) to parallel runways whose centerlines are separated by less than 3,000 feet and at least 750 feet. NTZ monitoring is required to conduct these approaches. (See SIMULTANEOUS OFFSET INSTRUMENT APPROACH (SOIA).) (Refer to AIM)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCALIZER USABLE DISTANCE",
    "krName": "로칼라이저 유효거리",
    "definitions": {
      "kr_proc": "비행점검에 의하여 검증되며, 특정 고도상에서 신뢰할 수 있는 진로정보를 연속 수신할 수 있는 로칼라이저 수신기로부터의 최대거리\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The maximum distance from the localizer transmitter at a specified altitude, as verified by flight inspection, at which reliable course information is continuously received. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOCATION INDICATOR",
    "krName": "지명약어",
    "definitions": {
      "kr_proc": "ICAO에서 규정한 규칙에 따라 공식화된 4개의 문자그룹으로 항공고정국의 위치를 고려하여 지정됨",
      "annex11": null,
      "doc4444": "A four-letter code group formulated in accordance with rules prescribed by ICAO and assigned to the location of an aeronautical fixed station. Logon address: A specified code used for data link logon to an ATS unit.",
      "faa_pcg": null,
      "kr_ats": "ICAO에서 규정하는 규칙 에 따라 공식화되고 항공고정국의 위치에 할당된 4자 리 코드 그룹을 말한다."
    }
  },
  {
    "enName": "LOCATOR",
    "krName": "",
    "definitions": {
      "kr_proc": "LM/MF NDB로서 최종접근 에 사용되는 항법안전시설.\n(주기) : 이는 통상 18.5 내지 46.3 Km(10NM 내지 25NM)의 포착반경을 가진다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An LM/MF NDB used as an aid to final approach. Note: A locator usually has an average radius of rated coverage of between 18.5 and 46.3 km (10 and 25 NM).",
      "kr_ats": ""
    }
  },
  {
    "enName": "Logon address",
    "krName": "로그온 어드레스",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공교통업무시설이 데이터링크에 로그온하기 위해 사용되는 지정된 코드를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "LONG RANGE NAVIGATION",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : LORAN)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LORAN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LONGITUDINAL SEPARATION",
    "krName": "종적분리",
    "definitions": {
      "kr_proc": "시간 또는 마일단위로 표시되는 최저 거리로 동일고도에서 항공기의 종적간격\n(참조) : separation AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The longitudinal spacing of aircraft at the same altitude by a minimum distance expressed in units of time or miles. (See SEPARATION.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LORAN",
    "krName": "",
    "definitions": {
      "kr_proc": "위치 쌍곡선이 두 개의 고정된 위치로부터 동시에 펄스신호의 수신시간차를 측정하여 결정하는 전자 항법시스템. LORAN A는 1750-1950 khz 주파수대에서 운영된다. LORAN C 및 D 는 100-110khz 주파수대에서 운영한다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An electronic navigational system by which hyperbolic lines of position are determined by measuring the difference in the time of reception of synchronized pulse signals from two fixed transmitters. Loran A operates in the 1750-1950 kHz frequency band. Loran C and D operate in the 100-110 kHz frequency band. In 2010, the U.S. Coast Guard terminated all U.S. LORAN-C transmissions. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOST COMMUNICATIONS",
    "krName": "통신두절",
    "definitions": {
      "kr_proc": "항공안전법 시행규칙 제190조의 규정에 의거 무선통신이 두절된 항공기가 준수하여 비행하여야 할 절차.\n(참조) : 14 CFR Part 91\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Loss of the ability to communicate by radio. Aircraft are sometimes referred to as NORDO (No Radio). Standard pilot procedures are specified in 14 CFR part 91. Radar controllers issue procedures for pilots to follow in the event of lost communications during a radar approach when weather reports indicate that an aircraft will likely encounter IFR weather conditions during the approach. (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOST LINK",
    "krName": "",
    "definitions": {
      "kr_proc": "조종 링크의 중단 또는 상실, 혹은 조종사의 항공기 조종 능력 상실이 발생할 때 무인기는 예측 가능한 또는 계획된 기동을 수행할 것이다. 제어소와 항공기간 조종 혹은 조종 링크의 상실. 두 가지 종류의 링크가 존재함:\n1. 조종지시를 지상에서 항공기로 전송하는 업링크\n2. 항공기의 상태와 상황인식을 조종사에게 전송하는 다운링크",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An interruption or loss of the control link, or when the pilot is unable to effect control of the aircraft and, as a result, the UA will perform a predictable or planned maneuver. Loss of command and control link between the Control Station and the aircraft. There are two types of links:",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOST LINK PROCEDURE",
    "krName": "",
    "definitions": {
      "kr_proc": "LOST LINK 상황 발생 시 무인기의 지속적인 안전 운항을 확보하기 위해 기(旣)프로그램 혹은 기 계획된 완화절차. 완전한 연결이 이루어지지 않을 경우에는 비행종료가 필수적으로 이루어져야한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Preprogrammed or predetermined mitigations to ensure the continued safe operation of the UA in the event of a lost link (LL). In the event positive link cannot be established, flight termination must be implemented.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOW ALTITUDE ALERT SYSTEM",
    "krName": "저고도 경보시스템",
    "definitions": {
      "kr_proc": "Mode C 장비를 장착한 항공기가 계기비행 시 최저안전고도 이하로 비행할 것이 예상될 때 TPX-42의 자동기능에 의하여 관제사에게 경고 해주는 장비이다. 조종사가 요구 시 시계비행 항공기에게도 저고도 경보 제공은 가능하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "LOW ALTITUDE ALERT, CHECK YOUR ALTITUDE IMMEDIATELY",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조) : safety alert",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SAFETY ALERT.) collaboration which automates the process of obtaining a required authorization for operations in controlled airspace.",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOW APPROACH",
    "krName": "저고도 접근",
    "definitions": {
      "kr_proc": "항공기가 활주로에 접지하지 않고 복행을 포함한 시계접근 또는 계기접근으로 공항 활주로를 따라 접근하는 것이다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An approach over an airport or runway following an instrument approach or a VFR approach including the go-around maneuver where the pilot intentionally does not make contact with the runway. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LOW FREQUENCY",
    "krName": "장파",
    "definitions": {
      "kr_proc": "30∼300Khz 사이 주파수 대역\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The frequency band between 30 and 300 kHz. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "LPV",
    "krName": "",
    "definitions": {
      "kr_proc": "WAAS 기반 수직안내를 제공하는 절차로 RNAV(GPS)접근차트로 발행된다. 이 절차는 WAAS를 통해 정밀한 수직 안내를 제공받는 장점이 있다. 최저치는 결심고도 DA로 발간된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "LUWA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : LINE UP AND WAIT)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MAA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MAXIMUM AUTHORIZED ALTITUDE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MAXIMUM AUTHORIZED ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MACH NUMBER",
    "krName": "마하넘버",
    "definitions": {
      "kr_proc": "음속에 대한 진대기 속도의 비율.\n예를 들면, MACH .82, MACH 1.6 (참조 : AIRSPEED)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The ratio of true airspeed to the speed of sound; e.g., MACH .82, MACH 1.6. (See AIRSPEED.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MACH TECHNIQUE",
    "krName": "",
    "definitions": {
      "kr_proc": "비행로를 따라서 연속적으로 운항하는 터보제트 항공기에게 항공로 비행 중 관련 구간에서 적절한 MACH Numbers를 유지하도록 항공교통관제기관이 사용하는 관제기법을 말한다. 근본적인 목적은 공역 사용률을 향상시키고, 연속해서 운항되는 항공기간의 분리가 최저치 이하로 되지 않기 위함이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Describes a control technique used by air traffic control whereby turbojet aircraft operating successively along suitable routes are cleared to maintain appropriate MACH numbers for a relevant portion of the en route phase of flight. The principal objective is to achieve improved utilization of the airspace and to ensure that separation between successive aircraft does not decrease below the established minima.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAHWP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MISSED APPROACH HOLDING WAYPOINT)\nMAINTAIN\n1. 이 용어는 고도/비행고도에 관련하여, 명시된 고도를 유지할 것을 의미한다. ‘climb and' 또는󰡐descend and󰡑는 일반적으로 ‘maintain󰡑과 배정고도 앞에 위치한다. 예를 들면, “descend and maintain 5,000.󰡓\n2. 기타 관제지시와 관련하여, 이 용어는 글자 그대로의 의미로 사용 된다; 예를 들면, “maintain VFR󰡓",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Missed Approach Holding Waypoint",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAINTENANCE PLANNING FRICTION LEVEL",
    "krName": "",
    "definitions": {
      "kr_proc": "측정, 구성, 공항표면 포장에 대한 미끄럼 저항에 관한 정비 등은 AC 150/5320-12 에 규정되어 있으며 여기에는 범주 또는 등급별로 항공기들이 수용할 수 있는 활주로 표면의 포장에 대한 마찰값이 표시되어 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The friction level specified in AC 150/5320-12, Measurement, Construction, and Maintenance of Skid Resistant Airport Pavement Surfaces, which represents the friction value below which the runway pavement surface remains acceptable for any category or class of aircraft operations but which is beginning to show signs of deterioration. This value will vary depending on the particular friction measurement equipment used.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAKE SHORT APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "단거리 최종접근을 하기 위하여 조종사에게 비행장주를 변경하도록 통보하는데 사용된다.\n(참조) : TRAFFIC PATTERN",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to inform a pilot to alter his/her traffic pattern so as to make a short final approach. (See TRAFFIC PATTERN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAN PORTABLE AIR DEFENSE SYSTEM (MANPADS)",
    "krName": "",
    "definitions": {
      "kr_proc": "휴대용방공시스템 (MANPADS)는 항공기를 격추시켜 대량살상에 사용되는 경량화된 견착 발사형태의 미사일 시스템이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MANDATORY ALTITUDE",
    "krName": "필수고도",
    "definitions": {
      "kr_proc": "항공기가 접근 시, 유지하여야 하는 계기접근절차상에 명시된 고도.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An altitude depicted on an instrument Approach Procedure Chart requiring the aircraft to maintain altitude at the depicted value.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MANEUVERING AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 이륙, 착륙 및 지상유도에 사용되는 비행장내의 한 부분으로서 에이프론지역을 제외한 지역",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MANEUVERING AREA",
    "krName": "기동지역",
    "definitions": {
      "kr_proc": "항공기의 이륙, 착륙 및 지상유도에 사용되는 비행장내의 한 부분(에이프론 제외)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "항공기의 이착륙 및 지상 이동을 위해 사용되는 비행장의 일부분으로서 계류장을 제외한 지역을 말한다."
    }
  },
  {
    "enName": "MANPADS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MAN PORTABLE AIR DEFENSE SYSTEM)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MAN PORTABLE AIR DEFENSE SYSTEMS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MISSED APPROACH POINT)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MISSED APPROACH POINT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MARKER BEACON",
    "krName": "마커비컨",
    "definitions": {
      "kr_proc": "75MHz의 전파를 수직 원뿔형 또는 방사형태로 송신하는 무선항행안전시설. 마커비컨은 변조 주파수와 암호해독코드에 의하여 식별되며, 해당 탑재장비에 의하여 수신될 경우, 항공기가 동 시설을 통과할 때, 음성 또는 시각적인 방법으로 조종사가 인지하게 된다.\n(참조) : OUTER MARKER\nMIDDLE MARKER\nINNER MARKER\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An electronic navigation facility transmitting a 75 MHz vertical fan or boneshaped radiation pattern. Marker beacons are identified by their modulation frequency and keying code, and when received by compatible airborne equipment, indicate to the pilot, both aurally and visually, that he/she is passing over the facility. (See INNER MARKER.) (See MIDDLE MARKER.) (See OUTER MARKER.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MARSA",
    "krName": "",
    "definitions": {
      "kr_proc": "(MILITARY AUTHORITY ASSUMES RESPONSIBILITY FOR SEPARATION OF AIRCRAFT 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MILITARY AUTHORITY ASSUMES RESPONSIBILITY FOR SEPARATION OF AIRCRAFT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAWP",
    "krName": "",
    "definitions": {
      "kr_proc": "실패접근지점",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Missed Approach Waypoint",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAXIMUM AUTHORIZED ALTITUDE",
    "krName": "최대인가고도",
    "definitions": {
      "kr_proc": "공역 구조나 항공로 구성상 최대로 이용 가능한 고도. 지역 항법의 저고도, 고고도 또는 항법신호가 수신될 수 있는 다른 직선 항공로 등에 설정된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A published altitude representing the maximum usable altitude or flight level for an airspace structure or route segment. It is the highest altitude on a Federal airway, jet route, area navigation low or high route, or other direct route for which an MEA is designated in 14 CFR part 95 at which adequate reception of navigation aid signals is assured.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MAYDAY",
    "krName": "",
    "definitions": {
      "kr_proc": "국제 무선조난신호이며, 3회 반복될 경우, 긴급한 위험을 나타내며 신속한 구조가 요구된다.\n(참조) : PAN-PAN-PAN\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The international radiotelephony distress signal. When repeated three times, it indicates imminent and grave danger and that immediate assistance is requested. (See PAN-PAN.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MCA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MINIMUM CROSSING ALTITUDE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MINIMUM CROSSING ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MDA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MINIMUM DESCENT ALTITUDE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MINIMUM DESCENT ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MEA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MINIMUM EN-ROUTE ALTITUDE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MINIMUM EN ROUTE IFR ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MEARTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MICRO-EN-ROUTE AUTOMATED RADAR TRACKING SYSTEM)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MICRO-EN ROUTE AUTOMATED RADAR TRACKING SYSTEM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Meteological information",
    "krName": "기상정보",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "현재 또는 예상되 는 기상상태에 관련한 기상보고, 분석, 예보 및 기타 서 술을 말한다. 제정 : 2013.05.03. - 97 별표",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "Meteological office",
    "krName": "기상관서",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "국제항공운항을 위한 기 상업무를 제공하도록 지정된 사무소를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "Meteological report",
    "krName": "기상보고",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "특정한 시각에 특정한 장소에서 관측한 기상상태에 관한 서술을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "METEOROLOGICAL IMPACT STATEMENT",
    "krName": "",
    "definitions": {
      "kr_proc": "정기적인 예보는 아니며 4 ~ 12 시간 내에 특정 지역관제소에서 항공교통흐름에 영향을 줄 수 있는 기상이 예상될 때 하는 예보이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An unscheduled planning forecast describing conditions expected to begin within 4 to 12 hours which may impact the flow of air traffic in a specific center’s (ARTCC) area.",
      "kr_ats": ""
    }
  },
  {
    "enName": "METEOROLOGICAL INFORMATION",
    "krName": "",
    "definitions": {
      "kr_proc": "현존하거나 예상되는 기상상태에 관련한 기상관측보고, 분석, 예보 및 기타 서술",
      "annex11": null,
      "doc4444": "Meteorological report, analysis, forecast, and any other statement relating to existing or expected meteorological conditions.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "METEOROLOGICAL OFFICE",
    "krName": "",
    "definitions": {
      "kr_proc": "국제항공용 기상업무를 제공하기 위하여 설치한 사무소",
      "annex11": "An office designated to provide meteorological service for international air navigation.",
      "doc4444": "An office designated to provide meteorological service for international air navigation.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "METEOROLOGICAL REPORT",
    "krName": "",
    "definitions": {
      "kr_proc": "특정한 시각에 특정한 장소에서 관측한 기상상태에 관한 보고",
      "annex11": null,
      "doc4444": "A statement of observed meteorological conditions related to a specified time and location.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "METER FIX ARC",
    "krName": "",
    "definitions": {
      "kr_proc": "하나의 미터픽스로부터 등거리에 있으며, 대부분 미터픽스에 가까운 저고도상의 반원이다. CTAS/HOST는 미터시간을 산출하는데 도움이 되며, 도착항공로상에 있지 않거나 미터픽스를 배정 받지 못한 항공기에게 지정한 섹터 미터 목록 배정을 위하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A semicircle, equidistant from a meter fix, usually in low altitude relatively close to the meter fix, used to help TBFM/ERAM calculate a meter time, and determine appropriate sector meter list assignments for aircraft not on an established arrival route or assigned a meter fix.",
      "kr_ats": ""
    }
  },
  {
    "enName": "METER FIX TIME/SLOT TIME",
    "krName": "",
    "definitions": {
      "kr_proc": "실제 계산된 착륙시간을 맞추기 위하여 착륙 시간 측정 픽스를 출발한 것을 계산한 시간이다. 이러한 시간은 강하속도 조정에 반영되고 도착시간 측정 픽스를 통과하기 이전에 사전 조치를 함으로서, 도착 시간에 통과하도록 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "METER LIST",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ARRIVAL SECTOR ADVISORY LIST)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "METER LIST DISPLAY INTERVAL",
    "krName": "",
    "definitions": {
      "kr_proc": "각 항공기에 대하여 미터픽스에서 비행계획의 계산된 도착시간 전에 분 단위의 수를 조절하는 동적 매개변수로, TCLT는 고정되고 ACLT가 된다; 예를 들면, 시간 개정이 중지되고 ACLT가 지정될 때까지, VTA는 개정되며 결과적으로 TCLT는 적절히 변경된다. 고정되는 경우, 항공기의 진입은 PVD 구역상에 전시를 위하여 도착구역의 미터 리스트(meter list)로 삽입된다. MLDI는 만약 제출된 실제 속도가 고정속도 매개변수(FSPD) 보다 낮거나 같은 경우 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "METERING",
    "krName": "",
    "definitions": {
      "kr_proc": "미리 지정된 공항 수용률을 초과하지 않도록 공항지역으로 도착하는 항공기의 흐름에 대하여 시간을 조절하는 방법",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A method of time−regulating traffic flows in the en route and terminal environments.",
      "kr_ats": ""
    }
  },
  {
    "enName": "METERING AIRPORT",
    "krName": "",
    "definitions": {
      "kr_proc": "도착시간 측정시스템과 최적의 비행경로가 채택되어 있는 공항으로 15개의 공항이 이를 채택하고 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "METERING FIX",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기가 공항공역에 도착하기 이전에 도착시간 측정을 위하여 도착 항공로를 따라 설정된 픽스 이다. 통상적으로 이러한 픽스는 공항표고로부터 대략 10,000피트 이상의 강하지점으로, 공항으로부터 먼 거리에 설정되어야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A fix along an established route from over which aircraft will be metered prior to entering terminal airspace. Normally, this fix should be established at a distance from the airport which will facilitate a profile descent 10,000 feet above airport elevation (AAE) or above.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MFT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : METER FIX TIME/SLOT TIME)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MHA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MINIMUM HOLDING ALTITUDE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MINIMUM HOLDING ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MIA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MINIMUM IFR ALTITUDE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MINIMUM IFR ALTITUDES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MICRO-EN ROUTE AUTOMATED RADAR TRACKING SYSTEM",
    "krName": "",
    "definitions": {
      "kr_proc": "단거리(ASR)와 장거리(ARSR) 레이더를 모두 사용할 수 있는 자동 레이더 및 레이더 비컨 추적 시스템. 이 초소형 컴퓨터 구동 시스템은 개선된 추적, 지속적인 자료 기록 및 full digital radar displays의 이용을 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An automated radar and radar beacon tracking system capable of employing both short-range (ASR) and long-range (ARSR) radars. This microcomputer driven system provides improved tracking, continuous data recording, and use of full digital radar displays.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MICROBURST",
    "krName": "",
    "definitions": {
      "kr_proc": "2.5마일내로 퍼지는, 손상을 줄 수 있는 돌풍을 갖는 작은 하강기류로 적은 수평규모에도 불구하고, 이 하강기류는 150 knots의 강한 바람을 가지고 있다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A small downburst with outbursts of damaging winds extending 2.5 miles or less. In spite of its small horizontal scale, an intense microburst could induce wind speeds as high as 150 knots (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MIDDLE MARKER",
    "krName": "중간마커",
    "definitions": {
      "kr_proc": "ILS의 활공로에 위치한 마커 비컨으로 일반적으로 결심고도(ILS CategoryⅠ) 또는 결심고도 부근에 위치한다. 이것은 1300Hz로 분당 95dot/dash의 조합을 교대로 송신하여, 탑재장비에 의하여 음성 또는 시각적으로 인지된다.\n(참조) : MARKER BEACONINSTRUMENT LANDING SYSTEMAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A marker beacon that defines a point along the glideslope of an ILS normally located at or near the point of decision height (ILS Category I). It is keyed to transmit alternate dots and dashes, with the alternate dots and dashes keyed at the rate of 95 dot/dash combinations per minute on a 1300 Hz tone, which is received aurally and visually by compatible airborne equipment. (See INSTRUMENT LANDING SYSTEM.) (See MARKER BEACON.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MILES-IN-TRAIL",
    "krName": "",
    "definitions": {
      "kr_proc": "같은 목적지 또는 비행로와 관련된 항공기간의 동일층상 지정된 거리이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A specified distance between aircraft, normally, in the same stratum associated with the same destination or route of flight. MILITARY AUTHORITY ASSUMES RESPONSIBILITY FOR SEPARATION OF AIRCRAFT (MARSA)− A condition whereby the military services involved assume responsibility for separation between participating military aircraft in the ATC system. It is used only for required IFR operations which are specified in letters of agreement or other appropriate FAA or military documents.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MILITARY AUTHORITY ASSUMES RESPONSIBILITY FOR SEPARATION OF AIRCRAFT",
    "krName": "항공기분리의 군 책임",
    "definitions": {
      "kr_proc": "항공교통관제시스템 내에서 관련 군 기관이 군 항공기간의 분리를 책임지는 상황. 이것은 합의서 또는 기타 적절한 FAA 또는 군 문서에 명시된 계기비행 작전(required IFR operations)에 대하여만 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MILITARY LANDING ZONE",
    "krName": "",
    "definitions": {
      "kr_proc": "군 훈련 전용 착륙장, 이는 활주로 명칭을 갖지 않는다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A landing strip used exclusively by the military for training. A military landing zone does not carry a runway designation.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MILITARY OPERATIONS AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 SPECIAL USE AIRSPACE.)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SPECIAL USE AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MILITARY TRAINING ROUTES",
    "krName": "군 훈련로",
    "definitions": {
      "kr_proc": "250knots(IAS) 이상의 속도에서 군 항공기 훈련을 목적으로 수립된 수직ㆍ횡적 공역\n(참조) : IFR MILITARY TRAINING ROUTESVFR MILITARY TRAINING ROUTES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airspace of defined vertical and lateral dimensions established for the conduct of military flight training at airspeeds in excess of 250 knots IAS. (See IFR MILITARY TRAINING ROUTES.) (See VFR MILITARY TRAINING ROUTES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : MINIMUMS)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See MINIMUMS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM CROSSING ALTITUDE",
    "krName": "최저통과고도",
    "definitions": {
      "kr_proc": "최저항공로고도(MEA)가 현재 MEA 보다 높게 설정된 항공로로 비행하는 항공기가 특정 픽스에서 통과해야 할 최저고도\n(참조) : MINIMUN EN ROUTE IFR ALTITUDE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The lowest altitude at certain fixes at which an aircraft must cross when proceeding in the direction of a higher minimum en route IFR altitude (MEA). (See MINIMUM EN ROUTE IFR ALTITUDE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM DESCENT ALTITUDE",
    "krName": "최저 강하고도",
    "definitions": {
      "kr_proc": "활공각이 제공되지 않는 곳에서 표준계기 접근절차 수행시 또는 최종접근로 상에서 또는 착륙을 위한 선회접근 시 최저강하고도로 해면고도의 피트 단위로 표시된다.\n(참조) : NONPRECISION APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The lowest altitude, expressed in feet above mean sea level, to which descent is authorized on final approach or during circle-to-land maneuvering in execution of a standard instrument approach procedure where no electronic glideslope is provided. (See NONPRECISION APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM ENROUTE ALTITUDE",
    "krName": "최저항공로고도",
    "definitions": {
      "kr_proc": "무선 픽스간 항행안전시설 신호를 수신할 수 있고, 이들 지점 간 장애물을 회피할 수 있는 최저고도. 연방항공로 또는 그 한 부분, 지역항법의 저/고고도 항공로 또는 기타 직선로에 대하여 지정된 최저항공로고도(MEA)는 항공로, 구간, 또는 비행로를 지정하는 무선 지점간 항공로, 구간 또는 항공로의 전체 폭에 적용된다.\n(참조) : Part 91, 95\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM FRICTION LEVEL",
    "krName": "최저마찰계수",
    "definitions": {
      "kr_proc": "마찰정도의 측정, 구성, 공항표면 포장의 미끄럼 저항에 관한 정비 등은 AC150/5320-12에 규정되어 있으며 여기에는 LAHSO(Land and Hold Short Operation)에서 터보제트엔진 항공기를 위한 표면이 젖은 상태에서 요구되는 마찰값의 최저치가 명시됨. 이러한 마찰값은 별도의 마찰 측정 장비를 이용하여 측정된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The friction level specified in AC 150/5320-12, Measurement, Construction, and Maintenance of Skid Resistant Airport Pavement Surfaces, that represents the minimum recommended wet pavement surface friction value for any turbojet aircraft engaged in LAHSO. This value will vary with the particular friction measurement equipment used.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM FUEL",
    "krName": "최저 연료",
    "definitions": {
      "kr_proc": "항공기의 연료공급량이 지연이 거의 없을 시 목적 공항에 도착할 수 있음을 나타낸다. 비상상황은 아니나 과도한 지연 발생 시 비상상태가 될 가능성이 있다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": "The term used to describe a situation in which an aircraft’s fuel supply has reached a state where the flight is committed to land at a specific aerodrome and no additional delay can be accepted.",
      "faa_pcg": "Indicates that an aircraft’s fuel supply has reached a state where, upon reaching the destination, it can accept little or no delay. This is not an emergency situation but merely indicates an emergency situation is possible should any undue delay occur. (Refer to AIM.)",
      "kr_ats": "항공기가 특정 비행장으로의 착륙에 전념해야 하며 추가적인 지연을 받아들일 수 없 는 연료상태에 도달했음을 나타내기 위하여 사용하는 용어를 말한다."
    }
  },
  {
    "enName": "MINIMUM HOLDING ALTITUDE",
    "krName": "최저체공고도",
    "definitions": {
      "kr_proc": "체공장주를 위하여 설정된 최저고도로 항법신호 범위, 무선통신 및 장애물 회피기준을 고려한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The lowest altitude prescribed for a holding pattern which assures navigational signal coverage, communications, and meets obstacle clearance requirements.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM IFR ALTITUDE",
    "krName": "최저계기비행고도",
    "definitions": {
      "kr_proc": "항공교통절차에 규정된 계기비행(IFR) 최저고도. 최저고도가 명시되지 않은 경우, 다음의 IFR 최저고도를 적용한다.\n1. 지정된 산악지역에서는 비행코스에서 수평으로 4마일 내에 있는 가장 높은 장애물로부터 2000피트이상\n2. 산악지역외에서는 비행코스에서 수평으로 4마일 거리 내에 있는 가장 높은 장애물로부터 1000피트이상\n3. 관계당국에 의하여 인가 받았거나 ATC에 의하여 배정 받은 고도.\n(참조) : MINIMUN EN ROUTE ALTITUDEMINIMUM OBSTRUCTION CLEARANCE ALTITUDEMINIMUM CROSSING ALTITUDEMINIMUM SAFE ALTITUDEMINIMUM VECTORING ALTITUDEPart 91",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM NAVIGATION PERFORMANCE SPECIFICATION",
    "krName": "",
    "definitions": {
      "kr_proc": "지정된 공역에서 항공기 운항을 위하여 갖추어야 할 최소 항행성능기준으로서, 항공기는 MNPS 운항을 위하여 당해 국가의 등록기관으로부터 승인을 득하여야 한다.\nMINIMUM OBSTRUCTION CLEARANCE ALTITUDE(장애물최저회피고도)\n전체 비행로 구간중 장애물회피 요구를 충족하고, VOR로부터 25SM(22NM) 범위 내에서 항행신호를 수신할 수 있는 비행로 구간 또는 off-way route 또는 VOR 항공로상의 무선 픽스 사이의 발간된 최저 고도",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM RECEPTION ALTITUDE",
    "krName": "최저수신고도",
    "definitions": {
      "kr_proc": "교차지점(intersection)을 설정할 수 있는 최저고도\nMINIMUM SAFE ALTITUDE(최저안전고도)\n1. 항공기의 다양한 운항을 위하여 part91에 명시된 고도.\n2. 공인된 절차상 항법시설로부터 특정된 거리이내에서 비상시 사용을 위하여 장애물로부터 최소 1000피트 이상의 회피가 제공되는 접근도면상에 명시된 고도. 이 고도들은 Minimum Safe Altitude또는 Emergency Safe Altitude로 구별되며 다음과 같다.\n가. Minimum Safe Altitude : 공인된 절차상 반경 25NM범위내의 장애물로부터 최소 1000피트이상의 회피가 제공되는, 접근도면상에 명시된 고도. 접근도면에 도시된 구역범위는 최소 90˚이상이 되어야 한다. 이 고도들은 비상시 사용을 위한 것으로, 당해 범위 내에서 항행신호 수신이 가능하여야 하는 것은 아니다.(참조) : ICAO term Minimum Sector Altitude\n나. Emergency Safe Altitude : 공인된 절차상 항법시설로부터 100NM 마일내의 장애물로부터 비산악 지역에서는 1000피트, 산악지역에서는 2000피트이상의 회피가 제공되는, 접근도면상에 명시된 고도로 일반적으로 군 절차에서 사용.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The lowest altitude at which an intersection can be determined. (Refer to 14 CFR part 95.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM SAFE ALTITUDE WARNING",
    "krName": "최저 안전고도 경고",
    "definitions": {
      "kr_proc": "Mode C 장비를 탑재한 항공기가 최저안전고도 이하로 비행하거나 이하로 진행할 것이 예상될 때, 경고할 수 있는 ARTS III 컴퓨터의 한 기능.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A function of the EAS and STARS computer that aids the controller by alerting him/her when a tracked Mode C equipped aircraft is below or is predicted by the computer to go below a predetermined minimum safe altitude. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM SECTOR ALTITUDE",
    "krName": "ICAO-최저섹터고도",
    "definitions": {
      "kr_proc": "비상시에 사용될 수 있는 최저고도로, 무선항행안전시설을 중심으로 46km(25NM)의 원내에 포함된 구역에 위치한 모든 장애물로부터 최소 300m(1000피트)의 회피를 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The lowest altitude which may be used under emergency conditions which will provide a minimum clearance of 300 m (1,000 feet) above all obstacles located in an area contained within a sector of a circle of 46 km (25 NM) radius centered on a radio aid to navigation.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUM VECTORING ALTITUDE",
    "krName": "최저 레이더유도 고도",
    "definitions": {
      "kr_proc": "레이더접근, 출발, 실패접근을 위하여 허가된 고도를 제외한 계기비행 항공기가 레이더 관제사에 의하여 유도될 수 있는 최저 해면고도이다. 이 고도는 계기비행 장애물 회피기준을 충족하여야 하며, 이것은 발간된 항공로 구간의 최저항공로고도보다 낮을 것이다. 관제를 받고 있는 항공기로부터 반사되는 레이더에 의하여 측정된 고도를 가지고 관제사가 레이더유도 시, 유용한 참조 고도이다. 차트에 명시된 최저안전고도는 통상 조종사가 아닌 관제사에게 유용하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The lowest MSL altitude at which an IFR aircraft will be vectored by a radar controller, except as otherwise authorized for radar approaches, departures, and missed approaches. The altitude meets IFR obstacle clearance criteria. It may be lower than the published MEA along an airway or J-route segment. It may be utilized for radar vectoring only upon the controller’s determination that an adequate radar return is being received from the aircraft being controlled. Charts depicting minimum vectoring altitudes are normally available only to the controllers and not to pilots. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINIMUMS",
    "krName": "",
    "definitions": {
      "kr_proc": "특정 운항 또는 운항의 종류에 대하여 수립된 필수기상조건; 예를 들면, 계기 이ㆍ착륙, 계기비행에 대한 대체공항, 시계비행 등\n(참조) : LANDING MINIMUMS\nIFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES\nVFR CONDITIONS\nIFR CONDITIONS\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Weather condition requirements established for a particular operation or type of operation; e.g., IFR takeoff or landing, alternate airport for IFR flight plans, VFR flight, etc. (See IFR CONDITIONS.) (See IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES.) (See LANDING MINIMUMS.) (See VFR CONDITIONS.) (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MINUTES-IN-TRAIL",
    "krName": "",
    "definitions": {
      "kr_proc": "시간으로 표시된 항공기간의 명시된 간격. 이 방법은 고도와 관계없이 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A specified interval between aircraft expressed in time. This method would more likely be utilized regardless of altitude.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MISSED APPROACH",
    "krName": "실패접근",
    "definitions": {
      "kr_proc": "1. 계기접근에 의한 착륙에 실패했을 때, 조종사에 의하여 시도되는 기동을 말하며, 해당 비행로 및 고도는 계기접근절차 도면에 등재되어 있다. 조종사는 실패접근지점 도착 전에 실패접근을 시도하여야 하며, 가능한 신속히 특정 고도까지 상승하고, 실패접근절차를 따라야 한다.\n2. 조종사가 실패접근을 한다는 것을 항공교통관제기관에 알릴 때 사용하는 용어.\n3. 항공교통관제 레이더업무가 제공되는 지역에서, 조종사는 발간된 실패접근절차 대신에 제공되는 레이더유도를 따라야 한다.\n(참조) : MISSED APPROACH POINT\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. A maneuver conducted by a pilot when an instrument approach cannot be completed to a landing. The route of flight and altitude are shown on instrument approach procedure charts. A pilot executing a missed approach prior to the Missed Approach Point (MAP) must continue along the final approach to the MAP. b. A term used by the pilot to inform ATC that he/she is executing the missed approach. c. At locations where ATC radar service is provided, the pilot should conform to radar vectors when provided by ATC in lieu of the published missed approach procedure. (See MISSED APPROACH POINT.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MISSED APPROACH POINT",
    "krName": "실패접근지점",
    "definitions": {
      "kr_proc": "각각의 계기접근절차에 있어서 실패접근 수행 시 실패접근을 시작하여야 할 지점을 말한다.\n(참조) : MISSED APPROACH\nSEGMENTS OF AN  INSTRUMENT APPROACH PROCEDURE\nMISSED APPROACH PROCEDURE [ICAO〕(실패접근절차) : 접근이 더 이상 계속될 수 없을 때 따라야하는 절차이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A point prescribed in each instrument approach procedure at which a missed approach procedure must be executed if the required visual reference does not exist. (See MISSED APPROACH.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Missed approach procedure",
    "krName": "실패접근절차",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "접근을 계 속할 수 없을 때 수행하는 절차를 말한다.",
      "annex11": "",
      "doc4444": "The procedure to be followed if the approach cannot be continued.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "MLAT",
    "krName": "다변측정감시시설",
    "definitions": {
      "kr_proc": "동일한 항공기 또는 지상 이동체로부터 다른 수신기에 수신된 트랜스폰더의 신호에 대하여 서로 다른 시간차를 비교하는 기술(Time difference of arrival)을 사용하여 위치를 나타낼 수 있는 장비일체를 말하며, 수신신호로부터 항공기 ID를 포함한 추가적인 정보를 얻을 수 있는 장비이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "주로 신호 의 도착시간 차이(TDOA) 기법을 사용하여 2차감시레이 더(SSR) 트랜스폰더 신호(응답 또는 스퀴터)로부터 위치 를 산출하도록 구성된 장비를 말한다. 수신된 신호에서 식별정보를 포함한 추가 데이터를 추출할 수 있다."
    }
  },
  {
    "enName": "MODE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제 레이더비컨시스템(ATCRBS)의 지상 호출기 또는 공중 트랜스폰더의 구성요소가 전송 또는 수신하는 무선신호의 특정 파장에 할당된 문자 또는 번호이다. 모드 A(군용)와 모드 C(고도 보고용)는 항공교통관제에 사용된다.",
      "annex11": null,
      "doc4444": "The conventional identifier related to specific functions of the interrogation signals transmitted by an SSR interrogator. There are four modes specified in Annex 10: A, C, S and intermode.",
      "faa_pcg": "The letter or number assigned to a specific pulse spacing of the interrogation signals transmitted by an interrogator. There are 4 modes, A, B, C and D specified in Annex 10, corresponding to four different interrogation pulse spacings.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MODE C INTRUDER ALERT",
    "krName": "MODE C 경고",
    "definitions": {
      "kr_proc": "레이더 관제사에게 식별된 또는 식별되지 않은 항공기 간에 신속한 주의/조치 필요시, 항공교통관제 자동경고시스템의 기능.\n(참조) : CONFLICT ALERT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A function of certain air traffic control automated systems designed to alert radar controllers to existing or pending situations between a tracked target (known IFR or VFR aircraft) and an untracked target (unknown IFR or VFR aircraft) that requires immediate attention/action. (See CONFLICT ALERT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "MODE(SSR MODE)",
    "krName": "",
    "definitions": {
      "kr_proc": "질문기가 송신하는 질문신호의 일정한 펄스간격으로 지정된 문자 또는 숫자이다. Annex 10의 규정에 의한 4개의 상이한 질문펄스간격에 상응하는 4개의 Mode A, B, C, D",
      "annex11": null,
      "doc4444": "The conventional identifier related to specific functions of the interrogation signals transmitted by an SSR interrogator. There are four modes specified in Annex 10: A, C, S and intermode.",
      "faa_pcg": "The letter or number assigned to a specific pulse spacing of the interrogation signals transmitted by an interrogator. There are 4 modes, A, B, C and D specified in Annex 10, corresponding to four different interrogation pulse spacings.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MONITOR",
    "krName": "",
    "definitions": {
      "kr_proc": "(통신이양과 관련하여 사용되는 경우) 특정 주파수를 경청하고, 지시를 위하여 대기하라. 일반적인 상황에서는 통신호출을 시도하지 말 것",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(When used with communication transfer) listen on a specific frequency and stand by for instructions. Under normal circumstances do not establish communications.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MONITOR ALERT PARAMETER(MAP)",
    "krName": "",
    "definitions": {
      "kr_proc": "TFMS에 의한 감시경고 처리과정에서의 사용을 위하여 지정된 숫자. MAP는 15분의 증가를 위하여 각 운영섹터에 지정된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The number designated for use in monitor alert processing by the TFMS. The MAP is designated for each operational sector for increments of 15 minutes.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MONITOR ALERT(MA)",
    "krName": "",
    "definitions": {
      "kr_proc": "개별 운영섹터에서 잠재적 수용 문제를 예측하도록 교통운영 관리자에게 방법(tool)을 제공하는 TFMS의 기능. MA는 교통운영관리자가 실제 항공교통흐름을 위하여 특정섹터를 분석할 필요가 있거나 흐름조절이 필요한 경우, 행위 결정을 하여야함을 나타낸다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A function of the TFMS that provides traffic management personnel with a tool for predicting potential capacity problems in individual operational sectors. The MA is an indication that traffic management personnel need to analyze a particular sector for actual activity and to determine the required action(s), if any, needed to control the demand.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MOUNTAIN WAVE",
    "krName": "",
    "definitions": {
      "kr_proc": "이는 공기가 산악 지형 또는 날카로운 절벽 지역 위를 통과할 때 나타난다. 공기가 지형의 상류에 부딪힐 때, 상승하기 시작하며 능선을 통과할 때는 난류 하류로 변하는 일반적으로 부드러운 상승기류를 만든다. 산악 공기 흐름은 난류와 관계없이 속도와 고도를 크게 변화시킬 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "MOVEMENT AREA",
    "krName": "이동지역",
    "definitions": {
      "kr_proc": "기동지역 및 에이프론으로 구성되며, 항공기의 이륙, 착륙 및 지상유도용으로 사용되는 비행장내의 한 부분. 관제탑이 있는 공항/헬리포트에서 이동지역으로의 진입을 위한 특정허가는 항공교통관제기관에서 득하여야한다.\n(참조) : ICAO term MOVEMENT AREA",
      "annex11": "That part of an aerodrome to be used for the take-off, landing and taxiing of aircraft, consisting of the manoeuvring area and the apron(s).",
      "doc4444": "That part of an aerodrome to be used for the take-off, landing and taxiing of aircraft, consisting of the manoeuvring area and the apron(s). 102/81/111//1264",
      "faa_pcg": "That part of an aerodrome to be used for the takeoff, landing and taxiing of aircraft, consisting of the maneuvering area and the apron(s).",
      "kr_ats": "비행장의 기동지역과 계류 장을 포함하는 지역으로서 항공기의 이착륙 및 지상이 동에 사용되는 비행장의 일부분을 말한다."
    }
  },
  {
    "enName": "MOVING TARGET INDICATOR",
    "krName": "이동타겟식별기",
    "definitions": {
      "kr_proc": "레이더 스코프에 움직이는 물체만 전시하게 해주는 전자장치이며 이는 지상클러터를 부분적으로 제거해준다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An electronic device which will permit radar scope presentation only from targets which are in motion. A partial remedy for ground clutter.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MULTICOM",
    "krName": "",
    "definitions": {
      "kr_proc": "공용목적으로는 사용하지 않는 이동업무로서 자가용 항공기 상호간에 직접통신을 위하여 제공되는 것이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A mobile service not open to public correspondence used to provide communications essential to conduct the activities being performed by or directed from private aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "MULTIPLE RUNWAYS",
    "krName": "복수 활주로",
    "definitions": {
      "kr_proc": "지연을 줄이고 수용력을 증가시키기 위하여 출발 또는 도착 전용 활주로를 도착/출발 항공기에게 이용토록 하는 것",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The utilization of a dedicated arrival runway(s) for departures and a dedicated departure runway(s) for arrivals when feasible to reduce delays and enhance capacity.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NATIONAL SEARCH AND RESCUE PLAN",
    "krName": "",
    "definitions": {
      "kr_proc": "모든 종류의 수색 및 구조 임무에 대하여 이용 가능한 모든 시설의 효율적 사용을 제공하는 국제기관간의 협정",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An interagency agreement which provides for the effective utilization of all available facilities in all types of search and rescue missions. NATIONAL SECURITY AREA (NSA)– (See SPECIAL USE AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "NAVAID CLASSES",
    "krName": "항행안전시설등급",
    "definitions": {
      "kr_proc": "VOR, VORTAC, TACAN 항행안전시설은 그 용도에 따라서 다음 각호와 같이 3등급으로 분류한다.\n1. T - Terminal\n2. L - Low altitude\n3. H - High altitude",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "VOR, VORTAC, and TACAN aids are classed according to their operational use. The three classes of NAVAIDs are: a. T− Terminal. b. L− Low altitude. c. H− High altitude. Note: The normal service range for T, L, and H class aids is found in the AIM. Certain operational requirements make it necessary to use some of these aids at greater service ranges than specified. Extended range is made possible through flight inspection determinations. Some aids also have lesser service range due to location, terrain, frequency protection, etc. Restrictions to service range are listed in the Chart Supplement.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NAVIGABLE AIRSPACE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 안전한 이ㆍ착륙에 필요한 공역을 포함한 최저비행고도 이상의 공역",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airspace at and above the minimum flight altitudes prescribed in the CFRs including airspace needed for safe takeoff and landing. (Refer to 14 CFR part 91.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "NAVIGATION SPECIFICATION",
    "krName": "항행요건",
    "definitions": {
      "kr_proc": "지정된 공역에서 성능기반항행을 하기 위해 요구되는 항공기와 운항승무원 요건을 말하는 것으로, 아래 두 종류가 있다.\n1. RNP요건 : RNP4, RNP APCH 등 접두어 RNP에 의해 지정되며, 성능감시 및 경고에 관한 요건을 포함하는 지역항법을 기초로 한 항행요건\n2. RNAV 요건 : RNAV1, RNAV 5등 접두어 RNAV에 의해 지정되며, 성능감시 및 경고에 관한 요건을 포함하지 않는 지역항법을 기초로 한 항행요건\n(참조) : 항행요건에 관한 자세한 사항은 성능기반항행 메뉴얼(DOC9613) 2권을 참조할 것",
      "annex11": "A set of aircraft and flight crew requirements needed to support performance-based navigation operations within a defined airspace. There are two kinds of navigation specifications:",
      "doc4444": null,
      "faa_pcg": "A set of aircraft and flight crew requirements needed to support performance−based navigation operations within a defined airspace. There are two kinds of navigation specifications: a. RNP specification. A navigation specification based on area navigation that includes the requirement for performance monitoring and alerting, designated by the prefix RNP; e.g., RNP 4, RNP APCH.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NAVIGATIONAL AID",
    "krName": "항행안전시설",
    "definitions": {
      "kr_proc": "비행중의 항공기에게 위치정보와 지점간의 유도정보를 제공하는 공중/지상의 시각 또는 전자장비이다.\n(참조) : AIR NAVIGATION FACILITY",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any visual or electronic device airborne or on the surface which provides point-to-point guidance information or position data to aircraft in flight. (See AIR NAVIGATION FACILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "NDB",
    "krName": "",
    "definitions": {
      "kr_proc": "(NONDIRECTIONAL BEACON 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See NONDIRECTIONAL BEACON.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Near-parallel runway",
    "krName": "준평행활주로",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "두 활주로 중심 연 장선이 이루는 각이 15° 이하면서 서로 교차하지 않는 활주로를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "NEAR-PARALLEL RUNWAYS",
    "krName": "",
    "definitions": {
      "kr_proc": "확장된 활주로 중심선간의 분기/수렴각이 15도 이하로 교차하지 않는 활주로",
      "annex11": null,
      "doc4444": "Non-intersecting runways whose extended centre lines have an angle of convergence/divergence of 15 degrees or less.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "NEGATIVE",
    "krName": "",
    "definitions": {
      "kr_proc": "“아니오(부정)” 또는 “허가가 승인되지 않음” 또는 “그것은 옳지 않음”",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "“No,” or “permission not granted,” or “that is not correct.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "NEGATIVE CONTACT",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통 관제시설에 다음을 통보하기 위하여 조종사에 의하여 사용됨\n1. 이전에 발부된 교통정보의 항공기가 보이지 않음. 발부된 항공기를 회피하기 위한 도움을 관제사에게 요청하는 조종사의 요구가 이어질 수 있다.\n2. 특정 주파수로 항공교통 관제시설과 교신할 수 없음.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by pilots to inform ATC that: a. Previously issued traffic is not in sight. It may be followed by the pilot’s request for the controller to provide assistance in avoiding the traffic. b. They were unable to contact ATC on a particular frequency.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NEXT DATA AUTHORITY",
    "krName": "다음데이터기관",
    "definitions": {
      "kr_proc": "현재 관할중인 항공기에 대한 통신 및 관제를 인계 받을 지상시스템",
      "annex11": null,
      "doc4444": "The ground system so designated by the current data authority through which an onward transfer of communications and control can take place.",
      "faa_pcg": null,
      "kr_ats": "항공기가 다음 항 공교통업무기관에 의해 통신 및 제어의 향후 전송이 이 루어질 수 있도록 현재데이터기관이 지정한 지상시스템 을 말한다."
    }
  },
  {
    "enName": "NIGHT",
    "krName": "야간",
    "definitions": {
      "kr_proc": "저녁 박명(twilight)의 끝에서 아침 박명(twilight)의 시작까지의 시간 또는 관계당국에 의하여 규정된 일몰과 일출사이의 시간.\n(주기) : 저녁 시민박명(twilight)의 끝은 태양의 중심이 지평선아래 6°기울었을 때이며 아침  시민박명(twilight)의 시작은 태양의 중심이 지평선 아래 6°아래 있을 때이다.\n(참조) : ICAO term NIGHT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The hours between the end of evening civil twilight and the beginning of morning civil twilight or such other period between sunset and sunrise as may be specified by the appropriate authority. Note: Civil twilight ends in the evening when the center of the sun’s disk is 6 degrees below the horizon and begins in the morning when the center of the sun’s disk is 6 degrees below the horizon.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NO GYRO APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 자이로컴퍼스 또는 방향자이로가 고장일 때, 레이더접근/유도를 하는 것을 말하며, 이 경우 관제사는 항공기에게 비행기수를 지시하는 대신에 관제사가 관측한 레이더항적을 확인하고 좌선회/우선회/선회중지 관제지시를 적절히 발부한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A radar approach/vector provided in case of a malfunctioning gyro-compass or directional gyro. Instead of providing the pilot with headings to be flown, the controller observes the radar track and issues control instructions “turn right/left” or “stop turn” as appropriate. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "NO GYRO VECTOR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고 : NO GYRO APPROACH)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See NO GYRO APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "NO TRANSGRESSION ZONE",
    "krName": "진입불가구역",
    "definitions": {
      "kr_proc": "NTZ는 일반적으로 비행이 허용되지 않는 평행 활주로 또는 최종접근 코스 사이의 같은 거리에 위치한 2,000피트 넓이의 구역이다.",
      "annex11": null,
      "doc4444": "In the context of independent parallel approaches, a corridor of airspace of defined dimensions located centrally between the two extended runway centre lines, where a penetration by an aircraft requires a controller intervention to manoeuvre any threatened aircraft on the adjacent approach.",
      "faa_pcg": "The NTZ is a 2,000 foot wide zone, located equidistant between parallel runway or SOIA final approach courses, in which flight is normally not allowed.",
      "kr_ats": "독립평행접 근의 경우에, 접근중인 항공기에게 인접 접근로 상으로 진입하는 다른 항공기가 방해되지 않도록 관제사의 조 정을 필요로 하는 회랑 형태의 공역으로서, 두 개의 활 주로 중심 연장선 사이의 중앙에 일정 크기로 지정한 공역을 말한다. - 개정 : 2026.07.06. 항공교통업무기준"
    }
  },
  {
    "enName": "NON-RADAR SEPARATION",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 이외의 방법으로 항공기의 위치 정보가 파악될 때 사용하는 분리",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "NONAPPROACH CONTROL TOWER",
    "krName": "",
    "definitions": {
      "kr_proc": "이 관제탑에 의하여 관제되는 공항에서는 항공기의 착륙과 이륙 가능하고 D등급 공역 통과가 가능하다. 비접근 관제탑의 주요 역할은 교통장주와 착륙지역에서 항공기의 순서조정이다. 또한 비접근 관제탑은 접근관제소와 지역관제소로부터의 계기비행규칙 허가로 운항하는 항공기를 분리한다. 공항 이동구역에서 항공기, 차량, 인원, 장비에 대한 지상관제업무를 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Author-izes aircraft to land or takeoff at the airport controlled by the tower or to transit the Class D airspace. The primary function of a nonapproach control tower is the sequencing of aircraft in the traffic pattern and on the landing area. Nonapproach control towers also separate aircraft operating under instrument flight rules clearances from approach controls and centers. They provide ground control services to aircraft, vehicles, personnel, and equipment on the airport movement area.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NONCOMPOSITE SEPARATION",
    "krName": "",
    "definitions": {
      "kr_proc": "지역에 따라서 특별히 설정된 복합적 분리 최저치가 아닌 일반적 최저치에 의한 분리를 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "NONDIRECTIONAL BEACON",
    "krName": "",
    "definitions": {
      "kr_proc": "위치탐지 장비를 갖는 항공기의 조종사가 무선 비컨까지나 무선비컨으로부터 위치를 결정할 수 있고, 무선국으로의 귀환 또는 무선국의 신호에 따른 위치를 결정할 수 있는 전방향 신호를 전송하는 L/MF 또는 UHF 무선비컨. 무선비컨이 계기착륙장치의 마커와 결합하여 설치되는 경우, 일반적으로 컴파스 로케이터(compass locator)라고 불린다.\n(참조) : COMPASS LOCATORAUTOMATIC DIRECTION FINDER",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An L/MF or UHF radio beacon transmitting nondirectional signals whereby the pilot of an aircraft equipped with direction finding equipment can determine his/her bearing to or from the radio beacon and “home” on or track to or from the station. When the radio beacon is installed in conjunction with the Instrument Landing System marker, it is normally called a Compass Locator. (See AUTOMATIC DIRECTION FINDER.) (See COMPASS LOCATOR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "NONMOVEMENT AREAS",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제하에 있지 않은 유도로와 주기장지역\nNONPRECISION APPROACH(비정밀 접근)\n(참조) : NONPRECISION APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Taxiways and apron (ramp) areas not under the control of air traffic.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NONPRECISION APPROACH PROCEDURE",
    "krName": "비정밀 접근절차",
    "definitions": {
      "kr_proc": "glideslope이 제공되지 않는 표준계기 접근절차.\n예) VOR, TACAN, NDB 접근",
      "annex11": null,
      "doc4444": "An instrument approach procedure designed for 2D instrument approach operations Type A. Note.— Non-precision approach procedures may be flown using a continuous descent final approach (CDFA) technique. CDFAs with advisory VNAV guidance calculated by on-board equipment are considered 3D instrument approach operations. CDFAs with manual calculation of the required rate of descent are considered 2D instrument approach operations. For more information on CDFAs, refer to PANS-OPS (Doc 8168) Volume I, Part II, Section 5.",
      "faa_pcg": "A standard instrument approach procedure in which no electronic glideslope is provided; e.g., VOR, TACAN, NDB, LOC, ASR, LDA, or SDF approaches.",
      "kr_ats": ""
    }
  },
  {
    "enName": "NONRADAR",
    "krName": "비레이더",
    "definitions": {
      "kr_proc": "일반적으로 다음과 같이 레이더의 사용이 없는 것을 의미한다.\n1. Nonradar Approach : 최종접근로에 대한 진로정보가 지상의 정밀 또는 감시레이더에 의하여 제공되지 않는 계기접근. 항공교통관제기관에 의한 최종접근로까지의 레이더유도는 제공 또는 제공되지 않을 수 있다. 비레이더접근의 예로는 VOR, NDB, TACAN 및 ILS 접근이다.(참조) : FINAL APPROACH-IFR         FINAL APPROACH COURSE        RADAR APPROACH        INSTRUMENT APPROACH PROCEDURE\n2. Non-radar Approach Control : 레이더 사용 없이 접근관제업무를 제공하는 항공교통관제기관  (참조 : APPROACH CONTROL FACILITY)\n3. Non-radar Arrival : 레이더업무가 제공되지 않는 공항 또는 레이더시설을 운용중인 공항임에 도 불구하고, 레이더식별이 되지 않거나 적절한 레이더업무를 제공할 수 없어 레이더업무가 종료된 상황에서 항공기가 도착(Arrival)하는 것(참조) : RADAR ARRIVAL        RADAR SERVICE\n4. Non-radar Route : 조종사 자체 항행시스템을 이용하는 비행로. 조종사는 비레이더 비행로 비행 중, 레이더분리, 감시 또는 기타 항공교통업무를 제공받을 수 있다.(참조) : RADAR ROUTE\n5. Non-radar Separation : 레이더와 관계없이 수립된 최저치에 따른 항공기 분리 ; 예를 들면 수직, 횡적, 종적 분리(참조) : RADAR SEPARATION        ICAO term NON-RADAR SEPARATION",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Precedes other terms and generally means without the use of radar, such as: a. Nonradar Approach. Used to describe instrument approaches for which course guidance on final approach is not provided by ground-based precision or surveillance radar. Radar vectors to the final approach course may or may not be provided by ATC. Examples of nonradar approaches are VOR, NDB, TACAN, ILS, RNAV, and GLS approaches. (See FINAL APPROACH COURSE.) (See FINAL APPROACH-IFR.) (See INSTRUMENT APPROACH PROCEDURE.) (See RADAR APPROACH.) b. Nonradar Approach Control. An ATC facility providing approach control service without the use of radar. (See APPROACH CONTROL FACILITY.) (See APPROACH CONTROL SERVICE.) c. Nonradar Arrival. An aircraft arriving at an airport without radar service or at an airport served by a radar facility and radar contact has not been established or has been terminated due to a lack of radar service to the airport. (See RADAR ARRIVAL.) (See RADAR SERVICE.) d. Nonradar Route. A flight path or route over which the pilot is performing his/her own navigation. The pilot may be receiving radar separation, radar monitoring, or other ATC services while on a nonradar route. (See RADAR ROUTE.) e. Nonradar Separation. The spacing of aircraft in accordance with established minima without the use of radar; e.g., vertical, lateral, or longitudinal separation. (See RADAR SEPARATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "NORDO(NO RADIO)",
    "krName": "",
    "definitions": {
      "kr_proc": "무선통신이 필요할 때 통신할 수 없거나 무선통신이 안 되는 항공기를 “NORDO\"라 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "NORMAL OPERATION ZONE(NOZ)",
    "krName": "",
    "definitions": {
      "kr_proc": "동시 독립평행 ILS 접근을 하는 동안 항공기가 비행하여야 하는 구역\nNORMAL OPERATION ZONE(NOZ)〔ICAO〕 : 단일 ILS 로컬라이저진로 및 MLS 최종접근진로의 중심선 양 쪽으로 확장된 공역으로서, 독립평행접근의 경우 양 ILS 로컬라이저진로의 내측 NOZ는 정상 NOZ보다 1/2 공역만 사용됨.\nNOTAM [ICAO](항공고시보) : 비행업무에 종사하는 자가 적시에 필수적으로 알아야 하는 항공시설, 서비스, 절차 또는 장애의 신설, 상태 또는 동 변경에 관한 정보를 수록하고 있는 공고문을 무선통신에 의하여 배포하는 고시보",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "NOTAM",
    "krName": "항공고시보",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "비행업무 관련 종사자가 적시에 필수적으로 알아야 하는 항공시설, 업무, 절차 또는 위 험의 상태, 변경, 신설 등에 관한 정보를 수록하고 있는 공지문을 무선통신에 의하여 배포하는 것을 말한다.",
      "annex11": "",
      "doc4444": "A notice distributed by means of telecommunication containing information concerning the establishment, condition or change in any aeronautical facility, service, procedure or hazard, the timely knowledge of which is essential to personnel concerned with flight operations.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "NOTICES TO AIRMAN(NOTAM)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공 운항과 관련된 인원에게 필수적인 정보(국가 공역 시스템의 시설, 서비스 또는 절차)의 상태 또는 변경에 관한 정보를 포함하는 통지",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "NOZ, Normal operating zone",
    "krName": "정상운항구역",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "고시된 계기접근절차의 최종접근경로/진로의 양옆으로 확장된 공역을 말한다. 독립평행접근의 경우에는 진입금지구역 (NTZ)에 인접한 정상운항구역의 1/2 공역만 사용된다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "NUMEROUS TARGETS VICINITY(LOCATION)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제가 조종사에게 발부하는 교통정보조언으로 레이더 스코프에 과도한 항적이 있어 개별적으로 조언하기가 불가능할 때 사용하는 용어\n(참조) : TRAFFIC ADVISORIES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A traffic advisory issued by ATC to advise pilots that targets on the radar scope are too numerous to issue individually. (See TRAFFIC ADVISORIES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "OBSTACLE",
    "krName": "장애물",
    "definitions": {
      "kr_proc": "존재하고 있거나 자연적으로 성장하는 것이거나, 또는 어떤 고정된 지리적 위치의 지형지물, 또는 어떤 설정된 구역 내의 어떤 고정위치에 예상될 수 있는 장애물로서, 항공기가 비행하는 동안 이들 장애물에 관계하여 수직적인 회피가 취해지거나 반드시 취해져야 하는 장애물을 말한다.",
      "annex11": "All fixed (whether temporary or permanent) and mobile objects, or parts thereof, that: a) are located on an area intended for the surface movement of aircraft; or b) extend above a defined surface intended to protect aircraft in flight; or c) stand outside those defined surfaces and that have been assessed as being a hazard to air navigation.",
      "doc4444": null,
      "faa_pcg": "An existing object, object of natural growth, or terrain at a fixed geographical location or which may be expected at a fixed location within a prescribed area with reference to which vertical clearance is or must be provided during flight operation.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OBSTACLE DEPARTURE PROCEDURE(ODP)",
    "krName": "",
    "definitions": {
      "kr_proc": "ODP는 터미널 지역에서 적정한 순항지역까지 적어도 하나의 항로를 통한 장애물 회피를 제공하고 조종사가 사용하기 위해 문서 또는 그림으로 발간된 미리 계획되어진 IFR 출항절차이다. ODP는 장애물 회피를 위해 제공되고 ATC가 특별히 대체 출항절차(SID 혹은 레이더 유도)를 제공하지 않으면 ATC인가 없이 비행 할 수 있다.\n(참조) : IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES,\nSTANDARD INSTRUMENT DEPARTURES, AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A preplanned instrument flight rule (IFR) departure procedure printed for pilot use in textual or graphic form to provide obstruction clearance via the least onerous route from the terminal area to the appropriate en route structure. ODPs are recommended for obstruction clearance and may be flown without ATC clearance unless an alternate departure procedure (SID or radar vector) has been specifically assigned by ATC. (See IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES.) (See STANDARD INSTRUMENT DEPARTURES.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "OBSTACLE FREE ZONE",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로로부터 또는 활주로까지 항공기의 전이를 보호하기 위하여 설정된 3차원의 공역이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The OFZ is a three−dimensional volume of airspace which protects the transition of aircraft to and from the runway. The OFZ clearing standard precludes taxiing and parked airplanes and object penetrations, except for frangible NAVAID locations that are fixed by function. Additionally, vehicles, equipment, and personnel may be authorized by air traffic control to enter the area using the provisions of FAA Order JO 7110.65, paragraph 3−1−5, Vehicles/Equipment/Personnel Near/On Runways. The runway OFZ and when applicable, the inner-approach OFZ, and the inner-transitional OFZ, comprise the OFZ. a. Runway OFZ. The runway OFZ is a defined volume of airspace centered above the runway. The runway OFZ is the airspace above a surface whose elevation at any point is the same as the elevation of the nearest point on the runway centerline. The runway OFZ extends 200 feet beyond each end of the runway. The width is as follows: 1. For runways serving large airplanes, the greater of: (a) 400 feet, or (b) 180 feet, plus the wingspan of the most demanding airplane, plus 20 feet per 1,000 feet of airport elevation. 2. For runways serving only small airplanes: (a) 300 feet for precision instrument runways. (b) 250 feet for other runways serving small airplanes with approach speeds of 50 knots, or more. (c) 120 feet for other runways serving small airplanes with approach speeds of less than 50 knots. b. Inner-approach OFZ. The inner-approach OFZ is a defined volume of airspace centered on the approach area. The inner-approach OFZ applies only to runways with an approach lighting system. The inner-approach OFZ begins 200 feet from the runway threshold at the same elevation as the runway threshold and extends 200 feet beyond the last light unit in the approach lighting system. The width of the inner-approach OFZ is the same as the runway OFZ and rises at a slope of 50 (horizontal) to 1 (vertical) from the beginning. c. Inner-transitional OFZ. The inner transitional surface OFZ is a defined volume of airspace along the sides of the runway and inner-approach OFZ and applies only to precision instrument runways. The inner-transitional surface OFZ slopes 3 (horizontal) to 1 (vertical) out from the edges of the runway OFZ and inner-approach OFZ to a height of 150 feet above the established airport elevation. (Refer to AC 150/5300-13, Chapter 3.) (Refer to FAA Order JO 7110.65, Para 3−1−5, Vehicles/Equipment/Personnel Near/On Runways.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "OBSTRUCTION",
    "krName": "장애물",
    "definitions": {
      "kr_proc": "규정된 장애 기준을 초과하는 물체 또는 장애물.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any object/obstacle exceeding the obstruction standards specified by 14 CFR part 77, subpart C.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OBSTRUCTION LIGHT",
    "krName": "장애등",
    "definitions": {
      "kr_proc": "장애물의 존재를 조종사에게 경고하기 위하여 구조물의 표면 또는 자연적인 지형에 설치하는 적색/백색의 등화열 또는 하나의 등화.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A light or one of a group of lights, usually red or white, frequently mounted on a surface structure or natural terrain to warn pilots of the presence of an obstruction.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OFF COURSE",
    "krName": "진로이탈",
    "definitions": {
      "kr_proc": "항공교통관제기관으로부터 허가된 비행경로와 항공기가 보고한 위치 또는 레이더 상에 포착된 위치가 다를 경우 사용하는 용어",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A term used to describe a situation where an aircraft has reported a position fix or is observed on radar at a point not on the ATC-approved route of flight.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OFF-ROUTE VECTOR",
    "krName": "항공로 이탈 유도",
    "definitions": {
      "kr_proc": "사전에 배정한 항공로를 이탈하여 유도되는 것으로, 유도 중에 배정되는 고도는 장애물을 회피할 수 있는 고도이어야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A vector by ATC which takes an aircraft off a previously assigned route. Altitudes assigned by ATC during such vectors provide required obstacle clearance.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OFFSET PARALLEL RUNWAYS",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로 중심선은 평행하나 서로 엇갈리게 배치한 활주로",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Staggered runways having centerlines which are parallel.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OMEGA",
    "krName": "",
    "definitions": {
      "kr_proc": "지상에 있는 전자 항행안전시설의 신호를 이용한 장거리 항행용 지역항행안전시설",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "ON COURSE",
    "krName": "",
    "definitions": {
      "kr_proc": "1. 항공기가 항공로 중심선에 있다는 것을 나타내기 위하여 사용하는 용어\n2. 레이더접근을 실시하고 있는 조종사에게 항공기가 최종접근진로 상에 정대하였음을 조언하기 위하여 항공교통관제기관에서 사용하는 용어.\n(참조) : ON-COURSE INDICATION",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. Used to indicate that an aircraft is established on the route centerline. b. Used by ATC to advise a pilot making a radar approach that his/her aircraft is lined up on the final approach course. (See ON-COURSE INDICATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ON-COURSE INDICATION",
    "krName": "정 진로표시",
    "definitions": {
      "kr_proc": "항공기가 주어진 항행 진로의 중심선상에 위치하고 있다는 것을 시각적인 수단으로 조종사에게 확인시켜 주는 계기상의 표시 또는 항공기가 주어진 진로에 있음을 나타내는 레이더 전시기상의 표시",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An indication on an instrument, which provides the pilot a visual means of determining that the aircraft is located on the centerline of a given navigational track, or an indication on a radar scope that an aircraft is on a given track.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ONE-MINUTE WEATHER",
    "krName": "1분기상",
    "definitions": {
      "kr_proc": "비관제공항의 자동기상관측장치(ASOS/AWOS)로부터 조종사가 접수한 가장 최근 1분 기상 예보.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The most recent one minute updated weather broadcast received by a pilot from an uncontrolled airport ASOS/AWOS.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Operational control",
    "krName": "운항통제",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기의 비행안전과 비 행의 규칙성 및 효율성을 위한 비행의 개시, 지속, 전 환, 종료에 대한 관련 기관의 통제를 말한다.",
      "annex11": "",
      "doc4444": "The exercise of authority over the initiation, continuation, diversion or termination of a flight in the interest of the safety of the aircraft and the regularity and efficiency of the flight.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "OPERATOR",
    "krName": "항공기운영자",
    "definitions": {
      "kr_proc": "항공기 운항에 종사하거나 항공기 운항업무를 제공하는 개인, 단체 또는 기업",
      "annex11": "A person, organization or enterprise engaged in or offering to engage in an aircraft operation.",
      "doc4444": "The person, organization or enterprise engaged in or offering to engage in an aircraft operation.",
      "faa_pcg": "The owner and/or remote pilot of a UAS.",
      "kr_ats": "항공기 운항에 종사하거나, 항공기 운 항업무를 제공하는 개인이나 단체 또는 기업을 말한다. 성능기반통신(PBC, Performance-based communication). 항공교통업무의 제공에 적용되는 성능 사양에 기반한 통신을 말한다. 주기 - RCP 사양은 제공되는 통신과 관련하여 시스 템 구성요소에 할당되는 통신성능요건을 포함하며, 특정 공역 개념에서 제안된 운영을 위해 필요한 처리시간, 연 속성, 가용성, 무결성, 안전성 및 기능성을 포함한다."
    }
  },
  {
    "enName": "OPPOSITE DIRECTION AIRCRAFT",
    "krName": "",
    "definitions": {
      "kr_proc": "다음과 같이 반대방향으로 운항하는 항공기\n1. 같은 진로를 반대 방향으로 운항하는 항공기\n2. 평행한 진로를 반대 방향으로 운항하는 항공기\n3. 진로가 135°이상 교차되게 운항하는 항공기",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aircraft are operating in opposite directions when: a. They are following the same track in reciprocal directions; or b. Their tracks are parallel and the aircraft are flying in reciprocal directions; or c. Their tracks intersect at an angle of more than 135\u0002.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OPTION APPROACH",
    "krName": "선택 접근",
    "definitions": {
      "kr_proc": "Touch-and-go, missed approach, low approach, stop-and-go 및 full stop landing를 조종사 요구에 의하여 임의로 선택하여 실시할 수 있는 접근\n(참조) : cleared for the optionAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An approach requested and conducted by a pilot which will result in either a touch-and-go, missed approach, low approach, stop-and-go, or full stop landing. Pilots should advise ATC if they decide to remain on the runway, of any delay in their stop and go, delay clearing the runway, or are unable to comply with the instruction(s). (See CLEARED FOR THE OPTION.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "OUT",
    "krName": "",
    "definitions": {
      "kr_proc": "통신이 종료되었으며 응답을 기대 하지 않음",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The conversation is ended and no response is expected.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OUTER AREA(associated with Class C airspace)",
    "krName": "",
    "definitions": {
      "kr_proc": "모든 IFR 항공기와 관련 VFR 항공기에게 전 시간동안 레이더유도 및 순서 배정배정을 위하여 지정된 C등급 공역 또는 공항 주변의 비통제 공역, 외부구역 내에 제공되는 업무는 C 등급공역업무라 하며, 다음을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "OUTER FIX",
    "krName": "",
    "definitions": {
      "kr_proc": "터미널지역에서 최종접근지점 외에 지점을 말하는 항공교통관제에서 사용하는 용어이다. 정상적인 상태에서 항공기는 지역관제소나 접근관제소로부터 이 지점까지 허가되며, 또한 이 지점에서 항공기에게 최종 접근지점 또는 접근진로까지 허가된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An adapted fix along the converted route of flight, prior to the meter fix, for which crossing times are calculated and displayed in the metering position list.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OUTER FIX TIME",
    "krName": "",
    "definitions": {
      "kr_proc": "실제 계산한 착륙시간(ACLT)을 맞추기 위하여 외곽 지점을 출발해야 할 계산된 시간이다. 이 시간은 지점을 통과하기 전 강하속도 조정과 지연시간이 반영되어야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A calculated time to depart the outer fix in order to cross the vertex at the ACLT. The time reflects descent speed adjustments and any applicable delay time that must be absorbed prior to crossing the meter fix.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OUTER MARKER",
    "krName": "외측마커",
    "definitions": {
      "kr_proc": "계기정밀접근(ILS approach)의 경사진입고도 또는 근처에 있는 마커비컨이며, 400HZ로 초당 2개의 dash로 송신한다. 항공기의 탑재 장비에 의하여 시각과 청각으로 수신된다. 일반적으로 외측마커는 활주로 중심선을 연장한 활주로 전단으로부터 4~7마일에 설치된다.\n(참조) : marker beacon instrument landing system AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A marker beacon at or near the glideslope intercept altitude of an ILS approach. It is keyed to transmit two dashes per second on a 400 Hz tone, which is received aurally and visually by compatible airborne equipment. The OM is normally located four to seven miles from the runway threshold on the extended centerline of the runway. (See INSTRUMENT LANDING SYSTEM.) (See MARKER BEACON.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "OVER",
    "krName": "",
    "definitions": {
      "kr_proc": "송신이 끝나고 응답을 기대함.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "My transmission is ended; I expect a response.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OVERHEAD MANEUVER",
    "krName": "원형접근",
    "definitions": {
      "kr_proc": "시계비행 교통장주에 진입하여 착륙하는 항공기(편대비행 포함)를 위하여 미리 정해놓은 기동의 한 형태이며, 계기비행접근절차는 아니다. 원형접근을 하는 항공기는 시계비행으로 간주되고, 항공기가 접근의 최초 접근 부분인 “initial point(시작 지점)”에 도달했을 때, 계기비행계획서는 취소된다. 보통 장주는 다음의 조건을 충족하여야 한다.\n1. 요구한 조종사와의 무선 교신\n2. 유지하여야 할 속도\n3. 3~5마일 길이의 첫 접근로\n4. 2번의 180°선회로 이루어진 타원형 장주\n5. 최초 180°선회가 시작되는 탈주 지점(break point)\n6. 선회 방향\n7. 고도(장방형 장주 고도보다 500피트 이상)\n8. 착륙 전단으로부터 1/4마일, 지상으로부터 300피트 이상인 최종 접근로상의 “Roll-out”",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A series of predetermined maneuvers prescribed for aircraft (often in formation) for entry into the visual flight rules (VFR) traffic pattern and to proceed to a landing. An overhead maneuver is not an instrument flight rules (IFR) approach procedure. An aircraft executing an overhead maneuver is considered VFR and the IFR flight plan is canceled when the aircraft reaches the “initial point” on the initial approach portion of the maneuver. The pattern usually specifies the following: a. The radio contact required of the pilot. b. The speed to be maintained. c. An initial approach 3 to 5 miles in length. d. An elliptical pattern consisting of two 180 degree turns. e. A break point at which the first 180 degree turn is started. f. The direction of turns. g. Altitude (at least 500 feet above the conventional pattern). h. A “Roll-out” on final approach not less than 1/4 mile from the landing threshold and not less than 300 feet above the ground.",
      "kr_ats": ""
    }
  },
  {
    "enName": "OVERLYING CENTER",
    "krName": "",
    "definitions": {
      "kr_proc": "특정 터미널지역의 도착/출발 비행을 관할하는 지역관제소",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The ARTCC facility that is responsible for arrival/departure operations at a specific terminal.",
      "kr_ats": ""
    }
  },
  {
    "enName": "P TIME",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : PROPOSED DEPARTURE TIME)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See PROPOSED DEPARTURE TIME.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PAN-PAN",
    "krName": "",
    "definitions": {
      "kr_proc": "국제 무선 긴급신호. 3회 반복할 때는 불확실한 상황 또는 용어 다음에 긴급상황을 붙여 경보를 나타낸다.\n(참조) : MAYDAY\nAIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The international radio-telephony urgency signal. When repeated three times, indicates uncertainty or alert followed by the nature of the urgency. (See MAYDAY.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PAR",
    "krName": "정밀접근 레이더",
    "definitions": {
      "kr_proc": "(참조 : PRECISION APPROACH RADAR)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ICAO Term PRECISION APPROACH RADAR.)",
      "kr_ats": "항공기 가 최종접근하는 동안에 가상의 접근경로에 대한 횡적 및 수직 편차와 접지까지의 거리로써 항공기의 위치를 결정하는데 이용되는 1차 레이더장비를 말한다. 주기 - 정밀접근레이더는 항공기의 조종사에게 착륙 을 위한 최종접근단계에서 무선통신을 통해 유도정보를 제공하도록 설계된 장비이다."
    }
  },
  {
    "enName": "PARALLEL ILS APPROACHS",
    "krName": "평행ILS접근",
    "definitions": {
      "kr_proc": "계기비행 항공기의 평행활주로에 대한 접근이며, 평행 최종접근 진로상에 정대한 항공기간 최소한 2마일 이상 레이더분리를 취하여야한다.\n(참조) : FINAL APPROACH COURSE\nSIMULTANEOUS ILS APPROACHES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PARALLEL MLS APPROACH",
    "krName": "",
    "definitions": {
      "kr_proc": "(PARALLEL ILS APPROACHES 를 볼 것)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PARALLEL OFFSET ROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "비행로의 좌우가 평행인 항공로로 지정되었거나 설정된 항공로/비행로 일반적으로 지역항법(RNAV)에서 주로 사용된다.\n(참조) : AREA NAVIGATION",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A parallel track to the left or right of the designated or established airway/route. Normally associated with Area Navigation (RNAV) operations. (See AREA NAVIGATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PARALLEL RUNWAYS",
    "krName": "평행활주로",
    "definitions": {
      "kr_proc": "동일 공항에서 활주로 중심선이 평행인 두 개 이상의 활주로. 활주로 번호는 평행활주로의 경우 L(left), R(right)으로 표기하고, 3개의 평행활주로가 존재할 경우 L(left), C(center), R(right) 순으로 표기한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Two or more runways at the same airport whose centerlines are parallel. In addition to runway number, parallel runways are designated as L (left) and R (right) or, if three parallel runways exist, L (left), C (center), and R (right).",
      "kr_ats": ""
    }
  },
  {
    "enName": "PASS BEHIND/IN FRONT OF (descriptions)",
    "krName": "",
    "definitions": {
      "kr_proc": "지상에서 운항중인 항공기에게 타항공기 또는 주변의 교통상황을 고려, 진행방법을 지시하고자 할 경우에 사용되는 계류장 관제용어 (교통상황설명)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PBCT",
    "krName": "경계선 통과 요구시간",
    "definitions": {
      "kr_proc": "(참조 : PROPOSED BOUNDARY CROSSING TIME)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See PROPOSED BOUNDARY CROSSING TIME.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PBS, Performance-based surveillance",
    "krName": "성능기반감시",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항 공교통업무의 제공에 적용되는 성능사양에 기반한 감시 를 말한다. 주기 - RSP 사양은 제공되어야 할 감시 측면에서 시 스템 구성 요소에 할당되는 감시성능요건과, 특정 공역 개념 내에서 제안된 운영을 위해 요구되는 데이터 전달 시간, 연속성, 가용성, 무결성, 감시 데이터의 정확성, 안전 및 기능성을 포함한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "PERFORMANCE-BASED NAVIGATION",
    "krName": "PBN 성능기반항행",
    "definitions": {
      "kr_proc": "항공기가 계기접근절차 또는 지정된 공역에서 항공로를 따라 비행하기 위한 성능요건에 기반한 지역항법\n주기 : 성능요건은  특정 공역 개념의 맥락에서 제안된 운항에 필요한 정밀도, 무결성, 연속성, 가용성 및 기능성 측면의 항행사양(RNAV 사양, RNP 사양)으로 표현됨\n(참조) : ICAO Term PERFORMANCE-BASED NAVIGATION",
      "annex11": "Area navigation based on performance requirements for aircraft operating along an ATS route, on an instrument approach procedure or in a designated airspace. Note.— Performance requirements are expressed in navigation specifications (RNAV specification, RNP specification) in terms of accuracy, integrity, continuity, availability and functionality needed for the proposed operation in the context of a particular airspace concept.",
      "doc4444": "Area navigation based on performance requirements for aircraft operating along an ATS route, on an instrument approach procedure or in a designated airspace. Note.— Performance requirements are expressed in navigation specifications (RNAV specification, RNP specification) in terms of accuracy, integrity, continuity, availability and functionality needed for the proposed operation in the context of a particular airspace concept.",
      "faa_pcg": null,
      "kr_ats": "항 공기가 계기접근절차 또는 지정된 공역에서 항공교통로 를 따라 비행하기 위한 성능요건에 기반한 지역항법을 말한다. 주기 - 성능요건은 특정 공역 개념의 맥락에서 제안 된 운항에 필요한 정밀도, 무결성, 연속성, 가용성 및 기능성 측면의 항행사양(RNAV 사양, 필수항행성능 (RNP) 사양)으로 표현된다."
    }
  },
  {
    "enName": "PERMANENT ECHO",
    "krName": "영구 반사체",
    "definitions": {
      "kr_proc": "건물, 타워 및 지형등과 같이 지구 표면상의 고정된 물체로부터 반사된 레이더 신호. 영구 반사체는 큰 지역의 위치를 보다 더 분명하게 파악할 수 있어 지상물체와 구별된다. 어떤 조건하에서 영구 반사체를 레이더조정을 위하여 사용될 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Radar signals reflected from fixed objects on the earth’s surface; e.g., buildings, towers, terrain. Permanent echoes are distinguished from “ground clutter” by being definable locations rather than large areas. Under certain conditions they may be used to check radar alignment.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PHOTO RECONNAISSANCE",
    "krName": "사진 정찰",
    "definitions": {
      "kr_proc": "군 활동으로, 개별 사진촬영 목표물의 위치파악 그리고 기계획된 각도와 고도에서 목표물로의 항법을 요구한다. 일반적으로, 동 활동은 횡적비행로 16NM의 폭과 1,500~10,000피트(AGL)의 고도범위를 요구한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Military activity that requires locating individual photo targets and navigating to the targets at a preplanned angle and altitude. The activity normally requires a lateral route width of 16 NM and altitude range of 1,500 feet to 10,000 feet AGL. PILOT BRIEFING– The gathering, translation, interpretation, and summarization of weather and aeronautical information into a form usable by the pilot or flight supervisory personnel to assist in flight planning and decision−making for the safe and efficient operation of aircraft. These briefings may include, but are not limited to, weather observations, forecasts, and aeronautical information (for example, NOTAMs, military activities, flow control information, and temporary flight restrictions [TFR]). (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PIDP",
    "krName": "프로그램 자료 처리장치",
    "definitions": {
      "kr_proc": "(PROGRAMMABLE INDICATOR DATA PROCESSOR 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PILOT BRIEFING",
    "krName": "조종사 브리핑",
    "definitions": {
      "kr_proc": "비행을 계획한 조종사를 지원하기 위하여 FSS에서 제공하는 업무. 이 항목에는 기상, 항공고시보, 군사적 행위, 교통소통 및 기타 필요한 사항을 포함한다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PILOT WEATHER REPORT",
    "krName": "조종사 기상보고",
    "definitions": {
      "kr_proc": "비행 중에 조종사가 조우한 기상현상 보고.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A report of meteorological phenomena encountered by aircraft in flight. (Refer to AIM.) PILOT’S DISCRETION− When used in conjunction with altitude assignments, means that ATC has offered the pilot the option of starting climb or descent whenever he/she wishes and conducting the climb or descent at any rate he/she wishes. He/she may temporarily level off at any intermediate altitude. However, once he/she has vacated an altitude, he/she may not return to that altitude.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PILOT'S DISCRETION",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사가 원하는 시기 또는 비율로 상승 및 강하를 허가하는 것을 말하며, 조종사는 고도 중간단계에서 일시적으로 수평 비행을 할 수 있으나, 한번 떠난 고도에는 회귀할 수 없다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "Pilot-in-command",
    "krName": "기장",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "비행 중 항공기의 운항 및 안 전에 대한 책임을 지도록 운영자 또는 소유자(일반항 공)가 지정한 조종사를 말한다. 제정 : 2013.05.03. - 98 별표",
      "annex11": "",
      "doc4444": "The pilot designated by the operator, or in the case of general aviation, the owner, as being in command and charged with the safe conduct of a flight.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "PILOT-IN-COMMANDER",
    "krName": "",
    "definitions": {
      "kr_proc": "비행중 항공기의 운항 및 안전에 대한 책임을 지도록 운영자 또는 소유자(일반항공)가 지정한 조종사",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PIREP",
    "krName": "조종사 기상보고",
    "definitions": {
      "kr_proc": "(PILOT WEATHER REPORT 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See PILOT WEATHER REPORT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PITCH POINT",
    "krName": "이행지점",
    "definitions": {
      "kr_proc": "출발절차 또는 저고도 지표기반 항행 체계를 고고도 중간지점 체계로 바꾸는 이행지점 역할을 하는 픽스/중간지점",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A fix/waypoint that serves as a transition point from a departure procedure or the low altitude ground−based navigation structure into the high altitude waypoint system.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PLANS DISPLAY",
    "krName": "비행계획전시기",
    "definitions": {
      "kr_proc": "요구된 현재 계획들과 모든 시험 계획들의 세부적인 비행계획과 예상되는 충돌(갈등) 정보를 원문 형태로 EDST에서 이용할 수 있는 표시(디스플레이)이다.\n(참조) : EN-ROUTE DECISION SUPPORT TOOL",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A display available in EDST that provides detailed flight plan and predicted conflict information in textual format for requested Current Plans and all Trial Plans. (See EN ROUTE DECISION SUPPORT TOOL)",
      "kr_ats": ""
    }
  },
  {
    "enName": "POINT OUT",
    "krName": "",
    "definitions": {
      "kr_proc": "(RADAR POINT OUT 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADAR POINT OUT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "POINT-TO-POINT",
    "krName": "PTP 지점 대 지점",
    "definitions": {
      "kr_proc": "FMS 또는 RNAV 장비에 입력된 재래식 waypoint를 기반으로 하는 항공기에 대한 NRR 서비스 수준",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A level of NRR service for aircraft that is based on traditional waypoints in their FMSs or RNAV equipage.",
      "kr_ats": ""
    }
  },
  {
    "enName": "POLAR TRACK STRUCTURE",
    "krName": "북극항로체계",
    "definitions": {
      "kr_proc": "캐나다 MNPS공역상 Iceland와 Alaska 사이에 구성된 경로 체계",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A system of organized routes between Iceland and Alaska which overlie Canadian MNPS Airspace.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Position indication",
    "krName": "위치표시",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기, 비행장 차량 또 는 다른 물체의 위치를 비기호 또는 기호 형태로 상황 전시기에 시각적으로 나타낸 것을 말한다.",
      "annex11": "",
      "doc4444": "The visual indication, in non-symbolic and/or symbolic form, on a situation display, of the position of an aircraft, aerodrome vehicle or other object.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "POSITION REPORT",
    "krName": "위치보고",
    "definitions": {
      "kr_proc": "항공기가 항공교통관제기관에 명시된 위치 상공에서의 보고.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A report over a known location as transmitted by an aircraft to ATC. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "POSITION SYMBOL",
    "krName": "위치부호",
    "definitions": {
      "kr_proc": "항적의 mode를 알려주기 위하여 레이더 전시기에 컴퓨터에 의하여 전시되는 표시.",
      "annex11": null,
      "doc4444": "The visual indication in symbolic form, on a situation display, of the position of an aircraft, aerodrome vehicle or other object, obtained after automatic processing of positional data derived from any source.",
      "faa_pcg": "A computer-generated indication shown on a radar display to indicate the mode of tracking.",
      "kr_ats": "모든 소스로부터 도출된 위 치 데이터를 자동으로 처리한 후 얻어진 항공기, 비행 장 차량 및 기타 물체의 위치를 기호형태로 상황전시기 에 시각적으로 나타낸 것을 말한다."
    }
  },
  {
    "enName": "POSITIVE CONTROL",
    "krName": "",
    "definitions": {
      "kr_proc": "지정된 공역 내에서 모든 항공 교통의 분리를 제공하는 항공교통관제.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The separation of all air traffic within designated airspace by air traffic control.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PRACTICE INSTRUMENT APPROACH",
    "krName": "연습계기접근",
    "definitions": {
      "kr_proc": "조종사의 훈련 또는 기량 향상을 위하여 시계 또는 계기비행 항공기가 수행하는 계기접근절차.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An instrument approach procedure conducted by a VFR or an IFR aircraft for the purpose of pilot training or proficiency demonstrations.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PRE",
    "krName": "",
    "definitions": {
      "kr_proc": "DEPARTURE CLEARANCE(PDC 출발전 인가) : 서비스 제공자를 통해 구독자에게 조종석이나 게이트 프린터로 문자를 통한 허가 정보를 제공하는 TDLS를 이용한 응용프로그램",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "DEPARTURE REROUTE (PDRR)− A capability within the Traffic Flow Management System that enables ATC to quickly amend and execute revised departure clearances that mitigate en route constraints or balance en route traffic flows.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PRE-FLIGHT PILOT BRIEFING",
    "krName": "비행 전 조종사 브리핑",
    "definitions": {
      "kr_proc": "(PILOT BRIEFING 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See PILOT BRIEFING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PREARRANGED COORDINATION",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제사가 다른 관제사에게 배정된 공역 진입을 구두 협의 없이 허가하는 표준화한 절차. 이 절차는 항공기간의 표준 분리를 확실히 하기 위하여 시설/운영내규에 명시되어야한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A standardized procedure which permits an air traffic controller to enter the airspace assigned to another air traffic controller without verbal coordination. The procedures are defined in a facility directive which ensures approved separation between aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PREARRANGED COORDINATION PROCEDURES",
    "krName": "사전조정협조절차",
    "definitions": {
      "kr_proc": "관제사가 항공기를 다른 관제사의 공역으로 일부 침투 또는 통과하도록 허가할 때 각 항공기에 대한 개별협조 없이 허가된 분리를 보장하는 표준화된 시설의 절차",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A facility’s standardized procedure that describes the process by which one controller must allow an aircraft to penetrate or transit another controller’s airspace in a manner that assures approved separation without individual coordination for each aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PRECIPITATION",
    "krName": "강수 현상",
    "definitions": {
      "kr_proc": "대기에서 지면에 떨어지는 수적 (비, 진눈개비, 우박, 눈)의 모든 형태",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any or all forms of water particles (rain, sleet, hail, or snow) that fall from the atmosphere and reach the surface.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PRECIPITATION RADAR WEATHER DESCRIPTIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "현존하는 레이더 체계는 난기류를 감지할 수 없다. 하지만 난기류의 정도와 뇌우 그리고 날씨 레이더 강수 강도와 관련된 다른 날씨 요소들 사이에 직접적인 관계가 있다. 관제사는 WARP 또는 기상 능력을 가진 NAS 지표 기반 디지털 레이더를 사용하여 관측되어지는 강수 강도를 발의할 것이다. 강수 강도 정보가 유효하지 않다면 강도는 UNKNOWN으로 기술될 것이다. 강도 정도가 정해지면 그것들은 다음과 같이 기술되어 질 것이다.\n1. LIGHT (< 30dBZ)\n2. MODERATE (30 to 40dBZ)\n3. HEAVY (> 40 to 50dBZ)\n4. EXTREME (> 50dBZ)\n(참조) : AC00−45, AVIATION WEATHER SERVICES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PRECISION APPROACH",
    "krName": "정밀접근",
    "definitions": {
      "kr_proc": "(참조 : PRECISION APPROACH PROCEDURE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See PRECISION APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PRECISION APPROACH PROCEDURE",
    "krName": "정밀접근절차",
    "definitions": {
      "kr_proc": "예를 들면 ILS, PAR과 같이 활공각을 제공하는 표준 계기접근절차\n(참조) : INSTRUMENT LANDING SYSTEM\nMICROWAVE LANDING SYSTEM\nPRECISION APPROACH RADAR",
      "annex11": null,
      "doc4444": "An instrument approach procedure based on navigation systems (ILS, MLS, GLS and SBAS Cat I) designed for 3D instrument approach operations Type A or B. Note.— Refer to Annex 6 for instrument approach operation types.",
      "faa_pcg": "A standard instrument approach procedure in which an electronic glideslope or other type of glidepath is provided; e.g., ILS, PAR, and GLS. (See INSTRUMENT LANDING SYSTEM.) (See PRECISION APPROACH RADAR.)",
      "kr_ats": "3D 계기접근운영 A유형 또는 B유형 으로 설계된 항행시스템(ILS, MLS, GLS and SBAS Cat I)에 기반한 계기접근절차 - 개정 : 2026.07.06. 항공교통업무기준"
    }
  },
  {
    "enName": "PRECISION APPROACH RADAR",
    "krName": "정밀접근 레이더",
    "definitions": {
      "kr_proc": "일부 항공교통관제시설에 설치된 레이더 장비이다. 최종접근진로상에서 활주로까지 항공기의 방위, 고도, 및 거리를 탐지하고 전시하기 위하여 운영한다. 이 장비는 비레이더 접근 감시를 위하여 사용될 수 있으나 전시기상에 전시된 활주로의 접지지점에서 최종접근진로(azimuth), 활공각(elevation), 거리(range)로 항공기의 위치를 기준으로 관제사가 조종사에게 안내 지시를 발부하는 정밀계기접근 시 주로 사용된다.\n(참조) : GLIDEPATH\nPAR\nPREFERENTIAL ROUTES\nICAO term PRECISION APPROACH RADAR\nAIM",
      "annex11": null,
      "doc4444": "Primary radar equipment used to determine the position of an aircraft during final approach, in terms of lateral and vertical deviations relative to a nominal approach path, and in range relative to touchdown. Note.— Precision approach radars are designated to enable pilots of aircraft to be given guidance by radiocommunication during the final stages of the approach to land.",
      "faa_pcg": "Primary radar equipment used to determine the position of an aircraft during final approach, in terms of lateral and vertical deviations relative to a nominal approach path, and in range relative to touchdown.",
      "kr_ats": "항공기 가 최종접근하는 동안에 가상의 접근경로에 대한 횡적 및 수직 편차와 접지까지의 거리로써 항공기의 위치를 결정하는데 이용되는 1차 레이더장비를 말한다. 주기 - 정밀접근레이더는 항공기의 조종사에게 착륙 을 위한 최종접근단계에서 무선통신을 통해 유도정보를 제공하도록 설계된 장비이다."
    }
  },
  {
    "enName": "PRECISION APPROACH RADAR",
    "krName": "PAR-정밀접근레이더",
    "definitions": {
      "kr_proc": "항공기가 최종 접근하는 동안에 가상의 접근경로에 대한 수평 및 수직 편차와 접지까지의 거리로써 항공기의 위치를 결정하는데 이용되는 1차 레이더장비",
      "annex11": null,
      "doc4444": "Primary radar equipment used to determine the position of an aircraft during final approach, in terms of lateral and vertical deviations relative to a nominal approach path, and in range relative to touchdown. Note.— Precision approach radars are designated to enable pilots of aircraft to be given guidance by radiocommunication during the final stages of the approach to land.",
      "faa_pcg": "Primary radar equipment used to determine the position of an aircraft during final approach, in terms of lateral and vertical deviations relative to a nominal approach path, and in range relative to touchdown.",
      "kr_ats": "항공기 가 최종접근하는 동안에 가상의 접근경로에 대한 횡적 및 수직 편차와 접지까지의 거리로써 항공기의 위치를 결정하는데 이용되는 1차 레이더장비를 말한다. 주기 - 정밀접근레이더는 항공기의 조종사에게 착륙 을 위한 최종접근단계에서 무선통신을 통해 유도정보를 제공하도록 설계된 장비이다."
    }
  },
  {
    "enName": "PRECISION OBSTACLE FREE ZONE",
    "krName": "POFZ 정밀 장애물 제거 구역",
    "definitions": {
      "kr_proc": "실링 250피트 또는 시정 3/4SM이하 시(또는 활주로 가시거리가 4,000FT 미만) 지상 차량 및 기타 항공기들과 정밀접근 중인 항공기를 보호하기 위해  설정 된 시단과 근접한 활주로 중심선안에 위치한 800피트 넓이와 200피트 길이의 구역\nPRECISION RUNWAY MONITOR(PRM-정밀 활주로 감시) SYSTEM - 활주로 중심선간 간격이 4,300피트 미만으로 분리된 평행활주로에 최종 접근 중에 있는 항공기에 대한 고정밀 2차감시자료를 관제사에게 제공한다. 고해상도 칼라 감시기는 접근구역 및 침투금지구역(NTZ)을 상세하게 도시한 지도 및 항적감시자료를 관제사에게 명확히 전시토록 하여야 한다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An 800 foot wide by 200 foot long area centered on the runway centerline adjacent to the threshold designed to protect aircraft flying precision approaches from ground vehicles and other aircraft when ceiling is less than 250 feet or visibility is less than 3/4 statute mile (or runway visual range below 4,000 feet.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PREDICTIVE WIND SHEAR ALERT SYSTEM(PWS)",
    "krName": "",
    "definitions": {
      "kr_proc": "일부 항공기에 탑재된  체계(Self-Contained System)로 조종사에게 잠재적인 wind shear에 대해 경보한다. PWS 체계는 대체로 1,200피트AGL 이하에서 전방 3마일, 좌우 25°까지 탐지할 수 있다. 출발비행은 항공기가 takeoff roll을 시작한 후에 wind shear 경보를 받을 수 있고 이륙포기를 선택할 수 있다. 경보를 받은 접근중인 항공기는 복행(Go Around)을 선택하거나 wind shear escape 기동을 수행할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A self-contained system used on board some aircraft to alert the flight crew to the presence of a potential wind shear. PWS systems typically monitor 3 miles ahead and 25 degrees left and right of the aircraft’s heading at or below 1200’ AGL. Departing flights may receive a wind shear alert after they start the takeoff roll and may elect to abort the takeoff. Aircraft on approach receiving an alert may elect to go around or perform a wind shear escape maneuver.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PREFERENTIAL ROUTES",
    "krName": "우선 비행로",
    "definitions": {
      "kr_proc": "우선 비행로(PDR's, PAR's, PDAR's)는 비행계획서가 관련 관제석에 정확히 전시되고 시설 간 관제사의 협조를 위하여 지역관제소 컴퓨터에 입력 수용시킨다. 이러한 입ㆍ출항 비행로가 필요한 지역에서는 터미널시설 게시판에 공고하여야하며, 조종사는 이것을 이용함으로서 비행계획의 수정을 최소화할 수 있다. 업무량과 교통상황 허락시, 관제사는 우회비행을 최소화하기 위하여 레이더유도를 하거나 요청한 비행로를 배정한다. 선호비행로는 통상 하나의 지역관제소 지역에 한정되어야 하고, 다음과 같은 명칭과 접두어로 되어있다.\n1. Preferential Departure Route(PDR-우선 출발비행로) - 공항 또는 터미널지역에서 흐름관리가 더 이상 필요치 않은 항공로의 한 지점까지의 특정한 출발 비행로이며, 표준계기출발(SID)비행로 및 우선의 계기비행로를 포함할 수 있다.\n2. Preferential Arrival Route(PAR-우선 도착비행로) - 적절한 항공로 지점에서 공항 또는 터미널지역까지의 특정한 도착비행로이며, 표준도착절차(STAR) 비행로 및 우선 계기비행로를 포함할 수 있다. “PAR󰡓란 약어는 주로 지역관제소에서 사용되고, 정밀접근 레이더 약어와 혼동하여서는 안 된다.\n3. Preferential Departure and Arrival Route(PDAR-우선 출발 및 도착비행로) - 한 지역관제소의 지역 내에 있거나 가까이 인접한 두 공항 간 비행로이며, 우선 계기비행 비행로와 같은 뜻을 나타내는 것은 아니지만 동일 목적으로 사용될 때 표시하여야 한다.\n(참조) : preferred IFR route NAS STAGE A PREFERRED IFR ROUTES NAS STAGE A",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PREFERRED IFR ROUTE",
    "krName": "우선 IFR 비행로",
    "definitions": {
      "kr_proc": "교통량이 많은(busier) 공항 간에 시스템의 효율성과 수용력을 증가시키기 위하여 수립된 비행로. 일반적으로 이런 비행로는 하나 이상의 ACC 구역으로 연결되어있으며, 교통의 밀도가 높은 터미널지역간의 균형적인 교통 소통을 이루기 위하여 설정된다. 계기비행 허가는 악기상 회피 절차 또는 기타 다른 요인으로 사용을 제한한 경우를 제외하고 동 비행로를 기준으로 발부하여야한다. 우선 IFR 비행로는 항공정보간행물에 등재되어야한다. 비행로를 설정하고 있는 지역을 왕래하고자 비행계획을 수립하였지만 출발 및 도착지점이 공항의 항공정보간행물에 등재되어 있지 않다면, 조종사는 적절한 우선 계기비행 비행로의 등재된 출발 또는 도착지점을 사용할 수 있다. 이런 우선 계기비행 비행로는 SID나 STAR와 연관이 있으며, 항행안전시설, 웨이포인트(waypoint), 항행안전시설의 방위/거리 또는 복합 지점 간 항공로 직진비행로로서 설정할 수 있다\n(참조) : STANDARD INSTRUMENT DEPARTURE\nSTANDARD TERMINAL ARRIVAL\nPREFERENTIAL ROUTES\nCENTER'S AREA\nAIRPORT/FACILITY DIRECTORY\nNOTICES TO AIRMEN PUBLICATION",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PRESSURE ALTITUDE",
    "krName": "기압고도",
    "definitions": {
      "kr_proc": "표준대기압에 따라 나타내는 고도",
      "annex11": null,
      "doc4444": "An atmospheric pressure expressed in terms of altitude which corresponds to that pressure in the Standard Atmosphere.*",
      "faa_pcg": null,
      "kr_ats": "표준대기압에 연관되는 고 도로 나타내는 기압을 말한다."
    }
  },
  {
    "enName": "PRESSURE-ALTITUDE",
    "krName": "기압고도",
    "definitions": {
      "kr_proc": "표준대기의 압력에 연관되는 고도로 나타내는 기압",
      "annex11": null,
      "doc4444": "An atmospheric pressure expressed in terms of altitude which corresponds to that pressure in the Standard Atmosphere.*",
      "faa_pcg": null,
      "kr_ats": "표준대기압에 연관되는 고 도로 나타내는 기압을 말한다."
    }
  },
  {
    "enName": "PREVAILING VISIBILITY",
    "krName": "우시정",
    "definitions": {
      "kr_proc": "(VISIBILITY 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VISIBILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Prifile",
    "krName": "프로파일",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "가상의 비행경로를 포함한 수직면 상 의 비행경로 또는 그 일부분에 대한 직각 투영도를 말 한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "PRIMARY RADAR",
    "krName": "1차레이더",
    "definitions": {
      "kr_proc": "반송되는 무선신호를 이용하는 레이더 장비",
      "annex11": null,
      "doc4444": "A radar system which uses reflected radio signals.",
      "faa_pcg": null,
      "kr_ats": "반송되는 무선신호를 이용하 는 레이더 장비를 말한다."
    }
  },
  {
    "enName": "PRIMARY RADAR TARGET",
    "krName": "1차 레이더 항적",
    "definitions": {
      "kr_proc": "레이더 전시기에 시현된 2차 레이더 항적이 없는 아날로그 또는 디지털 항적.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An analog or digital target, exclusive of a secondary radar target, presented on a radar display. PRIOR PERMISSION REQUIRED (PPR)– Prior Permission Required (PPR) means prior permission required to have full operational use of a runway, taxiway, apron, or airport facility/service. Means of communication to the airport can be telephone and/or radio. If PPR and another exception are used in same NOTAM, the PPR should come first.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PRIMARY SURVEILLANCE RADAR(PSR)",
    "krName": "",
    "definitions": {
      "kr_proc": "반송되는 무선신호를 이용하는 감시레이더장비",
      "annex11": null,
      "doc4444": "A surveillance radar system which uses reflected radio signals.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PRINTED COMMUNICATION",
    "krName": "",
    "definitions": {
      "kr_proc": "수발하는 모든 전문을 각 단말기에서 자동으로 인쇄ㆍ기록하여 제공하는 통신.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PRM",
    "krName": "정밀 활주로 감시기",
    "definitions": {
      "kr_proc": "(참조 : ILS PRM approach and precision runway monitor)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AREA NAVIGATION (RNAV) GLOBAL POSITIONING SYSTEM (GPS) PRECISION RUNWAY MONITORING (PRM) APPROACH.) (See PRM APPROACH.) (See PRECISION RUNWAY MONITOR SYSTEM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROBLEMATIC USE OF SUBSTANCES",
    "krName": "문제성물질사용",
    "definitions": {
      "kr_proc": "항공종사자가 다음 결과를 초래하는 향정신성 물질을 한번이상 사용하는 것.\n1. 사용자 본인에 직접적인 위해가 되거나 타인의 생명 및 건강을 위태롭게 하고,\n2. 직업적, 사회적, 정신적 또는 육체적 문제 또는 장애를 야기\nPROCEDURAL CONTROL[ICAO](절차관제) : ATC 감시시스템에서 도출한 정보가 항공교통관제업무 제공에 필요하지 않음을 나타내는 용어\nPROCEDURAL SEPARATION[ICAO](절차분리) : 절차관제 제공 시 사용되는 분리",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "Procedural control",
    "krName": "비감시관제",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공교통관제업무 제공 에 있어 ATC 감시시스템 정보가 필요하지 않음을 나타 내는 용어를 말한다.",
      "annex11": "",
      "doc4444": "Term used to indicate that information derived from an ATS surveillance system is not required for the provision of air traffic control service.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "Procedural separation",
    "krName": "비감시분리",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "비감시관제 제공 시 적용하는 분리를 말한다.",
      "annex11": "",
      "doc4444": "The separation used when providing procedural control.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "PROCEDURE TURN",
    "krName": "절차선회",
    "definitions": {
      "kr_proc": "항공기가 중간접근구역 또는 최종접근진로로 진입하기 위하여 역방향 선회가 필요한 규정된 기동. 외향진로(outbound course), 선회방향, 선회를 완료해야할 거리 범위 및 최저 고도는 절차에 명시되어야한다. 그러나 특별한 제한사항이 없다면, 선회 시작지점, 형태 및 선회율은 조종사의 재량에 의한다.\n(참조) : ICAO term PROCEDURE TURN\nPROCEDURE TURN[ICAO](절차선회) : 항공기가 지정된 경로를 진입하기 위해 지정된 경로의 반대방향 진행을 허가하며, 반대방향으로 선회할 때 지정경로를 벗어나 수행하는 선회기동\n주기 1 : 절차선회는 최초선회의 방향에 따라 “좌” 또는 “우”로 설정됨.\n주기 2 : 절차선회는 각각의 독립 절차의 상황에 따라, 수평비행이나 강하비행 모두 수행할 수 있도록 설정될 수 있음.",
      "annex11": null,
      "doc4444": "A manoeuvre in which a turn is made away from a designated track followed by a turn in the opposite direction to permit the aircraft to intercept and proceed along the reciprocal of the designated track. Note 1.— Procedure turns are designated “left” or “right” according to the direction of the initial turn. Note 2.— Procedure turns may be designated as being made either in level flight or while descending, according to the circumstances of each individual procedure.",
      "faa_pcg": "A maneuver in which a turn is made away from a designated track followed by a turn in the opposite direction to permit the aircraft to intercept and proceed along the reciprocal of the designated track. Note 1: Procedure turns are designated “left” or “right” according to the direction of the initial turn. Note 2: Procedure turns may be designated as being made either in level flight or while descending, according to the circumstances of each individual approach procedure.",
      "kr_ats": "지정된 진로에서 선회한 후 반대 방향으로 선회하여 항공기가 지정된 항공로의 역 방향을 따라 진입하여 진행할 수 있도록 하는 기동을 말한다. 주기1 - 절차선회는 최초선회의 방향에 따라 \"좌\" 또 는 \"우\"로 설정된다. 주기2 - 절차선회는 각각의 독립 절차의 상황에 따 라, 수평비행이나 강하비행 모두 수행할 수 있도록 설 정될 수 있다."
    }
  },
  {
    "enName": "PROCEDURE TURN INBOUND",
    "krName": "",
    "definitions": {
      "kr_proc": "진로가 역방향으로 완료된 절차선회 기동지점에서 항공기는 중간접근구역 또는 최종접근진로로 진입한다. “procedure turn inbound󰡓 보고는 분리 목적의 위치보고로서 항공교통관제에서 통상 사용한다.\n(참조) : FINAL APPROACH COURSE PROCEDURE TURNSEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "That point of a procedure turn maneuver where course reversal has been completed and an aircraft is established inbound on the intermediate approach segment or final approach course. A report of “procedure turn inbound” is normally used by ATC as a position report for separation purposes. (See FINAL APPROACH COURSE.) (See PROCEDURE TURN.) (See SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROFILE",
    "krName": "",
    "definitions": {
      "kr_proc": "가상의 경로를 포함한 수직면상의 비행경로 또는 그 일부분에 대한 직각 투영도",
      "annex11": null,
      "doc4444": "The orthogonal projection of a flight path or portion thereof on the vertical surface containing the nominal track.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PROFILE DESCENT",
    "krName": "",
    "definitions": {
      "kr_proc": "순항고도에서 활공로 교차지점 또는 비정밀 계기접근의 첫 접근구역 또는 중간접근구역의 명시된 최저고도까지의 연속적인 강하(속도조절을 위하여 수평비행이 요구되는 지역은 제외; 예 : 평균해면고도 10,000피트, 250KTS). profile descent은 일반적으로 접근게이트/활공로 또는 적절한 최저 고도에 정대 되는 곳에서 종료된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An uninterrupted descent (except where level flight is required for speed adjustment; e.g., 250 knots at 10,000 feet MSL) from cruising altitude/level to interception of a glideslope or to a minimum altitude specified for the initial or intermediate approach segment of a nonprecision instrument approach. The profile descent normally terminates at the approach gate or where the glideslope or other appropriate minimum altitude is intercepted.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROGRAMMABLE INDICATOR DATA PROCESSOR",
    "krName": "",
    "definitions": {
      "kr_proc": "PIDP는 고정된 레이더 접근관제소(RAPCON'S)에 설치된 AN/TPX-42 질문기를 최근에 개량한 것이다. 이 장치는 2차레이더 항공기 목표물을 탐지, 추적 및 예측한다. 그리고 항공기 식별부호, 고도, 대지속도 및 비행계획 자료를 컴퓨터에서 나타내는 부호, 문자, 숫자로 전시한다. 비록 1차레이더 목표물이 추적되지 않더라도 다른 부호, 문자, 숫자와 같이 2차레이더 타겟과 일치하여 전시된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PROGRESS REPORT",
    "krName": "진행보고",
    "definitions": {
      "kr_proc": "(POSITION REPORT 참조)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See POSITION REPORT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROGRESSIVE TAXI",
    "krName": "",
    "definitions": {
      "kr_proc": "공항에 익숙하지 않은 조종사에게 제공되는 정확한 활주지시 또는 항공기가 유도로를 따라 진행하는 경우 구간별로 제공되는 정확한 활주지시",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Precise taxi instructions given to a pilot unfamiliar with the airport or issued in stages as the aircraft proceeds along the taxi route.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROHIBITED AREA",
    "krName": "금지구역",
    "definitions": {
      "kr_proc": "(SPECIAL USE AIRSPACE를 볼 것)\n(참조) : ICAO 용어 PROHIBITED AREA 참조",
      "annex11": "An airspace of defined dimensions, above the land areas or territorial waters of a State, within which the flight of aircraft is prohibited.",
      "doc4444": null,
      "faa_pcg": "An airspace of defined dimensions, above the land areas or territorial waters of a State, within which the flight of aircraft is prohibited. PROMINENT OBSTACLE– An obstacle that meets one or more of the following conditions: a. An obstacle which stands out beyond the adjacent surface of surrounding terrain and immediately projects a noticeable hazard to aircraft in flight. b. An obstacle, not characterized as low and close in, whose height is no less than 300 feet above the departure end of takeoff runway (DER) elevation, is within 10 NM from the DER, and that penetrates that airport/heliport’s diverse departure obstacle clearance surface (OCS). c. An obstacle beyond 10 NM from an airport/heliport that requires an obstacle departure procedure (ODP) to ensure obstacle avoidance. (See OBSTACLE.) (See OBSTRUCTION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROHIBITED AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 비행이 금지되는 한 국가의 육지 또는 해상에 설정된 공역",
      "annex11": "An airspace of defined dimensions, above the land areas or territorial waters of a State, within which the flight of aircraft is prohibited.",
      "doc4444": null,
      "faa_pcg": "An airspace of defined dimensions, above the land areas or territorial waters of a State, within which the flight of aircraft is prohibited. PROMINENT OBSTACLE– An obstacle that meets one or more of the following conditions: a. An obstacle which stands out beyond the adjacent surface of surrounding terrain and immediately projects a noticeable hazard to aircraft in flight. b. An obstacle, not characterized as low and close in, whose height is no less than 300 feet above the departure end of takeoff runway (DER) elevation, is within 10 NM from the DER, and that penetrates that airport/heliport’s diverse departure obstacle clearance surface (OCS). c. An obstacle beyond 10 NM from an airport/heliport that requires an obstacle departure procedure (ODP) to ensure obstacle avoidance. (See OBSTACLE.) (See OBSTRUCTION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROMINENT OBSTACLE",
    "krName": "현저한 장애물",
    "definitions": {
      "kr_proc": "다음 중 하나 이상 만족하는 장애물\n1. 주변의 장애물표면보다 월등히 높아서 비행중인 항공기가 즉시 위험을 감지할 수 있는 장애물.\n2. 낮다, 가깝다라고 정의될 수 없는 장애물로서 12/10/15 Pilot/Controller Glossary PCG P−5 이륙활주로 끝 표고보다 300ft이상 높고, 이륙활주로 끝으로부터 10마일 내에 있고 공항 및 헬리포트의 임의 출발 장애물 회피 표면을 통과하는 장애물.\n3. 공항이나 헬리포트로부터 10마일 이상 떨어져 있고 장애물을 회피를 확보하기 위한 obstacle departure procedure (ODP)가 필요한 장애물.\n(참조) : OBSTACLE, OBSTRUCTION\nPROPELLER (PROP) WASH (PROP BLAST): 프로펠러의 움직임에 의해 발생되는 공기 질량",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "PROPOSED BOUNDARY CROSSING TIME",
    "krName": "",
    "definitions": {
      "kr_proc": "각 지역관제소는 국내의 각 공항에 대한 PBCT을 가지고 있다. 만약 출발공항에서 지역관제소 경계선까지 요구한 비행로의 비행시간이 PBCT와 같거나 미만인 경우와 공항이 PBCT과 관계없이 접수를 명문화하였다면 입항 요구 비행계획서를 인접 지역관제소에 전송하여야한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Each center has a PBCT parameter for each internal airport. Proposed internal flight plans are transmitted to the adjacent center if the flight time along the proposed route from the departure airport to the center boundary is less than or equal to the value of PBCT or if airport adaptation specifies transmission regardless of PBCT.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROPOSED DEPARTURE TIME",
    "krName": "출발요구시간",
    "definitions": {
      "kr_proc": "항공기 이륙완료 예상시간",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The time that the aircraft expects to become airborne.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROTECTED AIRSPACE",
    "krName": "보호공역",
    "definitions": {
      "kr_proc": "보호공역 축소가 인가된 지역을 제외한 횡적분리 최저치 1/2에 해당하는 대양항공로의 양쪽 공역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The airspace on either side of an oceanic route/track that is equal to one-half the lateral separation minimum except where reduction of protected airspace has been authorized.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PROTECTED SEGMENT",
    "krName": "보호공역",
    "definitions": {
      "kr_proc": "수정된 TFM route의 부분으로서 ERAM에 의해 자동적으로 조정되는 경로변경에 제약이 가해져 있다.\nPSR blip : 1차 레이더에서 얻은 항공기 위치를 나타내는 레이더 전심변상의 항적의 모양을 형성하지 못한 시각적으로 볼 수 있는 자료",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The protected segment is a segment on the amended TFM route that is to be inhibited from automatic adapted route alteration by ERAM.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PSR",
    "krName": "1차감시레이더",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "반송무선신호를 이용하는 감시레 이더 시스템을 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "PSR blip",
    "krName": "1차감시레이더 영상",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "1차레이더로 획득한 항 공기 위치를 나타내는 상황전시기 상의 기호화되지 않 은 시각 전시자료를 말한다. - 개정 : 2026.07.06. 항공교통업무기준",
      "annex11": "",
      "doc4444": "The visual indication, in non-symbolic form, on a situation display of the position of an aircraft obtained by primary radar.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "PT",
    "krName": "절차 선회",
    "definitions": {
      "kr_proc": "(참조 : PROCEDURE TURN)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See PROCEDURE TURN.)",
      "kr_ats": "지정된 진로에서 선회한 후 반대 방향으로 선회하여 항공기가 지정된 항공로의 역 방향을 따라 진입하여 진행할 수 있도록 하는 기동을 말한다. 주기1 - 절차선회는 최초선회의 방향에 따라 \"좌\" 또 는 \"우\"로 설정된다. 주기2 - 절차선회는 각각의 독립 절차의 상황에 따 라, 수평비행이나 강하비행 모두 수행할 수 있도록 설 정될 수 있다."
    }
  },
  {
    "enName": "PTS",
    "krName": "극지방 항공로구조",
    "definitions": {
      "kr_proc": "(참조 : POLAR TRACK STRUCTURE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See POLAR TRACK STRUCTURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "PUBLISHED INSTRUMENT APPROACH PROCEDURE VISUAL SEGMENT",
    "krName": "시계비행구역에서의 발간된 계기접근절차",
    "definitions": {
      "kr_proc": "“Fly Visual to Airport” or “Fly Visual”이라고 표시되어있는 계기접근절차 도면의 부분. 여기서 화살표는 profile에서 visual flight path와 대략적인 헤딩과 거리를 가리킨다. 시계비행 구역에서는 시계비행상태를 유지하면서 추측항법으로 비행해야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A segment on an IAP chart annotated as “Fly Visual to Airport” or “Fly Visual.” A dashed arrow will indicate the visual flight path on the profile and plan view with an associated note on the approximate heading and distance. The visual segment should be flown with flight instrumentation (when advisory lateral and vertical guidance is provided) and/or pilotage or dead reckoning navigation techniques while maintaining visual conditions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PUBLISHED ROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "계기비행용 고도가 설정되고 공고된 비행로; 예를 들면 : 지역항법 비행로 및 특정 직선비행로",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A route for which an IFR altitude has been established and published; e.g., Federal Airways, Jet Routes, Area Navigation Routes, Specified Direct Routes.",
      "kr_ats": ""
    }
  },
  {
    "enName": "PUSH BACK APPROVED",
    "krName": "",
    "definitions": {
      "kr_proc": "주기장에서 항공기가 견인장비에 의한 후방견인을 요청 시, 이를 허가하고자 할 때, 사용되는 계류장관제용어",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "QFE",
    "krName": "절대 기압",
    "definitions": {
      "kr_proc": "공항표고나 활주로시단 높이에서 측정한 대기압. 항공기 이·착륙 시 또는 단거리 비행에서 적용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The atmospheric pressure at aerodrome elevation (or at runway threshold).",
      "kr_ats": ""
    }
  },
  {
    "enName": "QNE",
    "krName": "표준 기압",
    "definitions": {
      "kr_proc": "표준 고도수정치를 위하여 사용되는 기압(29.92 inches Hg). 전이고도 14000피트 이상에서 비행할 때 적용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The barometric pressure used for the standard altimeter setting (29.92 inches Hg.).",
      "kr_ats": ""
    }
  },
  {
    "enName": "QNH",
    "krName": "현지 기압",
    "definitions": {
      "kr_proc": "특정 지역에서 보고되는 기압 전이 고도 14000피트 미만에서 비행할 때 적용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The barometric pressure as reported by a particular station.",
      "kr_ats": ""
    }
  },
  {
    "enName": "QUADRANT",
    "krName": "상한",
    "definitions": {
      "kr_proc": "항행안전시설(NAVAID)을 중심으로 원의 ¼부분이며, NE 상한 000-089, SE 상한 090-179, SW 상한 180-269, NW 상한 270-359과 같이 자북으로부터 시계방향으로 표기한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A quarter part of a circle, centered on a NAVAID, oriented clockwise from magnetic north as follows: NE quadrant 000-089, SE quadrant 090-179, SW quadrant 180-269, NW quadrant 270-359.",
      "kr_ats": ""
    }
  },
  {
    "enName": "QUICK LOOK",
    "krName": "",
    "definitions": {
      "kr_proc": "다른 관제석에서 추적하고 있는 항공기의 full data blocks을 관제사가 전시할 수 있는 자동화된 터미널 레이더시스템 장치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A feature of the EAS and STARS which provides the controller the capability to display full data blocks of tracked aircraft from other control positions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR",
    "krName": "레이더",
    "definitions": {
      "kr_proc": "무선펄스의 송/수신 시간차를 측정하고 방위 및 고도 측정이 되도록 안테나 빔이 방사되면서 송신펄스의 경로상에 있는 물체의 거리, 방위, 고도 정보를 제공하는 장치\n1. Primary Radar(1차 레이더) - 기지국부터 송신된 무선 펄스의 미세한 일부분이 물체에 의하여 반사되어 기지국의 연산처리장치로 되돌아와 항공교통관제 시설에 전시되는 레이더 장비.\n2. Secondary Radar/Radar Beacon(ATCRBS)(2차 레더다/레이더 비컨) - 무선수신기/송신기(응답기)형태의 보조장비를 갖추고 물체를 탐지하는 레이더 시스템. 탐색하는 송신/수신(질문기) 사이트로부터 송신된 레이더 펄스는 연관된 장비에 수신되고, 응답기의 특수(식별) 송신을 유발하는데 사용된다. 이 응답송신은 송신기/수신기 기지의 연산처리장치에 수신되고, 항공교통관제시설에 전시된다.\n(참조) : INTERROGATOR\nTRANSPONDER\nICAO 용어 RADAR\nAIM",
      "annex11": null,
      "doc4444": "A radio detection device which provides information on range, azimuth and/or elevation of objects.",
      "faa_pcg": "A radio detection device which provides information on range, azimuth and/or elevation of objects. a. Primary Radar− Radar system which uses reflected radio signals. b. Secondary Radar− Radar system wherein a radio signal transmitted from a radar station initiates the transmission of a radio signal from another station.",
      "kr_ats": "대상물의 범위, 방위 및/또는 고도에 관 한 정보를 제공하는 무선 탐지 장비를 말한다."
    }
  },
  {
    "enName": "RADAR",
    "krName": "레이더",
    "definitions": {
      "kr_proc": "물체의 거리, 방위 고도정보를 제공하는 무선 탐지 장치\n1. PRIMARY RADAR(1차 레이더) - 반사된 무선신호를 사용하는 레이더 시스템\n2. SECONDARY RADAR(2차 레이더) - 한 레이더 기지국으로부터 전송된 무선 신  호가 다른 기지국의 무선신호 전송을 야기하는 레이더 시스템",
      "annex11": null,
      "doc4444": "A radio detection device which provides information on range, azimuth and/or elevation of objects.",
      "faa_pcg": "A radio detection device which provides information on range, azimuth and/or elevation of objects. a. Primary Radar− Radar system which uses reflected radio signals. b. Secondary Radar− Radar system wherein a radio signal transmitted from a radar station initiates the transmission of a radio signal from another station.",
      "kr_ats": "대상물의 범위, 방위 및/또는 고도에 관 한 정보를 제공하는 무선 탐지 장비를 말한다."
    }
  },
  {
    "enName": "RADAR ADVISORY",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 관측에 기초한 조언 및 정보제공",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The provision of advice and information based on radar observations. (See ADVISORY SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR ALTIMETER",
    "krName": "레이더 고도계",
    "definitions": {
      "kr_proc": "(RADIO ALTIMETER를 볼 것)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADIO ALTIMETER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR APPROACH",
    "krName": "레이더 접근",
    "definitions": {
      "kr_proc": "정밀접근레이더 또는 공항감시레이더를 이용한 계기접근절차.\n(참조) : AIRPORT SURVEILLANCE RADAR\ninstrument approach procedure\nPAR\nsurveillance approach\nICAO radar approach\nAIM\nRADAR APPROACH[ICAO](레이더 접근) : 레이더 관제사의 지시 하에 항공기가 시행하는 접근",
      "annex11": null,
      "doc4444": "An approach in which the final approach phase is executed under the direction of a controller using radar. * As defined in Annex 8. 102/81/111//1264",
      "faa_pcg": "An approach, executed by an aircraft, under the direction of a radar controller.",
      "kr_ats": "레이더를 사용하는 관제 사의 지시하에 수행되는 최종접근단계의 접근 방식을 말한다."
    }
  },
  {
    "enName": "RADAR APPROACH CONTROL FACILITY",
    "krName": "레이더접근관제시설",
    "definitions": {
      "kr_proc": "도착, 출발 및 관할 관제 공역에서 항공기에게 접근관제업무를 제공하기 위하여 레이더 및 비레이더 능력을 갖춘 공항 항공교통관제기관\n(참조) : approach control service\n1. 터미널지역내에 있는 하나 이상의 민/군 공항 주변에서 비행하는 항공기에게 레이더 항공교통관제업무를 제공하여야한다. 이 시설에서는 지상관제접근(GCA) 즉 ASR과 PAR 접근업무를 제공할 수 있다. 어떤 특정 시설은 단지 관리상의 목적으로 사용되고 시설의 위치와 관련하여 일반적으로 다음과 같은 업무를 수행한다.가. Army Radar Approach Control(ARAC)(Army)나. Radar Air Traffic Control Facility(RATCF)(Navy/FAA)다. Radar Approach Control(RAPCON)(Air Force/FAA)라. Terminal Radar Approach Control(TRACON)(FAA)\n마. Air Traffic Control Tower (ATCT) (FAA) (단 이런 관제탑에는 접근관제 권한이 위임되어 있어야 함)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A terminal ATC facility that uses radar and nonradar capabilities to provide approach control services to aircraft arriving, departing, or transiting airspace controlled by the facility. (See APPROACH CONTROL SERVICE.) a. Provides radar ATC services to aircraft operating in the vicinity of one or more civil and/or military airports in a terminal area. The facility may provide services of a ground controlled approach (GCA); i.e., ASR and PAR approaches. A radar approach control facility may be operated by FAA, USAF, US Army, USN, USMC, or",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR ARRIVAL",
    "krName": "레이더도착",
    "definitions": {
      "kr_proc": "레이더시설에 의하여 레이더업무가 제공되는 공항에서의 도착항공기\n(참조) : NON-RADAR",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft arriving at an airport served by a radar facility and in radar contact with the facility. (See NONRADAR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR BEACON",
    "krName": "레이더비컨",
    "definitions": {
      "kr_proc": "(참조) : RADAR\nRADAR CONTACT(레이더포착)\n1. 항공교통관제기관에서 레이더 식별된 항공기에게 통보하는 용어이며, 레이더 비행추적은 레이더식별 종료 시 까지 제공 한다. 또한 레이더업무는 필요성과 성능범위 내에서 제공될 수 있다. 조종사가 “radar contact󰡓을 통보 받은 경우, 자동적으로 필수보고지점 상공에서의 보고는 중단한다.\n(참조) : radar contact lost radar flight following radar service radar service terminated AIM\n2. 항공기가 식별되었으며, 인수 관제사의 공역으로 진입하기 위한 승인이 이루어졌음을 이양관제사에게 통보하기 위하여 사용되는 용어.\n(참조) : ICAO  radar contact\nRADAR CONTACT[ICAO](레이더 포착) : 특정 항공기가 레이더 휘점(blip)이나 위치 심벌(Symbol)이 레이더 화면상에 보이고 식별이 된 상황",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADAR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR CLUTTER",
    "krName": "레이더 클러터",
    "definitions": {
      "kr_proc": "불필요한 신호가 레이더 전시면상에 전시되어 시각적으로 불 수 있는 일종의 항적",
      "annex11": null,
      "doc4444": "The visual indication on a situation display of unwanted signals.",
      "faa_pcg": "The visual indication on a radar display of unwanted signals.",
      "kr_ats": "불필요한 신호가 레이더 전시면 상에 전시되어 시각적으로 볼 수 있는 일종의 항적을 말한다."
    }
  },
  {
    "enName": "RADAR CONTACT LOST",
    "krName": "레이더 포착 상실",
    "definitions": {
      "kr_proc": "항공기의 위치를 결정할 수 있는 레이더자료가 더 이상 수신되지 않거나 신뢰할 수 없는 경우 및 레이더업무를 더 이상 제공하지 않을 경우, 항공교통관제기관이 조종사에게 통보하는 용어. 포착상실은 기상 또는 지상 물체와 병합, 레이더 가시선 범위 내에서 비행, 빈약한 레이더 반사지역의 진입, 항공기 송신기 고장 및 지상레이더 장비고장을 포함한 요인에 의하여 발생한다.\n(참조) : clutter radar contact",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to inform a pilot that the surveillance data used to determine the aircraft’s position is no longer being received, or is no longer reliable and radar service is no longer being provided. The loss may be attributed to several factors including the aircraft merging with weather or ground clutter, the aircraft operating below radar line of sight coverage, the aircraft entering an area of poor radar return, failure of the aircraft’s equipment, or failure of the surveillance equipment. (See CLUTTER.) (See RADAR CONTACT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR CONTROL",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더로부터 획득한 정보가 항공교통관제업무에 직접 이용됨을 나타내는 용어",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR CONTROLLER",
    "krName": "",
    "definitions": {
      "kr_proc": "부여된 직무에 적합한 레이더 업무한정자격을 소지하고 있는 항공교통관제사",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR DISPLAY",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더로부터 얻은 항공기 위치 및 이동상태에 관한 정보를 표시하는 전자전시",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR ENVIRONMENT",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더업무가 제공될 수 있는 지역\n(참조) : additional service radar contact radar service traffic advisories",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An area in which radar service may be provided. (See ADDITIONAL SERVICES.) (See RADAR CONTACT.) (See RADAR SERVICE.) (See TRAFFIC ADVISORIES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR FLIGHT FOLLOWING",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 식별된 항공기의 진행 상황을 관찰하는 것이며, 1차적인 항법은 조종사가 담당한다. 관제사는 레이더전시기에 전시되는 적절한 목표물과 목표물 부호를 관련시켜 항공기의 식별을 유지해야한다.\n(참조) : radar contact radar service AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The observation of the progress of radar−identified aircraft, whose primary navigation is being provided by the pilot, wherein the controller retains and correlates the aircraft identity with the appropriate target or target symbol displayed on the radar scope. (See RADAR CONTACT.) (See RADAR SERVICE.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR IDENTIFICATION",
    "krName": "",
    "definitions": {
      "kr_proc": "특정 항공기에 대한 레이더상의 위치가 레이더 전시면에 나타나고, 항공교통관제사가 당해 항공기의 위치를 식별하였을 때의 상태",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The process of ascertaining that an observed radar target is the radar return from a particular aircraft. (See RADAR CONTACT.) (See RADAR SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR IDENTIFICATION",
    "krName": "레이더 식별",
    "definitions": {
      "kr_proc": "관측된 레이더 목표물이 특정 항공기임을 확인하는 과정.\n(참조) : radar contact radar service ICAO  radar identification",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The process of ascertaining that an observed radar target is the radar return from a particular aircraft. (See RADAR CONTACT.) (See RADAR SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR IDENTIFIED AIRCRAFT",
    "krName": "레이더 식별된 항공기",
    "definitions": {
      "kr_proc": "레이더전시기에 관측된 목표물과 부호를 상호 관련시켜본 위치가 일치할 때의 항공기\n(참조) : radar contact radar contact lost",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft, the position of which has been correlated with an observed target or symbol on the radar display. (See RADAR CONTACT.) (See RADAR CONTACT LOST.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR MAP",
    "krName": "",
    "definitions": {
      "kr_proc": "선택된 지형을 미리 표시한 것을 레이더 전시면상에 나타내는 정보",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR MONITORING",
    "krName": "레이더 감시",
    "definitions": {
      "kr_proc": "(참조 : radar service)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADAR SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR NAVIGATIONAL GUIDANCE",
    "krName": "레이더 항행유도",
    "definitions": {
      "kr_proc": "(참조 : radar service)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADAR SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR POINT OUT",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기가 무선통신을 이양하지 않고 다른 관제사 공역 또는 보호공역을 진입하게 될 때, 항공기의 레이더 식별을 다른 관제사에게 이양하는 관제사의 조치사항.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An action taken by a controller to transfer the radar identification of an aircraft to another controller if the aircraft will or may enter the airspace or protected airspace of another controller and radio communications will not be transferred.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR POSITION INDICATION(RPI)",
    "krName": "",
    "definitions": {
      "kr_proc": "1차 및 2차감시레이더에 의하여 얻어진 항공기 위치를 레이더전시면상에(레이더시스템에서) 비(非)가공형태로 또는 가공된 형태로 나타낸 시각적인 표시",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR POSITION SYMBOL(RPS)",
    "krName": "",
    "definitions": {
      "kr_proc": "1차 및 2차감시레이더로부터 얻어진 위치 자료를 자동 가공한 후에 얻어진 항공기 위치를 레이더 전시면상의 항적 형태로 나타내는 시각적인 표시",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR REQUIRED",
    "krName": "",
    "definitions": {
      "kr_proc": "항행안전시설을 사용할 수 없거나 항행안전시설의 부재로 조종사가 항법 비행 할 수 없는 계기접근절차나 비행로 구간에 관제사의 레이더 유도를 통한 비행이 필요함을 조종사에게 알려주기 위하여 챠트 또는 접근도면에 표기하기 위한 용어로서 비행정보간행물에 정식 등재되기 전에 발송하는 항공고시보에도 해당 용어가 포함될 수 있다. 조종사는 ‘RADAR REQUIRED'가 도시된 구역을 통과할 때 관제사로부터 레이더 유도를 지원받을 수 있다.\n(참조) : radar route radar service",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A term displayed on charts and approach plates and included in FDC NOTAMs to alert pilots that segments of either an instrument approach procedure or a route are not navigable because of either the absence or unusability of a NAVAID. The pilot can expect to be provided radar navigational guidance while transiting segments labeled with this term. (See RADAR ROUTE.) (See RADAR SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR ROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기가 유도되는 비행진로나 항공로. 항행유도와 고도배정은 항공교통관제기관이 제공한다.\n(참조) : flight path route",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A flight path or route over which an aircraft is vectored. Navigational guidance and altitude assignments are provided by ATC. (See FLIGHT PATH.) (See ROUTE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR SEPARATION",
    "krName": "레이더분리",
    "definitions": {
      "kr_proc": "(참조 : radar service)",
      "annex11": null,
      "doc4444": "The separation used when aircraft position information is derived from radar sources.",
      "faa_pcg": "(See RADAR SERVICE.)",
      "kr_ats": "항공기 위치정보가 레이 더자료로부터 획득되었을 때 적용하는 분리를 말한다."
    }
  },
  {
    "enName": "RADAR SERVICE",
    "krName": "레이더업무",
    "definitions": {
      "kr_proc": "레이더 식별된 항공기 조종사에게 관제사가 제공할 수 있는 레이더사용을 기초로 한 하나 이상의 다음 업무를 포함하는 용어.\n1. Radar Monitoring(레이더 감시) - 기본 항행을 수행중인 조종사에게 인가된 비행진로, 항공로 및 비행로로부터의 이탈을 감시하고 통보하는 항공기의 레이더 비행 감시. 계기접근 레이더감시를 할 때, PAR 또는 동시 ILS, RNAV, GLS 접근에 규정된 PAR 안전제한치 또는 동시 ILS, RNAV, GLS의 허용치를 벗어나지 않도록 조언 및 지시를 한다.\n(참조) : ADDITIONAL SERVICE TRAFFIC ADVISORY\n2. Radar Navigational Guidance - 방위유도를 제공하기 위한 항공기 유도\n3. Radar Separation - 설정된 최저치에 따른 항공기의 레이더 간격분리\n(참조) : ICAO TERM RADAR SERVICE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Term used to indicate a service provided directly by means of radar. a. Monitoring− The use of radar for the purpose of providing aircraft with information and advice relative to significant deviations from nominal flight path. b. Separation− The separation used when aircraft position information is derived from radar sources.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR SERVICE",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더를 수단으로 직접적으로 제공되는 업무를 가리키기 위해 사용되는 용어\n1. MONITORING(감시) – 항공기에게  비행경로로부터 상대적 심각하게 이탈하는 경우, 정보와 조언을 제공하기 위한 레이더 사용\n2. SEPARATION(분리) – 항공기의 위치정보가 레이더로 부터 획득된 자료일 때 사용되는 분리",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Term used to indicate a service provided directly by means of radar. a. Monitoring− The use of radar for the purpose of providing aircraft with information and advice relative to significant deviations from nominal flight path. b. Separation− The separation used when aircraft position information is derived from radar sources.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR SERVICE TERMINATED",
    "krName": "레이더업무 종료",
    "definitions": {
      "kr_proc": "제공중인 레이더업무가 더 이상 제공되지 않음을 조종사에게 통보하기 위하여 사용하는 용어. 레이더업무는 자동으로 종료되며, 다음과 각호의 경우에는 조종사에게 통보할 필요가 없다.\n1. Class B공역, Class C공역, TRSA 공역 또는 기본적인 레이더업무가 제공되는 지역 외에서 항공기가 IFR 비행계획을 취소할 때.\n2. 계기/시계 또는 Contact Approach를 수행하는 항공기가 착륙했거나 조언주파수로 변경하도록 지시한 경우.\n3. 레이더업무를 제공받는 VFR 항공기가 도착 VFR 항공기가 Class B공역, Class C공역, TRSA 또는 접근순서업무가 제공되는 지역 내에서 관제탑이 관할하는 비행장에 착륙했을 때. 또는 다른 모든 비행장에서 관제탑 또는 조언주파수로 변경하도록 지시하였을 때.\n4. 항공기가 레이더 접근을 완료했을 때.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to inform a pilot that he/she will no longer be provided any of the services that could be received while in radar contact. Radar service is automatically terminated, and the pilot is not advised in the following cases: a. An aircraft cancels its IFR flight plan, except within Class B airspace, Class C airspace, a TRSA, or where Basic Radar service is provided. b. An aircraft conducting an instrument, visual, or contact approach has landed or has been instructed to change to advisory frequency. c. An arriving VFR aircraft, receiving radar service to a tower-controlled airport within Class B airspace, Class C airspace, a TRSA, or where sequencing service is provided, has landed; or to all other airports, is instructed to change to tower or advisory frequency. d. An aircraft completes a radar approach.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR SID",
    "krName": "레이더 표준계기출발절차",
    "definitions": {
      "kr_proc": "항공교통관제기관에서 SID 차트에 발간되어 있는 비행경로나 픽스로 레이더 유도를 제공하는 표준계기출발절차이다. 레이더 유도는 재래식SID나 RNAV SID에 연결하는데 사용되기도 하는데 레이더유도가 필요한 SID 차트에는 ‘RADAR REQUIRED'라는 주석을 달아야 한다.\n(참조) : RADAR REQUIRED\nRNAV DEPARTURE PROCEDURE\nSTANDARD INSTRUMENT DEPARTURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR SURVEILLANCE",
    "krName": "레이더 감시",
    "definitions": {
      "kr_proc": "일부 레이더기능을 수행하기 위하여 특정 지역의 레이더 감시",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The radar observation of a given geographical area for the purpose of performing some radar function.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR TRACK POSITION",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더정보를 근거로 하여 추적 목적으로 사용되는 컴퓨터에 의하여 추정되는 항공기 위치\n(주기) : 어떤 경우에는 레이더로부터 획득된 정보 이외의 정보는 추적처리를 지원하기 위하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR TRAFFIC ADVISORIES",
    "krName": "레이더 교통정보조언",
    "definitions": {
      "kr_proc": "조종사가 의도하는 비행경로에 영향을 줄 수 있는 확인된 레이더 항공교통에 대하여 조종사에게 경보하기 위하여 발부되는 조언.\n(참조) : TRAFFIC ADVISORIES",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Advisories issued to alert pilots to known or observed radar traffic which may affect the intended route of flight of their aircraft. (See TRAFFIC ADVISORIES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR TRAFFIC INFORMATION SERVICE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : traffic advisory)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAFFIC ADVISORIES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR UNIT",
    "krName": "",
    "definitions": {
      "kr_proc": "하나 이상의 업무를 제공하기 위하여 레이더 장비를 사용하는 항공교통업무기관의 구성요소",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RADAR VECTORING",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더를 사용하여 항공기에게 특정 방향으로 항행 유도를 하는 것",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Provision of navigational guidance to aircraft in the form of specific headings, based on the use of radar.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADIAL",
    "krName": "레디얼",
    "definitions": {
      "kr_proc": "VOR / VORTAC / TACAN 항법시설로부터 연장된 자방위.\nRADIO\n1. 통신을 위하여 사용되는 장치\n2. 민간비행정보소를 나타내기 위하여 사용되는 용어 : 예를 들면 “Daegu Radio”는 Daegu FSS를 명칭하는데 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A magnetic bearing extending from a VOR/VORTAC/TACAN navigation facility.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADIO ALTIMETER",
    "krName": "무선 고도계",
    "definitions": {
      "kr_proc": "지표면상의 항공기 높이를 결정하기 위하여 지상으로부터 Radio Wave의 반사파를 이용하는 항공기 장비.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aircraft equipment which makes use of the reflection of radio waves from the ground to determine the height of the aircraft above the surface.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADIO BEACON",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : nondirctional beacon)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See NONDIRECTIONAL BEACON.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADIO DETECTION AND RANGING",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : radar)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADAR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADIO MAGNETIC INDICATOR",
    "krName": "무선 자침지시기",
    "definitions": {
      "kr_proc": "자이로 나침의 또는 유사한 나침의와 결합된 항공기 항법계기로, 선택한 항행안전시설로부터 방향을 나타내며 항공기 기수에 대한 방위를 표시한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft navigational instrument coupled with a gyro compass or similar compass that indicates the direction of a selected NAVAID and indicates bearing with respect to the heading of the aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RADIOTELEPHONY",
    "krName": "",
    "definitions": {
      "kr_proc": "음성으로 정보를 교환하는 기본적인 무선통신의 형태",
      "annex11": "A form of radiocommunication primarily intended for the exchange of information in the form of speech.",
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RAIS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고 : REMOTE AIRPORT INFORMATION SERVICE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See REMOTE AIRPORT INFORMATION SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RAMP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : apron)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See APRON.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RANDOM ALTITUDE",
    "krName": "",
    "definitions": {
      "kr_proc": "비행방향에 부적절하거나 항공교통관제규정에 및 수직분리최저치에 일치하지 않는 고도",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An altitude inappropriate for direction of flight and/or not in accordance with FAA Order JO 7110.65, paragraph 4−5−1, VERTICAL SEPARATION MINIMA.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RANDOM ROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "설정 또는 도시/발행되지 않았거나 일부 사용자에게만 적용되는 항공로",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any route not established or charted/published or not otherwise available to all users. RC (See RADIO−CONTROLLED.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RC",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : road reconnaissance)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ROAD RECONNAISSANCE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RCAG",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : remote communications air/ground facility)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See REMOTE CENTER AIR/GROUND FACILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RCC",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : rescue coordination center)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RESCUE COORDINATION CENTER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RCO",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : REMOTE COMMUNICATIONS OUTLET)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See REMOTE COMMUNICATIONS OUTLET.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RCR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : RUNWAY CONDITION READING)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RUNWAY CONDITION READING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "READ BACK",
    "krName": "리드백",
    "definitions": {
      "kr_proc": "통신내용을 나에게 반복하라",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Repeat my message back to me.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RECEIVER AUTONOMOUS INTEGRITY MONITORING(RAIM)",
    "krName": "",
    "definitions": {
      "kr_proc": "민간 GNSS 수신기/프로세서가 센서 또는 GNSS 수신기 이외의 non-DoD(비 美국방성) 무결점 시스템 없이 GNSS 항행신호의 무결성을 판단하는 기술. 이 판단은 여러 오류거리 간 모순을 확인함으로써 얻을 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A technique whereby a civil GNSS receiver/processor determines the integrity of the GNSS navigation signals without reference to sensors or non-DoD integrity systems other than the receiver itself. This determination is achieved by a consistency check among redundant pseudorange measurements.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RECEIVING CONTROLLER",
    "krName": "인수관제사",
    "definitions": {
      "kr_proc": "다른 관제사/기관으로부터 항공기의 관제권을 인수받는 관제사/기관.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A controller/facility receiving control of an aircraft from another controller/facility.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RECEIVING FACILITY",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : receiving controller)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RECEIVING CONTROLLER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RECONFORMANCE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 경로와 일치하는 현재 비행계획의 경로를 얻는 자동화된 과정",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The automated process of bringing an aircraft’s Current Plan Trajectory into conformance with its track.",
      "kr_ats": ""
    }
  },
  {
    "enName": "REDUCE SPEED TO (SPEED)",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : SPEED ADJUSTMENT)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SPEED ADJUSTMENT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "REIL",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : RUNWAY END IDENTIFIER LIGHTS)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RUNWAY END IDENTIFIER LIGHTS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RELEASE TIME",
    "krName": "릴리스타임",
    "definitions": {
      "kr_proc": "다른 교통으로부터 출발항공기의 분리가 필요할 경우(직접 또는 인가된 중계방식을 통해) ATC에 의하여 조종사에게 발부하는 출발시간 제한사항",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Time prior to which an aircraft should be given further clearance or prior to which it should not proceed in case of radio failure.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RELEASE TIME",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기에게 추가적인 허가를 발부받아야 하거나, 무선통신 두절 시 진행하면 안 되는 시간의 이전 시간",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Time prior to which an aircraft should be given further clearance or prior to which it should not proceed in case of radio failure.",
      "kr_ats": ""
    }
  },
  {
    "enName": "REMOTE AIRPORT INFORMATION SERVICE (RAIS)",
    "krName": "",
    "definitions": {
      "kr_proc": "착륙공항에 위치하지 않지만  착륙공항에서 조종사가 이용할 수 있는 통신과 자동기상보고가 시설에 의하여 제공되는 임시업무(Temporary Service)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A temporary service provided by facilities, which are not located on the landing airport, but have communication capability and automated weather reporting available to the pilot at the landing airport.",
      "kr_ats": ""
    }
  },
  {
    "enName": "REMOTE COMMUNICATION AIR/GROUND FACILITY",
    "krName": "원격 통신공지시설",
    "definitions": {
      "kr_proc": "지역관제소 공중/지상 통신범위를 연장하고 조종사와 관제사간 직접교신을 용이하도록 하기 위하여 사용되는 무인 VHF/UHF 송/수신시설. RCAG 시설은 비상주파수 121.5MHz와 243.0MHz를 갖추지 않고 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "REMOTE COMMUNICATION OUTLET",
    "krName": "RCO, 원격 통신국",
    "definitions": {
      "kr_proc": "무인 통신시설은 항공교통관제사에 의해 원격 제어된다. RCO는 비행정보실을 지원한다. RTR은 지역 항공관제시설을 지원한다. RCO나 RTR은 UHF 혹은 VHF로 구성되며, 항공교통관제시설의 통신거리를 확장 시켜준다. RCO와 RTS에는 몇몇 등급이 있다. 그 등급은 송신자와 수신자의 수에 따라 결정된다.\nA등급부터 G등급까지는 주로 공/지 통신에 사용된다. RCO와 RTR O등급 시설은 탐지되지 않고 장기간 정지되는 비보호 시설이다.\nRCO와 RTR은 항공교통관제사와 위성공항에 위치한 조종사 간 지상통신을 제공하여 항로 허가 전달, 이륙 허가 그리고 계기비행 취소 또는 이륙/착륙 시간 확인을 목적으로 만들어졌다. 부가적인 목적으로, RCO와 RTR은 항공기가 주사용 공지통신주파수를 통한 소통이 원활하지 않을 때, 조언의 목적으로 사용될 수 있을 것이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "REMOTE TRANSMITTER/RECEIVER",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : REMOTE COMMUNICATION OUTLET)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See REMOTE COMMUNICATIONS OUTLET.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "REPETITIVE FLIGHT PLAN(RPL)",
    "krName": "",
    "definitions": {
      "kr_proc": "기본사항이 동일하며, 규칙적이고 연속적으로 자주 운항하는 각각의 항공기에 관련된 비행계획으로서, 항공 교통업무기관이 보유하여 반복적으로 사용할 수 있도록 운영자가 제출하는 비행계획.",
      "annex11": null,
      "doc4444": "A flight plan related to a series of frequently recurring, regularly operated individual flights with identical basic features, submitted by an operator for retention and repetitive use by ATS units.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "REPORT",
    "krName": "보고",
    "definitions": {
      "kr_proc": "특정 정보를 항공교통관제기관에 조언할 것을 조종사에게 지시하는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to instruct pilots to advise ATC of specified information; e.g., “Report passing Hamilton VOR.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "REPORTING POINT",
    "krName": "보고지점",
    "definitions": {
      "kr_proc": "항공기의 위치가 보고될 수 있는 특정한 지리적인 위치.",
      "annex11": "A specified geographical location in relation to which the position of an aircraft can be reported.",
      "doc4444": "A specified geographical location in relation to which the position of an aircraft can be reported.",
      "faa_pcg": "A specified geographical location in relation to which the position of an aircraft can be reported.",
      "kr_ats": "항공기의 위치가 보고될 수 있는 특정한 지리적 위치를 말한다. 필수통신성능(RCP) 사양. 성능기반통신을 지원하기 위 해 필요한 항공교통업무제공, 관련 지상 장비, 항공기 성능 및 운항에 대한 요구 조건을 말한다. 필수감시성능(RSP) 사양. 항공교통서비스 제공과 성능 기반감시를 지원하는 데 필요한 연관된 지상장비, 항공 기의 기능 및 운영에 대한 요구조건 세트성능기반 감시 를 지원하기 위해 필요한 항공교통 서비스 제공, 관련 지상 장비, 항공기 성능 및 운항에 대한 요구조건을 말 한다."
    }
  },
  {
    "enName": "REPORTING POINT",
    "krName": "보고지점",
    "definitions": {
      "kr_proc": "항공기가 보고 할 수 있는 위치에 관한 명시된 지리적 위치",
      "annex11": "A specified geographical location in relation to which the position of an aircraft can be reported.",
      "doc4444": "A specified geographical location in relation to which the position of an aircraft can be reported.",
      "faa_pcg": "A specified geographical location in relation to which the position of an aircraft can be reported.",
      "kr_ats": "항공기의 위치가 보고될 수 있는 특정한 지리적 위치를 말한다. 필수통신성능(RCP) 사양. 성능기반통신을 지원하기 위 해 필요한 항공교통업무제공, 관련 지상 장비, 항공기 성능 및 운항에 대한 요구 조건을 말한다. 필수감시성능(RSP) 사양. 항공교통서비스 제공과 성능 기반감시를 지원하는 데 필요한 연관된 지상장비, 항공 기의 기능 및 운영에 대한 요구조건 세트성능기반 감시 를 지원하기 위해 필요한 항공교통 서비스 제공, 관련 지상 장비, 항공기 성능 및 운항에 대한 요구조건을 말 한다."
    }
  },
  {
    "enName": "REQUEST FULL ROUTE CLEARANCE",
    "krName": "전체 비행로 허가요구",
    "definitions": {
      "kr_proc": "항공교통관제(ATC)허가 발부 시 전체 비행로를 조종사가 요구할 때, 사용하는 용어. 동 요구는 제출된 비행계획서가 출발 전 조종사, 항공사, 운영자에 의하여 수정 되었을 때 최초 제출된 비행계획서에 근거한 항공교통관제(ATC)허가 발부를 방지하기 위하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by pilots to request that the entire route of flight be read verbatim in an ATC clearance. Such request should be made to preclude receiving an ATC clearance based on the original filed flight plan when a filed IFR flight plan has been revised by the pilot, company, or operations prior to departure. REQUIRED NAVIGATION PERFORMANCE (RNP)– A statement of the navigational performance necessary for operation within a defined airspace. The following terms are commonly associated with RNP: a. Required Navigation Performance Level or Type (RNP-X). A value, in nautical miles (NM), from the intended horizontal position within which an aircraft would be at least 95-percent of the total flying time.",
      "kr_ats": ""
    }
  },
  {
    "enName": "REQUIRED NAVIGATION PERFORMANCE(RNP)",
    "krName": "",
    "definitions": {
      "kr_proc": "정해진 공역 내에서의 운항에 꼭 필요한 항행성능 용어이다. 다음 용어들은 RNP와 자주 연관되어 사용된다 :\n가. RNP 등급 또는 형태 (RNP-X). 항공기 총 비행시간 중 95%이상을 차지할 것으로 예상되는 어느 한 수평 지점으로부터의 값. (단위: 해리)\n나. RNP 공역. 최소한 요구 항행성능이 수립된 지정 공역, 비행로, 구간(LEG), 운영 또는 절차의 총칭\n다. Actual Navigation Performance(ANP). 현재 예상되는 항행성능의 측정. 또한 Estimated Position Error(EPE)라고도 불린다.\n라. Estimated Position Error(EPE). 현재 예상되는 항행성능의 측정. 또한 Actual Navigation Performance(ANP)라고도 불린다.\n마. Lateral Navigation(LNAV). RNAV(지역항법) 장비의 기능으로 계산, 전시(Display), 그리고 경로나 폭의 수평적 안내를 제공한다.\n바. Vertical Navigation(VNAV). RNAV(지역항법) 장비의 기능으로 계산, 전시(Display), 그리고 경로나 폭의 수직적 안내를 제공한다.",
      "annex11": null,
      "doc4444": "A statement of the navigation performance necessary for operation within a defined airspace. Note.— Navigation performance and requirements are defined for a particular RNP type and/or application.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RESCUE CO-ORDINATION CENTER",
    "krName": "구조조정센터",
    "definitions": {
      "kr_proc": "수색 및 구조 업무의 효율적인 조직화를 촉진하고 수색 및 구조지역 내에서의 수색, 구조작업 수행을 조정하는데 대한 책임이 있는 기관.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A search and rescue (SAR) facility equipped and manned to coordinate and control SAR operations in an area designated by the SAR plan. The U.S. Coast Guard and the U.S. Air Force have responsibility for the operation of RCCs. (See ICAO term RESCUE CO-ORDINATION CENTRE.)",
      "kr_ats": "수색 및 구 조업무 체계를 효율적으로 발전시키고, 수색 및 구조구 역 내에서의 수색 및 구조작업을 조정할 책임이 있는 기관을 말한다."
    }
  },
  {
    "enName": "RESCUE CO-ORDINATION CENTRE",
    "krName": "구조조정센터",
    "definitions": {
      "kr_proc": "수색구조업무의 효율적인 조직을 촉진하고 수색구조구역 내의 수색구조작업의 수행을 조정하는 책임을 지는 부서",
      "annex11": "A unit responsible for promoting efficient organization of search and rescue services and for coordinating the conduct of search and rescue operations within a search and rescue region.",
      "doc4444": "A unit responsible for promoting efficient organization of search and rescue services and for coordinating the conduct of search and rescue operations within a search and rescue region.",
      "faa_pcg": "A unit responsible for promoting efficient organization of search and rescue service and for coordinating the conduct of search and rescue operations within a search and rescue region.",
      "kr_ats": "수색 및 구 조업무 체계를 효율적으로 발전시키고, 수색 및 구조구 역 내에서의 수색 및 구조작업을 조정할 책임이 있는 기관을 말한다."
    }
  },
  {
    "enName": "RESCUE UNIT",
    "krName": "구조시설",
    "definitions": {
      "kr_proc": "수색구조의 신속한 수행을 위하여 필요장비와 훈련받은 요원으로 구성되어 있는 기관",
      "annex11": null,
      "doc4444": "A unit composed of trained personnel and provided with equipment suitable for the expeditious conduct of search and rescue.",
      "faa_pcg": null,
      "kr_ats": "수색구조의 신속한 수행을 위하 여 필요장비와 훈련받은 요원으로 구성되어 있는 시설 을 말한다. 제정 : 2013.05.03. - 99 별표"
    }
  },
  {
    "enName": "RESOLUTION ADVISORY",
    "krName": "",
    "definitions": {
      "kr_proc": "침입 항공기에 대한 수직분리 증가조작을 권장하는 교통경보 및 충돌회피시스템(TCAS Ⅱ)에 의하여 조종사에게 주어지는 전시표시. RA는 Positive, Negative 및 수직 속도제한(VSL)으로 구성된다. RA는 수정과 방지로 분류된다.\nRESTRICTED AREA\n(참조) : SPECIAL USE AIRSPACEICAO용어 RESTRICTED AREA",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A display indication given to the pilot by the Traffic alert and Collision Avoidance System (TCAS II) recommending a maneuver to increase vertical separation relative to an intruding aircraft. Positive, negative, and vertical speed limit (VSL) advisories constitute the resolution advisories. A resolution advisory is also classified as corrective or preventive.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RESTRICTED AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "한 국가의 영토 및 영해 상으로 명시된 공역으로 특정 조건에 따라 항공기의 비행이 제한된다.",
      "annex11": "An airspace of defined dimensions, above the land areas or territorial waters of a State, within which the flight of aircraft is restricted in accordance with certain specified conditions.",
      "doc4444": null,
      "faa_pcg": "An airspace of defined dimensions, above the land areas or territorial waters of a State, within which the flight of aircraft is restricted in accordance with certain specified conditions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RESUME NORMAL SPEED",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제기관이 조종사에게 이전에 지시한 속도 제한이 더 이상 필요치 않음을 조언 시 사용하는 용어. 항공교통관제기관이 별도로 지시하지 않는 한, “Resume normal speed”는 비행진행단계 발간된 절차에 적용되는 속도제한을 무효화하는 것은 아니다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to advise a pilot to resume an aircraft’s normal operating speed. It is issued to terminate a speed adjustment where no published speed restrictions apply. It does not delete speed restrictions in published procedures of upcoming segments of flight. This does not relieve the pilot of those speed restrictions that are applicable to 14 CFR section 91.117.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RESUME OWN NAVIGATION",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제기관이 조종사에게 자신의 책임하에 자체항법으로의 재개를 조언할 때 사용하는 용어. 레이더유도가 완료되었거나 레이더유도중 레이더포착을 상실하였을 경우 발부된다.\n(참조) : RADAR CONTACT LOST\nRADAR SERVICE TERMINATED",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to advise a pilot to resume his/her own navigational responsibility. It is issued after completion of a radar vector or when radar contact is lost while the aircraft is being radar vectored. (See RADAR CONTACT LOST.) (See RADAR SERVICE TERMINATED.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RESUME PUBLISHED SPEED",
    "krName": "지정된 속도로 복귀",
    "definitions": {
      "kr_proc": "조종사에게 지정된 제한 속도로 복귀할 것을 조언하기 위해 항공교통관제사가 사용하는 조종사/관제사 용어",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to advise a pilot to resume published speed restrictions that are applicable to a SID, STAR, or other instrument procedure. It is issued to terminate a speed adjustment where speed restrictions are published on a charted procedure.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RMI",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : radio magnetic indicator)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RADIO MAGNETIC INDICATOR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RNAV -",
    "krName": "참조",
    "definitions": {
      "kr_proc": "AREA NAVIGATION\nICAO용어 AREA NAVIGATION",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AREA NAVIGATION (RNAV).)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RNAV APPROACH",
    "krName": "지역항법 접근",
    "definitions": {
      "kr_proc": "항법유도를 위한 항공기 자체 지역항법에 의한 계기접근절차\n(참조) : AREA NAVIGATION\nINSTRUMENT APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An instrument approach procedure which relies on aircraft area navigation equipment for navigational guidance. (See AREA NAVIGATION (RNAV).) (See INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RNP",
    "krName": "필수항행성능",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "특정 공역 내에서의 운항을 위해 필요한 항행성능을 기술한 것을 말한다. 주기 - 항행성능 및 요건은 특정 필수항행성능(RNP) 유형 및/또는 애플리케이션 별로 정해진다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "RNP TYPE",
    "krName": "필수항행성능 유형",
    "definitions": {
      "kr_proc": "전체비행시간의 95퍼센트 이상을 계획된 지점으로부터 해상 마일로 표시되는 거리 안에서 비행이 이루어져야 하는 봉쇄구역 수치\n예 - RNP 4는 전체 비행시간의 95퍼센트 이상을 정해진 진로로부터 ±7.4km(4NM)의 항행정확도를 유지하면서 비행해야 함을 나타냄.",
      "annex11": null,
      "doc4444": "A containment value expressed as a distance in nautical miles from the intended position within which flights would be for at least 95 per cent of the total flying time. Example.— RNP 4 represents a navigation accuracy of plus or minus 7.4 km (4 NM) on a 95 per cent containment basis.",
      "faa_pcg": null,
      "kr_ats": "계획된 지점으로부터 해 리로 표시된 거리 내에서 전체 비행 시간의 95% 이상 동안 비행이 이루어져야 하는 값을 말한다. 예 - RNP 4는 전체 비행시간의 95퍼센트 이상을 정 해진 진로로부터 ±7.4㎞(4NM)의 항행정확도를 유지하 면서 비행해야 함을 나타낸다."
    }
  },
  {
    "enName": "ROAD RECONNAISSANCE",
    "krName": "",
    "definitions": {
      "kr_proc": "도로, 철도 및 하천을 따라 비행하는 군사활동. 정찰항공로 및 항공로구간은 거의 직선비행을 하지 않으며, 일반적으로 수평 폭 10~30NM, 고도범위 500~10,000피트 AGL로 이루어진다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Military activity requiring navigation along roads, railroads, and rivers. Reconnaissance route/route segments are seldom along a straight line and normally require a lateral route width of 10 NM to 30 NM and an altitude range of 500 feet to 10,000 feet AGL.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ROGER",
    "krName": "",
    "definitions": {
      "kr_proc": "나는 당신의 송신내용을 모두 수신하였음. YES 또는 NO를 요구하는 질문의 응답을 하여서는 안 된다.\n(참조) : AFFIRMATIVE\nNEGATIVE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "I have received all of your last transmission. It should not be used to answer a question requiring a yes or a no answer. (See AFFIRMATIVE.) (See NEGATIVE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ROLLOUT RVR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : visibility)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VISIBILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ROTOR WASH",
    "krName": "",
    "definitions": {
      "kr_proc": "헬리콥터의 메인 로터에 의해 생성된 공기의 수직 하강 기류로 인한 현상.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A phenomenon resulting from the vertical down wash of air generated by the main rotor(s) of a helicopter.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ROUTE",
    "krName": "비행로",
    "definitions": {
      "kr_proc": "항공기가 지표면 상공을 횡단하는, 특정 수평면내의 하나 이상의 코스로 이루어진 한정된 경로\n(참조) : AIRWAY\nJET ROUTE\nPUBLISHED ROUTE\nUNPUBLISHED ROUTE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A defined path, consisting of one or more courses in a horizontal plane, which aircraft traverse over the surface of the earth. (See AIRWAY.) (See JET ROUTE.) (See PUBLISHED ROUTE.) (See UNPUBLISHED ROUTE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ROUTE ACTION NOTIFICATION",
    "krName": "",
    "definitions": {
      "kr_proc": "PAR/PDR/PDAR이 비행계획서에 적용되고 있는 URET CCLD 고시\n(참조) : ATC PREFERRED ROUTE NOTIFICATIONUSER REQUEST EVALUATION TOOL CORE CAPABILITY LIMITED DEPLOYMENT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "EDST notification that an ADR/ADAR/AAR has been applied to the flight plan. (See ATC PREFERRED ROUTE NOTIFICATION.) (See EN ROUTE DECISION SUPPORT TOOL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ROUTE SEGMENT",
    "krName": "비행로부분",
    "definitions": {
      "kr_proc": "항공교통관제에 사용되는 용어로, 두 개의 항행지점, 두 개의 항행안전시설 또는 한 지점과 하나의 항행안전시설로 정의 되는 항공로의 한 부분.\n(참조) : FIX(픽스)\nROUTE\nICAO용어 ROUTE SEGMENT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A portion of a route to be flown, as defined by two consecutive significant points specified in a flight plan.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ROUTE SEGMENT",
    "krName": "",
    "definitions": {
      "kr_proc": "비행할 항공로의 한 부분으로, 비행계획서상에 명시된 연속적인 두 개의 중요지점으로 명시된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A portion of a route to be flown, as defined by two consecutive significant points specified in a flight plan.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RPL",
    "krName": "반복비행계획",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "기본사항이 동일하며, 규칙적이고 연속적으로 자주 운항하는 각각의 항공기에 관련된 비 행계획으로서, 항공교통업무시설이 보유하여 반복적으 로 사용할 수 있도록 운영자가 제출하는 비행계획을 말 한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "RSA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : runway safety area)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See RUNWAY SAFETY AREA.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RTR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : remote transmitter/receiver)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See REMOTE TRANSMITTER/RECEIVER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY",
    "krName": "활주로",
    "definitions": {
      "kr_proc": "항공기의 착륙 및 이륙을 위하여 육상비행장에 설치된 일정한 장방형구역",
      "annex11": "A defined rectangular area on a land aerodrome prepared for the landing and take-off of aircraft.",
      "doc4444": "A defined rectangular area on a land aerodrome prepared for the landing and take-off of aircraft.",
      "faa_pcg": "A defined rectangular area on a land aerodrome prepared for the landing and takeoff of aircraft.",
      "kr_ats": "항공기의 착륙 및 이륙을 위하여 육상 비행장에 설치된 일정한 장방형 구역을 말한다."
    }
  },
  {
    "enName": "RUNWAY CENTERLINE LIGHTING",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport lighting)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT LIGHTING.) RUNWAY CONDITION CODES (RwyCC)− Numerical readings, provided by airport operators, that indicate runway surface contamination (for example, slush, ice, rain, etc.). These values range from “1” (poor) to “6” (dry) and must be included on the ATIS when the reportable condition is less than 6 in any one or more of the three runway zones (touchdown, midpoint, rollout).",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY CONDITION CODE",
    "krName": "활주로 상태 번호",
    "definitions": {
      "kr_proc": "공항운영자로부터 제공된 활주로상의 오염도 번호(예 : 슬러시, 얼음, 비 등) 오염도 번호는 “1”(POOR)부터 “6”(DRY)이며 활주로 구간 중(touchdown, midpoint, rollout중 한 곳 이상) 이 번호가 6미만으로 내려가면 반드시 ATIS로 방송하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY CONDITION READING",
    "krName": "활주로표면상태수치",
    "definitions": {
      "kr_proc": "활주로의 제동상태를 결정함에 있어 조종사가 사용할 수 있도록 공군 공항에서 군 항공교통관제사에 의하여 전달되는 활주로 표면상태수치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Numerical decelerometer readings relayed by air traffic controllers at USAF and certain civil bases for use by the pilot in determining runway braking action. These readings are routinely relayed only to USAF and Air National Guard Aircraft. (See BRAKING ACTION.) RUNWAY CONDITION REPORT (RwyCR)− A data collection worksheet used by airport operators that correlates the runway percentage of coverage along with the depth and type of contaminant for the purpose of creating a FICON NOTAM. (See RUNWAY CONDITION CODES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY CONDITION REPORT",
    "krName": "활주로 상태 보고",
    "definitions": {
      "kr_proc": "활주로 표면상태와 항공기의 이착륙 성능에 미치는 영향과 관련된 종합적이고 표준화된 보고",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY END IDENTIFIER LIGHTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport lighting)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT LIGHTING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY ENTRANCE LIGHTS",
    "krName": "활주로 진입등",
    "definitions": {
      "kr_proc": "대기선의 첫 번째 등과, 이로부터 활주로 가장자리까지 유도로 중심선을 따라 균일한 간격을 두고 정렬된 일련의 등과, 활주로 가장자리의 마지막 두개의 등에 평행하여 설치된 활주로 중심선 상의 추가적인 하나의 등이 포함된, 적색등의 배열이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An array of red lights which include the first light at the hold line followed by a series of evenly spaced lights to the runway edge aligned with the taxiway centerline, and one additional light at the runway centerline in line with the last two lights before the runway edge.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY GRADIENT",
    "krName": "",
    "definitions": {
      "kr_proc": "측정된 활주로 양 끝단 또는 두 지점 간의 평균 기울기. 활주로의 경사도가 0.3%를 초과할 경우 활주로 경사도는 비행장도면에 표시된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The average slope, measured in percent, between two ends or points on a runway. Runway gradient is depicted on Government aerodrome sketches when total runway gradient exceeds 0.3%.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY HEADING",
    "krName": "활주로 방향",
    "definitions": {
      "kr_proc": "활주로 중심선연장선과 일치하는 자방향으로, 도색된 활주로 번호는 아니다. “Fly or maintain runway heading”이라고 지시될 경우 조종사는 이륙활주로의 중심선과 일치하는 기수로 비행하거나 유지하도록 기대된다.  편류수정은 적용되지 않는다. 예를 들면  Runway 4, 실제 활주로 중심선의 자방위 기수는 044이므로  044로 비행한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The magnetic direction that corresponds with the runway centerline extended, not the painted runway number. When cleared to “fly or maintain runway heading,” pilots are expected to fly or maintain the heading that corresponds with the extended centerline of the departure runway. Drift correction must not be applied; e.g., Runway 4, actual magnetic heading of the runway centerline 044, fly 044.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY IN USE/ACTIVE RUNWAY/DUTY RUNWAY",
    "krName": "",
    "definitions": {
      "kr_proc": "현재 이착륙을 위해 사용되고 있는 활주로(들)이다. 여러 개의 활주로가 사용되고 있는 경우에는 그것들 모두가 사용 활주로로 간주된다. 어떤 측면에서는 착륙 활주로 배치 또는 교통흐름의 방향을 규정하는 적합한 선택항목이다. 도착 항공기 간 원활한 분리를 위해, 교차 FIX로부터 최종접근까지의 최적의 비행계획은 활주로 배치에 의해 결정된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any runway or runways currently being used for takeoff or landing. When multiple runways are used, they are all considered active runways. In the metering sense, a selectable adapted item which specifies the landing runway configuration or direction of traffic flow. The adapted optimum flight plan from each transition fix to the vertex is determined by the runway configuration for arrival metering processing purposes.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY INCURSION",
    "krName": "활주로침범",
    "definitions": {
      "kr_proc": "항공기의 이착륙을 위하여 지정된 공항의 보호구역에 항공기, 차량 또는 인원이 무단으로 침입하는 것",
      "annex11": null,
      "doc4444": "Any occurrence at an aerodrome involving the incorrect presence of an aircraft, vehicle or person on the protected area of a surface designated for the landing and take-off of aircraft.",
      "faa_pcg": null,
      "kr_ats": "항공기, 차량 또는 사람 이 항공기 이착륙을 위해 지정된 보호구역에 부적절하 게 진입하거나 위치하는 것을 말한다."
    }
  },
  {
    "enName": "RUNWAY LIGHTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport lighting)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT LIGHTING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY MARKINGS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport marking AIDS)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT MARKING AIDS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY OVERRUN",
    "krName": "",
    "definitions": {
      "kr_proc": "주로 군기지에서, 활주로 중심선 연장선상에 위치하며, 활주로와 양옆의 폭을 합한 폭과 동일한 폭을 갖는 활주로 끝단을 넘어선 안전장치 또는 포장지역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "In military aviation exclusively, a stabilized or paved area beyond the end of a runway, of the same width as the runway plus shoulders, centered on the extended runway centerline.",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY PROFILE DESCENT",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사가 이용하도록 그림과/또는 문자형태로 발간된 IFR 항공교통관제 도착절차로, STAR와 관계가 있다. Runway Profile Descent은 진로를 제공하고 항공로구조로부터 조종사가 계기접근절차에 대한 허가를 받거나 절차를 수행할 지점으로 비행할 통과고도, 속도제한 및 기수를 표시한다. Runway Profile Descent은 차트에 명시될 경우, 1본 이상의 활주로에 적용할 수 있다.\n(참조) : AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An instrument flight rules (IFR) air traffic control arrival procedure to a runway published for pilot use in graphic and/or textual form and may be associated with a STAR. Runway Profile Descents provide routing and may depict crossing altitudes, speed restrictions, and headings to be flown from the en route structure to the point where the pilot will receive clearance for and execute an instrument approach procedure. A Runway Profile Descent may apply to more than one runway if so stated on the chart. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY SAFETY AREA",
    "krName": "활주로 안전구역",
    "definitions": {
      "kr_proc": "Undershoot, overshoot 또는 활주로로부터 이탈시 항공기의 손상 위험을 감소시키기 위하여 활주로 주변에 마련된 일정한 표면. 활주로 안전지역의 치수는 다양하다. 설계표준에는 활주로 안전지역이 다음과 같아야 한다고 지시한다.\n1. 걸릴 것이 없고, 완만하며 잠정적으로 위험한 홈, 언덕, 침하 또는 기타 표면변형이 없어야 한다.\n2. 물 고임현상을 방지하기 위한 완만한 경사 또는 하수구에 의한 배수가 되어야 한다.\n3. 건조한 조건하에서, 제설장비, 항공기 구조와 소방장비지원 및 항공기의 구조적인 손상을 초래하지 않고 항공기의 임시 통행이 가능해야 한다.\n4. 장비의 성능상 활주로 안전지역에 이동시킬 필요가 있는 물체를 제외하고, 물체로부터 자유로워야 한다. 이러한 물체는 파손될 지점이 지상으로부터 3인치 보다 높지 않은 최저실제높이가 되도록 저충격 저항 지지물로 건설되어야 한다.\n(참조) : AC 150/5300-13, Airport Design, Chapter 3\nRUNWAY STATUS LIGHTS (RWSL) SYSTEM (활주로 상태 등 시스템) : 활주로 상태 등화시스템(RWSL)은 진입과 횡단에 부적절한 경우, 활주로 진입등(REL)과 이륙에 부적절한 경우, 이륙 보류등(THL)이 점등하여 활주로 및 유도로의 상태를 조종사들에게 알려주기 위한 시스템이다.\nRUNWAY TRANSITION\n1. 재래식(Conventional) STAR/SID들의 경우: 공항의 특정 활주로(들)을 위한 STAR/SID의 일정 부분을 의미한다.\n2. 지역항법(RNAV) STAR/SID들의 경우: 일반적인 항로로부터 STAR의 최종지점까지의 경로를 의미한다. SID의 경우, 공항의 특정 활주로(들)을 위한 일반적인 경로를 의미한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A defined surface surrounding the runway prepared, or suitable, for reducing the risk of damage to airplanes in the event of an undershoot, overshoot, or excursion from the runway. The dimensions of the RSA vary and can be determined by using the criteria contained within AC 150/5300-13, Airport Design, Chapter 3. Figure 3−1 in AC 150/5300-13 depicts the RSA. The design standards dictate that the RSA must be: a. Cleared, graded, and have no potentially hazardous ruts, humps, depressions, or other surface variations; b. Drained by grading or storm sewers to prevent water accumulation; c. Capable, under dry conditions, of supporting snow removal equipment, aircraft rescue and firefighting equipment, and the occasional passage of aircraft without causing structural damage to the aircraft; and, d. Free of objects, except for objects that need to be located in the runway safety area because of their function. These objects must be constructed on low impact resistant supports (frangible mounted structures) to the lowest practical height with the frangible point no higher than 3 inches above grade. (Refer to AC 150/5300-13, Airport Design, Chapter 3.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY USE PROGRAM",
    "krName": "활주로사용계획",
    "definitions": {
      "kr_proc": "소음방지 활주로 선택 계획은 도착 및 출발항공기에 대한 비행장주변 주민을 고려한 소음방지 노력을 강화하기 위하여 마련되었다. 이러한 계획들은 활주로 사용프로그램으로 발전하였으며 12500LBS를 초과하는 모든 터보제트기에 적용된다; 12500LBS미만 터보제트기는 비행장 소유자가 소음문제를 발생시킨다고 결정할 경우에만 적용된다.\n1. Formal Runway Use Program - 인가된 소음방지 프로그램은 비행운영자, 항공교통업무, 공항소유자와 사용자간의 협정서로 명시되고 통보된다. 일단 성립되면 항공기 운영자와 조종사의 프로그램 참여는 의무사항이 된다.\n2. Informal Runway Use Program - 인가된 소음방지 프로그램은 협정서를 요구하지 않으며, 항공기 운영자/조종사의 프로그램 참여는 자발적이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A noise abatement runway selection plan designed to enhance noise abatement efforts with regard to airport communities for arriving and departing aircraft. These plans are developed into runway use programs and apply to all turbojet aircraft 12,500 pounds or heavier; turbojet aircraft less than 12,500 pounds are included only if the airport proprietor determines that the aircraft creates a noise problem. Runway use programs are coordinated with FAA offices, and safety criteria used in these programs are developed by the",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY VISIBILITY VALUE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : visibility)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY VISUAL RANGE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : visibility)",
      "annex11": "The range over which the pilot of an aircraft on the centre line of a runway can see the runway surface markings or the lights delineating the runway or identifying its centre line.",
      "doc4444": "The range over which the pilot of an aircraft on the centre line of a runway can see the runway surface markings or the lights delineating the runway or identifying its centre line. 2180/1/11/12/41 6",
      "faa_pcg": "(See VISIBILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY VISUAL RANGE(RVR)",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로의 중심선에 있는 항공기의 조종사가 활주로의 윤곽을 나타내거나 또는 활주로의 중심선을 표시하는 활주로 표면표시 또는 등화를 볼 수 있는 거리",
      "annex11": "The range over which the pilot of an aircraft on the centre line of a runway can see the runway surface markings or the lights delineating the runway or identifying its centre line.",
      "doc4444": "The range over which the pilot of an aircraft on the centre line of a runway can see the runway surface markings or the lights delineating the runway or identifying its centre line. 2180/1/11/12/41 6",
      "faa_pcg": "(See VISIBILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "RUNWAY-HOLDING POSITION",
    "krName": "활주로대기지점",
    "definitions": {
      "kr_proc": "달리 비행장 관제탑에서 허가하지 않는 한 이동 중인 항공기와 차량 등이 정지ㆍ대기하여야 하는 지정된 구역으로 활주로, 장애제한 구역, ILS/MLS 임계지역/민감지역을 보호하기 위하여 설정됨.",
      "annex11": null,
      "doc4444": "A designated position intended to protect a runway, an obstacle limitation surface, or an ILS/MLS critical/sensitive area at which taxiing aircraft and vehicles shall stop and hold, unless otherwise authorized by the aerodrome control tower. Note.— In radiotelephony phraseologies, the expression “holding point” is used to designate the runway-holding position.",
      "faa_pcg": null,
      "kr_ats": "활주로, 장 애물제한 구역 또는 ILS/MLS 중요/주의구역을 보호하기 위하여 지정된 곳으로 지상이동 항공기 및 차량은 비행 장관제탑에서 별도로 허가를 받지 않는 이상 정지 및 대기해야 하는 지점을 말한다. 주기 - 무선통신용어에서는 활주로대기지점을 지정하 기 위해 \"holding point\"라는 표현을 사용한다."
    }
  },
  {
    "enName": "RVR",
    "krName": "활주로가시거리",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "활주로의 중심선에 있는 항공기 의 조종사가 활주로의 윤곽을 나타내거나 활주로의 중 심선을 표시하는 활주로 표면표시 또는 등화를 볼 수 있는 거리를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "SAFETY ALERT",
    "krName": "안전경고",
    "definitions": {
      "kr_proc": "안전경고는 관제사의 판단에 따라 항공기가 산악, 장애물 또는 다른 항공기와 고도상으로 불안전한 충돌 위치에 있다고 판단 시 관제사가 항공기에게 발부한다. 조종사가 당해 상황을 회피하기 위하여 수정조치를 취하고 있거나 다른 항공기를 확인하였음을 조언한 경우 관제사는 경고발부를 중단할 수 있다.\n1. Terrain/Obstruction Alert - 관제사의 판단에 따라 항공기가 산악/장애물에 고도상으로 불안전한 충돌위치에 있다고 인지될 경우 항공교통관제기관의 관제하에 있는 항공기에게 발부되는 안전경고. 예를 들면 “Low Altitude Alert, check your altitude immediately.”\n2. Aircraft Conflict Alert - 관제사의 판단에 따라 관제하에 있는 항공기와 비관제 항공기가 두 항공기 상호간에 불안전한 충돌위치에 있다고 인지될 경우 관제항공기에게 발부되는 안전경고. 관제사는 경고와 함께 가능한 조종사에게 대체진로를 제공한다. 예를 들면\n“Traffic Alert, advise you turn right heading Zero niner zero or climb to eight thousand immediately.”\n(주기) : 안전경고의 발부는 불안전한 상황을 인지하는 관제사의 능력에 따른 부가적인 것이다. 제공된 비행진로는 관제하에 있는 다른 항공기에 입각한 것이다. 일단 경고가 발부되면 어느 방향으로 조치를 취할 것인가는 전적으로 조종사의 특권이며 그에 따라 조종사는 조치를 취해야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A safety alert issued by ATC to aircraft under their control if ATC is aware the aircraft is at an altitude which, in the controller’s judgment, places the aircraft in unsafe proximity to terrain, obstructions, or other aircraft. The controller may discontinue the issuance of further alerts if the pilot advises he/she is taking action to correct the situation or has the other aircraft in sight. a. Terrain/Obstruction Alert− A safety alert issued by ATC to aircraft under their control if ATC is aware the aircraft is at an altitude which, in the controller’s judgment, places the aircraft in unsafe proximity to terrain/obstructions; e.g., “Low Altitude Alert, check your altitude immediately.” b. Aircraft Conflict Alert− A safety alert issued by ATC to aircraft under their control if ATC is aware of an aircraft that is not under their control at an altitude which, in the controller’s judgment, places both aircraft in unsafe proximity to each other. With the alert, ATC will offer the pilot an alternate course of action when feasible; e.g., “Traffic Alert, advise you turn right heading zero niner zero or climb to eight thousand immediately.” Note: The issuance of a safety alert is contingent upon the capability of the controller to have an awareness of an unsafe condition. The course of action provided will be predicated on other traffic under ATC control. Once the alert is issued, it is solely the pilot’s prerogative to determine what course of action, if any, he/she will take.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SAIL BACK",
    "krName": "",
    "definitions": {
      "kr_proc": "수상 비행기의 이동이 수상 방향타/객실창문의 개폐에 의하여 조종되는 곳에서(일반적으로 Power off 상태에서) 강풍상태일 경우 이루어지는 항공기 기동.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A maneuver during high wind conditions (usually with power off) where float plane movement is controlled by water rudders/opening and closing cabin doors.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SAME DIRECTION AIRCRAFT",
    "krName": "동일방향 항공기",
    "definitions": {
      "kr_proc": "항공기가 다음과 같이 같은 방향으로 운항 할 때\n1. 같은 방향으로 동일한 항적을 따라 운항\n2. 항적이 평행하고 항공기가 같은 방향으로 비행\n3. 항적이 45°미만으로 교차할 때",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aircraft are operating in the same direction when: a. They are following the same track in the same direction; or b. Their tracks are parallel and the aircraft are flying in the same direction; or c. Their tracks intersect at an angle of less than 45 degrees.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SAR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : search and rescue)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SEARCH AND RESCUE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SATELLITE-BASED AUGMENTATION SYSTEM (SBAS)",
    "krName": "",
    "definitions": {
      "kr_proc": "위성 기반 송신기로부터 보정 정보를 수신하는 넓은 범위 보정 시스템. (참조 : WIDE-AREA AUGMENTATION SYSTEM (WAAS))",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SAY AGAIN",
    "krName": "",
    "definitions": {
      "kr_proc": "마지막 송신 내용을 반복하도록 요구할 때 사용되는 용어. 일반적으로 이해하지 못하거나 수신하지 못한 송신내용 또는 일부분을 명시한다. 예를 들면, “Say again all after BSN VOR󰡓.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used to request a repeat of the last transmission. Usually specifies transmission or portion thereof not understood or received; e.g., “Say again all after ABRAM VOR.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "SAY ALTITUDE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 특정한 고도를 확인하기 위하여 사용하는 용어. 항공기가 상승 또는 강하시 조종사는 지시고도를 가장 가까운 100피트 단위로 반올림하여 통보하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to ascertain an aircraft’s specific altitude/flight level. When the aircraft is climbing or descending, the pilot should state the indicated altitude rounded to the nearest 100 feet.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SAY HEADING",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 기수를 조종사에게 요구할 때 사용되는 용어. 조종사는 항공기의 실제기수를 통보하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to request an aircraft heading. The pilot should state the actual heading of the aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SCHEDULED TIME OF ARRIVAL",
    "krName": "STA : 계획된 도착 예정 시간",
    "definitions": {
      "kr_proc": "STA는 항공기가 선호하는 특정지점 통과 및 착륙 예정시간이다. 이것은 모든 항공기 비행 상황과 비행공역의 상황이 반영된다. STA 시간은 TMA 스케줄러의 결과를 나타낸다. 예, 항공기의 도착예정시간은 비행 상황과 효과적인 분리, 항공기 성능 그리고 기상이 반영된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A STA is the desired time that an aircraft should cross a certain point (landing or metering fix). It takes other traffic and airspace configuration into account. A STA time shows the results of the TBFM scheduler that has calculated an arrival time according to parameters such as optimized spacing, aircraft performance, and weather.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SDF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : simplified directional facility)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SEALANE",
    "krName": "",
    "definitions": {
      "kr_proc": "수상에서 운항하도록 설계된 항공기를 위하여 시각적 마커로 표시된 수면상의 지정된 부분.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A designated portion of water outlined by visual surface markers for and intended to be used by aircraft designed to operate on water.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEARCH AND RESCUE",
    "krName": "수색 및 구조",
    "definitions": {
      "kr_proc": "실종 항공기를 수색하고 원조 요청을 지원하는 업무. 수색 및 구조에 관련된 정보는 항공교통기관을 통해서 전달되거나 전화로 구조조정센터에 직접 통보한다.\n(참조) : FLIGHT SERVICE STATION\nRESCUE COORDINATION CENTER",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A service which seeks missing aircraft and assists those found to be in need of assistance. It is a cooperative effort using the facilities and services of available Federal, state and local agencies. The U.S. Coast Guard is responsible for coordination of search and rescue for the Maritime Region, and the U.S. Air Force is responsible for search and rescue for the Inland Region. Information pertinent to search and rescue should be passed through any air traffic facility or be transmitted directly to the Rescue Coordination Center by telephone. (See FLIGHT SERVICE STATION.) (See RESCUE COORDINATION CENTER.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEARCH AND RESCUE FACILITY",
    "krName": "수색 및 구조기관",
    "definitions": {
      "kr_proc": "조난에 처한 인명 또는 재산에 대하여 원조하기 위하여 수색 및 구조업무를 유지ㆍ운영하는데 대한 책임이 있는 기관.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A facility responsible for maintaining and operating a search and rescue (SAR) service to render aid to persons and property in distress. It is any SAR unit, station, NET, or other operational activity which can be usefully employed during an SAR Mission; e.g., a Civil Air Patrol Wing, or a Coast Guard Station. (See SEARCH AND RESCUE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SECONDARY RADAR",
    "krName": "2차레이더",
    "definitions": {
      "kr_proc": "레이더국으로부터 송신된 무선신호가 다른 무선신호의 송신을 발생시키는 레이더시스템",
      "annex11": null,
      "doc4444": "A radar system wherein a radio signal transmitted from the radar station initiates the transmission of a radio signal from another station.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SECONDARY RADAR TARGET",
    "krName": "2차레이더 항적",
    "definitions": {
      "kr_proc": "레이더 상에 트랜스폰더로부터 나온 신호로 구성된 항적",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A target derived from a transponder return presented on a radar display.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SECONDARY SURVEILLANCE RADAR",
    "krName": "",
    "definitions": {
      "kr_proc": "SSR(2차 감시레이더):송신기/수신기(질문기) 및 트랜스폰더를 사용하는 감시레이더 체계",
      "annex11": null,
      "doc4444": "A surveillance radar system which uses transmitters/receivers (interrogators) and transponders.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SECTIONAL AERONAUTICAL CHART",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : aeronautical chart)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SECTOR LIST DROP INTERVAL",
    "krName": "섹터목록표 삭제간격",
    "definitions": {
      "kr_proc": "도착항공기가 설정된 픽스를 통과하여 도착 항공기 목록에서 삭제할 수 있는 분 단위의 간격.\nSECURITY NOTICE (SECNOT)(안전 통보서) : 안전통보서는 항공 안전 제작사로 (ATSC) 로부터의 요구사항으로서 관련 항공기 수색 업무, 관련이 되어있다고 판단되는 항공기, 안전을 위반한 항공기 혹은 저해 여부가 있는 항공기를 위한 것이다.\n안전 통보서는 항공기의 정보, 위치, 만료일이 포함되어 있다. 수색 장소는 (ATSC)에 따라 하나의 공항, 여러 공항들, 공항의 주변, fix 혹은 항공기의 이동 경로를 포함한다. 도착예정 만료시간 전 항공기가 도달 시 자동으로 안전통보서는 취소된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A parameter number of minutes after the meter fix time when arrival aircraft will be deleted from the arrival sector list.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SECURITY SERVICES AIRSPACE",
    "krName": "안전 서비스 공역",
    "definitions": {
      "kr_proc": "정상적인 절차 혹은 NOTAM을 통해 만들어진 공역 제14조 CFR 99,7 , 91, 141 91, 139항 에 따라 항공 안전 서비스가 요구되는 공역(예. ADIZ 혹은 임시 비행 공역)을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Areas established through the regulatory process or by NOTAM, issued by the Administrator under title 14, CFR, sections 99.7, 91.141, and 91.139, which specify that ATC security services are required; i.e., ADIZ or temporary flight rules areas.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEE AND AVOID",
    "krName": "육안회피",
    "definitions": {
      "kr_proc": "계기 또는 시계비행규칙으로 운항하는 조종사는 기상조건이 허락될 때, 다른 항공기를 회피하기 위한 관찰 및 기동이 요구된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "When weather conditions permit, pilots operating IFR or VFR are required to observe and maneuver to avoid other aircraft. Right-of-way rules are contained in 14 CFR part 91.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEGMENTED CIRCLE",
    "krName": "",
    "definitions": {
      "kr_proc": "관제탑이 운영되지 않는 비행장에서 교통장주 정보를 제공하기 위하여 설치된 시각표시시스템.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A system of visual indicators designed to provide traffic pattern information at airports without operating control towers. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEGMENTS OF AN INSTRUMENT APPROACH PROCEDURE",
    "krName": "계기접근절차 단계",
    "definitions": {
      "kr_proc": "계기접근절차는 접근절차의 구성에 따라 4 부분으로 구성된다.\n1. 첫 접근(Initial Approach) - 첫 접근픽스와 중간 접근픽스 또는 중간진로 내지 최종 접근진로에 항공기 정대 지점 사이의 구간.\n2. 중간접근(Intermediate Approach) - 중간픽스 또는 지점과 최종접근픽스 사이의 구간.\n3. 최종접근(Final Approach) - 최종접근픽스 또는 지점과 활주로 비행장 또는 실패접근지점 사이의 구간.\n4. 실패접근(Missed Approach) - 실패접근지점 또는 결심고도와 명시된 고도의 실패접근픽스 사이의 구간.\n(참조) : ICAO 용어 MISSED APPROACH PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An instrument approach procedure may have as many as four separate segments depending on how the approach procedure is structured. a. Initial Approach− The segment between the initial approach fix and the intermediate fix or the point where the aircraft is established on the intermediate course or final approach course. (See ICAO term INITIAL APPROACH SEGMENT.) b. Intermediate Approach− The segment between the intermediate fix or point and the final approach fix. (See ICAO term INTERMEDIATE APPROACH SEGMENT.) c. Final Approach− The segment between the final approach fix or point and the runway, airport, or missed approach point. (See ICAO term FINAL APPROACH SEGMENT.) d. Missed Approach− The segment between the missed approach point or the point of arrival at decision height and the missed approach fix at the prescribed altitude. (Refer to 14 CFR part 97.) (See ICAO term MISSED APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Segregated parallel operation",
    "krName": "분리평행운영",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "하나의 활주로는 접근만을 위해 사용하고 다른 활주로는 출발 만을 위해 사용하는 평행 또는 준평행 계기활주로에서 의 동시 운영을 말한다. 송신기관/관제사. 전문을 송신하는 항공교통업무시설/항 공교통관제사를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "SEPARATION",
    "krName": "분리",
    "definitions": {
      "kr_proc": "항공교통관제에서 비행 및 이ㆍ착륙시 안전하고 질서 정연한 이동을 확보하기 위한 항공기의 공간분리.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Spacing between aircraft, levels or tracks.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEPARATION MINIMA",
    "krName": "분리최저치",
    "definitions": {
      "kr_proc": "항공교통관제절차에 따라 항공기간 분리되는 종적, 횡적 또는 수직적인 최저거리",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The minimum longitudinal, lateral, or vertical distances by which aircraft are spaced through the application of air traffic control procedures. (See SEPARATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SERVICE",
    "krName": "업무",
    "definitions": {
      "kr_proc": "업무를 의미하며  기능 및 도움을 항공관제로부터 받을 수 있는 것을 말한다. 예, CLASS C에 대한 관제 서비스는 CLASS C에 해당되는 공역에 한해서 제공된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A generic term that designates functions or assistance available from or rendered by air traffic control. For example, Class C service would denote the ATC services provided within a Class C airspace area.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEVERE WEATHER AVOIDANCE PLAN",
    "krName": "위험성이 있는 기상 회피 계획",
    "definitions": {
      "kr_proc": "허가된 계획서는 ACC 구역 또는 영향을 미치는 공항으로부터 항공기가 위험한 기상의 피해를 최소화하기 위한 것이다. SWAP 은 주로 항공교통관제시스템에게 안 좋은 기상의 비행 공역 또는 비행이 불가능한 비행구역을 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An approved plan to minimize the affect of severe weather on traffic flows in impacted terminal and/or ARTCC areas. A SWAP is normally implemented to provide the least disruption to the ATC system when flight through portions of airspace is difficult or impossible due to severe weather.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SEVERE WEATHER FORECAST ALERTS",
    "krName": "악기상 예보 경고",
    "definitions": {
      "kr_proc": "악기상 주의회보(WW)가 발부되는 것을 사용자에게 주의시키기 위하여 제공되는 예비정보. 이 정보는 강한 천둥번개 또는 폭풍이 예상되는 지역을 지정한다. 이 정보는 부정기적이고 요청 시, 발부 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Preliminary messages issued in order to alert users that a Severe Weather Watch Bulletin (WW) is being issued. These messages define areas of possible severe thunderstorms or tornado activity. The messages are unscheduled and issued as required by the Storm Prediction Center (SPC) at Norman, Oklahoma. (See AIRMET.) (See CONVECTIVE SIGMET.) (See CWA.) (See GRAPHICAL AIRMEN’S METEOROLOGICAL INFORMATION.) (See SIGMET.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SFA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : single frequency approach)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SINGLE FREQUENCY APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SHORELINE",
    "krName": "해안선",
    "definitions": {
      "kr_proc": "해안의 일반적인 윤곽을 따라 표시한 선으로서, 폭 30NM미만 어귀 또는 만의 경우에는 어귀 또는 만을 가로질러 반대편 윤곽선까지 이어서 표시함.",
      "annex11": null,
      "doc4444": "A line following the general contour of the shore, except that in cases of inlets or bays less than 30 nautical miles in width, the line shall pass directly across the inlet or bay to intersect the general contour on the opposite side.",
      "faa_pcg": null,
      "kr_ats": "해안의 일반적인 윤곽을 따라 표시 한 선으로서, 폭 30NM 미만인 어귀 또는 만의 경우에 는 어귀 또는 만을 가로질러 반대편 윤곽선까지 이어서 표시한다."
    }
  },
  {
    "enName": "SHORT RANGE CLEARANCE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제기관이 완전한 허가를 협의하는 동안 인근 특정 픽스로 IFR 비행하도록 출발 IFR 항공기에 발부되는 허가.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A clearance issued to a departing IFR flight which authorizes IFR flight to a specific fix short of the destination while air traffic control facilities are coordinating and obtaining the complete clearance.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SHORT TAKEOFF AND LANDING AIRCRAFT",
    "krName": "단거리 이ㆍ착륙 항공기",
    "definitions": {
      "kr_proc": "인가된 비행하중 범위 내 적용 가능한 STOL(단거리 이착륙) 특성, 감항성, 운항, 소음 및 공해기준에 따라 STOL 활주로에서 운항할 수 있는 항공기.\n(참조) : VERTICAL TAKEOFF AND LANDING AIRCRAFT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft which, at some weight within its approved operating weight, is capable of operating from a runway in compliance with the applicable STOL characteristics, airworthiness, operations, noise, and pollution standards. (See VERTICAL TAKEOFF AND LANDING AIRCRAFT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SIAP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : standard instrument approach procedure)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See STANDARD INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SID",
    "krName": "표준계기출발절차",
    "definitions": {
      "kr_proc": "(참조 : STANDARD INSTRUMENT DEPARTURE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See STANDARD INSTRUMENT DEPARTURE.)",
      "kr_ats": "비행장 또는 비행장의 특정 활 주로에서 일반적으로 항공교통업무 항공로상 순항단계 의 비행이 시작되는 주요지점까지 연결하기 위해 설정 된 계기비행 출발 비행로를 말한다."
    }
  },
  {
    "enName": "SIDESTEP MANEUVER",
    "krName": "측면기동",
    "definitions": {
      "kr_proc": "계기접근이 수립되어 있는 활주로와 간격이 1200피트 이하인 평행활주로에 직진입 착륙을 허가하기 위하여 계기접근 완료 시, 조종사가 수행하는 시각적인 비행기동.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A visual maneuver accomplished by a pilot at the completion of an instrument approach to permit a straight-in landing on a parallel runway not more than 1,200 feet to either side of the runway to which the instrument approach was conducted. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SIGMET",
    "krName": "위험기상 예보",
    "definitions": {
      "kr_proc": "모든 항공기의 안전에 대한 위험기상 정보가 포함된 기상 조언. 조언에는 심각하고 급격한 요란현상, 심각한 착빙현상 그리고 시정을 3마일 미만으로 저하시키는 넓은 범위의 먼지 또는 황사를 포함\n(참조) : AIRMET, AWW, CONVECTIVE SIGMET, CWA, SIGMET INFORMATION, AIM",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A weather advisory issued concerning weather significant to the safety of all aircraft. SIGMET advisories cover severe and extreme turbulence, severe icing, and widespread dust or sandstorms that reduce visibility to less than 3 miles. (See AIRMET.) (See CONVECTIVE SIGMET.) (See CWA.) (See GRAPHICAL AIRMEN’S METEOROLOGICAL INFORMATION.) (See ICAO term SIGMET INFORMATION.) (See SAW.) (Refer to AIM.)",
      "kr_ats": "항공기 안전 운항에 영향을 미 치는 특정 항공로 기상현상과 기타 기상현상이 발생하 - 개정 : 2026.07.06. 항공교통업무기준 였거나 발생할 것으로 예상될 경우에 기상감시사무소에 서 발행하는 정보를 말한다."
    }
  },
  {
    "enName": "SIGMET INFORMATION",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 안전운항에 영향을 미칠 수 있는 특정한 항공로에서 기상현상의 발생 또는 발생예상에 대하여 기상 관측소에서 발부하는 정보.",
      "annex11": "Information issued by a meteorological watch office concerning the occurrence or expected occurrence of specified en-route weather and other phenomena in the atmosphere that may affect the safety of aircraft operations.",
      "doc4444": "Information issued by a meteorological watch office concerning the occurrence or expected occurrence of specified en-route weather and other phenomena in the atmosphere that may affect the safety of aircraft operations.",
      "faa_pcg": "Information issued by a meteorological watch office concerning the occurrence or expected occurrence of specified en-route weather phenomena which may affect the safety of aircraft operations.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SIGNIFICANT METEOROLOGICAL INFORMATION",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : SIGMET)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SIGMET.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SIGNIFICANT POINT",
    "krName": "주요지점",
    "definitions": {
      "kr_proc": "지정된 교차점, 항행안전시설에 기초한 지점 또는 위도와 경도의 도(。) 단위로 표현된 지리적 좌표로 분리제공의 목적을 위하여 수립되거나 또는 비행로를 지정하기 위하여 수립된 지점.",
      "annex11": "A specified geographical location used in defining an ATS route or the flight path of an aircraft and for other navigation and ATS purposes. Note.— There are three categories of significant points: ground-based navigation aid, intersection and waypoint. In the context of this definition, intersection is a significant point expressed as radials, bearings and/or distances from ground- based navigation aids.",
      "doc4444": "A specified geographical location used in defining an ATS route or the flight path of an aircraft and for other navigation and ATS purposes. Note.— There are three categories of significant points: ground-based navigation aid, intersection and waypoint. In the context of this definition, intersection is a significant point expressed as radials, bearings and/or distances from ground-based navigation aids.",
      "faa_pcg": "A point, whether a named intersection, a NAVAID, a fix derived from a NAVAID(s), or geographical coordinate expressed in degrees of latitude and longitude, which is established for the purpose of providing separation, as a reporting point, or to delineate a route of flight.",
      "kr_ats": "항공교통로 또는 항공기의 비행로를 정의하거나 기타 항법 및 항공교통업무 목적 으로 사용되는 특정한 지리적 위치를 말한다. 주기 - 주요지점은 3가지 범주가 있다: 지상기반 항 행안전시설, 교차지점 및 웨이포인트. 교차지점은 지상 기반 항행안전시설로부터 반경, 방위 및/또는 거리로 표시되는 중요한 지점이다."
    }
  },
  {
    "enName": "SIGNIFICANT POINT",
    "krName": "중요지점",
    "definitions": {
      "kr_proc": "항공로 또는 항공기의 비행로를 나타내고 다른 항행 및 항공교통업무(ATS)목적으로 사용되는 특정한 지리적 위치",
      "annex11": "A specified geographical location used in defining an ATS route or the flight path of an aircraft and for other navigation and ATS purposes. Note.— There are three categories of significant points: ground-based navigation aid, intersection and waypoint. In the context of this definition, intersection is a significant point expressed as radials, bearings and/or distances from ground- based navigation aids.",
      "doc4444": "A specified geographical location used in defining an ATS route or the flight path of an aircraft and for other navigation and ATS purposes. Note.— There are three categories of significant points: ground-based navigation aid, intersection and waypoint. In the context of this definition, intersection is a significant point expressed as radials, bearings and/or distances from ground-based navigation aids.",
      "faa_pcg": "A point, whether a named intersection, a NAVAID, a fix derived from a NAVAID(s), or geographical coordinate expressed in degrees of latitude and longitude, which is established for the purpose of providing separation, as a reporting point, or to delineate a route of flight.",
      "kr_ats": "항공교통로 또는 항공기의 비행로를 정의하거나 기타 항법 및 항공교통업무 목적 으로 사용되는 특정한 지리적 위치를 말한다. 주기 - 주요지점은 3가지 범주가 있다: 지상기반 항 행안전시설, 교차지점 및 웨이포인트. 교차지점은 지상 기반 항행안전시설로부터 반경, 방위 및/또는 거리로 표시되는 중요한 지점이다."
    }
  },
  {
    "enName": "SIMPLIFIED DIRECTIONAL FACILITY",
    "krName": "",
    "definitions": {
      "kr_proc": "비정밀 계기접근에 사용되는 항행안전시설. 일반적으로 활주로와 3°미만으로 벌어져 있으며, Localizer의 폭보다 넓어서 정밀도가 떨어지는 것을 제외하고는  SDF 최종접근로는 ILS Localizer와 비슷하다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SIMULATED FLAMEOUT",
    "krName": "가상엔진정지",
    "definitions": {
      "kr_proc": "(일반적으로 군용에서) 제트항공기가 활주로에 IDLE TRUST : 상태로 비행하는 연습접근. 이 접근은 high key에서 시작하고 Final로 계속적인 선회와 더불어 상대적으로 높고 넓은 Downwind Leg를 통해서 final 상으로 비행할 수 있다. 이런 접근은 착륙 또는 low approach로 종료된다. 이 접근의 목적은 항공기가 엔진정지 상태를 대비하여 훈련하는 것이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A practice approach by a jet aircraft (normally military) at idle thrust to a runway. The approach may start at a runway (high key) and may continue on a relatively high and wide downwind leg with a continuous turn to final. It terminates in landing or low approach. The purpose of this approach is to simulate a flameout. (See FLAMEOUT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SIMULTANEOUS CLOSE PARALLEL APPROACHES",
    "krName": "근접 동시 평행 접근",
    "definitions": {
      "kr_proc": "활주로 중앙선이 3,000피트 이상 4,300피트 미만으로 분리된 평행 활주로를 가진 공항에 대한 ILS/RNAV/GLS 접근을 허용하는 동시 독립적 접근 운영. 항공기는 이 동시 운영 중에 서로 추월할 수 있다. 전체 시스템의 필수 요소는 레이더, 청각 및 시각 경보와 항공기 위치 예측 소프트웨어를 포함하는 향상된 FMA 컬러 디스플레이를 갖춘 NTZ 모니터링, 통신장비, 항공교통관제절차, AAUP, 접근 명칭상의 PRM과 적절한 지상 기반 및 비행 장비가 있다. 특정 활주로 또는 접근 경로 분리를 위해 빠른 속도로 업데이트 되는 센서가 필요하다.\nSIMULTANEOUS (CONVERGING) DEPENDENT APPROACHES(동시 (수렴) 종속 접근) : 최종접근경로 상 항공기 간 최소간격을 유지해야 할 필요가 있는 곳에서 교차하는 활주로 또는 실패접근 경로로 ILS/RNAV/GLS 접근을 허가하는 접근 운영.\nSIMULTANEOUS (CONVERGING) INDEPENDENT APPROACHES(동시 (수렴) 독립 접근) : 전체 접근 및 실패접근을 수행하는 동안 항공기 간 간격을 유지하도록 절차가 설계되고 독립적으로 운영할 수 있는 비 평행활주로로 ILS/RNAV/GLS 접근을 허가하는 접근 운영.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A simultaneous, independent approach operation permitting ILS/RNAV/GLS approaches to airports having parallel runways separated by at least 3,000 feet and less than 4,300−feet between centerlines. Aircraft are permitted to pass each other during these simultaneous operations. Integral parts of a total system are radar, NTZ monitoring with enhanced FMA color displays that include aural and visual alerts and predictive aircraft position software, communications override, ATC procedures, an Attention All Users Page (AAUP), PRM in the approach name, and appropriate ground based and airborne equipment. High update rate surveillance sensor required for certain runway or approach course separations.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SIMULTANEOUS ILS APPROACHES",
    "krName": "동시 ILS 접근",
    "definitions": {
      "kr_proc": "활주로 중심선간 간격이 최소4300피트 분리된 평행활주로를 갖춘 비행장에 동시 ILS 접근을 인가하는 접근 시스템.  전체 시스템의 필수요소는 ILS, RADAR, 통신, 항공교통관제절차 및 적절한 항공기 탑재장비이다.\n(참조) : PARALLEL RUNWAYS\nSIMULTANEOUS OFFSET INSTRUMENT APPROACH(SOIA) (동시 OFFSET 계기접근) : ILS PRM(활주로 감시), RNAV PRM 또는 단일활주로 GLS PRM 접근 그리고 활공로 정보가 포함된 오프셋(OFFSET) LDA PRM 또는 RNAV PRM 또는 거리가 3000피트 미만이거나 최소 750피트 떨어진 평행활주로에 대한 수직정보를 이용한 GLS PRM이 포함된 계기착륙시스템. 접근 코스는 2.5에서 3도로 수렴된다. 동시 근접 평행 PRM 접근 절차는 OFFSET MAP에서 접근경로가 3000피트 분리될 때 적용된다.  OFFSET 접근중인 항공기에 대한 시각 분리는 OFFSET MAP에서 활주로 종단까지 구간에서 적용된다.\nSIMULTANEOUS (PARALLEL) DEPENDENT APPROACHES(동시(평행) 종속접근) : 대각선 거리가 유지되어야 하는 인접한 평행활주로에 대한 ILS/RNAV/GLS 접근. 항공기는 동시 종속 접근 중 각 항공기의 추월이 허가되지 않는다. 전체 시스템의 필수요소는 항공교통관제절차, 적절한 항공기 탑재 장비 및 지상 장비다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An approach system permitting simultaneous ILS approaches to airports having parallel runways separated by at least 4,300 feet between centerlines. Integral parts of a total system are ILS, radar, communications, ATC procedures, and appropriate airborne equipment. (See PARALLEL RUNWAYS.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SINGLE DIRECTION ROUTE",
    "krName": "단일 방향 비행로",
    "definitions": {
      "kr_proc": "종종 고고도 항공로지도에 도시되는 우선권이 주어진 IFR 항공로며 일반적으로 단일 방향으로만 흐름이 이루어진다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SINGLE FREQUENCY APPROACH",
    "krName": "단일 주파수접근",
    "definitions": {
      "kr_proc": "협의에 의거 군용 단좌제트기에 제공되는 업무로, 착륙을 위한 접근 시, 단일 UHF 주파수의 사용을 허가한다. 지역관제소로부터 터미널시설로 관제이양 될 때, 항공로상 고도강하를 위하여 주파수변경을 필요로 하는 경우를 제외하고, 일반적으로 조종사에게 접근 시작단계부터 접지대까지 주파수변경을 요구하지 않는다. DOD FLIP상의 약어 “SFA” 는 이 업무가 공항에서 사용할 수 있음을 나타 낸다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A service provided under a letter of agreement to military single-piloted turbojet aircraft which permits use of a single UHF frequency during approach for landing. Pilots will not normally be required to change frequency from the beginning of the approach to touchdown except that pilots conducting an en route descent are required to change frequency when control is transferred from the air route traffic control center to the terminal facility. The abbreviation “SFA” in the DoD FLIP IFR Supplement under “Communications” indicates this service is available at an aerodrome.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SINGLE PILOTED AIRCRAFT",
    "krName": "단좌항공기",
    "definitions": {
      "kr_proc": "단좌, 복좌 또는 두 개의 조종장치를 갖지만 한 명의 조종사에 의하여 조종되는 군용 터보제트기는 항공교통업무를 제공 할 때, 단좌항공기로 간주된다.\n(참조) : SINGLE FREQUENCY APPROACH",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A military turbojet aircraft possessing one set of flight controls, tandem cockpits, or two sets of flight controls but operated by one pilot is considered single-piloted by ATC when determining the appropriate air traffic service to be applied. (See SINGLE FREQUENCY APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Situation display",
    "krName": "상황전시기",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기의 위치, 이동 및 필요에 따라 기타 정보를 표시하는 전자 디스플레이를 말한다.",
      "annex11": "",
      "doc4444": "An electronic display depicting the position and movement of aircraft and other information as required.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "SKY SPOTTER",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기 안에서 기상현상을 관측하고 보고하는 훈련을 받은 특별한 조종사",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A pilot who has received specialized training in observing and reporting inflight weather phenomena.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SLASH",
    "krName": "",
    "definitions": {
      "kr_proc": "연장된 타겟으로 전시되는 레이더 비컨 응답.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A radar beacon reply displayed as an elongated target.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SLDI",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : sector list drop interval)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SECTOR LIST DROP INTERVAL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SLOT TIME",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : meter fix time slot time)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SLOW TAXI",
    "krName": "",
    "definitions": {
      "kr_proc": "수상비행기의 저출력 또는 낮은 회전수로 활주.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "To taxi a float plane at low power or low RPM. SMALL UNMANNED AIRCRAFT SYSTEM (sUAS)– An unmanned aircraft weighing less than 55 pounds on takeoff, including everything that is on board or otherwise attached to the aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SLUSH",
    "krName": "진창",
    "definitions": {
      "kr_proc": "발로 밟았을 때 물이 퉁기는 상태로 변한 물에 젖은 눈으로 비중은 0.5에서 0.8.\n(주기) : 특히 비, 진눈개비 및 눈이 내릴 때 얼음, 눈 또는 고여 있는 물과 섞여 있을 경우, 비중이 0.8을 초과하는 물질로 될 수 있음. 이 물질들은 물/얼음 함유량이 많기 때문에 탁하기 보다는 투명하고 비중이 높아 쉽게 구분된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SMS",
    "krName": "안전관리시스템",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "안전관리에 필요한 조직구조, 책 임 사항, 정책 및 절차 등에 안전관리에 대한 체계적인 접근을 말한다. 2차레이더. 레이더국으로 부터 송신된 무선신호가 다른 무선신호의 송신을 발생시키는 레이더 체제를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "SNOW(ON THE GROUND)",
    "krName": "",
    "definitions": {
      "kr_proc": "지표면의 눈\n1. DRY SNOW (마른눈) 자연 상태로 방치 시, 바람에 날리거나 손으로 뭉치는 경우, 놓으면 다시 흩어지는 눈. 비중은 0.35 미만\n2. WET SNOW(젖은 눈) 손으로 뭉칠 때, 눈 뭉치가 되어 단단해지는 눈. 비중은 0.35 이상 0.5 미만\n3. COMPACTED SNOW(굳은 눈) 한번 압축시키면 단단한 덩어리로서 더 이상 압축시킬 수 없는 상태가 되어 그대로 있거나 접었을 때, 한 덩어리로 분리되는 눈. 비중은 0.5 이상",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SPACE-BASED ADS-B (SBA)",
    "krName": "",
    "definitions": {
      "kr_proc": "ADS-B Out broadcasts를 수신하고 해당 정보를 적절한 감시 시설로 중계하는 위성 기반 시스템. 현재 SBA 시스템은 1090EA 장착 항공기로부터의 방송만 수신할 수 있고 UAT(Universal access transceiver)만을 장착한 항공기로부터는 수신할 수 없다. 또한, 기체 상단에 트랜트폰더 안테나(TACS Ⅱ 필수 장비)를 장착한 항공기는 위도 45도 미만의 지역에서 SBA에 의해 더 잘 수신된.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SPEAK SLOWER",
    "krName": "",
    "definitions": {
      "kr_proc": "음성통신에서 통화속도를 늦추도록 요구할 때 사용되는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used in verbal communications as a request to reduce speech rate.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPECIAL EMERGENCY",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기 또는 승객의 안전을 위협하는 항공기 탑승객에 의한 항공해적행위 또는 적대행위 상태.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A condition of air piracy or other hostile act by a person(s) aboard an aircraft which threatens the safety of the aircraft or its passengers.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPECIAL INSTRUMENT APPROACH PROCEDURE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : instrument approach procedure)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INSTRUMENT APPROACH PROCEDURE.) SPECIAL MILITARY ACTIVITY ROUTE (SMAR)– A route, which may also be charted on the VFR Sectional Chart, that shows the extent of the airspace allocated to an associated IFR Military Training Route within which the Department of Defense conducts periodic operations involving Unmanned Aircraft Systems (UAS).",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPECIAL USE AIRSPACE",
    "krName": "특별 사용공역",
    "definitions": {
      "kr_proc": "지구표면상의 한 지역으로 명시된 제한적인 범위의 공역으로, 이 지역 내에서는 그 특성에 따라 비행활동이 제한되고, 또는 비행활동의 일부분이 아닌 항공기 운항을 제한할 수 있다. 특별사용공역의 종류는 다음과 같다.\n1. Alert Area(경계구역) - 항공기에게 위험하지 않은 많은 양의 비행훈련활동 또는 이례적인 형태의 공중비행활동이 이루어지는 공역. 경계공역은 비참가 조종사에게 통보하기 위하여 항공지도에 도시된다. 경보공역 내에서의 모든 비행활동은 연방항공법에 따라 이루어지며, 경고공역을 통과하는 조종사뿐만 아니라 참가 항공기도 동일한 충돌회피의 책임이 있다.\n2. Military Operations Area(군작전공역) - IFR 항공기로부터 어떠한 비위협적인 군사활동을 분리하거나 격리시키고, 동 지역에서 이루어지는 군사활동을 VFR 항공기가 인식하도록 하기 위하여 Class A 공역 외부에 설정한 군사작전지역.\n3. Prohibited Area(비행금지공역) - 항공안전법 제78조의 규정에 의한 공역으로, 안전, 국방상 기타의 이유로 항공기의 비행을 금지하는 공역. 당해 금지공역 담당기관의 허가 없이 항공기를 운항하여서는 아니 된다.\n4. Restricted Area(비행제한공역) -항공안전법 제78조의 규정에 의한 공역으로, 당해 공역에서 항공기의 비행은 전적으로 금지되지는 않으나 제한을 받는다. 대부분의 제한공역은 공동사용으로 명시되어 있으며 사용기관에서 사용하지 않을 경우 제한공역에서 IFR/VFR 운항은 관할 항공교통관제기관으로부터 허가를 받을 수 있다. 제한공역은 항공지도에 표시되어 있다. 공동사용이 허가된 곳에서는 항공교통관제를 담당하는 해당기관의 명칭이 표시된다.\n(참조 : 항공안전법 시행규칙 별표23)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airspace of defined dimensions identified by an area on the surface of the earth wherein activities must be confined because of their nature and/or wherein limitations may be imposed upon aircraft operations that are not a part of those activities. Types of special use airspace are: a. Alert Area− Airspace which may contain a high volume of pilot training activities or an unusual type of aerial activity, neither of which is hazardous to aircraft. Alert Areas are depicted on aeronautical charts for the information of nonparticipating pilots. All activities within an Alert Area are conducted in accordance with Federal Aviation Regulations, and pilots of participating aircraft as well as pilots transiting the area are equally responsible for collision avoidance. b. Controlled Firing Area− Airspace wherein activities are conducted under conditions so controlled as to eliminate hazards to nonparticipating aircraft and to ensure the safety of persons and property on the ground. c. Military Operations Area (MOA)− Permanent and temporary MOAs are airspace established outside of Class A airspace area to separate or segregate certain nonhazardous military activities from IFR traffic and to identify for VFR traffic where these activities are conducted. Permanent MOAs are depicted on Sectional Aeronautical, VFR Terminal Area, and applicable En Route Low Altitude Charts. Note: Temporary MOAs are not charted. (Refer to AIM.) d. National Security Area (NSA)– Airspace of defined vertical and lateral dimensions established at locations where there is a requirement for increased security of ground facilities. Pilots are requested to voluntarily avoid flying through the depicted NSA. When a greater level of security is required, flight through an NSA may be temporarily prohibited by establishing a TFR under the provisions of 14 CFR section 99.7. Such prohibitions will be issued by FAA Headquarters and disseminated via the U.S. NOTAM System. (Refer to AIM)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPECIAL VFR CONDITIONS",
    "krName": "특별 시계비행조건",
    "definitions": {
      "kr_proc": "B, C, D, E 등급 공항표면구역(Surface Area) 내 VFR 비행 기상보다 낮은 기상상태에서, 항공기에게 시계비행규칙으로 비행이 허가된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Meteorological conditions that are less than those required for basic VFR flight in Class B, C, D, or E surface areas and in which some aircraft are permitted flight under visual flight rules. (See SPECIAL VFR OPERATIONS.) (Refer to 14 CFR part 91.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPECIAL VFR FLIGHT",
    "krName": "특별시계비행항공기",
    "definitions": {
      "kr_proc": "시계비행기상상태 미만의 상태에서 관제권내를 비행 할 수 있도록 항공교통관제기관이 인가한 시계비행항공기",
      "annex11": "A VFR flight cleared by air traffic control to operate within a control zone in meteorological conditions below VMC.",
      "doc4444": "A VFR flight cleared by air traffic control to operate within a control zone in meteorological conditions below VMC.",
      "faa_pcg": "A VFR flight cleared by air traffic control to operate within Class B, C, D, and E surface areas in meteorological conditions below VMC.",
      "kr_ats": "시계비행기상 상태 미만의 기상상태에서 항공교통관제허가를 받아 관 제권 내에서 운항하는 시계비행을 말한다. SSR 응답. 2차 감시레이더 트랜스폰더가 질문에 대한 응답으로서 상황전시기에 나타나는 비기호 형태의 시각 표시를 말한다."
    }
  },
  {
    "enName": "SPECIAL VFR FLIGHT",
    "krName": "특별시계비행",
    "definitions": {
      "kr_proc": "기상조건이 시계비행 기상상태 미만인 B, C, D 또는 E 등급 공항표면구역(Surface Area) 내에서 비행허가에 따라 이루어지는 항공기운항. 동 운항은 조종사 요구에 의거 항공교통관제기관이 허가한다.",
      "annex11": "A VFR flight cleared by air traffic control to operate within a control zone in meteorological conditions below VMC.",
      "doc4444": "A VFR flight cleared by air traffic control to operate within a control zone in meteorological conditions below VMC.",
      "faa_pcg": "A VFR flight cleared by air traffic control to operate within Class B, C, D, and E surface areas in meteorological conditions below VMC.",
      "kr_ats": "시계비행기상 상태 미만의 기상상태에서 항공교통관제허가를 받아 관 제권 내에서 운항하는 시계비행을 말한다. SSR 응답. 2차 감시레이더 트랜스폰더가 질문에 대한 응답으로서 상황전시기에 나타나는 비기호 형태의 시각 표시를 말한다."
    }
  },
  {
    "enName": "SPECIAL VFR OPERATIONS",
    "krName": "특별시계운항",
    "definitions": {
      "kr_proc": "기상조건이 시계비행 기상상태 미만인 B, C, D 또는 E 등급 공항표면구역(Surface Area) 내에서 비행허가에 따라 이루어지는 항공기운항. 동 운항은 조종사가 요구하고 항공교통관제기관이 허가한다.\n(참조) : SPECIAL VFR CONDITIONS, ICAO SPECIAL VFR FLIGHT",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aircraft operating in accordance with clearances within Class B, C, D, and E surface areas in weather conditions less than the basic VFR weather minima. Such operations must be requested by the pilot and approved by ATC. (See SPECIAL VFR CONDITIONS.) (See ICAO term SPECIAL VFR FLIGHT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPEED",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airspace)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRSPEED.) (See GROUND SPEED.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPEED ADJUSTMENT",
    "krName": "속도조절",
    "definitions": {
      "kr_proc": "적절한 분리제공 목적으로 조종사에게 항공기의 속도를 특정한 값으로 조절을 요구 할 때, 사용하는 항공교통관제절차. 조종사는 지시한 속도로부터  ±10KTS 또는 Mach 0.02를 유지하여야 한다.\n속도조절의 예 : 1. “Increase/reduce speed to Mach point (number).”   2. “Increase/reduce speed to (speed in knots).”       “Increase/reduce speed (number of knots) knots.”",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An ATC procedure used to request pilots to adjust aircraft speed to a specific value for the purpose of providing desired spacing. Pilots are expected to maintain a speed of plus or minus 10 knots or 0.02 Mach number of the specified speed. Examples of speed adjustments are: a. “Increase/reduce speed to Mach point (number).” b. “Increase/reduce speed to (speed in knots)” or “Increase/reduce speed (number of knots) knots.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPEED BRAKES",
    "krName": "감속장치",
    "definitions": {
      "kr_proc": "강하 또는 착륙 시 항공기의 속도를 감속할 수 있는 항공기 장치.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Moveable aerodynamic devices on aircraft that reduce airspeed during descent and landing.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SPEED SEGMENTS",
    "krName": "속도단계",
    "definitions": {
      "kr_proc": "속도와 고도가 명시된 최적비행경로를 따라 전이지점과 최고점 사이의 도착항공로부분. 각 전이지점으로부터 각 최고점까지는 하나의 도착속도 구분이 적용된다. 각 세트는 6개 구분까지 포함할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Portions of the arrival route between the transition point and the vertex along the optimum flight path for which speeds and altitudes are specified. There is one set of arrival speed segments adapted from each transition point to each vertex. Each set may contain up to six segments.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SQUAWK (Mode, Code, Function)",
    "krName": "",
    "definitions": {
      "kr_proc": "트랜스폰더 또는 고도 보고가 활성화된 ADS-B Out을 작동하도록 지시하거나, 특정 모드, 코드 또는 기능만 활성화하도록 지시하기 위해 ATC가 조종사에게 사용하는 용어. 예 : “Squawk five seven zero seven”, “Squawk three/alpha, two one zero five”\n(참조 : TRANSPONDER)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "SSR",
    "krName": "코드",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "송신기/수신기(질문기) 및 트랜스 폰더를 사용하는 감시 레이더 체제를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "SSR RESPONSE",
    "krName": "2차감시레이더 응답",
    "definitions": {
      "kr_proc": "질문에 대한 2차감시레이더 트랜스폰더 응답으로서 레이더 전시면에 나타나는 비기호 형태의 시각표시",
      "annex11": null,
      "doc4444": "The visual indication, in non-symbolic form, on a situation display, of a response from an SSR transponder in reply to an interrogation.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "STA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : SCHEDULED TIME OF ARRIVAL)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SCHEDULED TIME OF ARRIVAL.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STAGING/QUEUING",
    "krName": "",
    "definitions": {
      "kr_proc": "출발 픽스, EDCT 및 제한사항에 의한 비행장의 지정된 이동지역 내에서 출발항공기의 배치, 통합, 분리.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The placement, integration, and segregation of departure aircraft in designated movement areas of an airport by departure fix, EDCT, and/or restriction.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STAND BY",
    "krName": "대기",
    "definitions": {
      "kr_proc": "관제사 또는 조종사가 수 초 동안 기다려야 한다는 의미로, 일반적으로 다른  우선순위업무를 수행하기 위한 것이다. 또한 “Stand by for clearance”는 기다리란 것을 의미한다. 호출한 사람은 지연이 길어질 경우 재 교신을 하여야한다. “Stand by”는 승인 또는 거부를 의미하는 것은 아니다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Means the controller or pilot must pause for a few seconds, usually to attend to other duties of a higher priority. Also means to wait as in “stand by for clearance.” The caller should reestablish contact if a delay is lengthy. “Stand by” is not an approval or denial.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STANDARD INSTRUMENT APPROACH PROCEDURE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : instrument approach procedure)\nSTANDARD INSTRUMENT DEPARTURE(SID)(표준계기 출발절차) : 장애물 회피와 터미널 지역부터 적절한 항공로까지의 비행로를 제공하기 위하여 조종사/관제사가 사용할 수 있도록 그래픽 형태로 인쇄된 사전에 계획된 계기비행규칙 항공교통관제 출발 절차. SID는 교통흐름을 촉진하고 조종사/관제사의 업무부담을 줄이기 위하여 설계된다. SID를 비행하기 전에 ATC 허가를 반드시 받아야 한다.\n(참고) : IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES, OBSTACLE DEPARTURE PROCEDURE",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See INSTRUMENT APPROACH PROCEDURE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STANDARD INSTRUMENT DEPARTURE CHARTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : aeronautical chart)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "Standard message element",
    "krName": "표준전문요소",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "표시 형식, 계획된 용도 및 속성과 관련하여 PANS-ATM(Doc 4444)에 정의된 메시지 일부를 말한다.",
      "annex11": "",
      "doc4444": "Part of a message defined in the PANS-ATM (Doc 4444) in terms of display format, intended use and attributes.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "STANDARD RATE TURN",
    "krName": "표준 선회",
    "definitions": {
      "kr_proc": "초당 3도 선회",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A turn of three degrees per second.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STANDARD TERMINAL ARRIVAL",
    "krName": "표준 도착절차",
    "definitions": {
      "kr_proc": "조종사가 사용할 수있도록 그림과/또는 문자 형태로 발간된 사전에 계획된 계기비행규칙에 의거한 항공교통관제 도착절차. STAR는 항공로로부터 터미널지역의 외부지점(out of fix) 또는 계기접근픽스/도착지점까지의 비행로를 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A preplanned instrument flight rule (IFR) air traffic control arrival procedure published for pilot use in graphic and/or textual form. STARs provide transition from the en route structure to an outer fix or an instrument approach fix/arrival waypoint in the terminal area.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STANDARD TERMINAL ARRIVAL CHARTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 :  aeronautical chart)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AERONAUTICAL CHART.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STANDARD TERMINAL AUTOMATION REPLACEMENT SYSTEM(STARS)",
    "krName": "",
    "definitions": {
      "kr_proc": "(참고 : DTAS)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See DTAS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STAR",
    "krName": "표준계기도착절차",
    "definitions": {
      "kr_proc": "(참조 : standard terminal arrival)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See STANDARD TERMINAL ARRIVAL.)",
      "kr_ats": "일반적으로 항공교통업무 항 공로상의 주요지점에서 발간된 계기접근절차가 시작되 는 지점까지 연결하기 위해 설정된 계기비행 도착 비행 로를 말한다."
    }
  },
  {
    "enName": "STATE AIRCRAFT",
    "krName": "",
    "definitions": {
      "kr_proc": "군 또는 세관에서 사용하거나 경찰업무에 사용하는 항공기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aircraft used in military, customs and police service, in the exclusive service of any government or of any political subdivision thereof, including the government of any state, territory, or possession of the United States or the District of Columbia, but not including any government-owned aircraft engaged in carrying persons or property for commercial purposes.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STATIC RESTRICTIONS",
    "krName": "",
    "definitions": {
      "kr_proc": "일반적으로 변경되지 않으며, 고정되고 적소에 위치하거나 또는 발간된 제한사항.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Those restrictions that are usually not subject to change, fixed, in place, and/or published.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STATIONARY ALTITUDE RESERVATION (STATIONARY ALTRV)",
    "krName": "",
    "definitions": {
      "kr_proc": "일정한 지역 내에서의 활동을 포함하는 고도유보. stationary ALTRV는 무기체계 또는 장비의 특별점검, 편대비행 및 대잠수함작전, 로켓, 미사일, 무인항공기 비행, 공중급유 또는 유사작전과 같은 특별임무를 띤 활동을 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "STEP TAXI",
    "krName": "",
    "definitions": {
      "kr_proc": "수상비행기가 고출력 또는 높은 엔진회전수로 활주하는 것.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "To taxi a float plane at full power or high RPM.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STEP TURN",
    "krName": "",
    "definitions": {
      "kr_proc": "이륙하기 위하여 사용 중인 수상활주로로 진입하기 전에 수상비행기를 평행자세가 되도록 하는 비행조작. STEP TURN 조작은 조종사의 요구에 의하여 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A maneuver used to put a float plane in a planing configuration prior to entering an active sea lane for takeoff. The STEP TURN maneuver should only be used upon pilot request.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STEPDOWN FIX",
    "krName": "",
    "definitions": {
      "kr_proc": "통제장애물을 안전하게 통과 비행할 수 있는 지점을 표시함으로서 계기접근절차단계에서 추가적인 고도강하를 허가하는 지점.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A fix permitting additional descent within a segment of an instrument approach procedure by identifying a point at which a controlling obstacle has been safely overflown.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STEREO ROUTE",
    "krName": "",
    "definitions": {
      "kr_proc": "사용자 및 ACC의 식별된 코드명칭으로 설정된 통상적인 비행항공로. 예를 들면 ALPHA 2, 이 항공로는 비행계획처리 및 통신을 최소화한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A routinely used route of flight established by users and ARTCCs identified by a coded name; e.g., ALPHA 2. These routes minimize flight plan handling and communications. STNR ALT RESERVATION– An abbreviation for Stationary Altitude Reservation commonly used in NOTAMs. (See STATIONARY ALTITUDE RESERVATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOL AIRCRAFT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : short takeoff and landing aircraft)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SHORT TAKEOFF AND LANDING AIRCRAFT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOP ALTITUDE SQUAWK",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기 트랜스폰더와 ADS-B Out의 자동고도보고기능 중지를 항공기에게 통보할 때 항공교통관제기관이 사용하는 용어. 구두 보고 고도가 자동고도보고와 300피트 이상 차이가 있을 때 발부된다.\n(참조 : ALTITUDE READOUT, TRANSPONDER)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to instruct a pilot to turn off the automatic altitude reporting feature of the aircraft transponder and ADS−B Out. It is issued when a verbally reported altitude varies by 300 feet or more from the automatic altitude report. (See ALTITUDE READOUT.) (See TRANSPONDER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOP AND GO",
    "krName": "정지 후 이륙",
    "definitions": {
      "kr_proc": "항공기가 착륙하여 활주로 상에서 완전히 정지한 후, 동 지점에서 이륙하는 절차.\n(참조 : LOW APPROACH, OPTION APPROACH)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A procedure wherein an aircraft will land, make a complete stop on the runway, and then commence a takeoff from that point. (See LOW APPROACH.) (See OPTION APPROACH.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOP BURST",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : stop stream)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See STOP STREAM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOP BUZZER -",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : stop stream)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See STOP STREAM.) STOP SQUAWK (Mode or Code)− Used by ATC to instruct a pilot to stop transponder and ADS−B transmissions, or to turn off only specified functions of the aircraft transponder (military). (See STOP ALTITUDE SQUAWK.) (See TRANSPONDER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOP SQUAWK(Mode or Code)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기 트랜스폰더와 ASD-B의 송출을 중단하거나 트랜스폰더의 특정 기능을 작동을 중지하도록 조종사에게 통보할 때 ATC에서 사용하는 용어.\n(참조) : STOP ALTITUDE SQUAWK, TRANSPONDER",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "STOP STREAM",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제기관이 조종사에게 전자대항활동(ECM) 중지를 요구할 때, 사용하는 용어.\n(참조) : JAMMING",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by ATC to request a pilot to suspend electronic attack activity. (See JAMMING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOPOVER FLIGHT PLAN",
    "krName": "중간 기착 비행계획서",
    "definitions": {
      "kr_proc": "중간기착 목적지를 거쳐 최종목적지로 가는 일련의 비행계획서를 한번 제출함으로서 인가하는 비행계획양식.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A flight plan format which permits in a single submission the filing of a sequence of flight plans through interim full-stop destinations to a final destination.",
      "kr_ats": ""
    }
  },
  {
    "enName": "STOPWAY",
    "krName": "정지로",
    "definitions": {
      "kr_proc": "활주로 중심선 연장선의 중앙에 위치하여 활주로 폭만큼 넓은 이륙활주로를 넘어선 지역으로, 이륙포기 시 항공기의 구조적인 손상을 초래하지 않고 항공기를 지탱할 수 있으며 항공기를 감속시키는데 사용하기 위하여 공항당국에서 설정한 지역.",
      "annex11": null,
      "doc4444": "A defined rectangular area on the ground at the end of take-off run available prepared as a suitable area in which an aircraft can be stopped in the case of an abandoned take-off.",
      "faa_pcg": "An area beyond the takeoff runway no less wide than the runway and centered upon the extended centerline of the runway, able to support the airplane during an aborted takeoff, without causing structural damage to the airplane, and designated by the airport authorities for use in decelerating the airplane during an aborted takeoff.",
      "kr_ats": "항공기가 이륙을 중단한 경우 정지하 기에 적합하도록 준비된 구역으로, 이륙 활주 가용 거 리 끝에 위치한 정의된 장방형 지상 구역을 말한다."
    }
  },
  {
    "enName": "STRAIGHT-IN APPROACH IFR",
    "krName": "직진입 계기비행접근",
    "definitions": {
      "kr_proc": "절차선회를 실시하지 않고 최종접근이 시작되는 계기접근으로, 직진입 착륙완료 또는 직진입착륙 최저치를 설정이 필요치 않은 계기접근절차.\n(참조) : LANDING MINIMUMS, STRAIGHT-IN APPROACH VFRSTRAIGHT-IN LANDING",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An instrument approach wherein final approach is begun without first having executed a procedure turn, not necessarily completed with a straight-in landing or made to straight-in landing minimums. (See LANDING MINIMUMS.) (See STRAIGHT-IN APPROACH VFR.) (See STRAIGHT-IN LANDING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STRAIGHT-IN APPROACH VFR",
    "krName": "시계비행 직진입접근",
    "definitions": {
      "kr_proc": "다른 교통장주 부분을 비행하지 않고 활주로중심 연장선(최종접근진로)에 정대하여 교통장주에 진입.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Entry into the traffic pattern by interception of the extended runway centerline (final approach course) without executing any other portion of the traffic pattern. (See TRAFFIC PATTERN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STRAIGHT-IN LANDING",
    "krName": "직진입착륙",
    "definitions": {
      "kr_proc": "계기접근을 완료하면서 최종접근진로와 30°이내로 정렬된 활주로 상으로 이루어지는 착륙.\n(참조) : STRAIGHT-IN APPROACH IFR",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A landing made on a runway aligned within 30\u0002 of the final approach course following completion of an instrument approach. (See STRAIGHT-IN APPROACH IFR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STRAIGHT-IN LANDING MINIMUMS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : landing minimums)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LANDING MINIMUMS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STRAIGHT-IN MINIMUMS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : straight-in landing minimums)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See STRAIGHT-IN LANDING MINIMUMS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "STRATEGIC PLANNING",
    "krName": "전략 계획",
    "definitions": {
      "kr_proc": "잠재적인 문제를 사전에 해결하기 위해 미리 해결방법을 찾는 계획 수립.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Planning whereby solutions are sought to resolve potential conflicts. sUAS− (See SMALL UNMANNED AIRCRAFT SYSTEM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SUBSTITUTE ROUTE",
    "krName": "대체비행로",
    "definitions": {
      "kr_proc": "항공로의 일부분이 항행안전시설의 상태로 인해 사용 불가능할 경우 조종사에게 지정되는 비행로. 대체비행로는 다음과 같이 구성된다.\n1. 항공교통관제기관에 의하여 특정한 항행안전시설 레디얼 또는 진로로 명시된 비행로\n2. 항공교통관제기관에 의하여 직선 또는 항행안전시설 간에 명시된 비행로.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A route assigned to pilots when any part of an airway or route is unusable because of NAVAID status. These routes consist of: a. Substitute routes which are shown on U.S. Government charts. b. Routes defined by ATC as specific NAVAID radials or courses. c. Routes defined by ATC as direct to or between NAVAIDs.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SUNSET AND SUNRISE",
    "krName": "일몰-일출",
    "definitions": {
      "kr_proc": "항공달력에 발간된 일몰과 일출의 태양시를 의미함\n1. Sunset(일몰) : 태양의 원반 맨 윗부분이 수평선하로 사라지는 순간을 말함.\n2. Sunrise(일출) : 태양의 원반 맨 윗부분이 수평선 상에 나타나는 순간을 말함\n3. Night(야간) : 한국천문연구원이 발행하는 각 지역의 저녁 시민박명시간의 끝과 아침 시민박명시간의 시작 사이의 시간.\n4. Civil twilight(시민박명) : 태양의 고도가 일몰 후 지평선 아래 6까지 또는 일출 전 지평선 아래 6에서 지평선까지의 시간으로서 한국에서는 약 30분간으로 적용함",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The mean solar times of sunset and sunrise as published in the Nautical Almanac, converted to local standard time for the locality concerned. Within Alaska, the end of evening civil twilight and the beginning of morning civil twilight, as defined for each locality.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SUPPLEMENTAL WEATHER SERVICE LOCATION",
    "krName": "추가 기상 서비스 위치",
    "definitions": {
      "kr_proc": "항공 시설에 기상 분석 및 측정 기사가 위치하고 있으며 조종사에게 전화 및 라디오 송신을 통해 기상정보를 제공 해줄 수 있음. (기타 다른 서비스들은 PAREN 비행정보소로부터 제공됨)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airport facilities staffed with contract personnel who take weather observations and provide current local weather to pilots via telephone or radio. (All other services are provided by the parent FSS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SUPPS",
    "krName": "",
    "definitions": {
      "kr_proc": "ICAO DOC 7030 (Regional Supplementary Procedures를 참조. ICAO Air Navigation Plan 상 국제적으로 등재가 되어 있지 않은 ICAO 내의 특정 구역을 위한 절차.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Refers to ICAO Document 7030 Regional Supplementary Procedures. SUPPS contain procedures for each ICAO Region which are unique to that Region and are not covered in the worldwide provisions identified in the ICAO Air Navigation Plan. Procedures contained in Chapter 8 are based in part on those published in SUPPS.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SURFACE AREA",
    "krName": "공항표면구역",
    "definitions": {
      "kr_proc": "공항에 대하여 지정된 Class B, C, D 또는 E 공역의 측면 경계에 의하여 포함된 공역으로 지면에서 시작하여 공중으로 연장됨.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The airspace contained by the lateral boundary of the Class B, C, D, or E airspace designated for an airport that begins at the surface and extends upward.",
      "kr_ats": ""
    }
  },
  {
    "enName": "SURVEILLANCE APPROACH",
    "krName": "감시접근",
    "definitions": {
      "kr_proc": "관제사의 레이더스코프 상에 전시된 활주로 시단(threshold)으로부터 최종접근진로(azimuth)와 거리(range)에 관련된 항공기의 위치를 근거하여 조종사가 따르도록 항공교통관제사가 지시를 발부하는 계기접근. 조종사가 요구할 경우 관제사는 최종접근로상의 권고고도를 제공하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An instrument approach wherein the air traffic controller issues instructions, for pilot compliance, based on aircraft position in relation to the final approach course (azimuth), and the distance (range) from the end of the runway as displayed on the controller’s radar scope. The controller will provide recommended altitudes on final approach if requested by the pilot. (Refer to AIM.) SURVEILLANCE ENHANCED SEARCH AND RESCUE (SE SAR)– An automated service used to enhance search and rescue operations that provides federal contract flight service specialists direct information from the aircraft’s registered tracking device. SUSPICIOUS UAS– Suspicious UAS operations may include operating without authorization, loitering in the vicinity of sensitive locations, (e.g., national security, law enforcement facilities, and critical infrastructure), or disrupting normal air traffic operations resulting in runway changes, ground stops, pilot evasive action, etc. The report of a UAS operation alone does not constitute suspicious activity. Development of a comprehensive list of suspicious activities is not possible due to the vast number of situations that could be considered suspicious. ATC must exercise sound judgment when identifying situations that could constitute or indicate a suspicious activity.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Surveillance radar",
    "krName": "감시레이더",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "거리와 방위로 항공기의 위치를 정하는데 사용하는 레이더 장비를 말한다.",
      "annex11": "",
      "doc4444": "Radar equipment used to determine the position of an aircraft in range and azimuth.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "SWAP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : SEVERE WEATHER AVOIDANCE PLAN.)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SEVERE WEATHER AVOIDANCE PLAN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SWSL",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : SUPPLEMENTAL WEATHER SERVICE LOCATION.)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SUPPLEMENTAL WEATHER SERVICE LOCATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "SYSTEM STRATEGIC NAVIGATION",
    "krName": "시스템 전략항법",
    "definitions": {
      "kr_proc": "의도하는 항적을 유지하기 위하여 항공기 자체시스템을 사용하여 사전 계획된 항공로를 항행하는 군비행기. 이런 비행활동은 일반적으로 횡적 항공로폭 10NM과 산악을 따라 비행하는 항공로부분일 경우 고도범위 1,000피트~6,000피트 AGL을 필요로 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Military activity accomplished by navigating along a preplanned route using internal aircraft systems to maintain a desired track. This activity normally requires a lateral route width of 10 NM and altitude range of 1,000 feet to 6,000 feet AGL with some route segments that permit terrain following.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TACAN",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : tactical air navigation)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TACTICAL AIR NAVIGATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TACAN-ONLY AIRCRAFT",
    "krName": "TACAN 장착 항공기",
    "definitions": {
      "kr_proc": "일반적으로 군용항공기로, TACAN의 DME 장비를 갖추고 있으나 VOR 항법시스템 능력이 없는 항공기. 비행허가에 TACAN 또는 VORTAC 픽스 및 접근을 명시해야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft, normally military, possessing TACAN with DME but no VOR navigational system capability. Clearances must specify TACAN or VORTAC fixes and approaches.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TACTICAL AIR NAVIGATION",
    "krName": "전술항법",
    "definitions": {
      "kr_proc": "적절한 장비를 갖춘 항공기에게 TACAN 시설로부터의 방위 및 거리를 계속적으로 표시해 주는 UHF주파수대 전자 거리-방위 공중항법보조.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An ultra-high frequency electronic rho-theta air navigation aid which provides suitably equipped aircraft a continuous indication of bearing and distance to the TACAN station. (See VORTAC.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAILWIND",
    "krName": "배풍",
    "definitions": {
      "kr_proc": "활주로의 종축에 대하여 90°이상의 방향에서 부는 바람. 활주로의 자방향은 종축을 결정하는 기초자료로 이용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Any wind more than 90 degrees to the longitudinal axis of the runway. The magnetic direction of the runway must be used as the basis for determining the longitudinal axis.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAKE OFF ROLL",
    "krName": "이륙활주",
    "definitions": {
      "kr_proc": "항공기가 활주로 중심선에 정대 되게 하거나 이륙을 위해 움직이게 하는 과정. 헬리콥터의 경우 이륙 지역을 떠난 직후 이륙하는 과정을 일컫는다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The process whereby an aircraft is aligned with the runway centerline and the aircraft is moving with the intent to take off. For helicopters, this pertains to the act of becoming airborne after departing a takeoff area. TAKEOFF RUN AVAILABLE (TORA) – The runway length declared available and suitable for the ground run of an airplane taking off. (See ICAO term TAKEOFF RUN AVAILABLE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAKE-OFF DISTANCE AVAILABLE",
    "krName": "이륙가능거리",
    "definitions": {
      "kr_proc": "이륙활주가능 길이에 Clearway 길이를 더한 길이(주어진 경우).",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The length of the takeoff run available plus the length of the clearway, if provided. TAKEOFF HOLD LIGHTS (THL)– The THL system is composed of in-pavement lighting in a double, longitudinal row of lights aligned either side of the runway centerline. The lights are focused toward the arrival end of the runway at the “line up and wait” point, and they extend for 1,500 feet in front of the holding aircraft. Illuminated red lights indicate to an aircraft in position for takeoff or rolling that it is unsafe to takeoff because the runway is occupied or about to be occupied by an aircraft or vehicle.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAKE-OFF HOLD LIGHTS",
    "krName": "THL : 이륙대기등화",
    "definitions": {
      "kr_proc": "활주로 중심선 양쪽에 세로 두 줄로 매설되어있는 등화로, LUAW 지점에서 ARRIVAL EOR 방향을 향하도록 되어있으며 대기 중인 항공기 앞으로 1,500ft 거리까지 연장되어 있음. 적색등이 점등되면 이륙이나 활주를 기다리고 있는 항공기에게 활주로가 다른 항공기 혹은 차량에 의해 점유되어 있거나 곧 점유될 예정이기 때문에 이륙이나 활주를 시작하기에 안전하지 않다는 것을 의미한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TAKE-OFF RUN AVAILABLE",
    "krName": "이륙활주가능",
    "definitions": {
      "kr_proc": "항공기 이륙을 위한 지상활주에 적합하고 이용 가능하다고 명시된 활주로 길이.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The length of runway declared available and suitable for the ground run of an aeroplane take-off.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAKEOFF AREA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : landing area)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LANDING AREA.) TAKEOFF DISTANCE AVAILABLE (TODA)– The takeoff run available plus the length of any remaining runway or clearway beyond the far end of the takeoff run available. (See ICAO term TAKEOFF DISTANCE AVAILABLE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TARGET",
    "krName": "타겟",
    "definitions": {
      "kr_proc": "1차 레이더의 반사파 또는 레이더 비컨응답, ADS-B 보고로부터 산출된 레이더전시기상의 표시. ATC에 표시되는 특정 타겟 기호는 감시 소스 및 자동화 플랫폼에 따라 달라질 수 있다",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "In radar: a. Generally, any discrete object which reflects or retransmits energy back to the radar equipment. b. Specifically, an object of radar search or surveillance.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TARGET RESOLUTION",
    "krName": "",
    "definitions": {
      "kr_proc": "상호 관련 있는 레이더 표적이 닿지 않도록 하기 위한 처리 과정. 표적 분해는 다음과 같이 적용한다.\n1. 두 개의 1차 표적의 가장자리 간 또는 ASR-9 1차 표적 심볼 가장자리 간\n2. Beacon control slash과 1차 표적의 가장자리 간\n3. 두 Beacon control slash의 가장자리 간\n주기 1 : 이 절차가 사용되었을 때 의무적인 교통정보조언과 안전경보가 발부된다.\n주기 2 : 이 절차는 모자이크 레이더 시스템 혹은 다중 센서 모드가 사용될 때는 이용하면 안 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A process to ensure that correlated radar targets do not touch. Target resolution must be applied as follows: a. Between the edges of two primary targets or the edges of the ASR-9/11 primary target symbol. b. Between the end of the beacon control slash and the edge of a primary target. c. Between the ends of two beacon control slashes. Note 1: Mandatory traffic advisories and safety alerts must be issued when this procedure is used. Note 2: This procedure must not be used when utilizing mosaic radar systems or multi−sensor mode.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TARGET SYMBOL",
    "krName": "표적심볼",
    "definitions": {
      "kr_proc": "1차 레이더 반사파 또는 레이더 비컨 응답으로부터 산출된 것으로 레이더 전시기상에 표시된 컴퓨터가 만든 표식.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TARGET.) (See ICAO term TARGET.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TARMAC DELAY",
    "krName": "",
    "definitions": {
      "kr_proc": "이륙 전이나 착륙 직후, 승객들이 하기할 수 없이 지상에서 항공기가 대기하는 상태",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The holding of an aircraft on the ground either before departure or after landing with no opportunity for its passengers to deplane.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TARMAC DELAY AIRCRAFT",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사가 ‘3시간 룰’에 의거하여 지상 활주를 요청하여 계류장이나 게이트 또는 대체하기 지점으로 이동하는 항공기",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft whose pilot−in−command has requested to taxi to the ramp, gate, or alternate deplaning area to comply with the Three−hour Tarmac Rule.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TARMAC DELAY REQUEST",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사가 ‘3시간 룰’에 의거하여 계류장이나 게이트 또는 대체하기 지점까지 이동하기 위한 지상 활주 요청",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A request by the pilot−in−command to taxi to the ramp, gate, or alternate deplaning location to comply with the Three−hour Tarmac Rule.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : TERMINAL AUTOMATION SYSTEMS)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TERMINAL AUTOMATION SYSTEMS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAWS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : TERRAIN AWARENESS WARNING SYSTEM)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TERRAIN AWARENESS WARNING SYSTEM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAXI",
    "krName": "",
    "definitions": {
      "kr_proc": "비행장 표면에서 항공기 자체동력으로 이루어지는 항공기 이동. 또한 바퀴 장착 헬리콥터의 지상이동을 의미한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The movement of an airplane under its own power on the surface of an airport (14 CFR section 135.100 [Note]). Also, it describes the surface movement of helicopters equipped with wheels. (See AIR TAXI.) (See HOVER TAXI.) (Refer to 14 CFR section 135.100.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TAXI HOLDING POSITION",
    "krName": "지상활주대기지점",
    "definitions": {
      "kr_proc": "지상활주하는 항공기와 차량이 활주로와 적절한 안전간격을 유지하기 위하여 대기하도록 지정된 장소",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TAXI PATTERNS",
    "krName": "",
    "definitions": {
      "kr_proc": "다른 활주로 또는 사용 가능한 비행장 지역에 대한 바람직한 지상교통흐름에 대하여 설명하기 위하여 설정된 pattern.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Patterns established to illustrate the desired flow of ground traffic for the different runways or airport areas available for use.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Taxiing",
    "krName": "지상이동",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "이륙 및 착륙을 제외하고 자체동력에 의한 비행장 표면에서 항공기가 이동하는 것을 말한다.",
      "annex11": "",
      "doc4444": "Movement of an aircraft on the surface of an aerodrome under its own power, excluding take-off and landing. 102/81/111//1264 No. 12",
      "faa_pcg": ""
    }
  },
  {
    "enName": "TAXIWAY",
    "krName": "유도로",
    "definitions": {
      "kr_proc": "항공기의 지상통행 및 비행장내의 한 부분과 다른 부분의 연결을 위하여 육상비행장에 설치한 일정한 통로로서 다음을 포함한다.\n1. AIRCRAFT STAND TAXILANE(항공기주기장 통행로) : 유도로로 지정된 계류장내의 한 부분으로서 항공기주기장 출입목적으로만 사용함\n2. APRON TAXIWAY(계류장유도로) : 계류장에 위치하는 유도로시스템의 한 부분으로서 계류장을 가로지르는 통과 지상통행로로 사용함\n3. RAPID EXIT TAXIWAY(고속이탈유도로) : 착륙항공기가 다른 유도로를 사용할 때 보다 빨리 활주로를 벗어남으로서 활주로 점유시간을 최소화할 목적으로 활주로에 예각으로 연결한 유도로",
      "annex11": null,
      "doc4444": "A defined path on a land aerodrome established for the taxiing of aircraft and intended to provide a link between one part of the aerodrome and another, including: a) Aircraft stand taxilane. A portion of an apron designated as a taxiway and intended to provide access to aircraft stands only. b) Apron taxiway. A portion of a taxiway system located on an apron and intended to provide a through taxi route across the apron. c) Rapid exit taxiway. A taxiway connected to a runway at an acute angle and designed to allow landing aeroplanes to turn off at higher speeds than are achieved on other exit taxiways thereby minimizing runway occupancy times.",
      "faa_pcg": null,
      "kr_ats": "항공기의 지상이동 및 비행장 내의 한 부분과 다른 부분의 연결을 위하여 육상비행장에 설치 한 지정된 이동로로서 다음을 포함한다: 가) 항공기주기장유도선. 유도로로 지정된 계류장의 일부로서 항공기 주기장 진출입만을 목적으로 제정 : 2013.05.03. - 100 별표 설치된 것 나) 계류장유도로. 계류장에 위치하는 유도로 체계의 일부로서 계류장을 횡단하는 지상통행로를 목적 으로 설치된 것 다) 고속탈출유도로. 착륙항공기가 신속히 활주로를 벗어나 활주로점유시간을 최소화할 목적으로 활 주로에 예각으로 연결된 유도로"
    }
  },
  {
    "enName": "TCAS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : traffic alert and collision avoidance system)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAFFIC ALERT AND COLLISION AVOIDANCE SYSTEM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TCH",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : threshold crossing height)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See THRESHOLD CROSSING HEIGHT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TCLT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : tentative calculated landing time)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TDOA",
    "krName": "신호도달시간차이",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "동일 항공기(또는 지상차량) 의 트랜스폰더 신호가 다른 수신기에서 수신되는 상대 적 시간 차이를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "TDZE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : touchdown zone elevation)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TOUCHDOWN ZONE ELEVATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL AREA",
    "krName": "터미널지역",
    "definitions": {
      "kr_proc": "접근관제업무 또는 비행장교통관제업무가 제공되는 공역을 나타내는데 사용되는 일반적인 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A general term used to describe airspace in which approach control service or airport traffic control service is provided.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL AREA FACILITY",
    "krName": "터미널구역시설",
    "definitions": {
      "kr_proc": "이ㆍ착륙하는 IFR, VFR, SVFR 항공기와 경우에 따라 항공로비행 항공기에 대하여 항공교통관제업무를 제공하는 기관.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A facility providing air traffic control service for arriving and departing IFR, VFR, Special VFR, and on occasion en route aircraft. (See APPROACH CONTROL FACILITY.) (See TOWER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL AUTOMATION SYSTEMS",
    "krName": "TAS : 터미널 자동시스템",
    "definitions": {
      "kr_proc": "ARTS IIE, ARTS IIIA, ARTS IIIE, STARS, MEARTS를 포함한 대량자동추적 시스템을 식별하기 위해 쓰인다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "TAS is used to identify the numerous automated tracking systems including STARS and MEARTS.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL CONTROL AREA",
    "krName": "터미널관제구역",
    "definitions": {
      "kr_proc": "통상 한개 또는 두개이상의 주요비행장 부근의 항공로(ATS) 합류지점에 설정되는 관제구역",
      "annex11": "A control area normally established at the confluence of ATS routes in the vicinity of one or more major aerodromes. 1-11 8/11/18",
      "doc4444": "A control area normally established at the confluence of ATS routes in the vicinity of one or more major aerodromes.",
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL DATA LINK SYSTEM(TDLS)",
    "krName": "",
    "definitions": {
      "kr_proc": "디지털 비행정보방송서비스(D-ATIS)를 특정한 주파수와 조종석 또는 게이트 프린터에서 데이터 링크를 통해 텍스트 형태로 받아볼 수 있게끔 제공하는 시스템. TDLS는 선택된 공항의 수신자들이 조종석이나 게이트 프린터에서 서비스 시스템을 통해 이륙 전 허가(PDC)를 텍스트 형태로 받아볼 수 있게 제공한다. 또한 TDLS는 관제탑 범위 내에서 비행정보입출력(FDIO) 정보를 모방한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A system that provides Digital Automatic Terminal Information Service (D−ATIS) both on a specified radio frequency and, for subscribers, in a text message via data link to the cockpit or to a gate printer. TDLS also provides the CPDLC Departure Clearance Application (DCL) and Pre-departure Clearances (PDC), at selected airports, to subscribers, through a service provider, in text to the cockpit or to a gate printer. In addition, TDLS will emulate the Flight Data Input/Output (FDIO) information within the control tower.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL RADAR SERVICE AREA",
    "krName": "터미널레이더업무구역",
    "definitions": {
      "kr_proc": "항공교통관제업무에서 레이더 유도, 순서분리 및 모든 IFR과 참여하는 VFR 항공기의 분리를 제공하는 비행장을 둘러싼 공역. 조종사의 참여는 추천되지만 강제사항은 아니다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Airspace surrounding designated airports wherein ATC provides radar vectoring, sequencing, and separation on a full-time basis for all IFR and participating VFR aircraft. The AIM contains an explanation of TRSA. TRSAs are depicted on VFR aeronautical charts. Pilot participation is urged but is not mandatory.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL VFR RADAR SERVICE",
    "krName": "터미널 VFR 레이더업무",
    "definitions": {
      "kr_proc": "IFR 항공기에게 제공되는 터미널 레이더업무를 시계비행(VFR) 항공기로 확대하기 위하여 제정된 지역 프로그램. 동 프로그램은 기본적인 레이더업무, 터미널 레이더업무, Class B 업무 및 Class C 업무로서 4가지 형태로 분류된다.\n1. BASIC RADAR SERVICE - 모든 위임된 터미널 레이더시설로부터 VFR 항공기에게 제공되는 업무. 기본적인 레이더업무는 안전경보, 교통정보조언 및 조종사 요구시 제한된 레이더유도를 제공하며, BASIC RADAR SERVICE 목적의 절차가 수립된 곳과/또는 합의서에 의한 지역에서 순서를 제공한다. 이 업무의 목적은 안전하고 질서정연하게 교통장주내로 도착하는 시계비행(VFR) 및 계기비행(IFR) 항공기의 흐름을 조절하고, 출발하는 시계비행 항공기에 대하여 교통정보조언을 제공하는데 있다.\n2. TRSA Service - 기본적인 레이더업무에 더하여 Primary Airport로 비행하는 모든 IFR 항공기와 참여하는 VFR 항공기에 대한 순서분리 제공 및 모든 참여 VFR 항공기간 분리를 제공한다. 이 업무의 목적은 TRSA로 정의된 지역 내에서 운영하는 모든 IFR 항공기와 모든 참여하는 VFR 항공기간에 분리를 제공하는 것이다.\n3. Class C Service - 기본적인 레이더업무에 더하여 IFR 및 VFR 항공기간 인가된 분리, VFR 항공기의 순서 및 기본공항으로 도착하는 VFR 항공기에 대한 순서를 제공한다.\n4. Class B Service - 이 업무는 기본적인 레이더업무에 더하여 IFR, VFR과/또는 중량에 기초한 항공기의 인가된 분리 및 주공항으로 도착하는 VFR 항공기의 순서분리를 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A national program instituted to extend the terminal radar services provided instrument flight rules (IFR) aircraft to visual flight rules (VFR) aircraft. The program is divided into four types service referred to as basic radar service, terminal radar service area (TRSA) service, Class B service and Class C service. The type of service provided at a particular location is contained in the Chart Supplement. a. Basic Radar Service− These services are provided for VFR aircraft by all commissioned terminal radar facilities. Basic radar service includes safety alerts, traffic advisories, limited radar vectoring when requested by the pilot, and sequencing at locations where procedures have been established for this purpose and/or when covered by a letter of agreement. The purpose of this service is to adjust the flow of arriving IFR and VFR aircraft into the traffic pattern in a safe and orderly manner and to provide traffic advisories to departing VFR aircraft. b. TRSA Service− This service provides, in addition to basic radar service, sequencing of all IFR and participating VFR aircraft to the primary airport and separation between all participating VFR aircraft. The purpose of this service is to provide separation between all participating VFR aircraft and all IFR aircraft operating within the area defined as a TRSA. c. Class C Service− This service provides, in addition to basic radar service, approved separation between IFR and VFR aircraft, and sequencing of VFR aircraft, and sequencing of VFR arrivals to the primary airport. d. Class B Service− This service provides, in addition to basic radar service, approved separation of aircraft based on IFR, VFR, and/or weight, and sequencing of VFR arrivals to the primary airport(s). (See CONTROLLED AIRSPACE.) (See TERMINAL RADAR SERVICE AREA.) (Refer to AIM.) (Refer to CHART SUPPLEMENT U.S.) frequency terminal omnirange station located on or near an airport and used as an approach aid. (See NAVIGATIONAL AID.) (See VOR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERMINAL-VERY HIGH FREQUENCY OMNI-DIRECTIONAL RANGE STATION",
    "krName": "터미널-VOR국",
    "definitions": {
      "kr_proc": "비행장 또는 그 부근에 위치하고 접근보조시설로 이용되는 VOR국.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TERRAIN AWARENESS WARNING SYSTEM (TAWS)",
    "krName": "",
    "definitions": {
      "kr_proc": "비행 중인 항공기가 지상에 근접할 시 ‘저고도 경고’를 제공해 즉각적인 조치를 취할 수 있도록 승무원에게 알리는 시스템.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An on−board, terrain proximity alerting system providing the aircrew ‘Low Altitude warnings’ to allow immediate pilot action.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TERRAIN FOLLOWING",
    "krName": "",
    "definitions": {
      "kr_proc": "산악 또는 가장 높은 장애물 상공으로부터 일정한 고도(AGL)를 유지하는 군용 항공기의 비행.  항공기의 고도는 다양한 산악과 장애물에 따라 변한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The flight of a military aircraft maintaining a constant AGL altitude above the terrain or the highest obstruction. The altitude of the aircraft will constantly change with the varying terrain and/or obstruction.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TETRAHEDRON",
    "krName": "",
    "definitions": {
      "kr_proc": "일반적으로 비 관제비행장에 설치되어 착륙방향지시기로 사용되는 장비. 사면체의 작은 끝은 착륙방향을 지시한다. 관제비행장에 사면체가 설치되어 있는 경우, 관제탑지시가 사면체 지시기를 대신하므로 무시된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A device normally located on uncontrolled airports and used as a landing direction indicator. The small end of a tetrahedron points in the direction of landing. At controlled airports, the tetrahedron, if installed, should be disregarded because tower instructions supersede the indicator. (See SEGMENTED CIRCLE.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : terrain following)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TERRAIN FOLLOWING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "THAT IS CORRECT",
    "krName": "",
    "definitions": {
      "kr_proc": "당신의 이해가 옳다는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The understanding you have is right.",
      "kr_ats": ""
    }
  },
  {
    "enName": "THREE-HOUR TARMAC RULE",
    "krName": "",
    "definitions": {
      "kr_proc": "교통부서(DOT)와 관련하여 항공기가 활주로 상에서 3시간까지 대기해야 할 때 적용되는 규칙.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "THRESHOLD",
    "krName": "활주로 시단",
    "definitions": {
      "kr_proc": "착륙에 사용되는 활주로의 시작부분.\n(참조) : AIRPORT LIGHTING, DISPLACED THRESHOLD",
      "annex11": null,
      "doc4444": "The beginning of that portion of the runway usable for landing.",
      "faa_pcg": "The beginning of that portion of the runway usable for landing. (See AIRPORT LIGHTING.) (See DISPLACED THRESHOLD.)",
      "kr_ats": "착륙을 위해 사용 가능한 활주 로 부분의 시작지점을 말한다."
    }
  },
  {
    "enName": "THRESHOLD CROSSING HEIGHT",
    "krName": "활주로시단 통과높이",
    "definitions": {
      "kr_proc": "항공기가 ILS 활공로에 의하여 설정된 체적을 유지하거나 RNAV 또는 GPS 접근의 계산된 활공각 높이를 유지할 때 항공기 탑재 활공로 안테나가 활주로 시단을 통과하는 이론적 높이이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The theoretical height above the runway threshold at which the aircraft’s glideslope antenna would be if the aircraft maintains the trajectory established by the mean ILS glideslope or the altitude at which the calculated glidepath of an RNAV or GPS approaches. (See GLIDESLOPE.) (See THRESHOLD.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "THRESHOLD LIGHTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : lights)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT LIGHTING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TIBS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : telephone information briefing service)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TIME BASED FLOW MANAGEMENT(TBFM)",
    "krName": "",
    "definitions": {
      "kr_proc": "수용 가능한 항공교통수요와 PBN 운영 보조의 균형을 맞추기 위해 시간을 기반으로 한 항공교통흐름의 관리를 받는 하드웨어, 소프트웨어, 방법과 과정, 그리고 계획.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A foundational Decision Support Tool for time−based management in the en route and terminal environments. TBFM’s core function is the ability to schedule aircraft within a stream of traffic to reach a defined constraint point (e.g., meter fix/meter arc) at specified times, creating a time-ordered sequence of traffic. The scheduled times allow for merging of traffic flows, efficiently utilizing airport and airspace capacity while minimizing coordination and reducing the need for vectoring/holding. The TBFM schedule is calculated using current aircraft estimated time of arrival at key defined constraint points based on wind forecasts, aircraft flight plan, the desired separation at the constraint point and other parameters. The schedule applies spacing only when needed to maintain the desired separation at one or more constraint points. This includes, but is not limited to, Single Center Metering (SCM), Adjacent Center Metering (ACM), En Route Departure Capability (EDC), Integrated Departure/Arrival Capability (IDAC), Ground−based Interval Management−Spacing (GIM−S), Departure Scheduling, and Extended/Coupled Metering.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TIME GROUP",
    "krName": "",
    "definitions": {
      "kr_proc": "국제표준시간(UTC)을 시간과 분으로 나타내는 4자리 숫자. 모든 운항에 표준시간을 사용한다. “ZULU”는 국제표준시간(UTC)를 표기하기 위하여 사용 한다. 무선통신 또는 전화 통화 시 지역시간(Local Time)이 주어질 경우, 지역을 표시하기 위하여 “Local” 또는 동일 시간대라는 단어를 사용한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Four digits representing the hour and minutes from the Coordinated Universal Time (UTC) clock. FAA uses UTC for all operations. The term “ZULU” may be used to denote UTC. The word “local” or the time zone equivalent must be used to denote local when local time is given during radio and telephone communications. When written, a time zone designator is used to indicate local time; e.g., “0205M” (Mountain). The local time may be based on the 24-hour clock system. The day begins at 0000 and ends at 2359.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TIS-B",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : TRAFFIC INFORMATION SERVICE-BROADCAST)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TMA",
    "krName": "접근관제구역",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "통상 하나 이상의 주요 비행장 인 근에 있는 항공교통로 합류지점에 설정되는 관제구를 말한다.",
      "annex11": "",
      "doc4444": "",
      "faa_pcg": ""
    }
  },
  {
    "enName": "TMPA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : management program alert)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAFFIC MANAGEMENT PROGRAM ALERT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TMU",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : traffic management unit)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAFFIC MANAGEMENT UNIT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TODA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ICAO take-off distance available)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TAKEOFF DISTANCE AVAILABLE.) (See ICAO term TAKEOFF DISTANCE AVAILABLE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOP ALTITUDE",
    "krName": "",
    "definitions": {
      "kr_proc": "SID 절차에 명시된 제한고도와 관련하여 절차 설명이 포함되거나 항공교통관제기관에 의해 할당된 “유지” 고도",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "In reference to SID published altitude restrictions, the charted “maintain” altitude contained in the procedure description or assigned by ATC.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOP OF DESCENT (TOD)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기가 최초 강하를 시작하는 지점",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The point at which an aircraft begins the initial descent.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TORA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : TAKEOFF RUN AVAILABLE)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TAKEOFF RUN AVAILABLE.) (See ICAO term TAKEOFF RUN AVAILABLE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TORCHING",
    "krName": "",
    "definitions": {
      "kr_proc": "연료와 공기의 혼합이 과도하게 공급됨으로서 왕복기관 항공기의 배기관 끝에서 연료가 착화되는 현상.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The burning of fuel at the end of an exhaust pipe or stack of a reciprocating aircraft engine, the result of an excessive richness in the fuel air mixture.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : TRAJECTORY OPTIONS SET)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAJECTORY OPTIONS SET)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOTAL ESTIMATED ELAPSED TIME",
    "krName": "총소요예상시간",
    "definitions": {
      "kr_proc": "IFR비행에 있어서 항공기가 이륙 후 항행안전시설을 참조로 하여 규정한 지점 상공에 도달할 때까지의 총 예상 소요시간을 말한다. 보통 항공기가 계기접근 절차를 수행할 것이라고 예상되는 지점을 기준점으로 삼으며, 목적공항에 관련된 항행안전시설이 없는 경우에는 목적공항 상공을 기준점으로 설정함. VFR 비행에 있어서는 항공기가 이륙 후 목적공항 상공에 도달할 때까지의 총 예상소요시간을 말함.",
      "annex11": null,
      "doc4444": "For IFR flights, the estimated time required from take-off to arrive over that designated point, defined by reference to navigation aids, from which it is intended that an instrument approach procedure will be commenced, or, if no navigation aid is associated with the destination aerodrome, to arrive over the destination aerodrome. For VFR flights, the estimated time required from take-off to arrive over the destination aerodrome.",
      "faa_pcg": "For IFR flights, the estimated time required from takeoff to arrive over that designated point, defined by reference to navigation aids, from which it is intended that an instrument approach procedure will be commenced, or, if no navigation aid is associated with the destination aerodrome, to arrive over the destination aerodrome. For VFR flights, the estimated time required from takeoff to arrive over the destination aerodrome. (See ICAO term ESTIMATED ELAPSED TIME.)",
      "kr_ats": "IFR 항 공기의 경우 이륙 후 항행안전시설을 참조하여 정의된 계기접근절차 개시 지점에 도착할 때까지의 예상소요시 간, 또는 목적비행장에 항행안전시설이 없을 경우 목적 비행장 상공에 도착할 때까지의 시간을 말한다. VFR 항 공기의 경우, 이륙 후 목적비행장 상공에 도착할 때까 지의 예상소요시간을 말한다."
    }
  },
  {
    "enName": "TOUCH-AND-GO",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로 상에서 정지하거나 벗어남이 없이 착륙과 이륙을 행하는 항공기에 의한 기동.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An operation by an aircraft that lands and departs on a runway without stopping or exiting the runway.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOUCH-AND-GO LANDING",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : touch-and-go)\nTOUCHDOWN\n1. 항공기가 착륙활주로 표면에 처음으로 접지한 지점\n2. PAR 접근과 관련하여 활공로의 연장선과 착륙표면이 교차하는 지점",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TOUCH-AND-GO.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOUCHDOWN",
    "krName": "접지",
    "definitions": {
      "kr_proc": "가상의 활공로와 활주로가 만나는 지점\n주기 : 위의 접지점은 참고지점으로서 항공기가 활주로에 접지하는 실제지점이 아닐 수 있다.",
      "annex11": null,
      "doc4444": "The point where the nominal glide path intercepts the runway. Note.— “Touchdown” as defined above is only a datum and is not necessarily the actual point at which the aircraft will touch the runway.",
      "faa_pcg": "The point where the nominal glide path intercepts the runway. Note: Touchdown as defined above is only a datum and is not necessarily the actual point at which the aircraft will touch the runway.",
      "kr_ats": "공칭 활공로와 활주로가 만나는 지 점을 말한다. 주기 - 위 접지는 단지 기준점일 뿐이며 항공기가 활 주로에 접지하는 실제지점이 아닐 수 있다."
    }
  },
  {
    "enName": "TOUCHDOWN RVR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : visibility)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VISIBILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOUCHDOWN ZONE",
    "krName": "접지대",
    "definitions": {
      "kr_proc": "활주로말단(threshold)으로부터 3,000피트까지의 활주로지역을 말하며, 직진입 계기접근절차의 착륙 최저치를 설정함에 있어 접지대 표고를 결정할 때 이용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The portion of a runway, beyond the threshold, where it is intended landing aircraft first contact the runway.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOUCHDOWN ZONE ELEVATION",
    "krName": "접지대 표고",
    "definitions": {
      "kr_proc": "착륙활주로의 시단으로부터 3,000피트까지의 표면에서 가장 높은 표고. 이 접지지역 표고는 직진입 착륙최저치가 인가 되었을 때, 계기접근절차 지도상에 명시된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The highest elevation in the first 3,000 feet of the landing surface. TDZE is indicated on the instrument approach procedure chart when straight-in landing minimums are authorized. (See TOUCHDOWN ZONE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOUCHDOWN ZONE LIGHTING",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport lighting)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT LIGHTING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOWER",
    "krName": "관제탑",
    "definitions": {
      "kr_proc": "공항 근처 또는 이동지역상에서 기동하는 항공기에게 항공교통관제업무를 제공하기 위하여 공지통신시설 시각참조물 기타 필요한 장비들을 운용하는 관제시설. 관제탑이 운용되는 공항에서는 비행방식 또는 기상조건이 IFR 또는 VFR에 관계없이 이착륙허가 및 해당 관할공역 내에서의 통과비행 권한을 갖는다. 또한 관제탑에서는 접근관제업무(레이더 또는 비레이더)가 행해질 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A terminal facility that uses air/ground communications, visual signaling, and other devices to provide ATC services to aircraft operating in the vicinity of an airport or on the movement area. Authorizes aircraft to land or takeoff at the airport controlled by the tower or to transit the Class D airspace area regardless of flight plan or weather conditions (IFR or VFR). A tower may also provide approach control services (radar or nonradar). (See AIRPORT TRAFFIC CONTROL SERVICE.) (See APPROACH CONTROL FACILITY.) (See APPROACH CONTROL SERVICE.) (See MOVEMENT AREA.) (See TOWER EN ROUTE CONTROL SERVICE.) (See ICAO term AERODROME CONTROL TOWER.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOWER EN ROUTE CONTROL SERVICE",
    "krName": "관제탑 항공로관제업무",
    "definitions": {
      "kr_proc": "둘 이상의 인접 접근관제시설 간 각자 위임받은 공역내에서 행해지는 IFR 항공로관제업무를 말하며, 이러한 업무는 신속한 교통흐름을 유지하기 위하여 계획되어지며, 관제업무 및 조종사의 통신요구를 경감시켜준다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The control of IFR en route traffic within delegated airspace between two or more adjacent approach control facilities. This service is designed to expedite traffic and reduce control and pilot communication requirements.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TOWER TO TOWER",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : tower enroute control service)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TOWER EN ROUTE CONTROL SERVICE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TPX-42",
    "krName": "",
    "definitions": {
      "kr_proc": "숫자로 된 비컨코드 해독 장비/시스템. 이 장비/시스템은 비컨코드 해독을 위하여 터미널 레이더시스템에 부가시킬 목적으로 고안된 것이다. 이 장비/시스템은 항공기의 신속한 식별, 1차 레이더자료의 보완기능 및 Mode C를 장착한 항공기의 고도정보를 제공한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TRACEABLE PRESSURE STANDARD",
    "krName": "",
    "definitions": {
      "kr_proc": "미국국립기술원으로부터 검증된 압력측정기구로서, 수은기압계, 종관기상관측시스템(ASOS/AWSS), 자동공항예보시스템(AWOS), 휴대용 계측기 등이 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The facility station pressure instrument, with certification/calibra- tion traceable to the National Institute of Standards and Technology. Traceable pressure standards may be mercurial barometers, commissioned ASOS or dual transducer AWOS, or portable pressure standards or DASI.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRACK",
    "krName": "트랙",
    "definitions": {
      "kr_proc": "비행로를 지표면상에 투영하여 나타내는 것으로서 통상 비행로의 방향은 어느 지점에서도 북쪽(진북, 자북, 또는 GRID)을 기준으로 하여 도(degree)단위로 표시된다.",
      "annex11": "The projection on the earth’s surface of the path of an aircraft, the direction of which path at any point is usually expressed in degrees from North (true, magnetic or grid).",
      "doc4444": "The projection on the earth’s surface of the path of an aircraft, the direction of which path at any point is usually expressed in degrees from North (true, magnetic or grid).",
      "faa_pcg": "The projection on the earth’s surface of the path of an aircraft, the direction of which path at any point is usually expressed in degrees from North (True, Magnetic, or Grid).",
      "kr_ats": "지구 표면상에 투영된 항공기의 통행로로 서 어떠한 지점에서든 진로의 방향을 항상 북쪽(진북, 자북 또는 grid north)으로부터의 각도로 표시된다."
    }
  },
  {
    "enName": "TRAFFIC ADVISORIES",
    "krName": "교통정보조언",
    "definitions": {
      "kr_proc": "주의를 환기시킬 목적으로 현재 항공기의 위치, 또는 예상비행로와 근접될 것으로 예상 또는 알려지거나 관측된 교통정보사항을 조종사들에게 경고하여 조심하도록 충고하는 조언업무. 이러한 업무는 다음 사항에 기초하여 제공될 수 있다.\n1. 시각적인 관측\n2. 항공교통관제 레이더스코프 상의 식별타겟과 미식별타겟의 인지\n3. 조종사 또는 다른 시설로부터의 구두 보고\n주기 1 : 용어 TRAFFIC 다음은 알려져 있다면 다음과 같은 부가적인 정보가 뒤따른다.\n예; “Traffic, 2 o'clock, one zero miles, southbound, eight thousand.”\n주기 2 : 조언업무는 관제사의 우선 업무 또는 기타 다른 고려사항( 예를 들면 레이더 포착범위, 교통량, 주파수 사용빈도, 관제사의 업무량 등)을 근거로 최대한 발부하여야 한다. 레이더 또는 비레이더 교통정보조언 발부가 조종사의 다른 항공기로부터의 육안회피(see and avoid) 책임을 면하는 것은 아니다. 조종사는 항공기의 근접과 관련된 정보를 관제사가 모두 제공할 수 없는 경우가 많다는 사실을 주지하여야한다. 즉, 관제사의 교통정보조언 제공을 당해 상황에서 모든 정보 제공으로 해석하여서는 안 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Advisories issued to alert pilots to other known or observed air traffic which may be in such proximity to the position or intended route of flight of their aircraft to warrant their attention. Such advisories may be based on: a. Visual observation. b. Observation of radar identified and nonidentified aircraft targets on an ATC radar display, or c. Verbal reports from pilots or other facilities. Note 1: The word “traffic” followed by additional information, if known, is used to provide such advisories; e.g., “Traffic, 2 o’clock, one zero miles, southbound, eight thousand.” Note 2: Traffic advisory service will be provided to the extent possible depending on higher priority duties of the controller or other limitations; e.g., radar limitations, volume of traffic, frequency congestion, or controller workload. Radar/ nonradar traffic advisories do not relieve the pilot of his/her responsibility to see and avoid other aircraft. Pilots are cautioned that there are many times when the controller is not able to give traffic advisories concerning all traffic in the aircraft’s proximity; in other words, when a pilot requests or is receiving traffic advisories, he/she should not assume that all traffic will be issued. (Refer to AIM.) TRAFFIC ALERT (aircraft call sign), TURN (left/right) IMMEDIATELY, (climb/descend) AND MAINTAIN (altitude). (See SAFETY ALERT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC ALERT AND COLLISION AVOIDANCE SYSTEM",
    "krName": "교통경고 및 충돌회피시스템",
    "definitions": {
      "kr_proc": "지상장비에 의존하지 않고 운용되는 레이더 비컨신호에 근거한 공중충돌회피시스템. TCASⅠ은 교통정보조언만을 제공한다. TCASⅡ는 교통정보조언은 물론 수직면에서의 충돌회피를 위한 해소조언 까지 제공 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An airborne collision avoidance system based on radar beacon signals which operates independent of ground-based equipment. TCAS-I generates traffic advisories only. TCAS-II generates traffic advisories, and resolution (collision avoidance) advisories in the vertical plane.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Traffic avoidance advice",
    "krName": "교통회피조언",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "충돌 회피를 위 하여 항공교통업무시설이 조종사로 하여금 특정 기동을 하도록 하는 조언을 말한다.",
      "annex11": "",
      "doc4444": "Advice provided by an air traffic services unit specifying manoeuvres to assist a pilot to avoid a collision.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "TRAFFIC AVOIDANCE ADVISORIES",
    "krName": "교통정보조언",
    "definitions": {
      "kr_proc": "충돌회피를 위하여 항공교통업무기관이 조종사에게 특정기동을 하도록 하는 조언",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC IN SIGHT",
    "krName": "",
    "definitions": {
      "kr_proc": "이전에 발부 받은 교통정보를 인지했음을 관제사에게 통보하기 위하여 조종사가 사용하는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Used by pilots to inform a controller that previously issued traffic is in sight. (See NEGATIVE CONTACT.) (See TRAFFIC ADVISORIES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC INFORMATION",
    "krName": "교통정보",
    "definitions": {
      "kr_proc": "(참조 : traffic advisories)",
      "annex11": "Information issued by an air traffic services unit to alert a pilot to other known or observed air traffic which may be in proximity to the position or intended route of flight and to help the pilot avoid a collision.",
      "doc4444": "Information issued by an air traffic services unit to alert a pilot to other known or observed air traffic which may be in proximity to the position or intended route of flight and to help the pilot avoid a collision.",
      "faa_pcg": "(See TRAFFIC ADVISORIES.)",
      "kr_ats": "항공교통업무시설이 조종 사에게 항공기의 위치 또는 예정된 비행경로에 근접할 수 있는 알려진 또는 관측된 다른 항공교통을 경고하여 조종사가 충돌을 회피할 수 있도록 돕기 위해 발부하는 정보를 말한다."
    }
  },
  {
    "enName": "TRAFFIC INFORMATION",
    "krName": "교통정보",
    "definitions": {
      "kr_proc": "관제항공기의 위치 또는 비행로에 근접이 예상되는 이미 알고 있거나 관측된 항공교통상황을 조종사에게 경고하여 충돌을 회피하도록 항공교통업무기관이 발부하는 정보",
      "annex11": "Information issued by an air traffic services unit to alert a pilot to other known or observed air traffic which may be in proximity to the position or intended route of flight and to help the pilot avoid a collision.",
      "doc4444": "Information issued by an air traffic services unit to alert a pilot to other known or observed air traffic which may be in proximity to the position or intended route of flight and to help the pilot avoid a collision.",
      "faa_pcg": "(See TRAFFIC ADVISORIES.)",
      "kr_ats": "항공교통업무시설이 조종 사에게 항공기의 위치 또는 예정된 비행경로에 근접할 수 있는 알려진 또는 관측된 다른 항공교통을 경고하여 조종사가 충돌을 회피할 수 있도록 돕기 위해 발부하는 정보를 말한다."
    }
  },
  {
    "enName": "TRAFFIC INFORMATION SERVICE-BROADCAST (TIS-B)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제 방송은 ADS-B를 장비한 (1090ES나 UAT)항공기에게 교통정보를 제공받는다. 이 교통정보는 지상기반항공교통감시 센서로부터 얻어지며 일반적으로 레이더 항적을 가리킨다. TIS-B 서비스는 레이더 감시 범위와 ADS-B 지상시설의 방송 범위가 일치하는 NAS 전체에 제공된다. 항공기가 GBT 네트워크 범위를 벗어나게 되면 TIS-B를 손실하게 된다. 이러한 현상이 레이더 감시 범위 안에서 일어났다면 ADS-B를 수신하고 있는 근처에 있는 다른 항공기가 정보를 손실한 첫 번째 항공기를 관찰한다. 항공기가 레이더 감시 범위를 벗어났는데 TIS-B 서비스가 지속 제공되는 경우 ADS-B를 수신하고 있는 근처의 다른 항공기가 첫 번째 항공기를 관찰하지 않는다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC MANAGEMENT PROGRAM ALERT",
    "krName": "교통관리 계획 통보",
    "definitions": {
      "kr_proc": "조종사에게 프로그램의 존재를 알리고 프로그램의 세부사항에 대한 항공고시보 간행물 또는 특별 교통관리프로그램 조언메시지를 참조하도록 하기 위하여 항공고시보 용어. 단축형인 TMPA 용어는 항공고시보 본문에서 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A term used in a Notice to Airmen (NOTAM) issued in conjunction with a special traffic management program to alert pilots to the existence of the program and to refer them to a special traffic management program advisory message for program details. The contraction TMPA is used in NOTAM text.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC MANAGEMENT UNIT",
    "krName": "",
    "definitions": {
      "kr_proc": "교통관리를 수행함에 있어서 직접적인 관련책임이 있는 지역관제소와 지정된 해당 터미널시설.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The entity in ARTCCs and designated terminals directly involved in the active management of facility traffic. Usually under the direct supervision of an assistant manager for traffic management.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC NO FACTOR",
    "krName": "",
    "definitions": {
      "kr_proc": "이전에 발부한 교통정보조언에 관한 항공기가 더 이상 영향을 주지 않음을 나타낸다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Indicates that the traffic described in a previously issued traffic advisory is no factor.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC NO LONGER OBSERVED",
    "krName": "",
    "definitions": {
      "kr_proc": "이전에 발부한 교통정보조언 관련 항공기가 더 이상 레이더 스코프상에 전시되지 않으나 여전히 장애요소로 존재함을 의미.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Indicates that the traffic described in a previously issued traffic advisory is no longer depicted on radar, but may still be a factor.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC PATTERN",
    "krName": "교통장주",
    "definitions": {
      "kr_proc": "공항에 착륙하거나 지상활주 또는 이륙하는 항공기에 관해서 규정한 교통장주로서 upwind leg, crosswind leg, downwind leg, base leg, final approach로 구성된다.\n1. UPWIND LEG - 착륙활주로의 착륙방향과 일치하고 평행인 비행로.\n2. CROSSWIND LEG - upwind leg의 끝에서 착륙활주로의 착륙방향과 직각을 이루는 비행로.\n3. DOWNWIND LEG - 착륙활주로의 착륙방향과 반대 방향으로서 평행인 비행로.\n4. BASE LEG - 착륙활주로의 방향과 직각을 이루는 비행로로서 통상적으로 다운윈드레그(downwind leg) 끝에서부터 활주로 중심선의 연장선과의 교차점까지를 일컫는다.\n5. FINAL APPROACH - 착륙활주로의 연장선을 따라 착륙방향과 일치하는 비행로로서 통상 베이스레그(baseleg) 끝에서부터 활주로까지를 일컫는다. 또한 직진입 시계비행 항공기는 최종접근진로상에 있는 것으로 간주 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The traffic flow that is prescribed for aircraft landing at, taxiing on, or taking off from an airport. The components of a typical traffic pattern are departure, upwind leg, crosswind leg, downwind leg, base leg, and final approach. a. Upwind Leg− A flight path that begins after departure and continues straight ahead along the extended runway centerline. Upwind leg is an extension of departure and is used when issuing control instructions for separation, spacing or sequencing. b. Crosswind Leg− A flight path at right angles to the landing runway off its upwind end. c. Downwind Leg− A flight path parallel to the landing runway in the direction opposite to landing. The downwind leg normally extends between the crosswind leg and the base leg. d. Base Leg− A flight path at right angles to the landing runway off its approach end. The base leg normally extends from the downwind leg to the intersection of the extended runway centerline. ATC may instruct a pilot to report a “2-mile left base” to Runway 22. This instruction means that the pilot is expected to maneuver their aircraft into a left base leg that will intercept a straight-in final 2 miles from the approach end of Runway 22 and advise ATC.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAFFIC SITUATION DISPLAY(TSD)",
    "krName": "",
    "definitions": {
      "kr_proc": "TSD는 20 CONUS ARTCC로부터 레이더 트랙 데이터를 받고 그 데이터를 모자이크화 하여 컴퓨터 화면에 시현하는 시스템이다. TSD는 교통관리협조자에게 개별 항공기 혹은 그룹 항공기에 대한 선택 및 강조를 하는 다양한 방법을 선택할 수 있게 한다. 사용자는 이렇게 선택된 항공기의 위치를 배경 디스플레이의 어떤 숫자 위에나 겹쳐놓을 수 있다. 이 배경 옵션은 지역관제소 경계, 항공로 섹터 경계, fix, 항공로, 군사/특수 공역, 공항, 지정학적 경계를 포함한다. TSD를 사용함으로써 협조자는 전체적인 교통 흐름과 어떠한 교통상황의 숫자들이라도 감시할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "TSD is a computer system that receives radar track data from all 20 CONUS ARTCCs, organizes this data into a mosaic display, and presents it on a computer screen. The display allows the traffic management coordinator multiple methods of selection and highlighting of individual aircraft or groups of aircraft. The user has the option of superimposing these aircraft positions over any number of background displays. These background options include ARTCC boundaries, any stratum of en route sector boundaries, fixes, airways, military and other special use airspace, airports, and geopolitical boundaries. By using the TSD, a coordinator can monitor any number of traffic situations or the entire systemwide traffic flows.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAJECTORY",
    "krName": "",
    "definitions": {
      "kr_proc": "현재안(Current Plan) 혹은 대체안(Trial Plan)을 기반으로 하여 비행할 것으로 예측되는, 항로결정지원도구로 나타낸 비행궤도.\n(참조) : EN ROUTE DECISION SUPPORT TOOL",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "BASED OPERATIONS (TBO)− An Air Traffic Management method for strategically planning and managing flights throughout the operation by using Time−Based Management (TBM), information exchange between air and ground systems, and the aircraft’s ability to fly trajectories in time and space. Aircraft trajectory is defined in four dimensions – latitude, longitude, altitude, and time.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAJECTORY MODELING",
    "krName": "",
    "definitions": {
      "kr_proc": "비행궤도를 계산하는 자동화된 과정.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The automated process of calculating a trajectory.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAJECTORY OPTIONS SET",
    "krName": "",
    "definitions": {
      "kr_proc": "TOS는 사용자가 제출한 전자 메시지로서, 교통관리프로그램에 포착된 공역을 관리하기 위해 CTOP에 의해 사용된다. TOS는 사용자에게 항공기의 경로와 수용 가능한 지연 TRADE-OFF를 표현할 수 있게 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A TOS is an electronic message, submitted by the operator, that is used by the Collaborative Trajectory Options Program (CTOP) to manage the airspace captured in the traffic management program. The TOS will allow the operator to express the route and delay trade-off options that they are willing to accept. TRANSFER OF COMMUNICATION (TOC)– A CPDLC uplink that instructs the pilot to either contact or monitor the next air traffic radio frequency.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRAJECTORY-BASED OPERATIONS (TBO)",
    "krName": "",
    "definitions": {
      "kr_proc": "시간 기반 관리(TBM), 공중-지상 시스템 간 정보 교환, 항공기의 시공간 궤도(trajectory) 비행 능력을 활용하여 운항 전반에 걸쳐 비행을 전략적으로 계획 및 관리하는 항공교통 관리 방법. 항공기 궤도(trajectory)는 위도, 경도, 고도 및 시간의 4차원으로 정의된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSCRIBED WEATHER BROADCAST",
    "krName": "",
    "definitions": {
      "kr_proc": "조종사들을 위해 L/MF와 VOR 시설에 방송되는 기상학적이고 항공학적인 정보에 관한 지속적인 기록(알래스카에서만 제공됨)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSFER OF CONTROL",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제업무 제공 책임을 이양하는 것",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Transfer of responsibility for providing air traffic control service.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSFER OF CONTROL",
    "krName": "관제이양",
    "definitions": {
      "kr_proc": "항공기 분리에 관한 책임을 한 관제사에서 다른 관제사에게로 이양하는 행위.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Transfer of responsibility for providing air traffic control service.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Transfer of control point",
    "krName": "관제이양지점",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기에 대한 항공교통관제업무 제공의 책임이 한 관제시설 또는 관 제좌석에서 다음으로 이양되는 비행경로 상 특정 지점 을 말한다. - 개정 : 2026.07.06. 항공교통업무기준",
      "annex11": "",
      "doc4444": "A defined point located along the flight path of an aircraft, at which the responsibility for providing air traffic control service to the aircraft is transferred from one control unit or control position to the next.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "TRANSFERRING CONTROLLER",
    "krName": "이양관제사",
    "definitions": {
      "kr_proc": "항공관제업무를 다른 관제사 에게 이양하는 관제사.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A controller/facility transferring control of an aircraft to another controller/facility. (See ICAO term TRANSFERRING UNIT/CONTROLLER.)",
      "kr_ats": "한 항 공기에 대한 항공교통관제업무 제공의 책임을 비행로를 따라 다음 항공교통교통관제시설/관제사에 이양하는 항 공교통교통관제시설/관제사를 말한다."
    }
  },
  {
    "enName": "TRANSFERRING FACILITY",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : TRANSFERRING CONTROLLER)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRANSFERRING CONTROLLER.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSFERRING UNIT/CONTROLLER",
    "krName": "이양기관/관제사",
    "definitions": {
      "kr_proc": "비행로를 따라 항공관제업무를 제공하는 책임을 인접 항공교통관제부서 및 관제사에게 이양과정에 있는 항공교통관제 부서 및 관제사.\n(참조) : accepting unit/controller",
      "annex11": null,
      "doc4444": "Air traffic control unit/air traffic controller in the process of transferring the responsibility for providing air traffic control service to an aircraft to the next air traffic control unit/air traffic controller along the route of flight. Note.— See definition of “accepting unit/controller”.",
      "faa_pcg": "Air traffic control unit/air traffic controller in the process of transferring the responsibility for providing air traffic control service to an aircraft to the next air traffic control unit/air traffic controller along the route of flight. Note: See definition of accepting unit/controller.",
      "kr_ats": "한 항 공기에 대한 항공교통관제업무 제공의 책임을 비행로를 따라 다음 항공교통교통관제시설/관제사에 이양하는 항 공교통교통관제시설/관제사를 말한다."
    }
  },
  {
    "enName": "Transition altitude",
    "krName": "전이고도",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기의 수직위치를 고 도를 기준으로 관제하는 고도 또는 그 이하의 고도를 말한다.",
      "annex11": "",
      "doc4444": "The altitude at or below which the vertical position of an aircraft is controlled by reference to altitudes.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "Transition layer",
    "krName": "전이층",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "전이고도와 전이비행고도 사이 의 공역을 말한다.",
      "annex11": "",
      "doc4444": "The airspace between the transition altitude and the transition level.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "Transition level",
    "krName": "전이비행고도",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "전이고도 위로 사용 가 능한 가장 낮은 비행고도를 말한다.",
      "annex11": "",
      "doc4444": "The lowest flight level available for use above the transition altitude. 2180/1/11/12/41 6 No. 12 1-18 Air Traffic Management (PANS-ATM)",
      "faa_pcg": ""
    }
  },
  {
    "enName": "TRANSITION POINT",
    "krName": "전이지점",
    "definitions": {
      "kr_proc": "도착항공기가 통상적으로 항공로비행고도로부터 강하를 시작하는 지점으로서 교점(VERTAX)로부터 마일로 표시되는 지점. 도착항공기의 속도조절 단계에서의 첫 번째 픽스.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A point at an adapted number of miles from the vertex at which an arrival aircraft would normally commence descent from its en route altitude. This is the first fix adapted on the arrival speed segments.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSITION WAYPOINT",
    "krName": "",
    "definitions": {
      "kr_proc": "활주로나 RNAV SID 혹은 STAR 상 항공로 전이지점의 시작지점을 일컫는다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSITIONAL AIRSPACE",
    "krName": "전이공역",
    "definitions": {
      "kr_proc": "항공기가 하나의 비행단계 또는 비행조건에서 다른 단계나 조건으로 전이되는 관제공역.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "That portion of controlled airspace wherein aircraft change from one phase of flight or flight condition to another.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSMISSOMETER",
    "krName": "",
    "definitions": {
      "kr_proc": "대기를 통하여 투과되는 불빛의 양을 측정하여 시정을 정하는 데 사용하는 장비로서 활주로 가시거리 및 활주로 시정치를 정하는데 기본적인 장치이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An apparatus used to determine visibility by measuring the transmission of light through the atmosphere. It is the measurement source for determining runway visual range (RVR). (See VISIBILITY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSMITTING IN THE BLIND",
    "krName": "",
    "definitions": {
      "kr_proc": "양방향 통신이 이루어질 수 없고 수신국이 송신을 수신할 수 있으리라고 여겨지는 상황 하에서 하나의 무선국으로부터 다른 무선국으로의 송신.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A transmission from one station to other stations in circumstances where two-way communication cannot be established, but where it is believed that the called stations may be able to receive the transmission.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSONIC FLIGHT",
    "krName": "",
    "definitions": {
      "kr_proc": "아음속에서 음속으로 전환단계의 속도로 항공기가 비행하는 것을 말하며, 시간당 600~900마일, 마하 0.8~1.2에 해당 한다. 이 단계에서의 일부 공기의 흐름은 아음속이고, 일부 공기의 흐름은 초음속으로 나타나며, 항공기의 급격한 비행특성 변경이 발생한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSPONDER",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제 레이더 비컨시스템(ATCRBS)의 탑재 레이더비컨수신기/응답기의 부분으로, 자동적으로 지상 질문기로부터 무선신호를 수신하며, 응답하도록 정해진 모드에 수신된 질문에 대하여 특정 응답신호나 신호그룹으로 선택적으로 응답한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A receiver/transmitter which will generate a reply signal upon proper interrogation; the interrogation and reply being on different frequencies.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSPONDER CODES",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : codes)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CODES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRANSPONDER OBSERVED",
    "krName": "",
    "definitions": {
      "kr_proc": "VFR로 비행하는 조종사에게 항공기의 비컨 코드와 위치가 확인되었다고 알려주는 용어.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Phraseology used to inform a VFR pilot the aircraft’s assigned beacon code and position have been observed. Specifically, this term conveys to a VFR pilot the transponder reply has been observed and its position correlated for transit through the designated area.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRIAL PLAN",
    "krName": "",
    "definitions": {
      "kr_proc": "선택된 항공기의 예상 경로 상에서의 잠재적 위험을 분석하고 시현하는 자동화 된 방법을 사용하는 것에 대한 제시안",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A proposed amendment which utilizes automation to analyze and display potential conflicts along the predicted trajectory of the selected aircraft.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TRSA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : terminal radar service area)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TERMINAL RADAR SERVICE AREA.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TSD",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : TRAFFIC SITUATION DISPLAY)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAFFIC SITUATION DISPLAY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TURBOJET AIRCRAFT",
    "krName": "터보제트 항공기",
    "definitions": {
      "kr_proc": "제트엔진을 장착한 항공기로서 터빈을 구동시킴으로서 공기압축기를 작동시켜 분사에너지를 얻는 항공기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft having a jet engine in which the energy of the jet operates a turbine which in turn operates the air compressor.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TURBOPROP AIRCRAFT",
    "krName": "터보프롭 항공기",
    "definitions": {
      "kr_proc": "제트엔진을 장착한 항공기로서 터빈을 구동시킴으로서 프로펠러를 작동시켜 분사에너지를 얻는 항공기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft having a jet engine in which the energy of the jet operates a turbine which drives the propeller.",
      "kr_ats": ""
    }
  },
  {
    "enName": "TURBULENCE",
    "krName": "",
    "definitions": {
      "kr_proc": "강도에 따른 항공기 반응과 함께 항공기 고도, 자세, 또는 속도의 변화를 일으키는 대기 현상. 항공기 반응에 따라서 조종사가 보고하는 난기류의 강도는 다음과 같다.\n1. Light - 경미하고 불규칙한 고도 및 자세의 변화\n2. Moderate – Light와 비슷하지만 더 높은 강도. 고도 및 자세의 변화가 발생하지만 항공기는 비행조작에는 문제없는 상태.\n3. Severe – 크고, 갑작스러운 고도 및 자세의 변화. 지시 대기속도의 큰 변화를 일으키고 항공기는 일시적인 통제 불능 상태가 될 수 있다.\n4. Extreme – 극심한 움직임으로 인한 사실상의 조종 불가능 상태. 구조적 손상을 일으킬 수 있다.\n(참조 : CHOP)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An atmospheric phenomenon that causes changes in aircraft altitude, attitude, and or airspeed with aircraft reaction depending on intensity. Pilots report turbulence intensity according to aircraft’s reaction as follows:",
      "kr_ats": ""
    }
  },
  {
    "enName": "TURN ANTICIPATION",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : maneuver anticipation)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(maneuver anticipation).",
      "kr_ats": ""
    }
  },
  {
    "enName": "TVOR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : terminal-VHF omni-directional range station)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TERMINAL-VERY HIGH FREQUENCY OMNIDIRECTIONAL RANGE STATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "TWEB",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : transcribed weather broadcast)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "TWO-WAY RADIO COMMUNICATIONS FAILURE",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : lost communication)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See LOST COMMUNICATIONS.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "UDF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : DF)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "UHF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : ultra high frequency)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ULTRAHIGH FREQUENCY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "ULTRAHIGH FREQUENCY",
    "krName": "극초단파",
    "definitions": {
      "kr_proc": "300-3,000MHZ 대의 주파수로서 공지통신을 위하여 군용으로 사용됨. 어떤 경우에는 225MHZ까지 하한선을 정해 UHF로 언급하기도 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The frequency band between 300 and 3,000 MHz. The bank of radio frequencies used for military air/ground voice communications. In some instances this may go as low as 225 MHz and still be referred to as UHF.",
      "kr_ats": ""
    }
  },
  {
    "enName": "ULTRALIGHT VEHICLE",
    "krName": "초경량비행장치",
    "definitions": {
      "kr_proc": "항공안전법에 명시된 항공기와 경량항공기 외에 공기의 반작용으로 뜰 수 있는 장치로서 자체중량, 좌석 수 등 국토교통부령으로 정하는 기준에 해당하는 동력비행장치, 행글라이더, 패러글라이더, 기구류 및 무인비행장치 등을 말한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A single-occupant aeronautical vehicle operated for sport or recreational purposes which does not require FAA registration, an airworthiness certificate, or pilot certification. Operation of an ultralight vehicle in certain airspace requires authorization from ATC. (Refer to 14 CFR part 103.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "UNABLE",
    "krName": "불가",
    "definitions": {
      "kr_proc": "특정한 지시, 요구, 허가에 동의할 수 없을 때 사용되는 용어.\nUNASSOCIATED – 항적식별과 고도정보가 자료란(DATA BLOCK)에 시현되지 않는 레이더 타겟(RADAR TARGET).(See ASSOCIATED.)\nUNCERTAINTY PHASE(불확실단계)\n1. 항공기로부터 연락이 있어야 할 시간 또는 동 항공기와의 첫 번째 교신시도를 실패한 시간 중 더 빠른 시간으로부터 30분 이내에 연락이 없을 경우\n2. 항공기가 마지막 통보한 도착예정시간 또는 항공교통업무기관이 예상한 도착예정시간 중 더 늦은 시간으로부터 30분 이내에 도착하지 않을 경우(다만, 항공기 및 탑승객의 안전이 의심되지 않을 때에는 제외한다.)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Indicates inability to comply with a specific instruction, request, or clearance.",
      "kr_ats": ""
    }
  },
  {
    "enName": "Uncertainty phase",
    "krName": "불확실단계",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공기 및 탑승자의 안 전이 불확실한 상황을 말한다.",
      "annex11": "",
      "doc4444": "A situation wherein uncertainty exists as to the safety of an aircraft and its occupants.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "UNDER THE HOOD",
    "krName": "",
    "definitions": {
      "kr_proc": "모의 계기비행을 하는 동안에 조종석 밖의 시정을 제한하기 위하여 후드(HOOD)를 사용하는 것을 말함. 후드를 착용하여 비행 할 때는 업무한정자격을 소지한 조종사가 합승하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Indicates that the pilot is using a hood to restrict visibility outside the cockpit while simulating instrument flight. An appropriately rated pilot is required in the other control seat while this operation is being conducted. (Refer to 14 CFR part 91.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "UNFROZEN",
    "krName": "",
    "definitions": {
      "kr_proc": "교통관리조언체계(TMA) 계산에 의해 계속해서 변경되고 있는 예정도착시간표(STA). 항공기의 예상도착시간표(ETA)가 stream class의 미리 조정된 “freeze horizon”를 지날 때까지 “Unfrozen”상태로 남을 것이다. 이 시점에서 자동 일정조정(시스템)은 멈출 것이고 교통관리조언체계(TMA)는 “Frozen”된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The Scheduled Time of Arrival (STA) tags, which are still being rescheduled by the time−based flow management (TBFM) calculations. The aircraft will remain unfrozen until the time the corresponding estimated time of arrival (ETA) tag passes the preset freeze horizon for that aircraft’s stream class. At this point the automatic rescheduling will stop, and the STA becomes “frozen.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "UNICOM",
    "krName": "",
    "definitions": {
      "kr_proc": "특정 공항에서 공항정보를 제공하기 위한 비정부 운영 무선시설로서 위치 및 주파수는 항공지도 및 간행물에 등재되어 있음.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A nongovernment communication facility which may provide airport information at certain airports. Locations and frequencies of UNICOMs are shown on aeronautical charts and publications. (See CHART SUPPLEMENT.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "UNMANNED AIRCRAFT",
    "krName": "UA-무인항공",
    "definitions": {
      "kr_proc": "조종사의 탑승 없이 비행을 위해 사용되었거나 사용 예정인 장치. 이 장치는 항공기, 헬리콥터, 비행선 또는 POWERED LIFT AIRCRAFT의 형태 일 수 있다. 무인자유기구, 계류기구, 글라이더 그리고 무인로켓은 무인항공(UA)로 간주되지 않는다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A device used or intended to be used for flight that has no onboard pilot. This device can be any type of airplane, helicopter, airship, or powered-lift aircraft. Unmanned free balloons, moored balloons, tethered aircraft, gliders, and unmanned rockets are not considered to be a UA.",
      "kr_ats": ""
    }
  },
  {
    "enName": "UNMANNED AIRCRAFT SYSTEM",
    "krName": "무인항공 체계",
    "definitions": {
      "kr_proc": "무인항공은 안전한 운영을 위하여 제어국(CONTROL STATION) - 지상, 해상, 항공기지등, 통제망(COTROL LINK), 지원장비, 운용공허중량(Payloads), 비행종료체계, 그리고 시작/복귀 장비등 관련된 요소들을 갖추어야 한다.\n무인항공체계는 무인항공(UA), 제어국(CONTROL STATION) 그리고 통제망(CONTROL LINKS) 세 가지 요소로 구성되어 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An unmanned aircraft and its associated elements related to safe operations, which may include control stations (ground, ship, or air based), control links, support equipment, payloads, flight termination systems, and launch/recovery equipment. It consists of three elements: unmanned aircraft, control station, and data link.",
      "kr_ats": ""
    }
  },
  {
    "enName": "UNMANNED FREE BALLON",
    "krName": "무인자유기구",
    "definitions": {
      "kr_proc": "사람이 탑승하지 않는 무동력 경(輕)항공기(Lighter- than-air aircraft)의 하나로서 가스를 이용하여 부양하는 비행기기\n(주기) : 무인자유기구는 부속서2,부록 4의 기준에 의거 HEAVY, MEDIUM, LIGHT로 분류 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": "자유 비행중인 무동력, 무인의 공기보다 가벼운 항공기를 말한다. 주기 - 무인자유기구는 국제민간항공협약 부속서 2, 부록 5에 수록된 기준에 따라 HEAVY, MEDIUM 및 LIGHT로 분류된다."
    }
  },
  {
    "enName": "UNPUBLISHED ROUTE",
    "krName": "미발간된 비행로",
    "definitions": {
      "kr_proc": "조종사를 위한 항공로지도나 간행물에 최저고도가 명시되어 있지 않은 비행로로서 항행안전시설의 방위, 레이더유도 또는 계기접근절차의 단계를 벗어난 최종접근코스들과의 직선비행로를 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A route for which no minimum altitude is published or charted for pilot use. It may include a direct route between NAVAIDs, a radial, a radar vector, or a final approach course beyond the segments of an instrument approach procedure. (See PUBLISHED ROUTE.) (See ROUTE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "UNRELIABLE(GPS/WAAS)",
    "krName": "",
    "definitions": {
      "kr_proc": "GPS 그리고/혹은 WAAS의 예상되는 서비스 수준이 이용가능 하지 않을 수 있다는 것을 조종사에게 알리는 조언. 조종사는 원하는 신호의 적절성을 결정해야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An advisory to pilots indicating the expected level of service of the GPS and/or WAAS may not be available. Pilots must then determine the adequacy of the signal for desired use. UNSERVICEABLE (U/S) (See OUT OF SERVICE/UNSERVICEABLE.) UPLINK– CPDLC message sent from ATC to the flight deck.",
      "kr_ats": ""
    }
  },
  {
    "enName": "UPWIND LEG",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : traffic pattern)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See TRAFFIC PATTERN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "URGENCY",
    "krName": "긴급",
    "definitions": {
      "kr_proc": "즉각적인 도움을 필요로 하지는 않으나 적절한 안전대책이 필요한 상황으로 잠정적 조난상태.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A condition concerning the safety of an aircraft or other vehicle, or of person on board or in sight, but which does not require immediate assistance.",
      "kr_ats": ""
    }
  },
  {
    "enName": "USAFIB",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : army aviation flight information bulletin)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See ARMY AVIATION FLIGHT INFORMATION BULLETIN.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "UVDF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : DF)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "VASI",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : VASI)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VISUAL APPROACH SLOPE INDICATOR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VDF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : DF)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "VDP",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : VDP)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VISUAL DESCENT POINT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VECTOR",
    "krName": "레이더 유도",
    "definitions": {
      "kr_proc": "항행유도를 제공하기 위하여 항공기에게 발부되는 레이더 기수 방향.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A heading issued to an aircraft to provide navigational guidance by radar. (See ICAO term RADAR VECTORING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Vectoring",
    "krName": "유도",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "항공교통업무 감시시스템 사용을 기반 으로 항공기에 특정 기수형태로 항법 유도를 제공하는 것을 말한다.",
      "annex11": "",
      "doc4444": "Provision of navigational guidance to aircraft in the form of specific headings, based on the use of an ATS surveillance system.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "VERIFY",
    "krName": "",
    "definitions": {
      "kr_proc": "정보에 대한 확인을 요구할 때 사용하는 용어.\n(예) : verify assigned altitude",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Request confirmation of information; e.g., “verify assigned altitude.” ascertain an aircraft’s direction of takeoff and/or direction of turn after takeoff. It is normally used for IFR departures from an airport not having a control tower. When direct communication with the pilot is not possible, the request and information may be relayed through an FSS, dispatcher, or by other means. (See IFR TAKEOFF MINIMUMS AND DEPARTURE PROCEDURES.) VERTICAL NAVIGATION (VNAV)– A function of area navigation (RNAV) equipment which calculates, displays, and provides vertical guidance to a profile or path.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VERIFY SPECIFIC DIRECTION OF TAKEOFF (OR TURNS AFTER TAKEOFF)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공기의 이륙방향, 또는 이륙 후의 선회방향 등을 확인하기 위하여 항공교통관제기관에서 사용하는 용어. 주로 관제탑이 운용되지 않는 공항에서 사용된다. 조종사와의 직접교신이 불가능할 때 요구사항 및 정보가 FIS, 운항관리사, 그 밖의 다른 수단을 통하여 중계할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "VERTICAL NAVIGATION(VNAV)",
    "krName": "",
    "definitions": {
      "kr_proc": "측면도 또는 비행경로에 대한 수직 안내를 계산, 표시 및 제공하는 지역항법(RNAV) 장비의 기능",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "VERTICAL SEPARATION",
    "krName": "수직분리",
    "definitions": {
      "kr_proc": "수직거리치로 표현되는 항공기간의 분리.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Separation between aircraft expressed in units of vertical distance. (See SEPARATION.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VERTICAL TAKEOFF AND LANDING AIRCRAFT",
    "krName": "수직 이/착륙 항공기",
    "definitions": {
      "kr_proc": "이착륙을 위하여 아주 짧은 활주로 또는 작은 지역을 이용하여 수직 상승 및 강하할 수 있는 항공기로서 한정되어 있지는 않으나 헬리콥터를 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Aircraft capable of vertical climbs and/or descents and of using very short runways or small areas for takeoff and landings. These aircraft include, but are not limited to, helicopters. (See SHORT TAKEOFF AND LANDING AIRCRAFT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VERY HIGH FREQUENCY",
    "krName": "",
    "definitions": {
      "kr_proc": "30 ~ 300MHZ대의 주파수. 108 ~ 118MHZ대는 항행안전시설에 사용되고, 118~136MHZ대는 민항기의 공/지 통신용이며, 이 밴드의 다른 주파수는 항공교통관제와 관련이 없는 목적으로 사용된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The frequency band between 30 and 300 MHz. Portions of this band, 108 to 118 MHz, are used for certain NAVAIDs; 118 to 136 MHz are used for civil air/ground voice communications. Other frequencies in this band are used for purposes not related to air traffic control.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VERY HIGH FREQUENCY OMNI-DIRECTIONAL RANGE STATION",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조) : VOR",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VOR.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VERY LOW FREQUENCY",
    "krName": "",
    "definitions": {
      "kr_proc": "3 - 30MHZ대의 주파수",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The frequency band between 3 and 30 kHz.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VFR",
    "krName": "VFR",
    "definitions": {
      "kr_proc": "(참조 :VFR)",
      "annex11": "The symbol used to designate the visual flight rules.",
      "doc4444": "The symbol used to designate the visual flight rules.",
      "faa_pcg": "(See VISUAL FLIGHT RULES.)",
      "kr_ats": "시계비행규칙을 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "VFR",
    "krName": "시계비행규칙",
    "definitions": {
      "kr_proc": "시계비행규칙을 나타내는 약어",
      "annex11": "The symbol used to designate the visual flight rules.",
      "doc4444": "The symbol used to designate the visual flight rules.",
      "faa_pcg": "(See VISUAL FLIGHT RULES.)",
      "kr_ats": "시계비행규칙을 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "VFR AIRCRAFT",
    "krName": "",
    "definitions": {
      "kr_proc": "시계비행규칙에 따라 비행하는 항공기.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An aircraft conducting flight in accordance with visual flight rules. (See VISUAL FLIGHT RULES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VFR CONDITIONS",
    "krName": "시계비행상태",
    "definitions": {
      "kr_proc": "시계비행을 위한 최저치 이상의 기상조건으로 다음 사항에서 항공교통관제의 허가 및 지시로 사용할 수 있다.\n1. IFR 항공기가 시계비행(VFR) 기상조건으로 상승 및 강하를 요구할 때.\n2. 항공교통관제규정에 부합되지 않는 계기비행(IFR) 출발비행로에 대하여, 소음회피비행 또는 고도 승인이 소음회피를 위하여 이득이 될 것으로 예상될 때.\n3. 조종사가 연습계기접근을 요구 및 계기비행(IFR) 비행계획서 상에 있지 않을 때.\n주기 : 위 지시를 받는 모든 조종사들은 14 CFR Part 91 기준에 맞는 구름으로부터의 거리와 VFR시정을 따라야 한다. 이 용어의 사용이 관제사들의 B등급과 C등급에서 비행하는 항공기 분리책임을 경감시키지 않는다. 이 용어가 항공교통관제기관 허가/지시로 사용될 때는 “VFR”로 줄여서 사용될 수 있다. 예를 들어 “MAINTAIN VFR,” “CLIMB/DESCEND VFR,”",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Weather conditions equal to or better than the minimum for flight under visual flight rules. The term may be used as an ATC clearance/instruction only when: a. An IFR aircraft requests a climb/descent in VFR conditions.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VFR FLIGHT",
    "krName": "시계비행항공기",
    "definitions": {
      "kr_proc": "시계비행규칙에 따라 비행하는 항공기",
      "annex11": "A flight conducted in accordance with the visual flight rules.",
      "doc4444": "A flight conducted in accordance with the visual flight rules.",
      "faa_pcg": "(See VFR AIRCRAFT.)",
      "kr_ats": "시계비행규칙에 따른 비행을 말한다."
    }
  },
  {
    "enName": "VFR MILITARY TRAINING ROUTE(VR)",
    "krName": "",
    "definitions": {
      "kr_proc": "10,000피트(MSL) 이하의 시계비행조건에서 250노트(IAS) 이상의 속도로 저고도 항행 및 전술훈련을 수행 목적으로 국방부 및 관련된 예비군 또는 방공부서에 의하여 사용되는 비행로.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "VFR NOT RECOMMENDED",
    "krName": "",
    "definitions": {
      "kr_proc": "시계비행이 적합하지 않을 때 비행정보소에 의하여서 비행 전 또는 비행 중에 있는 조종사에게 기상브리핑을 제공하는 조언. 현재 또는 예보 기상치가 시계비행 최저치 이하가 될 때 제공한다. 이러한 조언은 조종사 스스로의 결정권한을 배제하는 것은 아니다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An advisory provided by a flight service station to a pilot during a preflight or inflight weather briefing that flight under visual flight rules is not recommended. To be given when the current and/or forecast weather conditions are at or below VFR minimums. It does not abrogate the pilot’s authority to make his/her own decision.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VFR TERMINAL AREA CHARTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : aeronautical chart)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AERONAUTICAL CHART.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VFR-ON-TOP",
    "krName": "운상시계비행",
    "definitions": {
      "kr_proc": "적절한 시계비행 고도에서 시계비행 조건으로 기동하는 계기비행 항공기에 대한 항공교통관제기관의 허가. 운상시계비행허가를 득한 조종사는 항공안전법에 규정에 의한 시계비행시정, 구름회피기준, 최저 계기비행고도를 준수하여야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "ATC authorization for an IFR aircraft to operate in VFR conditions at any appropriate VFR altitude (as specified in 14 CFR and as restricted by ATC). A pilot receiving this authorization must comply with the VFR visibility, distance from cloud criteria, and the minimum IFR altitudes specified in 14 CFR part 91. The use of this term does not relieve controllers of their responsibility to separate aircraft in Class B and Class C airspace or TRSAs as required by FAA Order JO 7110.65.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VFR/VFR",
    "krName": "VFR",
    "definitions": {
      "kr_proc": "교통정보 및 안전경고\n통상적인 범위는 20NM 또는 각 공항별 조건에 따라 변경이 가능하다. 외부구역은 주요 C 등급 공역 공항 외곽으로 확장되고, 도해된 C 등급공역과 그 외 해당 공역을 제외한 레이더와 무선통신 통달범위의 최하부에서 위임된 접근관제공역의 최상부까지 확장된다.\n(참조) : controlled airspace conflict resolution",
      "annex11": null,
      "doc4444": "The symbol used to designate the visual flight rules.",
      "faa_pcg": null,
      "kr_ats": "시계비행규칙을 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "VHF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : very low frequency)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VERY HIGH FREQUENCY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VHF OMNI-DIRECTIONAL RANGE/TACTICAL AIR NAVIGATION",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : VORTAC)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VORTAC.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VIDEO MAP",
    "krName": "",
    "definitions": {
      "kr_proc": "레이더 전시기 상에 전자적으로 시현되는 지도로서 공항, 헬기장, 활주로중심선의 연장선, 환자수송을 위한 비상착륙지역, 항행안전시설 및 픽스, 보고지점, 항공로중심선, 경계선, 이양지점, 특별한 목적으로 이용되는 진로, 장애물, 주요 지형표지물, 지도평면지시계, 거리표시, 최저유도고도 등을 나타낸다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An electronically displayed map on the radar display that may depict data such as airports, heliports, runway centerline extensions, hospital emergency landing areas, NAVAIDs and fixes, reporting points, airway/route centerlines, boundaries, handoff points, special use tracks, obstructions, prominent geographic features, map alignment indicators, range accuracy marks, and/or minimum vectoring altitudes.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VISIBILITY",
    "krName": "시정",
    "definitions": {
      "kr_proc": "대기 상태에 따라 결정되고 거리단위로 표시되는 수치로 주간에는 뚜렷한 비발광 대상물과 야간에는 뚜렷한 발광대상물을 보고 식별할 수 있는 범위의 한계. 피트 또는 미터 및 마일(SM)로 나타낸다.\n1. Flight Visibility(비행시정) - 비행 중에 있는 항공기의 조종석으로부터 주간에는 뚜렷한 비발광 대상물을, 야간에는 뚜렷한 발광 대상물을 볼 수 있거나 식별할 수 있는 수평거리의 평균치.\n2. Ground Visibility(지상시정) - 기상청 또는 인가된 관측소로부터 보고 되는 것으로 지표면 근처에서 수평으로 바라본 우시정\n3. Prevailing Visibility(우시정) - 수평원의 반 이상을 차지하는 가장 높은 수평 시정치로 관측을 지속할 필요는 없다.\n4. Runway Visibility Value(활주로시정치 RVV) -  RVR 측정장치(Transmissometer)로 활주로의 특정 부분을 측정한 시정치로서 측정계기는 마일 또는 분수 단위의 마일로 활주로의 지속적인 시정치를 제공한다. 활주로시정치(RVV)는 특정 활주로에 대한 최저치를 결정함에 있어서 우시정 대신 사용된다.\n5. Runway Visual Range(활주로가시거리) - 접근 종료지점에서 조종사가 활주로를 볼 수 있는 수평적 거리를 말하며 계기적인 측정에 의하여서 얻어지는 수치로서 고광도의 활주로 불빛의 인지 여부나 다른 시각 대체물을 기초로 해서 나타낸다. 우시정 또는 활주로시정과 달리 활주로가시거리(RVR)는 조종사의 활주로 인지 여부를 근거로 경사각의 거리를 나타내는 것이 아니라 수평 거리를 나타낸다. 이 수치는 계기 활주로의 접지점 근처에 설치된 TRANSMISSOMETER에 의한 측정치를 근거로 100피트 단위로 보고된다. 활주로가시거리(RVR)는 특정 활주로에 대한 최저치를 결정함에 있어 활주로가시거리(RVV) 또는 우시정을 대신하여 사용한다.\n가. Touchdown RVR - 활주로 착륙지점 근처에 위치한 RVR 측정장비로부터 산출되는 시정치.\n나. Mid-RVR - 활주로 중심부 근처에 위치한 RVR 측정장비로부터 산출되는 시정치.\n다. Rollout RVR - 활주로상에서의 Rollout이 완전히 끝나는 지점으로부터 가장 가까운 곳에 위치한 RVR 측정장비로부터 산출되는 시정치.\nVISIBILITY(시정) [ICAO] : 대기 조건에 의해 결정되고 거리단위로 표시되며 낮에는 조명이 없는 물체를 야간에는 조명이 켜진 물체를 식별하는 능력\n1. 비행시정 - 비행 중인 항공기 조종석에서 식별할 수 있는 전방 시정\n2. 지상시정 - 공인된 관찰자가 보고한 비행장의 시정\n3. 활주로 가시거리 - 활주로 중심선에 있는 항공기의 조종사가 표면표시 도는 조명을 볼 수 있는 범위",
      "annex11": null,
      "doc4444": "Visibility for aeronautical purposes is the greater of: a) the greatest distance at which a black object of suitable dimensions, situated near the ground, can be seen and recognized when observed against a bright background; b) the greatest distance at which lights in the vicinity of 1 000 candelas can be seen and identified against an unlit background. Note 1.— The two distances have different values in air of a given extinction coefficient, and the latter b) varies with the background illumination. The former a) is represented by the meteorological optical range (MOR). Note 2.— The definition applies to the observations of visibility in local routine and special reports, to the observations of prevailing and minimum visibility reported in METAR and SPECI and to the observations of ground visibility.",
      "faa_pcg": "The ability, as determined by atmospheric conditions and expressed in units of distance, to see and identify prominent unlighted objects by day and prominent lighted objects by night. a. Flight Visibility− The visibility forward from the cockpit of an aircraft in flight. b. Ground Visibility− The visibility at an aerodrome as reported by an accredited observer. c. Runway Visual Range [RVR]− The range over which the pilot of an aircraft on the centerline of a runway can see the runway surface markings or the lights delineating the runway or identifying its centerline.",
      "kr_ats": "항공 목적에서 다음 중 더 큰 값: 가) 지상 근처에 위치한 적절한 크기의 검은 물체를 밝은 배경을 배경으로 보았을 때 인식할 수 있는 제정 : 2013.05.03. - 101 별표 최대 거리; 나) 불빛이 없는 배경에서 1,000칸델라의 불빛을 보 았을 때 인식할 수 있는 최대 거리. 주기1 - 두 거리는 주어진 소광계수에서 서로 다른 값 을 가지며, 후자의 b)는 배경 조도에 따라 달라질 수 있 음. 전자의 a)는 기상학적 광학 거리(MOR)로 표현된다. 주기2 - 이 정의는 국지의 상시 및 특별 예보에서의 시정 관측, METAR 및 SPECI에서 보고된 우세 시정 및 최저 시정 관측, 그리고 지상 시정 관측에 적용된다."
    }
  },
  {
    "enName": "VISUAL APPROACH",
    "krName": "시계접근",
    "definitions": {
      "kr_proc": "IFR 비행계획에 의해 수행되는 접근으로 공항에 구름이 없고 조종사가 육안을 참조하여 비행하는 방식. 조종사는 항상 공항 및 선행항공기를 식별해야하고, 항공교통관제 시설의 통제를 받아야한다. 보고된 공항의 기상이 운고는 1000피트 이상 시정은 3마일 이상이어야 한다.",
      "annex11": null,
      "doc4444": "An approach by an IFR flight when either part or all of an instrument approach procedure is not completed and the approach is executed in visual reference to terrain.",
      "faa_pcg": "An approach by an IFR flight when either part or all of an instrument approach procedure is not completed and the approach is executed in visual reference to terrain.",
      "kr_ats": "IFR 항공기가 계기접근절차 의 일부 또는 전부를 수행하지 않고 지형지물을 육안 참조하여 비행하는 방식을 말한다."
    }
  },
  {
    "enName": "VISUAL APPROACH SLOPE INDICATOR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : airport lighting)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRPORT LIGHTING.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VISUAL CLIMB OVER AIRPORT(VOCA)",
    "krName": "",
    "definitions": {
      "kr_proc": "기상이 특정한 시정과 운고보다 더 좋거나 VMC에서 IFR항공기가 발간된 계기 출발 경로 상에서 상승해야 될 고도까지 공항상공으로의 시각선회상승을 위한 출발조건. 마일 당 200피트를 초과하는 상승률을 준수하기 위한 대안인 VCOA절차는 활주로 출발지점 끝으로부터 3마일 초과되는 위치에 있는 장애물들을 회피하기 위해 만들어졌다. 조종사는 출발 전에 VCOA로 비행하겠다는 의도를 항공교통관제기관에게 가능한 신속히 알릴 책임이 있다. 이 본문의 절차들은 국지절차의 이륙 최저치와 (장애물)출발 절차 부분에 발간되어야 하며/하거나 Graphic ODP에 삽입되어 있어야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A departure option for an IFR aircraft, operating in visual meteorological conditions equal to or greater than the specified visibility and ceiling, to visually conduct climbing turns over the airport to the published “climb−to” altitude from which to proceed with the instrument portion of the departure. VCOA procedures are developed to avoid obstacles greater than 3 statute miles from the departure end of the runway as an alternative to complying with climb gradients greater than 200 feet per nautical mile. Pilots are responsible to advise ATC as early as possible of the intent to fly the VCOA option prior to departure. These textual procedures are published in the ‘Take−Off Minimums and (Obstacle) Departure Procedures’ section of the Terminal Procedures Publications and/or appear as an option on a Graphic ODP. (See AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VISUAL DESCENT POINT",
    "krName": "시각강하지점",
    "definitions": {
      "kr_proc": "비정밀 직진입 접근절차의 최종 접근 진로상에 정해져 있는 지점으로서, 이 지점에서 활주로 시단 또는 접근등 기타 식별 가능한 표지물을 조종사가 식별 할 때, 최저강하고도(MDA)로부터 활주로 접지점까지 정상적으로 강하할 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A defined point on the final approach course of a nonprecision straight-in approach procedure from which normal descent from the MDA to the runway touchdown point may be commenced, provided the approach threshold of that runway, or approach lights, or other markings identifiable with the approach end of that runway are clearly visible to the pilot.",
      "kr_ats": ""
    }
  },
  {
    "enName": "VISUAL FLIGHT RULES",
    "krName": "시계비행규칙",
    "definitions": {
      "kr_proc": "시계비행기상상태에서의 비행규칙. 시계비행규칙(VFR)은 기상조건이 시계비행규칙(VFR) 최소 충족조건 이상임을 나타내기 위하여 사용되며, 비행계획서 상의 비행형태를 나타내기 위하여 조종사 또는 관제사에 의하여 사용되기도 한다.\n(참조) : 항공안전법",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Rules that govern the procedures for conducting flight under visual conditions. The term “VFR” is also used in the United States to indicate weather conditions that are equal to or greater than minimum VFR requirements. In addition, it is used by pilots and controllers to indicate type of flight plan. (See INSTRUMENT FLIGHT RULES.) (See INSTRUMENT METEOROLOGICAL CONDITIONS.) (See VISUAL METEOROLOGICAL CONDITIONS.) (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VISUAL HOLDING",
    "krName": "시각체공",
    "definitions": {
      "kr_proc": "비행 중에 인식하기 쉬운 선택된 지리적 위치에서의 항공기 체공",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "The holding of aircraft at selected, prominent geographical fixes which can be easily recognized from the air. (See HOLDING FIX.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VISUAL METEOROLOGICAL CONDITIONS",
    "krName": "시계비행기상상태",
    "definitions": {
      "kr_proc": "항공기가 항행함에 있어 시정 및 구름의 상황을 고려하여 국토교통부령이 정하는 시계상의 양호한 기상상태를 말한다.",
      "annex11": "Meteorological conditions expressed in terms of visibility, distance from cloud, and ceiling, equal to or better than specified minima. Note.— The specified minima are contained in Annex 2.",
      "doc4444": "Meteorological conditions expressed in terms of visibility, distance from cloud, and ceiling, equal to or better than specified minima. Note.— The specified minima are contained in Annex 2, Chapter 4.",
      "faa_pcg": "Meteorological conditions expressed in terms of visibility, distance from cloud, and ceiling equal to or better than specified minima. (See INSTRUMENT FLIGHT RULES.) (See INSTRUMENT METEOROLOGICAL CONDITIONS.) (See VISUAL FLIGHT RULES.)",
      "kr_ats": "특 정 최저치 이상의 시정, 구름으로부터의 거리 및 운고 로 표시되는 기상상태를 말한다."
    }
  },
  {
    "enName": "VISUAL SEPARATION",
    "krName": "시계분리",
    "definitions": {
      "kr_proc": "터미널 지역 및 항공로 공역에서 항공기를 분리하기 위하여 항공교통관제기관에서 행해지는 분리방법으로 다음 각호의 방법을 이용한다.\n1. 관제탑 관제사는 관련 항공기를 시야에 두고 다른 항공기와의 충돌 회피를 위하여 필요에 따라 지시를 발부한다.\n2. 조종사는 다른 항공기를 시야에 두고, 다른 항공기와의 충돌회피를 위하여 필요에 따라 조언을 받을 수 있도록 관제사의 지시 하에 있어야 하며 이러한 분리는 선행항공기를 뒤따르거나 장애요소가 사라질 때까지 시야에 두고 있어야 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A means employed by ATC to separate aircraft in terminal areas and en route airspace in the NAS. There are two ways to effect this separation: a. The tower controller sees the aircraft involved and issues instructions, as necessary, to ensure that the aircraft avoid each other. b. A pilot sees the other aircraft involved and upon instructions from the controller provides his/her own separation by maneuvering his/her aircraft as necessary to avoid it. This may involve following another aircraft or keeping it in sight until it is no longer a factor. (See SEE AND AVOID.) (Refer to 14 CFR part 91.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "Visual surveillance system",
    "krName": "시각감시시스템",
    "definitions": {
      "kr_proc": "",
      "kr_ats": "비행장 및 그 주변에서 상황 인식을 유지하는 데 필요한 교통 및 기타 정보를 전자 시각적으로 제공하는 전자광학시스템 을 말한다.",
      "annex11": "",
      "doc4444": "An electro-optical system providing an electronic visual presentation of traffic and any other information necessary to maintain situational awareness at an aerodrome and its vicinity.",
      "faa_pcg": ""
    }
  },
  {
    "enName": "VLF",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : VLF)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VERY LOW FREQUENCY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VMC",
    "krName": "VMC",
    "definitions": {
      "kr_proc": "(참조 :VMC)\nVMC 시계비행 상태를 나타내는 약어",
      "annex11": "The symbol used to designate visual meteorological conditions.",
      "doc4444": "The symbol used to designate visual meteorological conditions.",
      "faa_pcg": "(See VISUAL METEOROLOGICAL CONDITIONS.)",
      "kr_ats": "시계비행기상상태를 나타내는 약어를 말한다."
    }
  },
  {
    "enName": "VOICE SWITCHING AND CONTROL SYSTEM",
    "krName": "음성전환 및 통제시스템",
    "definitions": {
      "kr_proc": "항공교통관제에 필요한 모든 음성 회선(공지 통신 및 지상통신)을 관제사에게 제공하는 컴퓨터화된 전환시스템.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A computer controlled switching system that provides air traffic controllers with all voice circuits (air to ground and ground to ground) necessary for air traffic control. (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VOR",
    "krName": "전방향 표지시설",
    "definitions": {
      "kr_proc": "자북을 기준으로 하여 360도 전방향으로 VHF 항행신호를 송신하는 지상에 설치된 항행안전시설로서 국가공역 수립체계에 기본 시설이 된다. 이 시설은 간헐적으로 자체 모르스부호를 송신하며, 부가적인 음성인식문자를 제공하기도 한다. 음성문자는 조종사에게 지시 및 정보를 송신하기 위하여 항공교통업무기관 또는 비행정보실(FIS)에 의하여 사용된다.\n(참조) : 항공안전법",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A ground-based electronic navigation aid transmitting very high frequency navigation signals, 360 degrees in azimuth, oriented from magnetic north. Used as the basis for navigation in the National Airspace System. The VOR periodically identifies itself by Morse Code and may have an additional voice identification feature. Voice features may be used by ATC or FSS for transmitting instructions/information to pilots. (See NAVIGATIONAL AID.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VOR TEST SIGNAL",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : VOT)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VOT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VORTAC",
    "krName": "",
    "definitions": {
      "kr_proc": "한 위치에서 VOR 방위, TACAN 방위, TACAN 거리측정(DME)을 제공하는 항행안전시설.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A navigation aid providing VOR azimuth, TACAN azimuth, and TACAN distance measuring equipment (DME) at one site. (See DISTANCE MEASURING EQUIPMENT.) (See NAVIGATIONAL AID.) (See TACAN.) (See VOR.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VORTICES",
    "krName": "와류",
    "definitions": {
      "kr_proc": "항공기가 양력을 일으킬 때 날개의 움직임에 의하여 형성되는 대기의 순환 형태로서, 양력상태에서 날개 상단부의 저기압 형성과 날개 끝에서의 고기압에서 저기압으로의 공기의 흐름은 두 개의 원형모양의 급속한 와류를 형성한다. 와류는 항공기 후류요란의 상당 부분을 차지하며 와류의 원동력은 날개의 중량, 총 중량, 항공기의 속도 등에 달려있다. 중형 또는 대형 항공기에 의하여 생성된 와류는 비교적 높은 속도를 지닐 수 있으며, 소형항공기에게 치명적이 될 수 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "Circular patterns of air created by the movement of an airfoil through the air when generating lift. As an airfoil moves through the atmosphere in sustained flight, an area of area of low pressure is created above it. The air flowing from the high pressure area to the low pressure area around and about the tips of the airfoil tends to roll up into two rapidly rotating vortices, cylindrical in shape. These vortices are the most predominant parts of aircraft wake turbulence and their rotational force is dependent upon the wing loading, gross weight, and speed of the generating aircraft. The vortices from medium to super aircraft can be of extremely high velocity and hazardous to smaller aircraft. (See AIRCRAFT CLASSES.) (See WAKE TURBULENCE.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VOT",
    "krName": "전방향 표지시설 시험신호",
    "definitions": {
      "kr_proc": "VOR 수신기의 정확도를 점검하기 위하여 시험 신호를 발산하는 지상에 설치된 시설. 주 VOT는 비행 중에 사용할 수 있으며, 다른 VOT는 지상에서만 사용해야 하는 제한사항이 있다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A ground facility which emits a test signal to check VOR receiver accuracy. Some VOTs are available to the user while airborne, and others are limited to ground use only. (See CHART SUPPLEMENT.) (Refer to 14 CFR part 91.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VR",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : VFR military routes)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VFR MILITARY TRAINING ROUTES.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VSCS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : voice switching and control system)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VOICE SWITCHING AND CONTROL SYSTEM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "VTA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : vertex time of arrival)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "VTOL AIRCRAFT",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : vertical takeoff and landing aircraft)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See VERTICAL TAKEOFF AND LANDING AIRCRAFT.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "WA",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : AIRMET)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See AIRMET.) (See WEATHER ADVISORY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "WAKE TURBULENCE",
    "krName": "항적난기류",
    "definitions": {
      "kr_proc": "항공기가 대기를 통과할 때 나타나는 현상으로 공중 및 지상에서의 vortices, thrust stream turbulence, jet blast, jet wash, propeller wash, rotor wash 등이 해당된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A phenomenon that occurs when an aircraft develops lift and forms a pair of counter-rotating vortices. (See AIRCRAFT CLASSES.) (See AIRCRAFT WAKE CATEGORIES.) (See VORTICES.) (Refer to AIM.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "WARNING AREA",
    "krName": "경계공역",
    "definitions": {
      "kr_proc": "(참조 : special use airspace)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SPECIAL USE AIRSPACE.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "WAYPOINT",
    "krName": "웨이포인트",
    "definitions": {
      "kr_proc": "항공로, 계기접근, 위치보고, 발간된 시계비행로, 시계보고지점, 통과지점, 우회지점, 특별 사용공역을 위하여 사전에 결정된 지리적 위치로서 VORTAC 시설 또는 위도 및 경도 좌표로서 정의된다.",
      "annex11": "A specified geographical location used to define an area navigation route or the flight path of an aircraft employing area navigation. Waypoints are identified as either:",
      "doc4444": "A specified geographical location used to define an area navigation route or the flight path of an aircraft employing area navigation. Waypoints are identified as either:",
      "faa_pcg": "A predetermined geographical position used for route/instrument approach definition, progress reports, published VFR routes, visual reporting points or points for transitioning and/or circumnavigating controlled and/or special use airspace, that is defined relative to a VORTAC station or in terms of latitude/longitude coordinates.",
      "kr_ats": "지역항법비행로 또는 지역항법을 사용하는 항공기의 비행로를 정의하기 위해 사용되는 특정 지리적 위치를 말한다. 다음 중 하나로 식별된다: Fly-by 웨이포인트. 항공로 또는 절차의 다음 구간의 접 선방향으로 접하기 위해 선회가 예상되는 지점 Flyover 웨이포인트. 항공로 또는 절차의 다음 구간에 합류하기 위해 선회를 시작하는 지점 - 개정 : 2026.07.06."
    }
  },
  {
    "enName": "WEATHER ADVISORY",
    "krName": "기상조언",
    "definitions": {
      "kr_proc": "항공기상예보의 일종으로서 기상청에서 제공하며,  국지기상예보에 발표되지 않은 항공교통의 운용에 영향을 미칠 수 있는 위험한 기상상태를 포함한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "In aviation weather forecast practice, an expression of hazardous weather conditions not predicted in the Aviation Surface Forecast, Aviation Cloud Forecast, or area forecast, as they affect the operation of air traffic and as prepared by the NWS. (See AIRMET.) (See GRAPHICAL AIRMEN’S METEOROLOGICAL INFORMATION.) (See SIGMET.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "WHEN ABLE",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제 지시와 관련하여 사용할 경우 조종사에게 상황이 해소될 때까지 이행지연을 허가할 때, 사용되는 용어. “pilot discretion”과 달리, 이 용어를 서두에 사용할 때에는 조종사의 이행에 권한을 부여하며, 기동을 시작한 경우, 조종사는 지시의 이행을 완료하여야 한다. 신속한 이행이 요구될 때는 사용하여서는 안 된다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. In conjunction with ATC instructions, gives the pilot the latitude to delay compliance until a condition or event has been reconciled. Unlike “pilot discretion,” when instructions are prefaced “when able,” the pilot is expected to seek the first opportunity to comply.",
      "kr_ats": ""
    }
  },
  {
    "enName": "WIDE-AREA MULTILATERATION(WAM)",
    "krName": "",
    "definitions": {
      "kr_proc": "항공교통관제 레이더 비컨(ATCRBS)(Mode A, C)과 Mode S 응답기 및 ADS-B 전송의 신호 조합을 활용할 수 있는 분산 감시 기술로써, 지리적으로 분산된 여러 개의 센서가 응답기 메시지의 도착 시간을 측정. 항공기 위치는 기준점(reference)과 지상국의 측정된 도착 시간 사이에서 계산된 시간 차이(TODA) 측정의 공동 처리에 의해 결정",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "WILCO",
    "krName": "",
    "definitions": {
      "kr_proc": "당신의 메시지를 수신 및 이해하였으며, 그것을 따르겠다는 의미.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "I have received your message, understand it, and will comply with it.",
      "kr_ats": ""
    }
  },
  {
    "enName": "WIND SHEAR ESCAPE",
    "krName": "",
    "definitions": {
      "kr_proc": "조종석 탑재 시스템의 한 부분으로써 기장에 의해 운영되는 비계획적이고 예방적인 기동이다. wind shear escape는 wind shear 현상이 더 이상 탐지되지 않을 때까지 저고도 상황국지 환경에서 최대 추력 상승하는 것이 특징이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "An unplanned abortive maneuver initiated by the pilot in command (PIC) as a result of onboard cockpit systems. Wind shear escapes are characterized by maximum thrust climbs in the low altitude terminal environment until wind shear conditions are no longer detected.",
      "kr_ats": ""
    }
  },
  {
    "enName": "WINDSHEAR",
    "krName": "",
    "definitions": {
      "kr_proc": "풍향 및 풍속의 변화가 격렬하게 나타나는 현상으로 수직, 수평방향 또는 양방향으로 형성되기도 한다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "A change in wind speed and/or wind direction in a short distance resulting in a tearing or shearing effect. It can exist in a horizontal or vertical direction and occasionally in both.",
      "kr_ats": ""
    }
  },
  {
    "enName": "WORDS TWICE",
    "krName": "",
    "definitions": {
      "kr_proc": "1. 요구 : 교신이 어려우니 모든 어구를 두 번 말씀해 주십시오.\n2. 정보 : 교신이 어려우니 이 메시지에 있는 모든 어구는 두 번씩 방송될 것이다.",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "a. As a request: “Communication is difficult. Please say every phrase twice.” b. As information: “Since communications are difficult, every phrase in this message will be spoken twice.”",
      "kr_ats": ""
    }
  },
  {
    "enName": "WORLD AERONAUTICAL CHARTS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : aeronautical chart)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": null,
      "kr_ats": ""
    }
  },
  {
    "enName": "WS",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : SIGMET)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See SIGMET.) (See WEATHER ADVISORY.)",
      "kr_ats": ""
    }
  },
  {
    "enName": "WST",
    "krName": "",
    "definitions": {
      "kr_proc": "(참조 : convective SIGMENT)",
      "annex11": null,
      "doc4444": null,
      "faa_pcg": "(See CONVECTIVE SIGMET.) (See WEATHER ADVISORY.)",
      "kr_ats": ""
    }
  }
];
