import { CharteyeDrawer } from './charteye-drawer';
// @ts-ignore
import { IChartingLibraryWidget } from 'types/charting_library';

export const setLocale: ((newLocale: string) => Promise<void>) & {
  _LIT_LOCALIZE_SET_LOCALE_?: never;
};
export class ChartEye {
  constructor(tvWidget: any, options: any);
  /**
   * TradingView widget instance
   * @see https://www.tradingview.com/charting-library-docs/latest/core_concepts/widget-methods
   * @type {IChartingLibraryWidget}
   * @private
   */
  private _tvWidget: IChartingLibraryWidget;
  /**
   * TradingView widget iFrame
   * @private
   */
  private _iframe;
  /**
   * TradingView widget iFrame document
   * @type {Document}
   * @private
   */
  private _iframeDocument;
  /**
   * ChartEye options
   * @private
   */
  private _options;
  /**
   * Whether the plugin is isolated within the iframe
   * @type {boolean}
   * @private
   */
  private _isolated;
  /**
   * Client host
   * @type {string}
   * @private
   */
  private _host;
  /**
   * ChartEye API host
   * @type {string}
   * @private
   */
  private _apiHost;
  /**
   * ChartEye API Key
   * @type {string|*}
   * @private
   */
  private _apiKey;
  /**
   * ChartEye plugin tier
   * @type {null}
   * @private
   */
  private _tier;
  /**
   * ChartEye version
   * @type {string}
   * @private
   */
  private _version;
  /**
   * Abort controller
   * @type {null | AbortController}
   * @private
   */
  private _abortController;
  /**
   * ChartEye drawer web component
   * @type {HTMLElement}
   * @private
   */
  private _charteyeDrawer;
  /**
   * Whether the host is valid
   * @type {boolean}
   * @private
   */
  private _isValidHost;
  /**
   * Chart screenshot dataURI
   * @type {null}
   * @private
   */
  private _screenshotData;
  /**
   * Locale
   * @type {string}
   * @private
   */
  private _locale;
  /**
   * Get isolated mode
   * @return {boolean}
   */
  get isolated(): boolean;
  /**
   * Set ChartEye API host
   * @return {string}
   */
  get apiHost(): string;
  /**
   * Get client host
   * @return {string}
   */
  get host(): string;
  /**
   * Get locale
   * @return {string}
   */
  get locale(): string;
  /**
   * Screenshot dataURI
   * @param value
   */
  set screenshotData(value: null);
  /**
   * Chart screenshot dataURI
   * @return {null}
   */
  get screenshotData(): null;
  /**
   * Set abort controller
   * @param value
   */
  set abortController(value: AbortController);
  /**
   * Get abort controller
   * @return {AbortController|null}
   */
  get abortController(): AbortController;
  /**
   * Set ChartEye plugin tier
   * @param value
   */
  set tier(value: null);
  /**
   * ChartEye plugin tier
   * @return {null}
   */
  get tier(): null;
  /**
   * Set whether the host is valid
   * @param value
   */
  set isValidHost(value: boolean);
  /**
   * Whether the host is valid
   * @return {boolean}
   */
  get isValidHost(): boolean;
  /**
   * Set ChartEye drawer web component
   * @param value
   */
  set charteyeDrawer(value: CharteyeDrawer);
  /**
   * ChartEye drawer web component
   * @return {CharteyeDrawer}
   */
  get charteyeDrawer(): CharteyeDrawer;
  /**
   * ChartEye version
   * @return {string}
   */
  get version(): string;
  /**
   * ChartEye API Key
   * @return {string|*}
   */
  get apiKey(): any;
  /**
   * ChartEye options
   * @return {*}
   */
  get options(): any;
  /**
   * TradingView widget instance
   * @return {*}
   */
  get tvWidget(): any;
  /**
   * Set TradingView widget iFrame
   * @param value
   */
  set iframe(value: any);
  /**
   * TradingView widget iFrame
   * @return {*}
   */
  get iframe(): any;
  /**
   * Set TradingView widget iFrame document
   * @param value
   */
  set iframeDoc(value: any);
  /**
   * TradingView iframe content document
   * @return {*}
   */
  get iframeDoc(): any;
  /**
   * Logs message and given arguments if debug mode is enabled
   * @param message
   * @param args
   * @return {void|null}
   */
  log(message: any, ...args: any[]): void | null;
  /**
   * Returns ChartEye dropdown items
   * @return {[{title: string, onSelect: any},{title: string, onSelect: (function(): *)}]}
   */
  getDropdownItems(): [
    {
      title: string;
      onSelect: any;
    },
    {
      title: string;
      onSelect: () => any;
    },
  ];
  /**
   * Creates ChartEye dropdown in TV interface
   * @return {void}
   */
  createDropdown(): void;
  /**
   * Returns ChartEye plugin option or fallback
   * @param option
   * @param fallback
   * @return {*}
   */
  getOption(option: any, fallback: any): any;
  /**
   * Starts ChartEye analysis
   * @return {Promise<*>}
   */
  startAnalysis(): Promise<any>;
  /**
   * Fetches data from the given endpoint
   * @param endpoint
   * @param body
   * @param method
   * @return {Promise<Response|any|Awaited<{}>>}
   */
  fetch(
    endpoint: any,
    body: any,
    method?: string,
  ): Promise<Response | any | Awaited<{}>>;
  /**
   * Fetch technical analysis
   * @return {Promise<Promise<any>|Promise<Awaited<{}>>>}
   */
  fetchAnalysis(): Promise<Promise<any> | Promise<Awaited<{}>>>;
  /**
   * Populate technical analysis
   * @return {Promise<Promise<any>|Promise<Awaited<{}>>>}
   */
  populateAnalysis(analysis: any): Promise<Promise<any> | Promise<Awaited<{}>>>;
  /**
   * Improve analysis
   * @param prompt
   * @return {Promise<Promise<any>|Promise<Awaited<{}>>>}
   */
  improveAnalysis(prompt: any): Promise<Promise<any> | Promise<Awaited<{}>>>;
  /**
   * Takes a screenshot of the chart and returns it as a data URL
   * @return {Promise<string>}
   */
  getScreenshotAsDataURL(): Promise<string>;
  /**
   * Adds a script to the given document
   * @param src
   * @param doc
   * @param attributes
   * @return {Promise<unknown>}
   */
  addScript(src: any, doc?: Document, attributes?: {}): Promise<unknown>;
  /**
   * Inserts ChartEye web component and wraps TV widget
   * @return {void}
   */
  insertWebComponent(): void;
  /**
   * Validates ChartEye API Key and hostname
   * @return {Promise<Response|any|Awaited<{}>>}
   */
  validateApiKey(): Promise<Response | any | Awaited<{}>>;
  /**
   * Initialize ChartEye plugin
   * @return {void}
   */
  init(): void;
  /**
   * Sets ChartEye plugin events
   * @return {void}
   */
  setEvents(): void;
  /**
   * Inserts web component and renders ChartEye plugin in the TradingView UI
   * @param valid
   * @param tier
   * @return {void}
   */
  render({ valid, tier }: { valid: any; tier: any }): void;
}
