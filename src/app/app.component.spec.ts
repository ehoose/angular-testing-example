import { provideHttpClient } from '@angular/common/http'
import { render, screen, fireEvent, getByText } from '@testing-library/angular'
import { AppComponent } from './app.component'
import '@testing-library/jest-dom'
describe('AppComponent', () => {
  it('receives a mocked response to a REST API request', async () => {
    await render(AppComponent, {
      providers: [provideHttpClient()],
    })

    expect(await screen.findByText('Hello, John!')).toBeVisible()

    fireEvent(screen.getByText('Fetch movies'), new MouseEvent('click'))

    expect(
      await screen.findByText('The Fellowship of the Ring (Extended Edition)'),
    ).toBeVisible()
  })
})
