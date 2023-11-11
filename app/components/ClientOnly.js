'use client'
import { useState, useEffect } from 'react';

const ClientOnly = (props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {props.children}
    </>
  );
};

export default ClientOnly;
