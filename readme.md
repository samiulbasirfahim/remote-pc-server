# [Only working on linux]
## [player-ctl pulseaudio-ctl firefox required]

- git clone https://github.com/samiulbasirfahim/remote-pc-server.git
- cd remote-pc-server
- open src/middleware/auth.ts
- edit your secret key... i dont know why .env file make some issue with es3
- after edit your secret key... yarn build && yarn start

- now open [remote-pc-client](remote-pc.rf.gd/)
- connect your device by type your ip + :1234 (example: 192.168.0.121:1234) and your secret key

Hurray, done