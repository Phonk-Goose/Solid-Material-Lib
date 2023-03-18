import { render } from 'solid-js/web'
import { Component } from 'solid-js'
import Button from './components/Button'

const PreviewApp: Component  = () => {
    return(
        <Button label='jopa' />
    )
}


render(() => <PreviewApp />, document.getElementById('app') as HTMLElement)