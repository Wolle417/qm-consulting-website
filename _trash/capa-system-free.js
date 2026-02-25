// Redirect: /capa-system-free → /produkte/capa-system
export default function CAPASystemFreeRedirect() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/produkte/capa-system',
      permanent: true,
    },
  };
}
