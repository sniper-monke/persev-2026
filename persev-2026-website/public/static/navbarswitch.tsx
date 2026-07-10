type NavbarSwitchOptions = {
  navId?: string;
  overlayId?: string;
  openButtonId?: string;
  closeButtonId?: string;
  overlayLinkSelector?: string;
  switchedClassName?: string;
  openClassName?: string;
  wheelThreshold?: number;
  touchThreshold?: number;
};

type NavbarSwitchController = {
  destroy: () => void;
};

const DEFAULTS: Required<NavbarSwitchOptions> = {
  navId: "persevNav",
  overlayId: "persevMenuOverlay",
  openButtonId: "persevMenuOpen",
  closeButtonId: "persevMenuClose",
  overlayLinkSelector: ".toormix-overlay__item",
  switchedClassName: "is-switched",
  openClassName: "is-open",
  wheelThreshold: 8,
  touchThreshold: 10,
};

function withDefaults(options?: NavbarSwitchOptions): Required<NavbarSwitchOptions> {
  return { ...DEFAULTS, ...(options || {}) };
}

export function initNavbarSwitch(options?: NavbarSwitchOptions): NavbarSwitchController | null {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }

  const config = withDefaults(options);
  const nav = document.getElementById(config.navId);
  const overlay = document.getElementById(config.overlayId);
  const openButton = document.getElementById(config.openButtonId);
  const closeButton = document.getElementById(config.closeButtonId);

  if (!nav || !overlay || !openButton || !closeButton) {
    return null;
  }

  if (nav.dataset.navbarSwitchInit === "true") {
    return {
      destroy: function () {},
    };
  }

  nav.dataset.navbarSwitchInit = "true";

  const overlayLinks = Array.from(overlay.querySelectorAll(config.overlayLinkSelector));
  const cleanup: Array<() => void> = [];

  let switched = false;
  let menuOpen = false;
  let touchStartY = 0;

  const setSwitched = function (next: boolean): void {
    if (next === switched) {
      return;
    }
    switched = next;
    nav.classList.toggle(config.switchedClassName, switched);
  };

  const setMenuOpen = function (next: boolean): void {
    if (next === menuOpen) {
      return;
    }

    menuOpen = next;
    overlay.classList.toggle(config.openClassName, menuOpen);
    overlay.setAttribute("aria-hidden", menuOpen ? "false" : "true");
    openButton.setAttribute("aria-expanded", menuOpen ? "true" : "false");
    document.body.style.overflow = menuOpen ? "hidden" : "";
  };

  const onWheel = function (event: WheelEvent): void {
    if (event.deltaY > config.wheelThreshold) {
      setSwitched(true);
    } else if (event.deltaY < -config.wheelThreshold) {
      setSwitched(false);
    }
  };

  const onTouchStart = function (event: TouchEvent): void {
    if (event.touches.length) {
      touchStartY = event.touches[0].clientY;
    }
  };

  const onTouchMove = function (event: TouchEvent): void {
    if (!event.touches.length) {
      return;
    }

    const delta = touchStartY - event.touches[0].clientY;
    if (delta > config.touchThreshold) {
      setSwitched(true);
    } else if (delta < -config.touchThreshold) {
      setSwitched(false);
    }
  };

  const onScroll = function (): void {
    if (window.scrollY > 24) {
      setSwitched(true);
    } else if (window.scrollY === 0) {
      setSwitched(false);
    }
  };

  const onEscape = function (event: KeyboardEvent): void {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  const onOpen = function (): void {
    setMenuOpen(true);
  };

  const onClose = function (): void {
    setMenuOpen(false);
  };

  openButton.addEventListener("click", onOpen);
  closeButton.addEventListener("click", onClose);
  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("keydown", onEscape);

  cleanup.push(function () {
    openButton.removeEventListener("click", onOpen);
    closeButton.removeEventListener("click", onClose);
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("keydown", onEscape);
  });

  overlayLinks.forEach(function (link) {
    const onLinkClick = function (): void {
      setMenuOpen(false);
    };

    link.addEventListener("click", onLinkClick);
    cleanup.push(function () {
      link.removeEventListener("click", onLinkClick);
    });
  });

  return {
    destroy: function () {
      cleanup.forEach(function (fn) {
        fn();
      });
      setMenuOpen(false);
      nav.classList.remove(config.switchedClassName);
      delete nav.dataset.navbarSwitchInit;
      document.body.style.overflow = "";
    },
  };
}

function autoInitNavbarSwitch(): void {
  initNavbarSwitch();
}

if (typeof window !== "undefined") {
  (window as Window & { initNavbarSwitch?: typeof initNavbarSwitch }).initNavbarSwitch = initNavbarSwitch;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInitNavbarSwitch, { once: true });
  } else {
    autoInitNavbarSwitch();
  }
}
