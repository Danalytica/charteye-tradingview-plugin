/**
 * CharteyeDrawer element
 * @see https://www.tradingview.com/charting-library-docs/latest/core_concepts/Localization/
 */
export class CharteyeDrawer extends LitElement {
  get styles(): import('lit').CSSResult;
  get properties(): {
    /**
     * Whether to enable debug mode
     * @type {boolean}
     */
    debug: boolean;
    /**
     * Overlay width
     * @type {string}
     */
    width: string;
    /**
     * Locale
     * @type {string}
     */
    locale: string;
    /**
     * TradingView theme
     * @type {string}
     */
    theme: string;
    /**
     * Drawer alignment
     * @type {string}
     */
    align: string;
    /**
     * Whether the drawer is open
     * @type {boolean}
     */
    open: boolean;
    /**
     * Whether the drawer is resizable
     * @type {boolean}
     */
    resizable: boolean;
    /**
     * Data to be passed to the drawer
     * @type {Object}
     */
    data: any;
    /**
     * Drawer panels
     * @type {Object}
     */
    panels: any;
    /**
     * Active panel
     * @type {string}
     */
    activePanel: string;
    /**
     * Whether the drawer is loading
     * @type {boolean}
     */
    isLoading: boolean;
    /**
     * Toast message
     */
    toastMessage: {
      type: StringConstructor;
    };
    /**
     * User prompt
     */
    userPrompt: {
      type: StringConstructor;
    };
  };
  contentRef: import('lit-html/directives/ref.js').Ref<Element>;
  footerRef: import('lit-html/directives/ref.js').Ref<Element>;
  dropupRef: import('lit-html/directives/ref.js').Ref<Element>;
  toastRef: import('lit-html/directives/ref.js').Ref<Element>;
  promptRef: import('lit-html/directives/ref.js').Ref<Element>;
  resizerRef: import('lit-html/directives/ref.js').Ref<Element>;
  align: string;
  theme: string;
  panels: {};
  debug: boolean;
  open: boolean;
  data: {};
  plugin: any;
  activePanel: string;
  userPrompt: string;
  resizable: boolean;
  isResizing: boolean;
  startX: number;
  isLoading: boolean;
  tooltips: boolean;
  toastMessage: string;
  maxPanelHeight: number;
  messages: {
    frequentlyAskedQuestions: string;
    waitingForChartEye: string;
    downloadAnalysisAsPDF: string;
    interactWithChartEye: string;
    close: string;
    shareThisAnalysis: string;
  };
  /**
   * On drawer open
   * @private
   */
  private _onOpen;
  /**
   * On drawer close
   * @private
   */
  private _onClose;
  /**
   * On request error
   * @private
   */
  private _onRequestError;
  /**
   * On analysis start
   * @private
   */
  private _onAnalysisStart;
  /**
   * On analysis render
   * @param event
   * @private
   */
  private _onAnalysisRender;
  /**
   * On analysis ready
   * @param event
   * @private
   */
  private _onAnalysisReady;
  /**
   * Set accessibility attributes
   * @return {void}
   */
  setAttributes(): void;
  /**
   * Sets the drawer width
   * @param width
   * @return {void}
   */
  setDrawerWidth(width: any): void;
  width: any;
  /**
   * Returns inline translations
   * @return {{frequentlyAskedQuestions: string, waitingForChartEye: string, downloadAnalysisAsPDF: string, interactWithChartEye: string, close: string, shareThisAnalysis: string}}
   */
  getTranslations(): {
    frequentlyAskedQuestions: string;
    waitingForChartEye: string;
    downloadAnalysisAsPDF: string;
    interactWithChartEye: string;
    close: string;
    shareThisAnalysis: string;
  };
  /**
   * Dispatches a custom event
   * @param event
   * @param data
   * @return {boolean}
   */
  dispatch(event: any, data?: {}): boolean;
  /**
   * Adds a panel to the drawer
   * @param locale
   * @return {Promise<void>}
   */
  setLocale(locale: any): Promise<void>;
  /**
   * Logs message and given arguments if debug mode is enabled
   * @param message
   * @param args
   * @return {void|null}
   */
  log(message: any, ...args: any[]): void | null;
  /**
   * Drawer header element
   * @return {TemplateResult<1>}
   */
  header(): TemplateResult<1>;
  /**
   * Drawer content section
   * @return {TemplateResult<1>}
   */
  content(): TemplateResult<1>;
  /**
   * Panel element
   * @param content
   * @param key
   * @param label
   * @param isLoading
   * @return {TemplateResult<1>}
   */
  panel({
    content,
    key,
    label,
    isLoading,
  }?: {
    content: any;
    key: any;
    label?: string;
    isLoading?: boolean;
  }): TemplateResult<1>;
  /**
   * Toast element
   * @return {TemplateResult<1>}
   */
  toast(): TemplateResult<1>;
  /**
   * Toggle toast message
   * @param message
   * @param type
   */
  toggleToast({ message, type }?: { message: any; type?: string }): void;
  /**
   * Toggle dropup
   * @return {void}
   */
  toggleDropup({ show }?: { show?: boolean }): void;
  /**
   * Dropup element
   * @return {TemplateResult<1>}
   */
  dropup(): TemplateResult<1>;
  /**
   * Dropup question
   * @param question
   * @param isPremium
   * @return {TemplateResult<1>}
   */
  dropupQuestion(question: any, isPremium: any): TemplateResult<1>;
  /**
   * Prompt form
   * @return {TemplateResult<1>}
   */
  promptForm(): TemplateResult<1>;
  /**
   * Adds a new panel to the drawer
   * @param question
   * @param isPremium
   * @return {void}
   */
  addPanel(question: any, isPremium?: boolean): void;
  /**
   * Button element
   * @param id
   * @param label
   * @param icon
   * @param onClick
   * @param tooltip
   * @param tabIndex
   * @return {TemplateResult<1>}
   */
  button({
    id,
    label,
    icon,
    onClick,
    tooltip,
    tabIndex,
  }: {
    id: any;
    label: any;
    icon: any;
    onClick: any;
    tooltip?: string;
    tabIndex?: any;
  }): TemplateResult<1>;
  /**
   * Separator element
   * @return {TemplateResult<1>}
   */
  separator(): TemplateResult<1>;
  /**
   * Loader element
   * @param label
   * @return {TemplateResult<1>}
   */
  loader({ label }?: { label?: string }): TemplateResult<1>;
  /**
   * Footer element
   * @return {TemplateResult<1>}
   */
  footer(): TemplateResult<1>;
  resizer(): import('lit-html').TemplateResult<1>;
  /**
   * Render web component
   * @return {TemplateResult<1>}
   */
  render(): TemplateResult<1>;
}
import { LitElement, TemplateResult } from 'lit';
