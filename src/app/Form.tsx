'use client';
import { runAction } from "./action";

export function Form() {
  return <form action={async () => {
    try {
      await runAction();
    } catch (e) {
      console.log('not caught here');
    }
  }}>
    Set your network devtools to offline and then click here -> <input type="submit" value="Submit form" />
  </form>;
}
