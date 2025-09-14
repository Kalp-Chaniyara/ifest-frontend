export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

// export const teamData: TeamSection[] = [
//   {
//     title: "Mentors",
//     members: [
//       { name: "Rishi Shah", role: "Mentor",  },
//       { name: "Shrestha Thakkar", role: "Mentor", photo: "/placeholder.svg" },
//       { name: "Darpan Lunagariya", role: "Mentor", photo: "/placeholder.svg" },
//       { name: "Raj Shah", role: "Mentor", photo: "/placeholder.svg" },
//       { name: "Vyom Narsana", role: "Mentor", photo: "/placeholder.svg" },
//       { name: "Bhoomish Patel", role: "Mentor", photo: "/placeholder.svg" },
//       { name: "Natansh Shah", role: "Mentor", photo: "/placeholder.svg" },
//       { name: "Preksha Shah", role: "Mentor", photo: "/placeholder.svg" },
//       { name: "Heet Dipeshe", role: "Mentor", photo: "/placeholder.svg" }
//     ]
//   },
//   {
//     title: "Sponsorship",
//     members: [
//       { name: "Jeet Modi", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Dhyey Raval", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Vraj Parikh", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Shrey Shah", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Vishesh Sharma", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Pranshu Chovatiya", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Kirtan Kamani", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Vivek Amipara", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Rudra Bhatt", role: "Sponsorship Team", photo: "/placeholder.svg" },
//       { name: "Shreya Patel", role: "Sponsorship Team", photo: "/placeholder.svg" }
//     ]
//   },
//   {
//     title: "Event Management",
//     members: [
//       { name: "Parthiv Bhesaniya", role: "Event Manager", photo: "/placeholder.svg" },
//       { name: "Jayansh Gaadhe", role: "Event Manager", photo: "/placeholder.svg" },
//       { name: "Dhruva Bhatia", role: "Event Manager", photo: "/placeholder.svg" },
//       { name: "Pranamya Sanghavi", role: "Event Manager", photo: "/placeholder.svg" },
//       { name: "Janvi Patel", role: "Event Manager", photo: "/placeholder.svg" },
//       { name: "Dev Parmar", role: "Event Manager", photo: "/placeholder.svg" }
//     ]
//   },
//   {
//     title: "PR Team",
//     members: [
//       { name: "Harshil Narola", role: "PR Team", photo: "/placeholder.svg" },
//       { name: "Krish Dhola", role: "PR Team", photo: "/placeholder.svg" },
//       { name: "Manan Ghonia", role: "PR Team", photo: "/placeholder.svg" },
//       { name: "Virag Koradiya", role: "PR Team", photo: "/placeholder.svg" },
//       { name: "Vatsal Kamani", role: "PR Team", photo: "/placeholder.svg" },
//       { name: "Jeet Sakariya", role: "PR Team", photo: "/placeholder.svg" },
//       { name: "Sujal Balva", role: "PR Team", photo: "/placeholder.svg" },
//       { name: "Tanvi Kakdiya", role: "PR Team", photo: "/placeholder.svg" }
//     ]
//   },
//   {
//     title: "Website Team",
//     members: [
//       { name: "Zeel Dadhaniya", role: "Website Developer", photo: "/placeholder.svg" },
//       { name: "Kalp Chaniyara", role: "Website Developer", photo: "/placeholder.svg" }
//     ]
//   },
//   {
//     title: "Design and Social Media Team",
//     members: [
//       { name: "Manan Chhabhaya", role: "Designer", photo: "/placeholder.svg" },
//       { name: "Parshv Joshi", role: "Designer", photo: "/placeholder.svg" },
//       { name: "Diya Bhuva", role: "Social Media Manager", photo: "/placeholder.svg" },
//       { name: "Tanvi Nakum", role: "Social Media Manager", photo: "/placeholder.svg" },
//       { name: "Harsh Asnani", role: "Designer", photo: "/placeholder.svg" },
//       { name: "Yashvi Patel", role: "Social Media Manager", photo: "/placeholder.svg" }
//     ]
//   },
//   {
//     title: "OpenBox and Content Team",
//     members: [
//       { name: "Abhishek Kothari", role: "Content Creator", photo: "/placeholder.svg" },
//       { name: "Kathan Balar", role: "Content Creator", photo: "/placeholder.svg" },
//       { name: "Poorva Vaishnav", role: "Content Creator", photo: "/placeholder.svg" },
//       { name: "Manali Malani", role: "Content Creator", photo: "/placeholder.svg" },
//       { name: "Heer Shah", role: "Content Creator", photo: "/placeholder.svg" }
//     ]
//   }
// ];
export const teamData: TeamSection[] = [
    {
      title: "Mentors",
      members: [
        { name: "Rishi Shah", role: "Mentor", photo: "https://drive.google.com/uc?export=view&id=154sgliO3-JXXL1ihh3UhoaaOYHQKMdST"  },
        { name: "Shrestha Thakkar", role: "Mentor", photo: "https://drive.google.com/uc?export=view&id=1My8zz4-3tfF67lsLI-ZWcQa-RgPycia0" },
        { name: "Darpan Lunagariya", role: "Mentor", photo: "https://drive.google.com/uc?export=view&id=1wTCLevlTabfKd7NtQLNymxP506Molxq-"  },
        { name: "Raj Shah", role: "Mentor", photo: "https://drive.google.com/uc?export=view&id=1FbG2DSfYSLbHueW3XTPgblnr1ev4ltwr"  },
        { name: "Vyom Narsana", role: "Mentor", photo: "https://drive.google.com/uc?export=view&id=1UncaF7syd7o9-e4Rg_CQs93eIRHKCk1u" },
        { name: "Bhoomish Patel", role: "Mentor"  },
        { name: "Natansh Shah", role: "Mentor", photo: "https://drive.google.com/uc?export=view&id=1c7_ypg5jKGeYgaGWA0idKZXny6PHrpWU" },
        { name: "Preksha Shah", role: "Mentor", photo: "https://drive.google.com/uc?export=view&id=12XVZfQAF9_tECPIdyZTTok7yf6JlxwpL"  },
        { name: "Heet Dipeshe", role: "Mentor"  }
      ]
    },
    {
      title: "Sponsorship",
      members: [
        { name: "Jeet Modi", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=13izJK0K3tO01U4W7f2zgJ9CLLFIlEJDv" },
        { name: "Dhyey Raval", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=1J6Uen_15XVO1hFy_Rp6I5IN6C4qmL8L6" },
        { name: "Vraj Parikh", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=1Mo7otqVnExCop5tTf4ayIlV2kkQ3pM9o" },
        { name: "Shrey Shah", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=1LkSnZ2cnJjhStyDOblLcgwdnUVlv7nJ"},
        { name: "Vishesh Sharma", role: "Sponsorship Team"  },
        { name: "Pranshu Chovatiya", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=1ICL4YTg1DxXdAM5aJDSAEHbELH0iiTo-" },
        { name: "Kirtan Kamani", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=1Fzdk9xcnPhtf7XOjSagXtm-G2ubaciNf" },
        { name: "Vivek Amipara", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=1oGXBPgr0bokDFQGqjomzPNQBlnr7aPc0" },
        { name: "Rudra Bhatt", role: "Sponsorship Team", photo: "https://drive.google.com/uc?export=view&id=1D0PNJL1Ymz6Ga2OX6dvqLaw1KbIri__3" },
        { name: "Shreya Patel", role: "Sponcership Team", photo: "https://drive.google.com/uc?export=view&id=1UyZrevaU3cG1tYbcM5TuektDex33wxsQ"}
    ]
  },
  {
    title: "Event Management",
    members: [
      { name: "Parthiv Bhesaniya", role: "Event Manager", photo: "https://drive.google.com/uc?export=view&id=173Bj9PLJGbJ5J3POkSgO_uifEdQ0fBYV" },
      { name: "Jayansh Gaadhe", role: "Event Manager", photo: "https://drive.google.com/uc?export=view&id=1LwVYuX9KiBwIK49vOcNeP6-QmgeZGym6"  },
      { name: "Dhruva Bhatia", role: "Event Manager", photo: "https://drive.google.com/uc?export=view&id=1H1q8G0HrU7oMoUMtRqCv5pwfJBeSRPTj" },
      { name: "Pranamya Sanghavi", role: "Event Manager", photo: "https://drive.google.com/uc?export=view&id=1o_aoxORYXBCz49-uIlWsRisjptkbqXpO"  },
      { name: "Janvi Patel", role: "Event Manager", photo: "https://drive.google.com/uc?export=view&id=10rF044cL_PVhcqm4PwFpJFS4UbEpMeqo" },
      { name: "Dev Parmar", role: "Event Manager", photo: "https://drive.google.com/uc?export=view&id=1dDRYBBA1XQZYnOf8tahg7q003K6Vm4s0" }
    ]
  },
  {
    title: "Design and Social Media Team",
    members: [
      { name: "Manan Chhabhaya", role: "Designer", photo: "https://drive.google.com/uc?export=view&id=1fBhgtkb_u4HC2_t0sT47ekfZvRPCbL-M" },
      { name: "Parshv Joshi", role: "Designer", photo: "https://drive.google.com/uc?export=view&id=1W1sK6uR3Z8U2qmcaqWtevFeK3dUv2h8p"  },
      { name: "Diya Bhuva", role: "Social Media Manager", photo: "https://drive.google.com/uc?export=view&id=1zMiTlMGKsllF3byFO8_2168ReoVRNLzv" },
      { name: "Tanvi Nakum", role: "Social Media Manager", photo: "https://drive.google.com/uc?export=view&id=1arSjlbR2Xk2DatPphMMuzBR7JEqJNB-G" },
      { name: "Harsh Asnani", role: "Designer", photo: "https://drive.google.com/uc?export=view&id=1p1DbA8oEN49IsMFc1P78BY87fAQMTo6Q"  },
      { name: "Yashvi Patel", role: "Social Media Manager", photo: "https://drive.google.com/uc?export=view&id=1x-sDnskRRJRLi6dZ-9-yIRZZ9aDinmWs" }
    ]
  },
  {
    title: "Website Team",
    members: [
      { name: "Zeel Dadhaniya", role: "Website Developer", photo: "https://drive.google.com/uc?export=view&id=1KX_M6sbISOEVJiLHXBQmntoXeTh5ocsi" },
      { name: "Kalp Chaniyara", role: "Website Developer", photo: "https://drive.google.com/uc?export=view&id=1-8Q_1RAgCHM9cADjzFL4qVF7rX0UN5Dj" }
    ]
  },
  {
    title: "PR Team",
    members: [
      { name: "Harshil Narola", role: "PR Team", photo: "https://drive.google.com/uc?export=view&id=1OQW_rSZTuOgs0DBt2dNG5OmVyR85bIJY" },
      { name: "Krish Dhola", role: "PR Team"  },
      { name: "Manan Ghonia", role: "PR Team", photo: "https://drive.google.com/uc?export=view&id=1DDzWND98BzCW3jr-AxE1CdSNLKmGcEUO" },
      { name: "Virag Koradiya", role: "PR Team", photo: "https://drive.google.com/uc?export=view&id=1mOoWPJesjv7AbqwYT_VT0MPkXZbRyt7T" },
      { name: "Vatsal Kamani", role: "PR Team", photo: "https://drive.google.com/uc?export=view&id=1xFQLhaMqWyoX1W37LMnpgFMX37XhvNsm" },
      { name: "Jeet Sakariya", role: "PR Team", photo: "https://drive.google.com/uc?export=view&id=16nJ3nL-dRXz27-sLN0c_6zeVc81nlQV-"  },
      { name: "Sujal Balva", role: "PR Team", photo: "https://drive.google.com/uc?export=view&id=1_cZVvZxSYqWT_jmPjYCvP6xpoHqPMcqE" },
      { name: "Tanvi Kakdiya", role: "PR Team", photo: "https://drive.google.com/uc?export=view&id=1BlXoDNbUUzxx6t2zTjlRXQ6uLdqTyOtZ" }
    ]
  },
  {
    title: "OpenBox and Content Team",
    members: [
      { name: "Abhishek Kothari", role: "Content Creator", photo: "https://drive.google.com/uc?export=view&id=1y6yCVr2aLYwfDS-VqTI1TpqApyERQUGC" },
      { name: "Kathan Balar", role: "Content Creator", photo: "https://drive.google.com/uc?export=view&id=1fPzHGt5jj-r9iaz9D8lEFAKtmTar9wOD"  },
      { name: "Poorva Vaishnav", role: "Content Creator", photo: "https://drive.google.com/uc?export=view&id=14o5KKYVmCJKKLi97qsMHbSbY7z-4JgFr" },
      { name: "Manali Malani", role: "Content Creator", photo: "https://drive.google.com/uc?export=view&id=1oudqALCBwgnbDdDdIDnJlB925cBMZLiL" },
      { name: "Heer Shah", role: "Content Creator", photo: "https://drive.google.com/uc?export=view&id=1Yc5YM8J_iHgDhdsW4zycMEF6PJpRGtST" }
    ]
  }
];