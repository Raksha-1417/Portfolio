import { json } from '@remix-run/node';
import { themeCookie } from '~/root';

export async function action({ request }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': await themeCookie.serialize(theme),
      },
    }
  );
}
