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
];

export { commands_list };
