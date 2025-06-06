from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get('/')
async def read_root():
	return {"Hello": "World"}


@app.get('/test')
def read_root():
	return {"Hello": "Test"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}



@app.get("/users")
async def read_users():
    return ["Rick", "Morty"]