var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };

var Default = {
  onCollapse: function () {},
  onExpand: function () {},
  onToggle: function () {}
};

var DefaultInstanceOptions = {
  id: null,
  override: true
};

class Collapse {
  constructor(targetEl, triggerEl, options, instanceOptions) {
    if (targetEl === void 0) {
      targetEl = null;
    }
    if (triggerEl === void 0) {
      triggerEl = null;
    }
    if (options === void 0) {
      options = Default;
    }
    if (instanceOptions === void 0) {
      instanceOptions = DefaultInstanceOptions;
    }
    this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
    this._targetEl = targetEl;
    this._triggerEl = triggerEl;
    this._options = __assign(__assign({}, Default), options);
    this._visible = false;
    this._initialized = false;
    this.init();
  }

  init() {
    if (this._triggerEl && this._targetEl && !this._initialized) {
      if (this._triggerEl.hasAttribute("aria-expanded")) {
        this._visible =
          this._triggerEl.getAttribute("aria-expanded") === "true";
      } else {
        this._visible = !this._targetEl.classList.contains("hidden");
      }
      this._clickHandler = () => {
        this.toggle();
      };
      this._triggerEl.addEventListener("click", this._clickHandler);
      this._initialized = true;
    }
  }

  destroy() {
    if (this._triggerEl && this._initialized) {
      this._triggerEl.removeEventListener("click", this._clickHandler);
      this._initialized = false;
    }
  }

  removeInstance() {
    // Implementation not provided
  }

  destroyAndRemoveInstance() {
    this.destroy();
    this.removeInstance();
  }

  collapse() {
    this._targetEl.classList.add("hidden");
    if (this._triggerEl) {
      this._triggerEl.setAttribute("aria-expanded", "false");
    }
    this._visible = false;
    this._options.onCollapse(this);
  }

  expand() {
    this._targetEl.classList.remove("hidden");
    if (this._triggerEl) {
      this._triggerEl.setAttribute("aria-expanded", "true");
    }
    this._visible = true;
    this._options.onExpand(this);
  }

  toggle() {
    if (this._visible) {
      this.collapse();
    } else {
      this.expand();
    }
    this._options.onToggle(this);
  }

  updateOnCollapse(callback) {
    this._options.onCollapse = callback;
  }

  updateOnExpand(callback) {
    this._options.onExpand = callback;
  }

  updateOnToggle(callback) {
    this._options.onToggle = callback;
  }
}

function initCollapses() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(($triggerEl) => {
    var targetId = $triggerEl.getAttribute("data-collapse-toggle");
    var $targetEl = document.getElementById(targetId);
    if ($targetEl) {
      new Collapse($targetEl, $triggerEl);
    } else {
      console.error(
        'The target element with id "'.concat(
          targetId,
          '" does not exist. Please check the data-collapse-toggle attribute.'
        )
      );
    }
  });
}

initCollapses();
