import { AppNavLink } from './app-nav-link'
import { HomeIcon, DiscoverIcon, RecipeBookIcon, SettingsIcon } from '../icons'
import styles from './style.module.css'
export function AppSideNav() {
  return (
    <nav className={styles.appSideNav}>
        <ul className="flex flex-col gap-2">
          <li>
            <AppNavLink to="/">
              <HomeIcon />
            </AppNavLink>
          </li>
          <li>
            <AppNavLink to="/discover">
              <DiscoverIcon />
            </AppNavLink>
          </li>
          <li>
            <AppNavLink to="/app">
              <RecipeBookIcon />
            </AppNavLink>
          </li>
          <li>
            <AppNavLink to="/settings">
              <SettingsIcon />
            </AppNavLink>
          </li>
        </ul>
      </nav>
  )
}
