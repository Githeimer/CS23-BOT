const commands_list = [
  {
    name: "tryhelp",
    description: "first command",
  },
  {
    name: "hello",
    description: "interactive commands that says hello",
    options: [
      {
        name: "username",
        description: "username of the slash user",
        type: 3, //string
        required: true,
      },
    ],
  },
  {
    name: "ping",
    description: "pings the selected user",
    options: [
      {
        name: "pinguser",
        description: "name of user",
        type: 3,
        required: false,
      },
    ],
  },
];

export { commands_list };
