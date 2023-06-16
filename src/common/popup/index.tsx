import Styles from './styles.module.css'

export const Popup = ({ children }: { children: React.ReactNode }) => {

    return (
        <section className={Styles.wrap}>

            <div className={Styles.popup} >
                {children}
            </div>

        </section>
    )
}