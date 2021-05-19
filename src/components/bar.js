import classes from './bar.module.css'

function bar() {
    return(
        <div className={classes.background}>
            <section className={classes.sectionLayout}>
                <div className={classes.divLayout}>
                    <div className={classes.textAlignment}>
                        <h2 className={classes.textNumbers}>$335B</h2>
                        <div className={classes.textWords}>Quarterly volume traded</div>
                    </div>
                    <div className={classes.textAlignment}>
                        <h2 className={classes.textNumbers}>100+</h2>
                        <div className={classes.textWords}>Countries supported</div>
                    </div>
                    <div className={classes.textAlignment}>
                        <h2 className={classes.textNumbers}>56+M</h2>
                        <div className={classes.textWords}>Verified users</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default bar