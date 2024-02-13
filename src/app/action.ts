'use server';
import { redirect } from 'next/navigation';

export async function runAction() {
  redirect(
    `/?success=true`,
  );
}
