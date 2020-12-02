import Index from '../../pages/index'
import { render } from '../testUtils'

describe('Index page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
