import styles from "./my-style.module.css";

const Content1 = () => {
    return (
        <>
            <section>
            <h1 className={styles.word}>Menangkan Total Hadiah Hingga <br />
              <span className={styles.orange}>Rp 1 Miliar</span>
              <span className={styles.tebal}> Tanpa Diundi!</span></h1>
          </section>

          <section className={styles.frame1023}>
            <section className={styles.group300}>
              <section className={styles.rectangle7}></section>
              <h1 className={styles.word2}>Periode Pendaftaran</h1><br />
              <h1 className={styles.word3}>29 Oktober s/d 31 Desember 2022</h1>
            </section>
            <section className={styles.group301}>
              <section className={styles.rectangle8}></section>
              <h1 className={styles.word4}>Periode Transaksi</h1>
              <h1 className={styles.word5}>s/d 23 Februari 2023</h1>
            </section>
          </section>
        </>
    )
}

export default Content1;