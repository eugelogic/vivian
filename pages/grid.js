import styles from '../styles/Grid.module.css'

const Grid = () => {

    return (
        <main style={{ backgroundColor: 'white' }}>

            <div className={`${styles.cards} ${styles.homepageCategoryCards}`}>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <div className="card__title">
                            <h3>Architecture</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/benches/">
                    <div className={`${styles.card} ${styles.benchesCat}`}>
                        <div className="card__title">
                            <h3>Benches</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/aerials/">
                    <div className={`${styles.card} ${styles.aerialsCat}`}>
                        <div className="card__title">
                            <h3>Aerials</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/flowers/">
                    <div className={`${styles.card} ${styles.flowersCat}`}>
                        <div className="card__title">
                            <h3>Flowers</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/tfl/">
                    <div className={`${styles.card} ${styles.tflCat}`}>
                        <div className="card__title">
                            <h3>Tfl</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/vehicles/">
                    <div className={`${styles.card} ${styles.vehiclesCat}`}>
                        <div className="card__title">
                            <h3>Vehicles</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/outdoors/">
                    <div className={`${styles.card} ${styles.outdoorsCat}`}>
                        <div className="card__title">
                            <h3>Outdoors</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/onesixseven/">
                    <div className={`${styles.card} ${styles.onesixsevenCat}`}>
                        <div className="card__title">
                            <h3>167</h3>
                        </div>
                    </div>
                </a>

                <a href="/category/skies/">
                    <div className={`${styles.card} ${styles.skiesCat}`}>
                        <div className="card__title">
                            <h3>Skies</h3>
                        </div>
                    </div>
                </a>

            </div>

        </main>
    )
}

export default Grid