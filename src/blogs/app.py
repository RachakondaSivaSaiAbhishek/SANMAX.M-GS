from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import pandas as pd
import time

path = r"C:/Users/likhi/Downloads/geckodriver-v0.33.0-win64/geckodriver.exe"
website = "https://absolutecarcare.com/car-maintenance-blog/"

service = Service(path)

driver = webdriver.Firefox(service=service)
driver.get(website)

data = []
row = {}
for i in range(16):
    articles = driver.find_elements(
        By.XPATH, '//div[contains(@class,"row ") and contains(@class,"archive-item")]')
    for article in articles:
        row[article.find_element(
            By.XPATH, './/h4').text] = [article.find_element(By.XPATH, './/p').text]
        row[article.find_element(
            By.XPATH, './/h4').text].append(article.find_element(By.XPATH, './/a').get_attribute("href"))
    btn = driver.find_elements(By.XPATH, '//li[contains(@class,"page-item")]')
    btn[-2].click()
data.append(row)
df = pd.DataFrame(data)
df.to_json("blogs.json")
driver.quit()
