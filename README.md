# Nastenka — Landing Page

Landing page cho [Nastenka](https://github.com/nguyendangkin/nastenka), ứng dụng desktop viết tiểu thuyết.

## Giới thiệu

Nastenka là phần mềm desktop miễn phí giúp bạn viết và sắp xếp tiểu thuyết. Ứng dụng chạy hoàn toàn offline, dữ liệu lưu trên máy tính của bạn.

**Tính năng chính:**

- ✍️ Soạn thảo văn bản với @mention nhân vật, tự động lưu
- 👥 Quản lý nhân vật — tên, vai trò, tính cách, tiểu sử
- 🔗 Sơ đồ quan hệ nhân vật trực quan
- 🗺️ Dàn cốt truyện theo cấu trúc 3 hồi
- 📖 Wiki nội bộ — địa điểm, sự kiện, phong tục
- 🔒 Offline & riêng tư — không cần đăng nhập, không cần mạng

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide Icons](https://lucide.dev/)
- TypeScript

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## Build

```bash
npm run build
npm start
```

## Cấu trúc

```
app/
├── globals.css    # Design system & styles
├── icon.svg       # Favicon (chữ N)
├── layout.tsx     # Root layout, fonts, metadata
└── page.tsx       # Toàn bộ landing page
```

## License

© 2026 Nastenka. All rights reserved.
