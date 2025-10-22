import { Button } from '@nextui-org/react';
import { auth } from '@/auth';
import * as actions from '@/actions';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In!</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign Out!</Button>
      </form>

      {session?.user ? (
        <div>
          <p>Signed in as {session.user.email}</p>
          </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
}
