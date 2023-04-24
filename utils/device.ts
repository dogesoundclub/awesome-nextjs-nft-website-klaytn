import type { GetServerSidePropsContext } from 'next';

export async function device(context: GetServerSidePropsContext) {
  const userAgent = context.req.headers['user-agent'] as string;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return {
    props: { isMobile },
  };
}