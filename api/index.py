import os
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from api.routers import linearity_router

# Base Logging Configuration (ALCOA+ Audit Trail)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("kriterion_api")

def create_app() -> FastAPI:
    """
    FastAPI application factory.
    Allows clean instantiation for integration testing.
    """
    app_instance = FastAPI(
        title="Kriterion HPLC API | S-labs",
        description="Enterprise statistical engine for chromatographic method validation.",
        version="1.0.0",
        docs_url="/api/docs",
        openapi_url="/api/openapi.json"
    )

    # CORS policies based on the principle of least privilege
    allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")
    
    app_instance.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_credentials=True,
        allow_methods=["GET", "POST", "OPTIONS"],
        allow_headers=["*"],
    )

    app_instance.include_router(linearity_router.router)

    return app_instance

app = create_app()

@app.get("/api/health", tags=["Health"], response_class=JSONResponse)
def health_check() -> dict[str, str]:
    """
    Liveness probe: Operational status monitoring for CI/CD and orchestrators.
    """
    logger.debug("Health check invoked by orchestrator.")
    return {"status": "operational", "service": "Kriterion HPLC Core Engine"}