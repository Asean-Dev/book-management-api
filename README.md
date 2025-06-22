# 🧠 NestJS API with Prisma + PostgreSQL local

## 📦 Tech Stack

- **NestJS** – Scalable server-side framework
- **Prisma** – Type-safe ORM with PostgreSQL
- **TypeScript** – Typed JavaScript
- **PostgreSQL Local** – Database hosting (PostgreSQL)

---

## 🚀 Getting Started

## หลังจาก clone โปรเจ็คเรียบร้อย

### 1. ติดตั้งโปรเจ็ค

```
npm install
```

### 2.run สร้าง docker เเละ database เเละ ทำ .env

```
docker-compose up -d
```

```
#หรือ Local
#DATABASE_URL=postgresql://admin:P@ssw0rd@localhost:5432/books_management_db?schema=public
PORT=3441
```

### 3. ถ้าใช้ Local

##### 🚀 เปิด comment local ใน .env setup postgresql ให้เรียบร้อย เเล้วรันคำสั่งตามนี้

```
npx prisma generate

npx prisma db push

```

### 4. ทำการ Seed Data เบื้องต้น

```
npx prisma db seed

npm run start:dev
```

### เริ่มรัน project next.js ได้เลย
