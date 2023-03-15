const data = {
  users: [
    {
      id: "1",
      name: "ferhat",
      lastname: "çiçek",
      avatar: "https://avatars.githubusercontent.com/u/84874779?v=4",
      rol: "admin",
    },
    {
      id: "2",
      name: "şevval",
      lastname: "şenel",
      avatar: "https://avatars.githubusercontent.com/u/57571561?v=4",
      rol: "admin",
    },

    {
      id: "3",
      name: "kübra",
      lastname: "kılınç",
      avatar: "https://avatars.githubusercontent.com/u/99607501?v=4",
      rol: "user",
    },
  ],
  pitches: [
    {
      pitchTitle: "saha 1",
      pitchOwnerId: "1",
      seanslar: [{ session1: "10:00" }, { session2: "12:00" }],
      image:
        "https://media.istockphoto.com/id/496854540/photo/soccer-stadium-upper-view.jpg?b=1&s=170667a&w=0&k=20&c=Ry_5AI7Htei1g97kB4bPLujkbsddz05mSNLpQ9FEOjU=",
      description: "sahte saha 1 resim çalıntı",
      price: 100,
    },
    {
      pitchTitle: "saha 2",
      pitchOwnerId: "2",
      seanslar: [{ session1: "10:00" }, { session2: "12:00" }],
      image:
        "https://media.istockphoto.com/id/518567017/tr/foto%C4%9Fraf/soccer-stadium.jpg?s=2048x2048&w=is&k=20&c=C7F99VlD-r5ID4j7gXIq5AScP8XSjc6tYqoKDIb7Cps=",
      description: "sahte saha 2",
      price: 150,
    },
  ],
  reservations: [
    {
      userId: "1",
      pitchId: "1",
      session: "4",
      date: "06/03/2023 10:15",
    },
    {
      userId: "2",
      pitchId: "2",
      session: "4",
      date: "06/03/2023 16:15",
    },
  ],
};
