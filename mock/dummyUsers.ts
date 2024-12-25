import type { User } from "@/types";

export const dummyUsers: User[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    email: "system.admin@example.com",
    username: "system_admin",
    hashedPassword:
      "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-08-01T00:00:00Z",
    updatedAt: "2024-03-21T16:45:22Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "System Administrator",
      location: "New York, USA",
    },
    role: "admin",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "en",
      timezone: "America/New_York",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    email: "guest.user@example.com",
    username: "temp_guest",
    hashedPassword:
      "$2a$12$7Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isActive: true,
    isEmailVerified: false,
    role: "guest",
    settings: {
      notifications: {
        email: false,
        push: false,
      },
      language: "en",
      timezone: "UTC",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    email: "maria.garcia@example.com",
    username: "maria_g",
    hashedPassword:
      "$2a$12$5Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-05T12:20:00Z",
    updatedAt: "2024-03-21T16:45:22Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "María García",
      avatarUrl: "https://example.com/avatars/maria.jpg",
      bio: "Digital Marketing Specialist",
      location: "Madrid, Spain",
      website: "https://maria-marketing.example.com",
    },
    role: null,
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "es",
      timezone: "Europe/Madrid",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    email: "satoshi.tanaka@example.com",
    username: "s_tanaka",
    hashedPassword:
      "$2a$12$3Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-12-10T09:15:00Z",
    updatedAt: "2024-03-20T08:12:44Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Satoshi Tanaka",
      avatarUrl: "https://example.com/avatars/satoshi.jpg",
      bio: "モバイルアプリ開発者",
      location: "Tokyo, Japan",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ja",
      timezone: "Asia/Tokyo",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    email: "security.admin@example.com",
    username: "sec_admin",
    hashedPassword:
      "$2a$12$2Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-09-01T00:00:00Z",
    updatedAt: "2024-03-21T19:25:11Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Security Administrator",
      location: "London, UK",
      website: "https://security.example.com",
    },
    role: "admin",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "en",
      timezone: "Europe/London",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    email: "priya.patel@example.com",
    username: "priya_p",
    hashedPassword:
      "$2a$12$1Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-15T10:20:00Z",
    updatedAt: "2024-03-20T13:40:55Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Priya Patel",
      bio: "Data Scientist",
      location: "Mumbai, India",
      website: "https://priya-data.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "en",
      timezone: "Asia/Kolkata",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    email: "incomplete@example.com",
    username: "incomplete_user",
    hashedPassword:
      "$2a$12$0Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-02-28T16:15:00Z",
    updatedAt: "2024-03-21T16:33:27Z",
    isActive: false,
    isEmailVerified: false,
    role: null,
    settings: {
      notifications: {
        email: false,
        push: false,
      },
      language: "en",
      timezone: "UTC",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    email: "sophie.dubois@example.com",
    username: "sophie_d",
    hashedPassword:
      "$2a$12$8Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-11-30T12:00:00Z",
    updatedAt: "2024-03-19T14:20:00Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Sophie Dubois",
      avatarUrl: "https://example.com/avatars/sophie.jpg",
      bio: "Graphic Designer",
      location: "Paris, France",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "fr",
      timezone: "Europe/Paris",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    email: "kim.minjae@example.com",
    username: "minjae_k",
    hashedPassword:
      "$2a$12$6Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-25T15:20:00Z",
    updatedAt: "2024-03-21T10:15:33Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "김민재",
      avatarUrl: "https://example.com/avatars/minjae.jpg",
      bio: "UX Researcher",
      location: "Seoul, South Korea",
      website: "https://minjae-ux.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ko",
      timezone: "Asia/Seoul",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    email: "tanaka.mei@example.com",
    username: "mei_t",
    hashedPassword:
      "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-09-15T08:30:00.000Z",
    updatedAt: "2024-03-20T14:22:33.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Mei Tanaka",
      bio: "UXデザイナー / 富士山が見える街に住んでいます",
      location: "Shizuoka, Japan",
      website: "https://mei-design.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ja",
      timezone: "Asia/Tokyo",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174001",
    email: "rajesh.kumar@example.com",
    username: "rajesh_k",
    hashedPassword:
      "$2a$12$9Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-10-02T15:45:00.000Z",
    updatedAt: "2024-03-21T09:15:42.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Rajesh Kumar",
      avatarUrl: "https://example.com/avatars/rajesh.jpg",
      bio: "Machine Learning Engineer | Cricket enthusiast",
      location: "Mumbai, India",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "en",
      timezone: "Asia/Kolkata",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174002",
    email: "maria.silva@example.com",
    username: "maria_s",
    hashedPassword:
      "$2a$12$7Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-11-20T03:15:00.000Z",
    updatedAt: "2024-03-19T11:30:15.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Maria Silva",
      location: "São Paulo, Brazil",
      website: "https://mariasilva.dev",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "pt",
      timezone: "America/Sao_Paulo",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174003",
    email: "admin@example.com",
    username: "system_admin",
    hashedPassword:
      "$2a$12$5Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-08-01T00:00:00.000Z",
    updatedAt: "2024-03-21T16:45:22.000Z",
    isActive: true,
    isEmailVerified: true,
    role: "admin",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "en",
      timezone: "UTC",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174004",
    email: "ahmed.hassan@example.com",
    username: "ahmed_h",
    hashedPassword:
      "$2a$12$3Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-15T10:20:00.000Z",
    updatedAt: "2024-03-20T08:12:44.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "أحمد حسن",
      bio: "Digital Marketing Specialist",
      location: "Cairo, Egypt",
      website: "https://ahmed-marketing.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ar",
      timezone: "Africa/Cairo",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174005",
    email: "chen.wei@example.com",
    username: "wei_chen",
    hashedPassword:
      "$2a$12$2Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-12-05T14:30:00.000Z",
    updatedAt: "2024-03-18T19:25:11.000Z",
    isActive: true,
    isEmailVerified: false,
    profile: {
      fullName: "Wei Chen",
      bio: "Senior Software Engineer",
      location: "Shanghai, China",
      website: "https://chen-wei.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: false,
        push: true,
      },
      language: "zh",
      timezone: "Asia/Shanghai",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174006",
    email: "sarah.johnson@example.com",
    username: "sarah_j",
    hashedPassword:
      "$2a$12$1Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-02-01T17:45:00.000Z",
    updatedAt: "2024-03-21T13:40:55.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Sarah Johnson",
      avatarUrl: "https://example.com/avatars/sarah.jpg",
      bio: "Environmental Scientist | Nature Photographer",
      location: "Vancouver, Canada",
      website: "https://sarahnature.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "en",
      timezone: "America/Vancouver",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174007",
    email: "park.min.ji@example.com",
    username: "minji_park",
    hashedPassword:
      "$2a$12$0Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-11-10T09:15:00.000Z",
    updatedAt: "2024-03-20T16:33:27.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Min-ji Park",
      bio: "Game Developer | 게임 개발자",
      location: "Seoul, South Korea",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ko",
      timezone: "Asia/Seoul",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174008",
    email: "guest_user@example.com",
    username: "guest_123",
    hashedPassword:
      "$2a$12$8Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-03-19T00:00:00.000Z",
    updatedAt: "2024-03-19T00:00:00.000Z",
    isActive: true,
    isEmailVerified: false,
    role: null,
    settings: {
      notifications: {
        email: false,
        push: false,
      },
      language: "en",
      timezone: "UTC",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174009",
    email: "elena.popov@example.com",
    username: "elena_p",
    hashedPassword:
      "$2a$12$6Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-10-25T11:20:00.000Z",
    updatedAt: "2024-03-21T10:15:33.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Elena Popova",
      avatarUrl: "https://example.com/avatars/elena.jpg",
      bio: "Data Analyst | Ballet Dancer",
      location: "St. Petersburg, Russia",
      website: "https://elena-analytics.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "ru",
      timezone: "Europe/Moscow",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174010",
    email: "nguyen.thi.ha@example.com",
    username: "ha_nguyen",
    hashedPassword:
      "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-12-15T07:30:00.000Z",
    updatedAt: "2024-03-19T11:22:33.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Nguyễn Thị Hà",
      bio: "Food Blogger | Culinary Explorer",
      location: "Ho Chi Minh City, Vietnam",
      website: "https://havietfood.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "vi",
      timezone: "Asia/Ho_Chi_Minh",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174011",
    email: "lars.andersson@example.com",
    username: "lars_a",
    hashedPassword:
      "$2a$12$9Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-05T14:45:00.000Z",
    updatedAt: "2024-03-20T09:15:42.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Lars Andersson",
      avatarUrl: "https://example.com/avatars/lars.jpg",
      bio: "Renewable Energy Engineer",
      location: "Stockholm, Sweden",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "sv",
      timezone: "Europe/Stockholm",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174012",
    email: "isabella.rossi@example.com",
    username: "bella_r",
    hashedPassword:
      "$2a$12$7Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-11-28T10:15:00.000Z",
    updatedAt: "2024-03-21T11:30:15.000Z",
    isActive: false,
    isEmailVerified: true,
    profile: {
      fullName: "Isabella Rossi",
      location: "Milan, Italy",
      website: "https://isabelladesign.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: false,
        push: false,
      },
      language: "it",
      timezone: "Europe/Rome",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174013",
    email: "fatima.al-sayed@example.com",
    username: "fatima_as",
    hashedPassword:
      "$2a$12$5Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-02-10T08:20:00.000Z",
    updatedAt: "2024-03-20T16:45:22.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Fatima Al-Sayed",
      avatarUrl: "https://example.com/avatars/fatima.jpg",
      bio: "Architect | Contemporary Islamic Design",
      location: "Dubai, UAE",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ar",
      timezone: "Asia/Dubai",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174014",
    email: "mandla.nkosi@example.com",
    username: "mandla_n",
    hashedPassword:
      "$2a$12$3Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-12-20T11:20:00.000Z",
    updatedAt: "2024-03-19T08:12:44.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Mandla Nkosi",
      bio: "Music Producer | African Fusion",
      location: "Johannesburg, South Africa",
    },
    role: null,
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "en",
      timezone: "Africa/Johannesburg",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174015",
    email: "sofia.papadopoulos@example.com",
    username: "sofia_p",
    hashedPassword:
      "$2a$12$2Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-15T13:30:00.000Z",
    updatedAt: "2024-03-21T19:25:11.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Sofia Papadopoulos",
      avatarUrl: "https://example.com/avatars/sofia.jpg",
      location: "Athens, Greece",
      website: "https://sofia-art.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "el",
      timezone: "Europe/Athens",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174016",
    email: "yamamoto.kenji@example.com",
    username: "kenji_y",
    hashedPassword:
      "$2a$12$1Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-10-05T09:45:00.000Z",
    updatedAt: "2024-03-20T13:40:55.000Z",
    isActive: true,
    isEmailVerified: false,
    profile: {
      fullName: "Kenji Yamamoto",
      bio: "モバイルアプリ開発者 | 柴犬との暮らし",
      location: "Osaka, Japan",
    },
    role: "user",
    settings: {
      notifications: {
        email: false,
        push: true,
      },
      language: "ja",
      timezone: "Asia/Tokyo",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174017",
    email: "miguel.santos@example.com",
    username: "miguel_s",
    hashedPassword:
      "$2a$12$0Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-02-20T16:15:00.000Z",
    updatedAt: "2024-03-21T16:33:27.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Miguel Santos",
      avatarUrl: "https://example.com/avatars/miguel.jpg",
      bio: "Marine Biologist | Ocean Conservation",
      location: "Lisbon, Portugal",
      website: "https://oceanguardian.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "pt",
      timezone: "Europe/Lisbon",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174018",
    email: "aisha.khan@example.com",
    username: "aisha_k",
    hashedPassword:
      "$2a$12$8Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-11-30T12:00:00.000Z",
    updatedAt: "2024-03-19T14:20:00.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Aisha Khan",
      bio: "Pediatrician | Child Healthcare Advocate",
      location: "Karachi, Pakistan",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "ur",
      timezone: "Asia/Karachi",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174019",
    email: "henri.dubois@example.com",
    username: "henri_d",
    hashedPassword:
      "$2a$12$6Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-25T15:20:00.000Z",
    updatedAt: "2024-03-21T10:15:33.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Henri Dubois",
      avatarUrl: "https://example.com/avatars/henri.jpg",
      bio: "Pastry Chef | Chocolate Artisan",
      location: "Lyon, France",
      website: "https://henri-patisserie.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "fr",
      timezone: "Europe/Paris",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174020",
    email: "andrea.morales@example.com",
    username: "andrea_m",
    hashedPassword:
      "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-12-10T08:30:00.000Z",
    updatedAt: "2024-03-20T15:22:33.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Andrea Morales",
      bio: "Climate Change Researcher | Mountain Climber",
      location: "Mexico City, Mexico",
      website: "https://climate-research.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "es",
      timezone: "America/Mexico_City",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174021",
    email: "yuki.suzuki@example.com",
    username: "yuki_s",
    hashedPassword:
      "$2a$12$9Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-08T11:45:00.000Z",
    updatedAt: "2024-03-21T08:15:42.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Yuki Suzuki",
      avatarUrl: "https://example.com/avatars/yuki.jpg",
      bio: "アニメーションアーティスト | 猫と暮らす",
      location: "Kyoto, Japan",
    },
    role: "user",
    settings: {
      notifications: {
        email: false,
        push: true,
      },
      language: "ja",
      timezone: "Asia/Tokyo",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174022",
    email: "thor.nielsen@example.com",
    username: "thor_n",
    hashedPassword:
      "$2a$12$7Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-11-15T14:15:00.000Z",
    updatedAt: "2024-03-19T11:30:15.000Z",
    isActive: true,
    isEmailVerified: false,
    profile: {
      fullName: "Thor Nielsen",
      location: "Copenhagen, Denmark",
      website: "https://nordic-design.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "da",
      timezone: "Europe/Copenhagen",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174023",
    email: "alice.wong@example.com",
    username: "alice_w",
    hashedPassword:
      "$2a$12$5Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-02-20T09:20:00.000Z",
    updatedAt: "2024-03-21T16:45:22.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Alice Wong",
      avatarUrl: "https://example.com/avatars/alice.jpg",
      bio: "Fintech Developer | Street Photography",
      location: "Singapore",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "en",
      timezone: "Asia/Singapore",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174024",
    email: "dmitri.volkov@example.com",
    username: "dmitri_v",
    hashedPassword:
      "$2a$12$3Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-12-01T10:20:00.000Z",
    updatedAt: "2024-03-20T08:12:44.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Dmitri Volkov",
      bio: "Quantum Computing Researcher",
      location: "Novosibirsk, Russia",
      website: "https://quantum-research.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ru",
      timezone: "Asia/Novosibirsk",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174025",
    email: "kareem.hassan@example.com",
    username: "kareem_h",
    hashedPassword:
      "$2a$12$2Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-30T13:30:00.000Z",
    updatedAt: "2024-03-19T19:25:11.000Z",
    isActive: false,
    isEmailVerified: true,
    profile: {
      fullName: "Kareem Hassan",
      avatarUrl: "https://example.com/avatars/kareem.jpg",
      location: "Alexandria, Egypt",
    },
    role: null,
    settings: {
      notifications: {
        email: false,
        push: false,
      },
      language: "ar",
      timezone: "Africa/Cairo",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174026",
    email: "emma.virtanen@example.com",
    username: "emma_v",
    hashedPassword:
      "$2a$12$1Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-10-12T15:45:00.000Z",
    updatedAt: "2024-03-21T13:40:55.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Emma Virtanen",
      bio: "Northern Lights Photographer | Nature Guide",
      location: "Helsinki, Finland",
      website: "https://nordic-lights.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "fi",
      timezone: "Europe/Helsinki",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174027",
    email: "marcos.oliveira@example.com",
    username: "marcos_o",
    hashedPassword:
      "$2a$12$0Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-02-05T17:15:00.000Z",
    updatedAt: "2024-03-20T16:33:27.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Marcos Oliveira",
      avatarUrl: "https://example.com/avatars/marcos.jpg",
      bio: "Football Coach | Youth Development",
      location: "Rio de Janeiro, Brazil",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "pt",
      timezone: "America/Sao_Paulo",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174028",
    email: "lee.ji.eun@example.com",
    username: "jieun_lee",
    hashedPassword:
      "$2a$12$8Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2023-11-25T09:00:00.000Z",
    updatedAt: "2024-03-19T14:20:00.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Ji-eun Lee",
      bio: "K-beauty Content Creator | Skincare Expert",
      location: "Busan, South Korea",
      website: "https://k-beauty-tips.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: true,
      },
      language: "ko",
      timezone: "Asia/Seoul",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174029",
    email: "luca.romano@example.com",
    username: "luca_r",
    hashedPassword:
      "$2a$12$6Kd7c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/IQZyAvYo0UQCKzKyS",
    createdAt: "2024-01-18T16:20:00.000Z",
    updatedAt: "2024-03-21T10:15:33.000Z",
    isActive: true,
    isEmailVerified: true,
    profile: {
      fullName: "Luca Romano",
      avatarUrl: "https://example.com/avatars/luca.jpg",
      bio: "Classic Car Restorer | Vintage Automobile Expert",
      location: "Turin, Italy",
      website: "https://vintage-auto.example.com",
    },
    role: "user",
    settings: {
      notifications: {
        email: true,
        push: false,
      },
      language: "it",
      timezone: "Europe/Rome",
    },
  },
];