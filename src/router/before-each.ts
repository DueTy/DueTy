import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  window.document.title = (to.meta as any).title || `DueTy's`
  next()
}