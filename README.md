# google-form-notice-with-discord

구글폼 알림이 필요하신가요? 잘 찾아오셨습니다!<br>
이 프로젝트는 Google Spread Sheet와 App scripts, Discord Webhook을 통해 디스코드로 구글폼 작성 알림을 받을 수 있는 프로그램입니다.<br>
질문, 버그, 개선사항은 언제든 issues에 작성해주시면 감사하겠습니다.

<b>App scripts는 구글 인프라의 Sever-side로 작동하며 시간 기반의 트리거 기능을 지원하므로, 별도의 서버 마련이 필요하지 않습니다.</b>
<br><br>
## 사용법
1. 구글폼과 연결 된 스프레드시트를 만듭니다. 'Sheets에서 보기'를 누르면 시트를 생성할 수 있습니다.
![image](https://user-images.githubusercontent.com/84006880/222891078-def2dedc-7849-4c85-ad21-a6dbb5a29fa6.png)
<br><br><br><br><br>
2. 스프레드시트의 App scripts로 접근합니다.
![image](https://user-images.githubusercontent.com/84006880/222891141-0e9cb6b7-1453-46da-8e21-a40dbdc1068f.png)
<br><br><br><br><br>
3. App scripts에 main.js를 붙여넣습니다. 코드내에 적힌 주석을 참고하여, 디스코드 웹훅 URL과 알림 메시지에 포함할 데이터가 있는 컬럼의 번호를 적습니다.
![image](https://user-images.githubusercontent.com/84006880/222891203-78dc3604-9a95-4804-a45a-6abc4c0f0fb0.png)
<br><br><br><br><br>
4. 코드를 저장 한 뒤 실행 버튼을 누르면, 구글 계정으로 로그인하여 액세스를 허용하는 절차를 거칩니다. 로그인 - 고급 - (프로젝트 이름)으로 이동을 클릭하여 액세스를 허용합니다.
![image](https://user-images.githubusercontent.com/84006880/222894413-94af85df-bbd2-4d06-a980-0e92dfd6fecc.png)
<br><br><br><br><br>
5. 실행을 확인한 뒤, 트리거를 시간 기반으로 적절하게 설정합니다.
![image](https://user-images.githubusercontent.com/84006880/222891251-c55a2724-c999-470f-b2de-4c852b723f55.png)
<br><br><br><br><br>
6. 새로운 응답이 들어오면 아래와 같이 디스코드 알림을 받을 수 있습니다.
![image](https://user-images.githubusercontent.com/84006880/223897220-0d61c132-a752-4010-b67a-dbfb581830cb.png)
