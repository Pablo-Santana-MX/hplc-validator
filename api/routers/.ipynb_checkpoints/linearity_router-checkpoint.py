import logging
from fastapi import APIRouter, HTTPException, Depends
from api.schemas.linearity_schema import LinearityRequest, LinearityResponse
from api.services.linearity_service import LinearityService

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api/v1/linearity",
    tags=["Validation Metrics"]
)

def get_linearity_service(request_data: LinearityRequest) -> LinearityService:
    """
    Dependency Provider for LinearityService.
    Instantiates the service with validated data ready for calculation.
    """
    return LinearityService(data=request_data)

@router.post("/calculate", response_model=LinearityResponse, status_code=200)
def calculate_linearity(
    request_data: LinearityRequest,
    service: LinearityService = Depends(get_linearity_service)
) -> LinearityResponse:
    """
    Evaluates the linearity of an analytical method under ICH Q2(R2) criteria.
    """
    logger.info("Received linearity calculation request. N=%d", len(request_data.concentrations))
    
    try:
        response = service.execute_validation()
        logger.info("Calculation successful. R^2: %.5f, Compliant: %s", response.r_squared, response.is_compliant)
        return response
        
    except ValueError as ve:
        logger.warning("Analytical validation error: %s", str(ve))
        raise HTTPException(status_code=422, detail=str(ve))
        
    except Exception as e:
        logger.error("Critical failure in statistical engine: %s", str(e), exc_info=True)
        raise HTTPException(
            status_code=500, 
            detail="Internal server error during mathematical execution."
        )