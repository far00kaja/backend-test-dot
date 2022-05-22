# backend-test-dot
Test Backend Developer Dicky Darmawan for DOT
# Backend-Developer Test Dicky Darmawan

Best Regard, aplikasi ini diperuntukan untuk memenuhi test pada DOT sebagai Backend Developer dengan menggunakan stack nodejs, express,sequelize, postgresql dan juga redis. Pastikan dari setiap stack yang digunakan sudah berjalan.

## Installation
1. clone terlebih dahulu github pada link berikut
```bash
git clone https://github.com/far00kaja/backend-test-dot.git
```
2. rename file ``.sample-env`` menjadi file ``.env`` dan sesuaikan konfigurasi file ``.env``
```javascript
PORT=290

# env which db connect
NODE_ENV = development

# pg connect

PGHOST= localhost
PGUSER= postgres
PGPASSWORD= dicky
PGPORT=5432
PGHOST= localhost
PGDATABASE = db_dot_dicky_darmawan2
PGDIALECT = postgres

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=dicky

BCRYPT_SALT_ROUND=10
# # for encrypt
# ALGORITHM = aes-256-gcm
# ENCRYPTION_KEY = 3zTvzr3p67VC61jmV54rIYu1545x4TlY
# IV = 60iP0h6vJoEa

# # basic auth
# name = rod
# pasword = qwerty
```

3. lakukan instalasi npm
````bash
npm install
````
4. buat database pada postgresql sesuai dengan konfigurasi yang ada pada file ``.env``
5. lakukan migrasi dengan melakukan script berikut
```
npx sequelize-cli db:migrate
```
6. lakukan juga untuk migrasi seeders dengan melakukan script berikut
```
npx sequelize-cli db:seed:all
```
7. jalankan aplikasi dengan melakukan perintah script berikut
```
npm run dev
```
8. untuk melakukan pengetestan e2e lakukan perintah script berikut
```
npm test
```


## Dokumentasi API
Untuk api yang digunakan pada aplikasi ini terdapat pada file ``backend DOT.postman_collection.json`` dengan menggunakan aplikasi postman, kemudian import. Jika sudah selesai di import, lakukan klik kanan pada collection kemudian view documentation untuk melihat penggunaan APInya.
Best Regard, berikut saya lampirkan github(public), hackerrank, dan juga video:
1. github : 
 https://www.hackerrank.com/test/33gp893pqhs/feedback
2. link hackerrank  : gagal sehingga tidak dapat sertifikat
3.  video demo : https://drive.google.com/drive/folders/1TDlxfPWybBi2_wAVj7KOm1Nk6uWwcplZ?usp=sharing

