import prisma from "../lib/workaround-prisma";

export default async function Login() {
  const users = await prisma.users.findMany();

  return (
    <div className="flex h-96 justify-center content-center items-center flex-1 flex-col">
      <form className="flex flex-col">
        <div className="p-2">
          <label htmlFor="username">Username</label>
          <input type="" id="username" name="username" placeholder=""></input>
        </div>

        <div className="p-2">
          <label htmlFor="password">Password</label>
          <input type="" id="password" name="password" placeholder=""></input>
        </div>

        <div className="p-2 flex justify-center">
          <input type="submit"></input>
        </div>
      </form>

      <div className="p-2">
        <ul>
          {users.map((user) => (
            <li key={user.userId}>
              <div>{user.userId} </div>
              <div>{user.userName}</div>
              <div> {user.email}</div>
              <div> {user.password}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
