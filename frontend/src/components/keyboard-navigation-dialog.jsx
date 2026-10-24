import { Portal } from "solid-js/web";
import { IconClear } from "@stackoverflow/stacks-icons/icons";

export function KeyboardNavigationDialog(props) {
  return (
    <Portal>
      <div class="dialog-backdrop" onClick={() => setShowHelpDialog(false)}>
        <dialog open class="help-dialog" onClick={(e) => e.stopPropagation()}>
          <div class="dialog__body help-dialog__body">
            <div class="help-dialog__header">
              <h2 class="help-dialog__title">{props.t()('keyboard.title')}</h2>
              <button
                type="button"
                class="dialog__toolbar-btn help-dialog__close-btn"
                onClick={() => props.onClose()}
                title={props.t()('common.close')}
              >
                <span innerHTML={IconClear} />
              </button>
            </div>

            <div class="help-dialog__sections">
              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">{props.t()('keyboard.sections.navigation')}</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">↑ or k</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.navUp')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">↓ or j</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.navDown')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">← or h</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.lanePrev')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">→ or l</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.laneNext')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Alt+↑</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.cardUp')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Alt+↓</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.cardDown')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Alt+←</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.cardToPrevLane')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Alt+→</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.cardToNextLane')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">{props.t()('keyboard.sections.cardActions')}</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">Enter or e</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.openCard')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">n</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.newCard')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">r</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.renameCard')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">d</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.deleteCard')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">{props.t()('keyboard.sections.general')}</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">Esc</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.esc')}
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">?</td>
                      <td class="help-dialog__desc-cell">
                        {props.t()('keyboard.shortcuts.help')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </Portal>
  );
}
