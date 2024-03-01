from playwright.sync_api import Playwright, sync_playwright, expect
import time
import threading


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://desertdiamondhvac.com/vote-for-your-local-school/")
    page.locator(".totalpoll-question-choices-item-label").first.click()
    page.get_by_role("button", name="Vote").click()
    time.sleep(2.5)

    # ---------------------
    context.close()
    browser.close()

def runNOW(times):
    for i in range(times):
        with sync_playwright() as playwright:
            run(playwright)

def runXTimes(amount, threads):
    perThread = round(amount/threads)
    for i in range(amount):
        thread = threading.Thread(target=runNOW, args=(perThread,))
        thread.start()

runXTimes(3000, 3)
