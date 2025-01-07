# Dream_world
본 프로젝트는 Azure를 활용하여 꿈을 해몽하고, 꿈과 관련된 스토리, 이미지 생성을 해줍니다.  `Html`, `Css`,`JavaScript` 기반의 사용자 인터페이스, 그리고 `Azure`에서 배포한 모델을 활용하여 프로젝트를 수행합니다.

## 주요기능

### 1. 데이터 수집 및 전처리
- **해몽 데이터**:
  - 꿈 해몽 데이터를 수집
  - `DreamBible` 사이트에서 크롤링
  - Nate 꿈해몽에선 수작업으로 데이터 추가
- **데이터 전처리**:
  - 크롤링한 데이터의 중복제거
  - 크롤링하다가 광고 혹은 특수문자 포함된 내용 제거
  - 카테고라이징<br>
    
### 2. Azure 활용 - Part1
- **Open AI**:
  - 가공한 데이터를 스토리지, 벡터 저장소에 저장(RAG 활용을 위한 방법)
  - 채팅 플레이그라운드에 있는 computer 프롬프팅, 파라미터 수정
  - 꿈 스토리 생성 모델과 `RAG` 적용된 해몽 생성 모델 각각 배포
- **시행착오 과정**:
  - Token수 초과 이슈로 인한 model 다운그레이드
  - 대규모 데이터 셋의 `RAG`사용으로 인한 응답 시간 지연을 데이터 -> 벡터 변환으로 응답시간 단축
  - RAG활용을 위해 채팅 -> 도우미 플레이 그라운드로 전환<br> 
### 2. Azure 활용 - Part2
- **STT**:
    - `Speech Studio`를 활용한 음성 입력 후 텍스트 처리
- **AI Studio - 이미지생성(Dall-e-3)**:
    - `STT`에서 받은 꿈 내용을 그대로 이미지 생성
    - `Open AI`에서 생성된 이야기를 가지고 이미지 생성
- **시행착오 과정**:
    - `language Studio`에서 키워드 추출이 어려워 `Open AI`에서 키워드를 받음
    - `Dall-e`에 제약이 많아 `Open AI`에서 프롬프팅으로 조건을 설정해 안나오는 경우의 수를 최대한 줄임<br>
### 2. Azure 활용 - 코드화
- STT와 AI Studio, 두 가지의 도우미 플레이그라운드 모델 배포

### 3. 프론트엔드
- **1. UI 구현**:
    - HTML, CSS, JavaScript를 활용하여 직관적이고 반응형 UI를 구현했습니다.
    - Jinja2 템플릿 엔진을 사용하여 Flask와 통합된 동적 페이지를 구성했습니다.
    - Dream Gallery, 음성 녹음, 텍스트 편집, 이미지/이야기 생성 등 주요 페이지가 포함되어 있습니다.
- **2. 페이지 구성**:
    - 홈 페이지 (`/home`): Dream Generator의 기능을 소개하고 주요 기능으로 이동할 수 있는 허브 역할을 합니다.
    - 음성 녹음 페이지 (`/record`): 사용자가 음성으로 꿈을 기록하고 변환할 수 있는 UI를 제공합니다.
    - 꿈 편집 페이지 (`/edit`): 변환된 텍스트를 편집하고 저장할 수 있습니다.
    - 꿈 갤러리 (`/dream_gallery`): 저장된 꿈과 관련된 이미지/이야기를 열람하고 관리할 수 있습니다.
    - 이미지/이야기 생성 로딩 페이지: 콘텐츠 생성 중 진행 상태를 시각적으로 표시합니다.
- **3. JavaScript 인터랙션**:
    - `AJAX`를 활용하여 백엔드와 실시간으로 데이터를 주고받습니다.
    - 음성 녹음, 텍스트 편집, 콘텐츠 생성 시 사용자 경험을 향상시키는 애니메이션과 상태 표시 기능을   추가했습니다.

### 4. 백엔드
- **1. API 설계**:
    - `Flask`를 기반으로 `RESTful API`를 설계하여 프론트엔드와 통신합니다.
    - 주요 API:
        - `/generate-image`: 꿈 내용을 바탕으로 이미지를 생성합니다.
        - `/generate-story`: 꿈 내용을 기반으로 이야기를 생성합니다.
        - `/stt` 및 `/stop-stt`: 음성을 텍스트로 변환하고 이를 관리합니다.
        - `/save-dream`: 사용자가 입력한 꿈 내용을 저장합니다.
        - `/delete-dreams`: 저장된 꿈을 삭제합니다.
- **2. Azure OpenAI 연동**:
    - `Azure OpenAI1의 `DALL·E` 및 `GPT API`를 사용하여 이미지 및 이야기 생성을 처리합니다.
    - API 호출 시 재시도 로직을 추가하여 안정성을 강화했습니다.
- **3. 데이터베이스 관리**:
    - `SQLAlchemy`를 사용하여 데이터베이스를 구성하고, 꿈과 생성된 콘텐츠를 저장합니다.
    - 주요 테이블:
        - Users: 사용자 정보를 저장합니다.
        - Dreams: 꿈의 텍스트, 생성된 이미지 URL, 생성된 이야기 등을 저장합니다.
- **4. 음성 인식 처리**:
    - `Azure Speech Service`를 사용하여 음성을 텍스트로 변환합니다.
    - 백그라운드 스레드로 음성 인식이 진행되며, 종료 시 결과를 반환합니다.
- **5. 오류 처리 및 로깅**:
    - API 호출 및 데이터 처리 중 발생할 수 있는 오류를 포착하여 JSON 형식으로 저장합니다.
    - 로그를 통해 서버 상태를 지속적으로 모니터링합니다.


### 화면구성
---
![image](https://github.com/user-attachments/assets/d2d8b30b-f3cf-4213-85c2-f7dcbfba1eec)
![image](https://github.com/user-attachments/assets/2b5e8a1a-09f5-4eb3-be25-898f1bf4c162)


## 프로젝트 구조

```plaintext
Dream Generator/
│
├── app.py              # Flask 애플리케이션 메인 파일
├── templates/          # HTML 템플릿 파일 폴더
│   ├── main.html
│   ├── 1_home.html
│   ├── 2_record.html
│   ├── 3_edit__haerim.html
│   └── ...
├── static/             # 정적 파일 (CSS, JS, 이미지 등)
│   ├── css/
│   └── js/
├── requirements.txt    # Python 종속성 파일
├── README.md           # 프로젝트 설명 파일
└── ...
```


      
