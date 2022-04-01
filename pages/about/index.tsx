import Link from 'next/link'
import { GetServerSideProps } from 'next';
import styles from '../../styles/Home.module.css'
export default function About({ headers }: any) {
    return(
      <div className={styles.container}>
          <div><p>In About page of rewrite-edge-poc-b</p></div>
          <div className={styles.card}>
          <code>
            {JSON.stringify(headers, null, 2)}
          </code>
        </div>
          <Link href='/'>
                <a><h4>Go to poc-b HomePage</h4></a>
            </Link>     
      </div>  
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req })  => {
  return {
    props: {
      headers: req.headers
    }
  }
}