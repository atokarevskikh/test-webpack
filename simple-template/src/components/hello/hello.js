import React from 'react'
import styles from  './hello.m.css'

function Hello ({ name = 'User' }) {
    return (
        <div className={ styles.hello }>
            <div>
                <h2>Привет, { name }!</h2>
                <p>Пора приступать к работе</p>
            </div>
        </div>
    )
}

export default Hello