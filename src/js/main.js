import ComponentLoader from 'component-loader-js'
import Header from '~/components/Header/Header'

const cLoader = new ComponentLoader({
  Header
})

cLoader.scan()
